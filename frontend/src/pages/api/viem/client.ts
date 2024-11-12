import { createPublicClient, http } from 'viem'


export const client = createPublicClient({
    chain: {
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
    },
    transport: http(),
});

