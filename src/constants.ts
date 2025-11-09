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
        Registry: "0x5aAdFB43eF8dAF45DD80F4676345b7676f1D70e3",
        USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        SparkUSDCVault: "0x28B3a8fb53B741A8Fd78c0fb9A6B2393d896a43d",
    },
    1: {
     Registry: "0x5aAdFB43eF8dAF45DD80F4676345b7676f1D70e3",
        USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        SparkUSDCVault: "0x28B3a8fb53B741A8Fd78c0fb9A6B2393d896a43d",
    }
}

export const RegistryABI = [
    {
      "type": "function",
      "name": "Spark_USDC",
      "inputs": [],
      "outputs": [
        { "name": "", "type": "address", "internalType": "contract IERC4626" }
      ],
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
            {
              "name": "SubmissionName",
              "type": "string",
              "internalType": "string"
            },
            { "name": "user", "type": "address", "internalType": "address" },
            {
              "name": "SubmissionDescription",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "SubmissionLink",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "SubmissionRejected",
              "type": "bool",
              "internalType": "bool"
            }
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
            {
              "name": "ProjectName",
              "type": "string",
              "internalType": "string"
            },
            { "name": "TaskName", "type": "string", "internalType": "string" },
            {
              "name": "TaskDescription",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "paymentToken",
              "type": "address",
              "internalType": "address"
            },
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
      "name": "getSubmission",
      "inputs": [
        { "name": "_submissionID", "type": "uint64", "internalType": "uint64" }
      ],
      "outputs": [
        {
          "name": "TC",
          "type": "tuple",
          "internalType": "struct DataTypes.SubmissionCreation",
          "components": [
            { "name": "TaskID", "type": "uint64", "internalType": "uint64" },
            {
              "name": "SubmissionName",
              "type": "string",
              "internalType": "string"
            },
            { "name": "user", "type": "address", "internalType": "address" },
            {
              "name": "SubmissionDescription",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "SubmissionLink",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "SubmissionRejected",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getTask",
      "inputs": [
        { "name": "_taskID", "type": "uint64", "internalType": "uint64" }
      ],
      "outputs": [
        {
          "name": "TC",
          "type": "tuple",
          "internalType": "struct DataTypes.TaskCreation",
          "components": [
            { "name": "ProjectId", "type": "uint64", "internalType": "uint64" },
            {
              "name": "ProjectName",
              "type": "string",
              "internalType": "string"
            },
            { "name": "TaskName", "type": "string", "internalType": "string" },
            {
              "name": "TaskDescription",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "paymentToken",
              "type": "address",
              "internalType": "address"
            },
            { "name": "amount", "type": "uint256", "internalType": "uint256" },
            { "name": "taskClosed", "type": "bool", "internalType": "bool" }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getVault",
      "inputs": [
        { "name": "projectID", "type": "uint64", "internalType": "uint64" }
      ],
      "outputs": [
        { "name": "vault", "type": "address", "internalType": "address" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "implementation",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract YieldDonatingTokenizedStrategy"
        }
      ],
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
            {
              "name": "Description",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "adminAccount",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "depositAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
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
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract SparkStrategy"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "vault",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract ITokenizedStrategy"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "withdrawYield",
      "inputs": [
        { "name": "_projectID", "type": "uint64", "internalType": "uint64" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "ProjectRegistered",
      "inputs": [
        {
          "name": "projectName",
          "type": "string",
          "indexed": false,
          "internalType": "string"
        },
        {
          "name": "projectDescription",
          "type": "string",
          "indexed": false,
          "internalType": "string"
        },
        {
          "name": "projectId",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "SubmissionAccepted",
      "inputs": [
        {
          "name": "taskId",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        },
        {
          "name": "submissionId",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "SubmissionCreated",
      "inputs": [
        {
          "name": "taskId",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        },
        {
          "name": "submissionId",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "SubmissionDenied",
      "inputs": [
        {
          "name": "taskId",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        },
        {
          "name": "submissionId",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "TaskCreated",
      "inputs": [
        {
          "name": "projectId",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        },
        {
          "name": "taskID",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "TaskRateChanged",
      "inputs": [
        {
          "name": "taskID",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        },
        {
          "name": "newAmount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "TaskRemoved",
      "inputs": [
        {
          "name": "projectId",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        },
        {
          "name": "taskID",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Test",
      "inputs": [
        {
          "name": "",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "VaultCreated",
      "inputs": [
        {
          "name": "vault",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "SafeERC20FailedOperation",
      "inputs": [
        { "name": "token", "type": "address", "internalType": "address" }
      ]
    }
  ]



export const EdenPLAbi = [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "_verifier",
          "type": "address",
          "internalType": "contract IVerifier"
        },
        {
          "name": "_hasher",
          "type": "address",
          "internalType": "contract IHasher"
        },
        { "name": "_asset", "type": "address", "internalType": "address" },
        {
          "name": "merkleTreeHeight",
          "type": "uint32",
          "internalType": "uint32"
        },
        { "name": "_router", "type": "address", "internalType": "address" }
      ],
      "stateMutability": "nonpayable"
    },
    { "type": "receive", "stateMutability": "payable" },
    {
      "type": "function",
      "name": "FIELD_SIZE",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "ROOT_HISTORY_SIZE",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint32", "internalType": "uint32" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "ZERO_VALUE",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "_checkDestinationDomain",
      "inputs": [
        {
          "name": "_destinationChain",
          "type": "uint64",
          "internalType": "uint64"
        }
      ],
      "outputs": [
        { "name": "", "type": "address", "internalType": "address" },
        { "name": "", "type": "bool", "internalType": "bool" }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "addDestinationChain",
      "inputs": [
        {
          "name": "_destinationChain",
          "type": "uint64",
          "internalType": "uint64"
        },
        { "name": "dest_address", "type": "address", "internalType": "address" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "asset",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "ccipReceive",
      "inputs": [
        {
          "name": "message",
          "type": "tuple",
          "internalType": "struct Client.Any2EVMMessage",
          "components": [
            {
              "name": "messageId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "sourceChainSelector",
              "type": "uint64",
              "internalType": "uint64"
            },
            { "name": "sender", "type": "bytes", "internalType": "bytes" },
            { "name": "data", "type": "bytes", "internalType": "bytes" },
            {
              "name": "destTokenAmounts",
              "type": "tuple[]",
              "internalType": "struct Client.EVMTokenAmount[]",
              "components": [
                {
                  "name": "token",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "amount",
                  "type": "uint256",
                  "internalType": "uint256"
                }
              ]
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "commitments",
      "inputs": [
        { "name": "hashie", "type": "bytes32", "internalType": "bytes32" }
      ],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "currentRootIndex",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint32", "internalType": "uint32" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "deposit",
      "inputs": [
        { "name": "_commitment", "type": "bytes32", "internalType": "bytes32" },
        { "name": "amount", "type": "uint256", "internalType": "uint256" },
        { "name": "fee", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        { "name": "index", "type": "uint256", "internalType": "uint256" }
      ],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "depositFees",
      "inputs": [],
      "outputs": [
        { "name": "feeAccum", "type": "uint256", "internalType": "uint256" }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "filledSubtrees",
      "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "outputs": [{ "name": "", "type": "bytes32", "internalType": "bytes32" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getFeesAccumulated",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getLastRoot",
      "inputs": [],
      "outputs": [{ "name": "", "type": "bytes32", "internalType": "bytes32" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRouter",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getVault",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "hashLeftRight",
      "inputs": [
        {
          "name": "_hasher",
          "type": "address",
          "internalType": "contract IHasher"
        },
        { "name": "_left", "type": "bytes32", "internalType": "bytes32" },
        { "name": "_right", "type": "bytes32", "internalType": "bytes32" }
      ],
      "outputs": [{ "name": "", "type": "bytes32", "internalType": "bytes32" }],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "hasher",
      "inputs": [],
      "outputs": [
        { "name": "", "type": "address", "internalType": "contract IHasher" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isKnownRoot",
      "inputs": [
        { "name": "_root", "type": "bytes32", "internalType": "bytes32" }
      ],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "levels",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint32", "internalType": "uint32" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "nextIndex",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint32", "internalType": "uint32" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "nullifierHashes",
      "inputs": [{ "name": "", "type": "bytes32", "internalType": "bytes32" }],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "renounceOwnership",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "roots",
      "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "outputs": [{ "name": "", "type": "bytes32", "internalType": "bytes32" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "setVault",
      "inputs": [
        { "name": "_vault", "type": "address", "internalType": "address" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "supportsInterface",
      "inputs": [
        { "name": "interfaceId", "type": "bytes4", "internalType": "bytes4" }
      ],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "transferOwnership",
      "inputs": [
        { "name": "newOwner", "type": "address", "internalType": "address" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "verifier",
      "inputs": [],
      "outputs": [
        { "name": "", "type": "address", "internalType": "contract IVerifier" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "withdraw",
      "inputs": [
        { "name": "_pA", "type": "uint256[2]", "internalType": "uint256[2]" },
        {
          "name": "_pB",
          "type": "uint256[2][2]",
          "internalType": "uint256[2][2]"
        },
        { "name": "_pC", "type": "uint256[2]", "internalType": "uint256[2]" },
        {
          "name": "nullifierHash",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        { "name": "receiver", "type": "address", "internalType": "address" },
        { "name": "root", "type": "bytes32", "internalType": "bytes32" },
        { "name": "fee", "type": "uint256", "internalType": "uint256" },
        { "name": "relayer", "type": "address", "internalType": "address" },
        { "name": "amount", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "zeros",
      "inputs": [{ "name": "i", "type": "uint256", "internalType": "uint256" }],
      "outputs": [{ "name": "", "type": "bytes32", "internalType": "bytes32" }],
      "stateMutability": "pure"
    },
    {
      "type": "event",
      "name": "DepositFailed",
      "inputs": [
        {
          "name": "refundReceiver",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "MessageID",
          "type": "bytes32",
          "indexed": false,
          "internalType": "bytes32"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Deposited",
      "inputs": [
        {
          "name": "commitment",
          "type": "bytes32",
          "indexed": false,
          "internalType": "bytes32"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "index",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "chain",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        },
        {
          "name": "MessageId",
          "type": "bytes32",
          "indexed": false,
          "internalType": "bytes32"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OwnershipTransferred",
      "inputs": [
        {
          "name": "previousOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "newOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "WithdrawFailed",
      "inputs": [
        {
          "name": "receiver",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "MessageID",
          "type": "bytes32",
          "indexed": false,
          "internalType": "bytes32"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Withdrawn",
      "inputs": [
        {
          "name": "receiver",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "chain",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        },
        {
          "name": "MessageId",
          "type": "bytes32",
          "indexed": false,
          "internalType": "bytes32"
        }
      ],
      "anonymous": false
    },
    { "type": "error", "name": "InvalidProof", "inputs": [] },
    {
      "type": "error",
      "name": "InvalidRouter",
      "inputs": [
        { "name": "router", "type": "address", "internalType": "address" }
      ]
    },
    { "type": "error", "name": "UninitializedChain", "inputs": [] }
  ]

