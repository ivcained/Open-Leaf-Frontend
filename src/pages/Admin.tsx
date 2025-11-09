import { useState, useEffect } from 'react';
import { Header } from '../components/layout/Header';
import { MaterialIcon } from '../components/ui/MaterialIcon';
import { getVaultBalanceProject } from '../utils/Contract';
import { useConfig, useChainId } from 'wagmi';
import { useAccount, useWriteContract } from 'wagmi';

interface TaskSubmission {
	id: string;
	title: string;
	description: string;
	status: 'pending' | 'approved' | 'rejected';
	payment?: string;
}

export function Admin() {
	const { isConnected } = useAccount();
	const config = useConfig();
	const chainId = useChainId();
	const account = useAccount();
	useEffect(() => {
		async function fetchVaultBalance() {
			if (account.address && isConnected) {
				const number = await getVaultBalanceProject(
					config,
					chainId,
					account.address as `0x${string}`
				);
				const formattedBalance = Number(number) / 1e6;

				setVaultBalance(String(formattedBalance));
			}
		}
	}, [account.address, chainId, isConnected]);

	const [VaultBalance, setVaultBalance] = useState('');
	const [submissions, setSubmissions] = useState<TaskSubmission[]>([
		{
			id: '1',
			title: 'Task #1 Approval',
			description: 'Initial project setup and milestone definition.',
			status: 'pending',
			payment: '1.5 ETH',
		},
		{
			id: '2',
			title: 'Task #2 Smart Contract Development',
			description: 'Development of the core smart contract for fund distribution.',
			status: 'pending',
			payment: '5 ETH',
		},
	]);

	const [previousRequests, setPreviousRequests] = useState<TaskSubmission[]>([
		{
			id: '0',
			title: 'Task #0 Project Onboarding',
			description: '',
			status: 'approved',
			payment: '2 ETH',
		},
		{
			id: '3',
			title: 'Task #3 UI/UX Design Mockups',
			description: '',
			status: 'rejected',
			payment: '1.5 ETH',
		},
	]);

	const handleApprove = (id: string) => {
		const submission = submissions.find((s) => s.id === id);
		if (submission) {
			// Remove from pending submissions
			setSubmissions(submissions.filter((s) => s.id !== id));
			// Add to previous requests with approved status
			setPreviousRequests([
				{
					...submission,
					status: 'approved',
					description: '',
				},
				...previousRequests,
			]);
		}
		console.log(`Approved submission ${id}`);
	};

	const handleReject = (id: string) => {
		const submission = submissions.find((s) => s.id === id);
		if (submission) {
			// Remove from pending submissions
			setSubmissions(submissions.filter((s) => s.id !== id));
			// Add to previous requests with rejected status
			setPreviousRequests([
				{
					...submission,
					status: 'rejected',
					description: '',
				},
				...previousRequests,
			]);
		}
		console.log(`Rejected submission ${id}`);
	};

	return (
		<div className="min-h-screen">
			<Header />
			<main className="container mx-auto p-4 sm:p-6">
				<h1 className="text-text-dark-primary mb-6 text-2xl font-bold sm:text-3xl">
					My Project
				</h1>
				{/* Vault Section */}
				<div className="bg-card-dark border-border-dark mb-8 rounded-lg border p-6">
					<h2 className="text-text-dark-primary mb-6 text-xl font-bold">
						Vault Overview
					</h2>

					<div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
						<div className="bg-background-dark rounded-lg p-4">
							<p className="text-text-dark-secondary mb-1 text-sm">Total Balance</p>
							<p className="text-text-dark-primary text-2xl font-bold">
								{VaultBalance} USDC
							</p>
						</div>

						<div className="bg-background-dark rounded-lg p-4">
							<p className="text-text-dark-secondary mb-1 text-sm">Yield Earned</p>
							<p className="text-text-dark-primary text-2xl font-bold">0.00USDC</p>
						</div>
					</div>

					<div className="flex flex-col gap-3 sm:flex-row">
						<button
							onClick={() => console.log('Withdraw Yield')}
							className="bg-success-dark hover:bg-success-dark/80 flex-1 rounded-lg px-4 py-3 font-semibold text-white transition-colors"
						>
							Withdraw Assets & Yield
						</button>

						<button
							onClick={() => console.log('Withdraw Assets and Yield')}
							className="bg-success-dark hover:bg-success-dark/80 flex-1 rounded-lg px-4 py-3 font-semibold text-white transition-colors"
						>
							Withdraw Yield Only
						</button>
					</div>
				</div>

				<div>
					<h2 className="text-text-dark-primary mt-8 mb-4 text-xl font-bold">
						Our Tasks
					</h2>
					<div className="space-y-4">
						{previousRequests.map((request) => (
							<div
								key={request.id}
								className="bg-card-dark border-border-dark rounded-lg border p-4"
							>
								<div className="flex items-start justify-between">
									<div>
										<p className="text-text-dark-primary font-semibold">
											{request.title}
										</p>
										{request.payment && (
											<p className="text-text-dark-secondary text-sm">
												Payment: {request.payment}
											</p>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="space-y-6">
					{/* Pending Submissions */}
					<h2 className="text-text-dark-primary mt-8 mb-4 text-xl font-bold">
						Pending Requests
					</h2>
					{submissions.map((submission) => (
						<div
							key={submission.id}
							className="bg-card-dark border-border-dark rounded-lg border p-4"
						>
							<div className="mb-4 flex items-center justify-between">
								<h2 className="text-text-dark-primary text-lg font-semibold">
									{submission.title}
								</h2>
								<span className="text-sm font-medium text-amber-400">
									Awaiting Approval
								</span>
							</div>
							<p className="text-text-dark-secondary mb-4 text-sm">
								{submission.description}
							</p>
							<div className="flex items-center space-x-3">
								<button
									onClick={() => handleApprove(submission.id)}
									className="text-success-dark bg-success-dark/20 hover:bg-success-dark/30 flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition-colors"
								>
									Approve
								</button>
								<button
									onClick={() => handleReject(submission.id)}
									className="text-danger-dark bg-danger-dark/20 hover:bg-danger-dark/30 flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition-colors"
								>
									Reject
								</button>
							</div>
						</div>
					))}

					{/* Previous Requests Section */}
					<div>
						<h2 className="text-text-dark-primary mt-8 mb-4 text-xl font-bold">
							Previous Requests
						</h2>
						<div className="space-y-4">
							{previousRequests.map((request) => (
								<div
									key={request.id}
									className="bg-card-dark border-border-dark rounded-lg border p-4"
								>
									<div className="flex items-start justify-between">
										<div>
											<p className="text-text-dark-primary font-semibold">
												{request.title}
											</p>
											{request.payment && (
												<p className="text-text-dark-secondary text-sm">
													Payment: {request.payment}
												</p>
											)}
										</div>
										<div className="flex items-center space-x-2">
											{request.status === 'approved' ? (
												<>
													<MaterialIcon
														name="check_circle"
														className="text-success-dark text-xl"
													/>
													<span className="text-success-dark text-sm font-medium">
														Approved
													</span>
												</>
											) : (
												<>
													<MaterialIcon
														name="cancel"
														className="text-danger-dark text-xl"
													/>
													<span className="text-danger-dark text-sm font-medium">
														Rejected
													</span>
												</>
											)}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
