import { Project } from '../types';

export const mockProjects: Project[] = [
	{
		id: '1',
		name: 'Ethereum Foundation',
		description: 'Advancing the Ethereum ecosystem.',
		logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDE6d8vdsXgMQYLpsC50KT-K9_k_V1T_ueBKiEvUSw0lbYejtdXURiOJxnOM4VSIaqir40BsiTacs3hLGYsVNoqsIzCxaD_aWkz-ARt6kTVu2zaZ-C5pgDyY-Xinq33Xk0Og1eWn_fuVHiRadhNiNRxobGKu_GUo5nAx6uxDErCg4NZQqV5yR54lEAfJOCQdaPjpYUbtTMLHRkElo7q3Z2_ZlBzJgr3v2YR-PLBoTGfV0l5hdluMBi4xCdV7xRUGk8C0lOUOPGBs88',
		currentFunds: '12,450',
		yieldEarned: '+312.5',
		openTasks: 8,
		tasks: [
			{
				id: '1',
				title: 'Improve documentation for Layer 2 scaling',
				reward: '1.5',
			},
			{
				id: '2',
				title: 'Audit new smart contract proposal',
				reward: '5',
			},
			{
				id: '3',
				title: 'Develop community analytics dashboard',
				reward: '3',
			},
		],
		spendings: [
			{
				id: '1',
				description: 'Grant for ZK-rollup research',
				amount: '-50',
				txHash: '0x123...abc',
				timestamp: '2 days ago',
				explorerUrl: 'https://etherscan.io',
			},
			{
				id: '2',
				description: 'Developer tooling initiative',
				amount: '-25',
				txHash: '0x456...def',
				timestamp: '5 days ago',
				explorerUrl: 'https://etherscan.io',
			},
			{
				id: '3',
				description: 'Community event sponsorship',
				amount: '-10',
				txHash: '0x789...ghi',
				timestamp: '1 week ago',
				explorerUrl: 'https://etherscan.io',
			},
		],
	},
	{
		id: '2',
		name: 'Golem Foundation',
		description: 'Decentralized computing network.',
		logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADIjwfKVjC7KOQzrlmuDJbPYIFcDYMaqOOogzlwMrU1qkkjAgQqbgj87YmNx7s5VrxqYhfx5gE2hpRoraICKhwt_5Y4wU1Cpvfk9uZcT_ygqnRNthBJOWqDZEubnhQqg6zKnCXGVJ15wKJNGZr8OK7lLpEbmRy6N7a5qJ2hucsPD9WPHrRSkNGC1kNbsoQiUhFf-aKOoO2MSWYKG0lTgAhmTzH8NIyarY9Ju6zPNxgRLJ0T5X9Ja29PgIuk8cjz1r5olBf6oiMHoU',
		currentFunds: '5,800',
		yieldEarned: '+98.2',
		openTasks: 12,
		tasks: [],
		spendings: [],
	},
	{
		id: '3',
		name: 'Arbitrum Foundation',
		description: 'Layer 2 scaling solution.',
		logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaxKLwBGrQ4Bd75P_N1R6EG6HeDGqUIfhyCPXDYRwOZcmkiFP4cbNoraTX_VktRVFDJvMytxiPceKFzRpub-1WSnXO4QGQrBVMJ8Tdjo2KTzHuLNimzU6baYSAjip0yuR_GG8iqpVsu_ZAFdvS2c81pzEdrhDUxM2DkkJdFtgvtlvv9r4WUIizAf7xzFhNGLADRe9xMC8QwbEc5CTIEDOd1IS7gssEZqGjEO0_vaX9Yl-NgQlVZJUFo5l3xcqw_xxMVVyPcUnnU74',
		currentFunds: '9,210',
		yieldEarned: '+204.7',
		openTasks: 5,
		tasks: [],
		spendings: [],
	},
];
