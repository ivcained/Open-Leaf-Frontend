import { useState, useEffect, useRef } from 'react';
import { Header } from '../components/layout/Header';
import { ProjectRegType } from '../utils/types';
import { approve, createProject, getERC20Balance } from '../utils/Contract';
import { useConfig, useChainId } from 'wagmi';
import { useAccount, useWriteContract } from 'wagmi';

import SparkUSDC from '../images/SparkUSDC.svg';
import { revert } from 'viem/actions';

export function AddProject() {
	const [projectName, setProjectName] = useState('');
	const [description, setDescription] = useState('');
	const [depositAmount, setDepositAmount] = useState('');
	const [projectOption, setProjectOption] = useState('tasks');
	const [balance, setBalance] = useState(0);
	const [calcReturns, setCalcReturns] = useState(0);
	const { isConnected } = useAccount();
	const config = useConfig();
	const chainId = useChainId();
	const account = useAccount();
	const button = useRef<HTMLButtonElement>(null);
	const [error, setError] = useState('');

	useEffect(() => {
		setCalcReturns((Number(depositAmount) / 100) * 4.25);
	}, [depositAmount]);

	useEffect(() => {
		if (account.address && isConnected) {
			getBalance();
		}
	}, [account.address, chainId, isConnected]);

	// Remove the balance dependency to avoid infinite loop
	// if (!Registry || !USDC) {
	// 	alert('Please connect to the correct network');

	// 	return;
	// }

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const balance = await getBalance();

		console.log(chainId);

		if (Number(depositAmount) > Number(balance)) {
			setError('You dont have enough USDC');
			setTimeout(() => {
				setError('');
			}, 5000);
			return;
		}

		if (Number(depositAmount) > 0) {
			await Approve();
		}

		await CreateProject();
	};

	async function Approve(): Promise<BigInt> {
		button.current && (button.current.innerText = 'Approving..');

		const USDCAmount = Number(depositAmount) * 1e6;

		const result = await approve(config, chainId, account.address as `0x${string}`, USDCAmount);

		return result;
	}

	async function getBalance(): Promise<Number> {
		const balance = await getERC20Balance(config, chainId, account.address as `0x${string}`);

		const formattedBalance = Number(balance) / 1e6;
		setBalance(formattedBalance);

		return formattedBalance;
	}

	async function CreateProject(): Promise<boolean> {
		const projectT = projectOption === 'spending';

		button.current && (button.current.innerText = 'Creating Project..');

		const USDCAmount = BigInt(Number(depositAmount) * 1e6);

		let projectReg: ProjectRegType = {
			Name: projectName,
			Description: description,
			adminAccount: '',
			depositAmount: USDCAmount,
			token: '',
			vault: projectT,
			registered: true,
		};

		console.log('First Reg', projectReg);

		await createProject(config, chainId, account.address as `0x${string}`, projectReg);

		button.current && (button.current.innerText = 'Project Created!..');

		setTimeout(() => {
			button.current && (button.current.innerText = 'Create Project');
		}, 5000);

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
										<span
											className={`block font-semibold ${
												projectOption === 'spending'
													? 'text-green-500'
													: 'text-text-dark-primary'
											}`}
										>
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
											className="text-text-dark-secondary mb-2 flex justify-between text-sm font-medium"
										>
											<span>Amount To Deposit</span>
											<span>{balance} USDC</span>
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
										Current APY return:{' '}
										<b style={{ color: '#80d98d' }}>
											{calcReturns.toFixed(2)} USDC
										</b>
										<div>
											<b style={{ color: 'red' }}>{error}</b>
										</div>
									</div>
								)}
							</div>
						</fieldset>

						<div className="mx-auto" style={{ width: 200 }}>
							<button
								id="SubmitButton"
								type="submit"
								ref={button}
								onClick={handleSubmit}
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
