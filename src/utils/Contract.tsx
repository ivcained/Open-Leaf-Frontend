import { readContract, writeContract, waitForTransactionReceipt, type Config } from '@wagmi/core';
import { erc20Abi } from 'viem';
import { OpenLeaf, RegistryABI } from '../constants';
import { TaskDetailsType, ProjectRegType } from './types';

// TaskDetails

export async function getTaskDetails(
	config: Config,
	chainId: number,
	taskID: number
): Promise<TaskDetailsType> {
	const Registry = OpenLeaf[chainId]['Registry'];

	const result = (await readContract(config, {
		abi: RegistryABI,
		address: Registry as `0x${string}`,
		functionName: 'getTask',
		args: [taskID],
	})) as TaskDetailsType;

	return result;
}

export async function approve(
	config: Config,
	chainId: number,
	accountAddress: `0x${string}`,
	depositAmount: number
): Promise<bigint> {
	const Registry = OpenLeaf[chainId]['Registry'];
	const USDC = OpenLeaf[chainId]['USDC'];

	const response = await readContract(config, {
		abi: erc20Abi,
		address: USDC as `0x${string}`,
		functionName: `allowance`,
		args: [accountAddress, Registry as `0x${string}`],
	});

	console.log('Current allowance:', response);
	const amountInDecimals = BigInt(Math.floor(depositAmount * 1e6));

	if (amountInDecimals > response) {
		const difference = BigInt(depositAmount) - response;

		const txHash = await writeContract(config, {
			abi: erc20Abi,
			address: USDC as `0x${string}`,
			functionName: 'approve',
			args: [Registry as `0x${string}`, difference],
		});

		console.log('Approval transaction:', txHash);

		// Wait for transaction to be confirmed on-chain
		const receipt = await waitForTransactionReceipt(config, {
			hash: txHash,
		});

		console.log('Transaction confirmed in block:', receipt.blockNumber);

		const newAllowance = await readContract(config, {
			abi: erc20Abi,
			address: USDC as `0x${string}`,
			functionName: `allowance`,
			args: [accountAddress, Registry as `0x${string}`],
		});

		console.log('After Approval', newAllowance);
		return newAllowance;
	}

	return response;
}

export async function createProject(
	config: Config,
	chainId: number,
	accountAddress: `0x${string}`,
	projectRegie: ProjectRegType
): Promise<boolean> {
	const Registry = OpenLeaf[chainId]['Registry'];
	const USDC = OpenLeaf[chainId]['USDC'];

	const projectReg = {
		Name: projectRegie.Name,
		Description: projectRegie.Description,
		adminAccount: accountAddress,
		depositAmount: projectRegie.depositAmount,
		token: USDC,
		vault: projectRegie.vault,
		registered: true,
	};

	console.log(projectReg);

	const txHash = await writeContract(config, {
		abi: RegistryABI,
		address: Registry as `0x${string}`,
		functionName: 'registerAsProject',
		args: [projectReg],
	});

	console.log('Project Created! Transaction:', txHash);
	return true;
}

export async function getERC20Balance(
	config: Config,
	chainId: number,
	accountAddress: `0x${string}`
): Promise<bigint> {
	const USDC = OpenLeaf[chainId]['USDC'];
	console.log(USDC);
	const response = await readContract(config, {
		abi: erc20Abi,
		address: USDC as `0x${string}`,
		functionName: `balanceOf`,
		args: [accountAddress],
	});

	return response;
}
