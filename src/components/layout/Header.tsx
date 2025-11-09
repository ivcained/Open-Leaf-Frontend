import { Link, useLocation } from 'react-router-dom';
import { MaterialIcon } from '../ui/MaterialIcon';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

interface HeaderProps {
	showBackButton?: boolean;
}

export function Header({ showBackButton = false }: HeaderProps) {
	const location = useLocation();

	const isActive = (path: string) => location.pathname === path;

	return (
		<header className="border-border-dark bg-background-dark/80 sticky top-0 z-10 border-b backdrop-blur-sm">
			<nav className="container mx-auto flex items-center justify-between px-4 py-4">
				<div className="flex items-center space-x-4">
					{showBackButton && (
						<button
							onClick={() => window.history.back()}
							className="text-text-dark-secondary hover:text-text-dark-primary"
							aria-label="Go back"
							title="Go back"
						>
							<MaterialIcon name="arrow_back" />
						</button>
					)}
					<Link to="/" className="text-text-dark-primary text-lg font-bold">
						OpenLeaf{' '}
					</Link>
				</div>
				<div className="flex items-center space-x-2 text-sm font-medium sm:space-x-4">
					<Link
						to="/add-project"
						className={`hidden transition-colors sm:block ${
							isActive('/add-project')
								? 'text-primary font-semibold'
								: 'text-text-dark-secondary hover:text-text-dark-primary'
						}`}
					>
						Add Your Project
					</Link>
					<Link
						to="/admin"
						className={`hidden transition-colors sm:block ${
							isActive('/admin')
								? 'text-primary font-semibold'
								: 'text-text-dark-secondary hover:text-text-dark-primary'
						}`}
					>
						Admin
					</Link>
					<a
						href="#"
						className="text-text-dark-secondary hover:text-text-dark-primary hidden transition-colors sm:block"
					>
						Docs
					</a>
					<ConnectButton chainStatus="name" />
				</div>
			</nav>
		</header>
	);
}
