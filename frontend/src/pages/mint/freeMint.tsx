import { useState } from "react";
import { walletClient } from "../api/viem/client";
import { PaymentContract } from "../../abi/Payment";
import { parseAbi } from "viem";
import { publicClient } from "../api/viem/client"
import { getNamehash } from "../api/viem/getENS";

async function FreeMint(
  user_address: string,
  ensName: string,
  uri: string,
): Promise<`0x${string}` | undefined> {
  const [account] = await walletClient.getAddresses();
  let _namehash = getNamehash(ensName);
  let hash;

  try {
    // const hash = await walletClient.writeContract({
    //     account,
    //     address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
    //     abi: PaymentContract,
    //     functionName: 'registerWithoutFee',
    //     args: [user_address, namehash, uri],
    // });
    const request = await publicClient.prepareTransactionRequest({
      to: `0x${PaymentContract.address}`,
      abi: parseAbi(["function registerWithoutFee(address, bytes32, string)"]),
      functionName: "registerWithoutFee",
      args: [`0x${user_address}`, _namehash, uri],
      account: account,
    });
    const serializedTransaction = await walletClient.signTransaction({ ...request, account })
    hash = await walletClient.sendRawTransaction({ serializedTransaction });

  } catch (e) {
    console.error(e);
  }


  return hash;
}

export default FreeMint;
