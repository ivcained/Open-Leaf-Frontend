export type Status = 'approved' | 'rejected' | 'open';

export interface Project {
	id: string;
	name: string;
	description: string;
	logo: string;
	currentFunds: string;
	yieldEarned: string;
	openTasks: number;
	tasks: Task[];
	spendings: Spending[];
}

export interface Task {
	id: string;
	title: string;
	reward: string;
	link?: string;
}

export interface Spending {
	id: string;
	description: string;
	amount: string;
	txHash: string;
	timestamp: string;
	explorerUrl: string;
}

export interface Submission {
	id: string;
	title: string;
	username: string;
	status: Status;
	date: string;
	link: string;
	linkLabel: string;
	information?: string;
}
