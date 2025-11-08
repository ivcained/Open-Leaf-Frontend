interface MaterialIconProps {
	name: string;
	className?: string;
	size?: 'sm' | 'md' | 'lg';
}

export function MaterialIcon({ name, className = '', size = 'md' }: MaterialIconProps) {
	const sizeClasses = {
		sm: 'text-sm',
		md: 'text-xl',
		lg: 'text-[28px]',
	};

	return (
		<span className={`material-symbols-outlined ${sizeClasses[size]} ${className}`}>
			{name}
		</span>
	);
}
