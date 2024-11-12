export const PaymentContract = {
    address: 'ba4C071bb83dCC799311b7BF1077D837212FeA3d',
    abi: JSON.parse(
        `
            [
                {
                    "type": "constructor",
                    "inputs": [
                        {
                            "name": "_registry",
                            "type": "address",
                            "internalType": "address"
                        }
                    ],
                    "stateMutability": "nonpayable"
                },
                {
                    "type": "fallback",
                    "stateMutability": "payable"
                },
                {
                    "type": "receive",
                    "stateMutability": "payable"
                },
                {
                    "type": "function",
                    "name": "registerWithFee",
                    "inputs": [
                        {
                            "name": "user",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "namehash",
                            "type": "bytes32",
                            "internalType": "bytes32"
                        },
                        {
                            "name": "_uri",
                            "type": "string",
                            "internalType": "string"
                        }
                    ],
                    "outputs": [],
                    "stateMutability": "payable"
                },
                {
                    "type": "function",
                    "name": "resgisterWithoutFee",
                    "inputs": [
                        {
                            "name": "user",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "namehash",
                            "type": "bytes32",
                            "internalType": "bytes32"
                        },
                        {
                            "name": "_uri",
                            "type": "string",
                            "internalType": "string"
                        }
                    ],
                    "outputs": [],
                    "stateMutability": "nonpayable"
                },
                {
                    "type": "function",
                    "name": "setRegistry",
                    "inputs": [
                        {
                            "name": "_newRegistry",
                            "type": "address",
                            "internalType": "address"
                        }
                    ],
                    "outputs": [],
                    "stateMutability": "nonpayable"
                },
                {
                    "type": "function",
                    "name": "withdraw",
                    "inputs": [],
                    "outputs": [],
                    "stateMutability": "payable"
                },
                {
                    "type": "event",
                    "name": "Payment__FeeChanged",
                    "inputs": [
                        {
                            "name": "oldFee",
                            "type": "uint256",
                            "indexed": false,
                            "internalType": "uint256"
                        },
                        {
                            "name": "newFee",
                            "type": "uint256",
                            "indexed": false,
                            "internalType": "uint256"
                        }
                    ],
                    "anonymous": false
                },
                {
                    "type": "event",
                    "name": "Payment__RegistryChanged",
                    "inputs": [
                        {
                            "name": "oldRegistry",
                            "type": "address",
                            "indexed": false,
                            "internalType": "address"
                        },
                        {
                            "name": "newRegistry",
                            "type": "address",
                            "indexed": false,
                            "internalType": "address"
                        }
                    ],
                    "anonymous": false
                },
                {
                    "type": "error",
                    "name": "Payment__ErrorOccured",
                    "inputs": []
                },
                {
                    "type": "error",
                    "name": "Payment__LowBalance",
                    "inputs": []
                },
                {
                    "type": "error",
                    "name": "Payment__UnauthorisedAccess",
                    "inputs": []
                }
            ]
        `
    )
}