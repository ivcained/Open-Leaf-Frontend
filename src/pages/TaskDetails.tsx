import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Header } from '../components/layout/Header';
import { mockProjects } from '../data/mockProjects';
import { getTaskDetails } from '../utils/Contract';
import { TaskDetailsType } from '../utils/types';
import { useConfig, useChainId } from 'wagmi';
import { useAccount, useWriteContract } from 'wagmi';

export function TaskDetails() {
	const { projectId, taskId } = useParams<{ projectId: string; taskId: string }>();
	const navigate = useNavigate();
	const [submissionLink, setSubmissionLink] = useState('');
	const [taskDescription, setTaskDescription] = useState('');
	const [taskReward, setTaskReward] = useState(BigInt(0));
	const [taskName, setTaskName] = useState('');
	const [projectName, setProjectName] = useState('');
	const project = mockProjects.find((p) => p.id === projectId);
	const task = project?.tasks.find((t) => t.id === taskId);
	const config = useConfig();
	const chainId = useChainId();
	const account = useAccount();

	if (!project || !task) {
		return (
			<div className="min-h-screen">
				<Header />
				<main className="container mx-auto p-4 sm:p-6">
					<div className="text-center">
						<h1 className="text-text-dark-primary mb-4 text-2xl font-bold">
							Task not found
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

	async function taskDetails(): Promise<any> {
		const result = (await getTaskDetails(config, chainId, Number(taskId))) as TaskDetailsType;
		setTaskDescription(result.TaskDescription);
		setTaskReward(result.amount);
		setProjectName(result.ProjectName);
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Submitting task:', { projectId, taskId, submissionLink });
		// Handle task submission logic here
		alert('Task submitted successfully!');
		navigate(`/projects/${projectId}`);
	};

	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="container mx-auto flex-grow p-4 sm:p-6">
				<div className="space-y-6">
					{/* Task Header */}
					<div className="bg-card-dark border-border-dark rounded-lg border p-5">
						<h1 className="text-text-dark-primary mb-2 text-2xl font-bold">
							{task.title}
						</h1>
						<p className="text-text-dark-secondary text-sm">Posted by {project.name}</p>
					</div>

					{/* Task Description */}
					<div className="bg-card-dark border-border-dark rounded-lg border p-5">
						<h2 className="text-text-dark-primary mb-3 text-lg font-semibold">
							Task Description
						</h2>
						<div className="text-text-dark-secondary prose prose-invert prose-sm max-w-none">
							<p>
								We're looking for a talented video creator to produce a compelling
								2-3 minute video that explains the core concepts of the Ethereum
								Foundation's latest grant program. The video should be engaging,
								informative, and accessible to a wide audience, from developers to
								newcomers in the crypto space.
							</p>
							<p>Key points to cover:</p>
							<ul>
								<li>The mission of the Ethereum Foundation.</li>
								<li>Goals of the new grant program.</li>
								<li>Who is eligible to apply.</li>
								<li>How to apply and key deadlines.</li>
							</ul>
							<p>
								The final deliverable should be a high-resolution video file (1080p
								or 4K) with professional-quality audio and graphics. Feel free to
								use existing branding assets, which will be provided upon task
								acceptance.
							</p>
						</div>
					</div>

					{/* Payment Details */}
					<div className="bg-card-dark border-border-dark rounded-lg border p-5">
						<h2 className="text-text-dark-primary mb-3 text-lg font-semibold">
							Payment Details
						</h2>
						<div className="flex items-center justify-between">
							<span className="text-text-dark-secondary">Reward</span>
							<span className="text-success-dark text-lg font-bold">100 USDC</span>
						</div>
					</div>

					{/* Submit Your Work */}
					<div className="bg-card-dark border-border-dark rounded-lg border p-6">
						<h2 className="text-text-dark-primary mb-3 text-lg font-semibold">
							Submit Your Work
						</h2>
						<form onSubmit={handleSubmit}>
							<div className="mb-6">
								<label
									className="text-text-dark-secondary mb-2 block text-sm font-medium"
									htmlFor="submission-link"
								>
									Submission Name
								</label>
								<input
									className="bg-background-dark border-border-dark focus:ring-primary focus:border-primary text-text-dark-primary w-full rounded-lg border px-3 py-2 placeholder:text-gray-500 focus:ring-2"
									id="submission-link"
									name="submission-link"
									placeholder="https://github.com/..."
									type="url"
									value={submissionLink}
									onChange={(e) => setSubmissionLink(e.target.value)}
									required
								/>
							</div>
							<div className="mb-6">
								<label
									className="text-text-dark-secondary mb-2 block text-sm font-medium"
									htmlFor="submission-link"
								>
									Submission Description
								</label>
								<input
									className="bg-background-dark border-border-dark focus:ring-primary focus:border-primary text-text-dark-primary w-full rounded-lg border px-3 py-2 placeholder:text-gray-500 focus:ring-2"
									id="submission-link"
									name="submission-description"
									placeholder="https://github.com/..."
									type="url"
									value={submissionLink}
									onChange={(e) => setSubmissionLink(e.target.value)}
									required
								/>
							</div>
							<div>
								<label
									className="text-text-dark-secondary mb-2 block text-sm font-medium"
									htmlFor="submission-link"
								>
									Github-link
								</label>
								<input
									className="bg-background-dark border-border-dark focus:ring-primary focus:border-primary text-text-dark-primary w-full rounded-lg border px-3 py-2 placeholder:text-gray-500 focus:ring-2"
									id="submission-link"
									name="submission-link"
									placeholder="https://github.com/..."
									type="url"
									value={submissionLink}
									onChange={(e) => setSubmissionLink(e.target.value)}
									required
								/>
							</div>
						</form>
					</div>
				</div>
			</main>

			{/* Footer with Submit Button */}
			<footer className="bg-background-dark/80 border-border-dark sticky bottom-0 border-t p-4 backdrop-blur-sm">
				<div className="container mx-auto">
					<button
						onClick={handleSubmit}
						className="bg-primary w-full rounded-lg px-4 py-3 font-bold text-white transition-opacity hover:opacity-90"
					>
						Submit Task
					</button>
				</div>
			</footer>
		</div>
	);
}
