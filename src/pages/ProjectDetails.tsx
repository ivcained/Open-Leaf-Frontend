import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { MaterialIcon } from '../components/ui/MaterialIcon';
import { mockProjects } from '../data/mockProjects';

export function ProjectDetails() {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	const project = mockProjects.find((p) => p.id === id);

	if (!project) {
		return (
			<div className="min-h-screen">
				<Header />
				<main className="container mx-auto p-4 sm:p-6">
					<div className="text-center">
						<h1 className="text-text-dark-primary mb-4 text-2xl font-bold">
							Project not found
						</h1>
						<button
							onClick={() => navigate('/')}
							className="text-primary hover:underline"
						>
							Back to Projects
						</button>
					</div>
				</main>
			</div>
		);
	}

	return (
		<div className="min-h-screen">
			<Header />
			<main className="container mx-auto p-4 sm:p-6">
				{/* Project Header */}
				<div className="mb-6 flex items-center">
					<img
						src={project.logo}
						alt={`${project.name} logo`}
						className="mr-4 h-12 w-12 rounded-full object-cover sm:h-16 sm:w-16"
					/>
					<div>
						<h1 className="text-text-dark-primary text-2xl font-bold sm:text-3xl">
							{project.name}
						</h1>
						<p className="text-text-dark-secondary">{project.description}</p>
					</div>
				</div>

				{/* Total Funds Card */}
				<div className="bg-card-dark border-border-dark mb-6 rounded-lg border p-6">
					<h2 className="text-text-dark-primary mb-4 text-lg font-semibold">
						Total Funds
					</h2>
					<div className="flex flex-col items-center">
						<div className="relative mb-4 h-40 w-40">
							<svg className="h-full w-full" viewBox="0 0 36 36">
								<path
									className="text-border-dark"
									d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
									fill="none"
									stroke="currentColor"
									strokeWidth="3"
								/>
								<path
									className="text-primary"
									d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
									fill="none"
									stroke="currentColor"
									strokeDasharray="75, 100"
									strokeLinecap="round"
									strokeWidth="3"
								/>
							</svg>
							<div className="absolute inset-0 flex flex-col items-center justify-center text-center">
								<span className="text-text-dark-primary text-2xl font-bold">
									{project.currentFunds}
								</span>
								<span className="text-text-dark-secondary text-sm">ETH</span>
							</div>
						</div>
						<div className="text-center">
							<p className="text-text-dark-secondary text-sm">Yield Earned</p>
							<p className="text-success-dark text-lg font-semibold">
								{project.yieldEarned} ETH
							</p>
						</div>
					</div>
				</div>

				{/* Open Tasks Section */}
				{project.tasks && project.tasks.length > 0 && (
					<div className="mb-6">
						<h2 className="text-text-dark-primary mb-4 text-lg font-semibold">
							Open Tasks
						</h2>
						<div className="space-y-3">
							{project.tasks.map((task) => (
								<div
									key={task.id}
									className="bg-card-dark border-border-dark hover:border-primary flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-colors"
								>
									<div>
										<p className="text-text-dark-primary font-medium">
											{task.title}
										</p>
										<p className="text-text-dark-secondary text-xs">
											Reward: {task.reward} ETH
										</p>
									</div>
									<MaterialIcon
										name="chevron_right"
										className="text-text-dark-secondary"
									/>
								</div>
							))}
						</div>
					</div>
				)}

				{/* Project Spendings Section */}
				{project.spendings && project.spendings.length > 0 && (
					<div>
						<h2 className="text-text-dark-primary mb-4 text-lg font-semibold">
							Project Spendings
						</h2>
						<div className="bg-card-dark border-border-dark overflow-hidden rounded-lg border">
							<div className="divide-border-dark divide-y">
								{project.spendings.map((spending) => (
									<div key={spending.id} className="p-4">
										<div className="mb-1 flex items-center justify-between">
											<p className="text-text-dark-primary font-medium">
												{spending.description}
											</p>
											<p className="text-text-dark-primary font-semibold">
												{spending.amount} ETH
											</p>
										</div>
										<div className="text-text-dark-secondary flex items-center justify-between text-xs">
											<span>Tx: {spending.txHash}</span>
											<a
												href={spending.explorerUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="hover:text-primary flex items-center transition-colors"
											>
												{spending.timestamp}
												<MaterialIcon
													name="open_in_new"
													size="sm"
													className="ml-1"
												/>
											</a>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				)}
			</main>
		</div>
	);
}
