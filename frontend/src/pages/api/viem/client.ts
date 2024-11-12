import { createPublicClient, createWalletClient, http } from 'viem'

const CITREA_TESTNET = {
    name: 'Citrea Testnet',
    id: 5115,
    rpcUrls: {
        default: {
            http: ['https://rpc.testnet.citrea.xyz'],
        }
    },
    nativeCurrency: {
        name: 'Citrea Testnet Bitcoin',
        symbol: 'cBTC',
        decimals: 18,
    },
    blockExplorers: {
        default: {
            name: 'Citrea Testnet',
            url: 'https://explorer.testnet.citrea.xyz',
            apiUrl: 'https://explorer.testnet.citrea.xyz/api',
        }
    }
};

export const client = createPublicClient({
    chain: CITREA_TESTNET,
    transport: http(),
});

export const walletClient = createWalletClient({
    chain: CITREA_TESTNET,
    transport: http('https://rpc.testnet.citrea.xyz'),
});

