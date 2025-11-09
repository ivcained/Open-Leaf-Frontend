interface ContractsConfig {
    [chainId: number]: {
        Registry: string | null
        USDC: string | null
        SparkUSDCVault: string | null


    }
}

export const OpenLeaf: ContractsConfig = {
    // mainnet fork..
    31337: {
        Registry: "0xF837C675e5122D68a2B8bDfc4e50C59118Bd417E",
        USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        SparkUSDCVault: "0x28B3a8fb53B741A8Fd78c0fb9A6B2393d896a43d",
    },
    1: {
     Registry: "0xF837C675e5122D68a2B8bDfc4e50C59118Bd417E",
        USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        SparkUSDCVault: "0x28B3a8fb53B741A8Fd78c0fb9A6B2393d896a43d",
    }
}

export const RegistryABI = [
    {
      "type": "constructor",
      "inputs": [
        { "name": "_TM", "type": "address", "internalType": "address" },
        { "name": "_SM", "type": "address", "internalType": "address" },
        { "name": "_vaultFactory", "type": "address", "internalType": "address" }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "SM",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "contract ISubmissionManager" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "TM",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "contract ITaskManager" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "VaultFactory",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "contract IVaultFactory" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "acceptSubmission",
      "inputs": [
        { "name": "_projectID", "type": "uint64", "internalType": "uint64" },
        { "name": "_taskID", "type": "uint64", "internalType": "uint64" },
        { "name": "_submissionID", "type": "uint64", "internalType": "uint64" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "changeTaskPayRate",
      "inputs": [
        { "name": "_projectID", "type": "uint64", "internalType": "uint64" },
        { "name": "_taskID", "type": "uint64", "internalType": "uint64" },
        { "name": "_amount", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "createSubmission",
      "inputs": [
        { "name": "_projectID", "type": "uint64", "internalType": "uint64" },
        {
          "name": "SC",
          "type": "tuple",
          "internalType": "struct DataTypes.SubmissionCreation",
          "components": [
            { "name": "TaskID", "type": "uint64", "internalType": "uint64" },
            { "name": "SubmissionName", "type": "string", "internalType": "string" },
            { "name": "user", "type": "address", "internalType": "address" },
            { "name": "SubmissionDescription", "type": "string", "internalType": "string" },
            { "name": "SubmissionLink", "type": "string", "internalType": "string" },
            { "name": "SubmissionRejected", "type": "bool", "internalType": "bool" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "createTask",
      "inputs": [
        { "name": "_projectID", "type": "uint64", "internalType": "uint64" },
        {
          "name": "TC",
          "type": "tuple",
          "internalType": "struct DataTypes.TaskCreation",
          "components": [
            { "name": "ProjectId", "type": "uint64", "internalType": "uint64" },
            { "name": "ProjectName", "type": "string", "internalType": "string" },
            { "name": "TaskName", "type": "string", "internalType": "string" },
            { "name": "TaskDescription", "type": "string", "internalType": "string" },
            { "name": "paymentToken", "type": "address", "internalType": "address" },
            { "name": "amount", "type": "uint256", "internalType": "uint256" },
            { "name": "taskClosed", "type": "bool", "internalType": "bool" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "getVault",
      "inputs": [{ "name": "projectID", "type": "uint64", "internalType": "uint64" }],
      "outputs": [{ "name": "vault", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "implementation",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "contract YieldDonatingTokenizedStrategy" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "registerAsProject",
      "inputs": [
        {
          "name": "RG",
          "type": "tuple",
          "internalType": "struct DataTypes.ProjectReg",
          "components": [
            { "name": "Name", "type": "string", "internalType": "string" },
            { "name": "Description", "type": "string", "internalType": "string" },
            { "name": "adminAccount", "type": "address", "internalType": "address" },
            { "name": "depositAmount", "type": "uint256", "internalType": "uint256" },
            { "name": "token", "type": "address", "internalType": "address" },
            { "name": "vault", "type": "bool", "internalType": "bool" },
            { "name": "registered", "type": "bool", "internalType": "bool" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "rejectSubmission",
      "inputs": [
        { "name": "_projectID", "type": "uint64", "internalType": "uint64" },
        { "name": "_taskID", "type": "uint64", "internalType": "uint64" },
        { "name": "_submissionID", "type": "uint64", "internalType": "uint64" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "removeTask",
      "inputs": [
        { "name": "_projectID", "type": "uint64", "internalType": "uint64" },
        { "name": "_taskID", "type": "uint64", "internalType": "uint64" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "strategy",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "contract SparkStrategy" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "vault",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "contract ITokenizedStrategy" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "withdrawYield",
      "inputs": [{ "name": "_projectID", "type": "uint64", "internalType": "uint64" }],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "ProjectRegistered",
      "inputs": [
        { "name": "projectName", "type": "string", "indexed": false, "internalType": "string" },
        { "name": "projectDescription", "type": "string", "indexed": false, "internalType": "string" },
        { "name": "projectId", "type": "uint64", "indexed": false, "internalType": "uint64" }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "VaultCreated",
      "inputs": [{ "name": "vault", "type": "address", "indexed": false, "internalType": "address" }],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "SafeERC20FailedOperation",
      "inputs": [{ "name": "token", "type": "address", "internalType": "address" }]
    }
  ]


export const IERC4626ABI =  [
    {
      "type": "function",
      "name": "asset",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "convertToAssets",
      "inputs": [{ "name": "shares", "type": "uint256", "internalType": "uint256" }],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "deposit",
      "inputs": [
        { "name": "assets", "type": "uint256", "internalType": "uint256" },
        { "name": "receiver", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "shares", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "redeem",
      "inputs": [
        { "name": "shares", "type": "uint256", "internalType": "uint256" },
        { "name": "receiver", "type": "address", "internalType": "address" },
        { "name": "owner", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "assets", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "withdraw",
      "inputs": [
        { "name": "assets", "type": "uint256", "internalType": "uint256" },
        { "name": "receiver", "type": "address", "internalType": "address" },
        { "name": "owner", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "shares", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "nonpayable"
    }
  ]



