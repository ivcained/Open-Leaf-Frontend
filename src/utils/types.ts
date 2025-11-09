export type TaskDetailsType = {
	ProjectId: number;
	ProjectName: string;
	TaskName: string;
	TaskDescription: string;
	paymentToken: string;
	amount: bigint;
	taskClosed: boolean;
};

export type ProjectRegType = {
	Name: string;
	Description: string;
	adminAccount: string;
	depositAmount: bigint;
	token: string;
	vault: boolean;
	registered: boolean;
};
