import { Submission } from '../types';

export const mockSubmissions: Submission[] = [
	{
		id: '1',
		title: 'My beautiful smart contract',
		username: 'UserA',
		status: 'approved',
		date: '01-01-2025',
		link: 'https://github.com',
		linkLabel: 'Github link',
	},
	{
		id: '2',
		title: 'Another awesome feature',
		username: 'UserB',
		status: 'rejected',
		date: '01-01-2025',
		link: 'https://gitlab.com',
		linkLabel: 'Gitlab link',
	},
	{
		id: '3',
		title: 'UI/UX Redesign Proposal',
		username: 'UserC',
		status: 'open',
		date: '01-01-2025',
		link: 'https://figma.com/file/xyz...',
		linkLabel: 'Figma link',
		information:
			"Here's the new design proposal for the platform. I've focused on improving the user flow for project creation and made the dashboard more intuitive. All assets are included in the Figma file.",
	},
];
