import { createPublicClient, createWalletClient, http } from "viem";
import { mainnet } from "viem/chains";

const CITREA_TESTNET = {
  name: "Citrea Testnet",
  id: 5115,
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.citrea.xyz"],
    },
  },
  nativeCurrency: {
    name: "Citrea Testnet Bitcoin",
    symbol: "cBTC",
    decimals: 18,
  },
  blockExplorers: {
    default: {
      name: "Citrea Testnet",
      url: "https://explorer.testnet.citrea.xyz",
      apiUrl: "https://explorer.testnet.citrea.xyz/api",
    },
  },
};

export const publicClient = createPublicClient({
  chain: CITREA_TESTNET,
  transport: http("https://rpc.testnet.citrea.xyz"),
});

export const ethPublicClient = createPublicClient({
  chain: mainnet,
  transport: http(
    "https://eth-mainnet.g.alchemy.com/v2/v5jN-XPLji0VRrnpmRbKUzXEfA2u22CM",
  ),
});

export const walletClient = createWalletClient({
  chain: CITREA_TESTNET,
  transport: http("https://rpc.testnet.citrea.xyz"),
});
