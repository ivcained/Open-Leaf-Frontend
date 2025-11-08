import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { MaterialIcon } from '../components/ui/MaterialIcon';
import { useAccount } from "wagmi"
export function AddProject() {
	const navigate = useNavigate();
	const [projectName, setProjectName] = useState('');
	const [description, setDescription] = useState('');
	const [projectOption, setProjectOption] = useState('tasks');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission - for now just navigate back
		console.log({ projectName, description, projectOption });
		navigate('/');
	};

	const { isConnected } = useAccount()

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
							How do you want your project to operate?
						</legend>
						<div className="space-y-4">
							<label
								className={`border-border-dark bg-card-dark flex cursor-pointer items-center rounded-lg border-2 p-4 transition-colors ${
									projectOption === 'spending'
										? 'border-primary'
										: 'border-border-dark'
								}`}
							>
								<input
									type="radio"
									name="project-option"
									value="spending"
									checked={projectOption === 'spending'}
									onChange={(e) => setProjectOption(e.target.value)}
									className="border-border-dark bg-background-dark text-primary focus:ring-primary focus:ring-offset-background-dark mr-4 h-5 w-5"
								/>
								<span className="flex-1">
									<span className="text-text-dark-primary block font-semibold">
										Track Your Protocol Spending
									</span>
									<span className="text-text-dark-secondary text-sm">
										Basic tracking of funds and expenses.
									</span>
								</span>
								<MaterialIcon
									name="monitoring"
									className="text-text-dark-secondary ml-4"
								/>
							</label>

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
										Track Your Protocol Spending and Add Tasks for your
										Community
									</span>
									<span className="text-text-dark-secondary text-sm">
										Engage your community with tasks and rewards.
									</span>
								</span>
								<MaterialIcon
									name="task_alt"
									className="text-text-dark-secondary ml-4"
								/>
							</label>

							<label
								className={`border-border-dark bg-card-dark flex cursor-pointer items-center rounded-lg border-2 p-4 transition-colors ${
									projectOption === 'yield'
										? 'border-primary'
										: 'border-border-dark'
								}`}
							>
								<input
									type="radio"
									name="project-option"
									value="yield"
									checked={projectOption === 'yield'}
									onChange={(e) => setProjectOption(e.target.value)}
									className="border-border-dark bg-background-dark text-primary focus:ring-primary focus:ring-offset-background-dark mr-4 h-5 w-5"
								/>
								<span className="flex-1">
									<span className="text-text-dark-primary block font-semibold">
										Track Your Protocol Spending/Task & Earn Yield
									</span>
									<span className="text-text-dark-secondary text-sm">
										Maximize your funds by earning yield.
									</span>
								</span>
								<MaterialIcon
									name="insights"
									className="text-text-dark-secondary ml-4"
								/>
							</label>
						</div>
					</fieldset>

					<div>
						<button
							type="submit"
							className="bg-primary w-full rounded-lg px-4 py-3 font-semibold text-white transition-opacity hover:opacity-90"
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
