import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { useReadContract, useChainId, useConfig, useAccount, useWriteContract } from 'wagmi';
import { readContract, waitForTransactionReceipt, getBalance } from '@wagmi/core';
import { erc20Abi } from 'viem';
import { OpenLeaf, RegistryABI } from '../constants';

import SparkUSDC from '../images/SparkUSDC.svg';
import { deposit } from 'viem/zksync';
import { s } from 'node_modules/react-router/dist/development/index-react-server-client-B0vnxMMk.d.mts';

export function AddProject() {
	const navigate = useNavigate();
	const [projectName, setProjectName] = useState('');
	const [description, setDescription] = useState('');
	const [depositAmount, setDepositAmount] = useState(0);
	const [projectOption, setProjectOption] = useState('tasks');
	const [calcReturns, setCalcReturns] = useState(0)
	const { data: hash, isPending, writeContractAsync } = useWriteContract();
	

	const chainId = useChainId();
	const USDC = OpenLeaf[chainId]['USDC'];
	const Registry = OpenLeaf[chainId]['Registry'];
	const config = useConfig();
	const account = useAccount();
	const { isConnected } = useAccount();


	useEffect(() => {
	setCalcReturns((depositAmount  / 100 )* 4.25)
        
    }, [depositAmount]);

	if (!Registry || !USDC) {
		alert('Please connect to the correct network');

		return;
	}

	

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		console.log(USDC, Registry);
		const approve = await Approve();

		if (projectOption == 'spending') {
			const success = await createProject();
		}
		// Handle form submission - for now just navigate back
		// console.log({ projectName, description, projectOption });
		// navigate('/');
	};

	async function Approve(): Promise<bigint> {
		// buttonie.current && (buttonie.current.innerText = "Approving..")

		const response = await readContract(config, {
			abi: erc20Abi,
			address: USDC as `0x${string}`,
			functionName: `allowance`,
			args: [account.address as `0x${string}`, Registry as `0x${string}`],
		});

		console.log(response);

		if (response > depositAmount) {
			const difference = response - BigInt(depositAmount);
			const value = await writeContractAsync({
				abi: erc20Abi,
				address: USDC as `0x${string}`,
				functionName: 'approve',
				args: [Registry as `0x${string}`, difference],
			});

			console.log('value', value);
			console.log(difference);
		}

		return response;
	}

	async function createProject(): Promise<any> {
		const projectT = projectOption === 'spending';

		const projectReg = {
			Name: projectName,
			Description: description,
			adminAccount: account.address,
			depositAmount: depositAmount,
			token: USDC,
			vault: projectT,
			registered: true,
		};
		await writeContractAsync({
			abi: RegistryABI,
			address: Registry as `0x${string}`,
			functionName: 'registerAsProject',
			args: [projectReg],
		});

		console.log("Project Created!")
		return true;
	}

	return (
		<div className="min-h-screen">
			<Header />

			{!isConnected ? (
				<div className="flex items-center justify-center p-4 md:p-6 xl:p-8">
					Please connect a wallet
				</div>
			) : (
				<main className="container mx-auto p-4 sm:p-6">
					<h1 className="text-text-dark-primary mb-6 text-2xl font-bold sm:text-3xl">
						Add Your Project
					</h1>
					<form className="space-y-6" onSubmit={handleSubmit}>
						<div className="space-y-4">
							<div>
								<label
									htmlFor="project-name"
									className="text-text-dark-secondary mb-2 block text-sm font-medium"
								>
									Project Name
								</label>
								<input
									type="text"
									id="project-name"
									value={projectName}
									onChange={(e) => setProjectName(e.target.value)}
									placeholder="e.g. Ethereum Foundation"
									className="placeholder-text-dark-secondary bg-card-dark border-border-dark focus:border-primary focus:ring-primary w-full rounded-lg"
									required
								/>
							</div>

							<div>
								<label
									htmlFor="project-description"
									className="text-text-dark-secondary mb-2 block text-sm font-medium"
								>
									Description
								</label>
								<textarea
									id="project-description"
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									placeholder="A short description of your project"
									rows={3}
									className="placeholder-text-dark-secondary bg-card-dark border-border-dark focus:border-primary focus:ring-primary w-full rounded-lg"
									required
								/>
							</div>
						</div>

						<fieldset>
							<legend className="text-text-dark-secondary mb-3 text-sm font-medium">
								Choose your Strategy
							</legend>

							<div className="space-y-4">
								<label
									className={`border-border-dark bg-card-dark flex cursor-pointer items-center rounded-lg border-2 p-4 transition-colors ${
										projectOption === 'tasks'
											? 'border-primary'
											: 'border-border-dark'
									}`}
								>
									<input
										type="radio"
										name="project-option"
										value="tasks"
										checked={projectOption === 'tasks'}
										onChange={(e) => setProjectOption(e.target.value)}
										className="border-border-dark bg-background-dark text-primary focus:ring-primary focus:ring-offset-background-dark mr-4 h-5 w-5"
									/>
									<span className="flex-1">
										<span className="text-text-dark-primary block font-semibold">
											No Vault
										</span>
										<span className="text-text-dark-secondary text-sm">
											No yield earned..
										</span>
									</span>
								</label>

								<label
									className={`bg-card-dark flex cursor-pointer items-center rounded-lg border-2 p-4 transition-colors ${
										projectOption === 'spending'
											? 'border-green-300'
											: 'border-border-dark'
									}`}
								>
									<div className="relative mr-4">
										<input
											type="radio"
											name="project-option"
											value="spending"
											checked={projectOption === 'spending'}
											onChange={(e) => setProjectOption(e.target.value)}
											className="sr-only"
										/>
										<img
											src={SparkUSDC}
											width={40}
											height={40}
											alt="Logo"
											className={`transition-opacity ${
												projectOption === 'spending'
													? 'opacity-100'
													: 'opacity-50'
											}`}
										/>
									</div>

									{projectOption == 'spending'}

									<span className="flex-1">
										<span className={`block font-semibold ${
											projectOption === 'spending'
												? 'text-green-500'
												: 'text-text-dark-primary'
										}`}>
											Spark USDC Vault
										</span>
										<span className="text-text-dark-secondary text-sm">
											Earn up to <b>4.25% APY!</b>
										</span>
									</span>
									<b style={{ color: '#80d98d' }}>4.25% APY</b>
								</label>

								{projectOption === 'spending' && (
									<div className="mx-auto" style={{ width: 400 }}>
										<label
											htmlFor="deposit-name"
											className="text-text-dark-secondary mb-2 block text-sm font-medium"
										>
											Amount To Deposit
										</label>
										<input
											type="number"
											className="placeholder-text-dark-secondary bg-card-dark border-border-dark focus:border-primary focus:ring-primary w-full rounded-lg"
											id="deposit-amount"
											value={depositAmount}
											onChange={(e) => setDepositAmount(e.target.value)}
											placeholder="100 USDC"
											required
										/>
										Current APY return: <b style={{color:'#80d98d'}}>{calcReturns.toFixed(3)} USDC</b> 
									</div>
								)}
							</div>
						</fieldset>

						<div className="mx-auto" style={{ width: 200 }}>
							<button
								type="submit"
								className="bg-primary rounded-lg px-4 py-3 font-semibold text-white transition-opacity hover:opacity-90"
							>
								Create Project
							</button>
						</div>
					</form>
				</main>
			)}
		</div>
	);
}
