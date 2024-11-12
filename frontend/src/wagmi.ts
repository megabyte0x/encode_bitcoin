import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { publicActions } from "viem";
import {
  mainnet,
  sepolia,
} from "wagmi/chains";
import { type Chain } from "viem";

export const citrea = {
  id: 5115,
  name: "Citrea testnet",
  nativeCurrency: { name: "Citrea", symbol: "cBTC", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.testnet.citrea.xyz"] },
  },
  blockExplorers: {
    default: { name: "citrea", url: "https://explorer.testnet.citrea.xyz" },
  },
} as const satisfies Chain;

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ? process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID : ""

export const config = getDefaultConfig({
  appName: "RainbowKit App",
  projectId: projectId,
  chains: [
    mainnet,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [citrea, sepolia]
      : []),
  ],
  ssr: true
});

export const publicClient = config.getClient().extend(publicActions);
