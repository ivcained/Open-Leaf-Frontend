import { useNavigate } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { ProjectCard } from '../components/cards/ProjectCard';
import { MaterialIcon } from '../components/ui/MaterialIcon';
import { mockProjects } from '../data/mockProjects';

export function ExploreProjects() {
	const navigate = useNavigate();

	return (
		<div className="min-h-screen">
			<Header />
			<main className="container mx-auto p-4 sm:p-6">
				<h1 className="text-text-dark-primary mb-6 text-2xl font-bold sm:text-3xl">
					Explore Projects
				</h1>
				<div className="space-y-4">
					{mockProjects.map((project) => (
						<ProjectCard
							key={project.id}
							id={project.id}
							name={project.name}
							logo={project.logo}
							currentFunds={project.currentFunds}
							yieldEarned={project.yieldEarned}
							openTasks={project.openTasks}
							onClick={() => navigate(`/projects/${project.id}`)}
						/>
					))}
				</div>
			</main>
			{/* Floating Action Button - Mobile Only */}
			<div className="fixed right-6 bottom-6 sm:hidden">
				<button
					onClick={() => navigate('/add-project')}
					className="bg-primary flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-opacity hover:opacity-90"
				>
					<MaterialIcon name="add" size="lg" />
					<span className="sr-only">Add Your Project</span>
				</button>
			</div>
		</div>
	);
}
