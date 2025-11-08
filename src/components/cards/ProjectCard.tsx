interface ProjectCardProps {
	id: string;
	name: string;
	logo: string;
	currentFunds: string;
	yieldEarned: string;
	openTasks: number;
	onClick: () => void;
}

export function ProjectCard({
	name,
	logo,
	currentFunds,
	yieldEarned,
	openTasks,
	onClick,
}: ProjectCardProps) {
	return (
		<div
			onClick={onClick}
			className="border-border-dark bg-card-dark cursor-pointer rounded-lg border p-4 shadow-sm transition-shadow hover:shadow-md"
		>
			<div className="mb-4 flex items-start justify-between">
				<div className="flex items-start">
					<img src={logo} alt={`${name} logo`} className="mr-4 h-10 w-10" />
					<div>
						<h2 className="text-text-dark-primary text-lg font-bold">{name}</h2>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-4 text-left">
				<div>
					<p className="text-text-dark-secondary mb-1 text-xs">Current Funds</p>
					<p className="text-text-dark-primary font-semibold">{currentFunds} ETH</p>
				</div>
				<div>
					<p className="text-text-dark-secondary mb-1 text-xs">Yield Earned</p>
					<p className="text-success-dark font-semibold">{yieldEarned} ETH</p>
				</div>
				<div>
					<p className="text-text-dark-secondary mb-1 text-xs">Open Tasks</p>
					<p className="text-text-dark-primary font-semibold">{openTasks}</p>
				</div>
			</div>
		</div>
	);
}
