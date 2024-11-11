import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { publicActions } from "viem";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
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

export const config = getDefaultConfig({
  appName: "RainbowKit App",
  projectId: "1942aa0c8d0eed4eb2b15c14453c2e27",
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [citrea, sepolia]
      : []),
  ],
  ssr: true,
});

export const publicClient = config.getClient().extend(publicActions);
