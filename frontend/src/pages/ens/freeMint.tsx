import { useState } from 'react';
import { walletClient } from '../api/viem/client';
import { PaymentContract } from '../../abi/Payment';
import { parseAbi } from 'viem';
import { publicClient } from '../../wagmi';
import { getNamehash } from '../api/viem/getENS';


const [loading, setLoading] = useState(false);
const [txHash, setTxHash] = useState<string | null>(null);

export default async function FreeMint(user_address: string, ensName: string, uri: string): Promise<string | null> {

    setLoading(true);

    const [account] = await walletClient.getAddresses()
    let _namehash = getNamehash(ensName);
    let _request;
    try {
        // const hash = await walletClient.writeContract({
        //     account,
        //     address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
        //     abi: PaymentContract,
        //     functionName: 'registerWithoutFee',
        //     args: [user_address, namehash, uri],
        // });
        const { request } = await publicClient.simulateContract({
            address: `0x${PaymentContract.address}`,
            abi: parseAbi(['function registerWithoutFee(address, bytes32, string)']),
            functionName: 'registerWithoutFee',
            args: [`0x${user_address}`, _namehash, uri],
            account: account,
        })
        _request = request;
    } catch (e) {
        console.error(e);
    }

    try {
        if (_request) {
            const hash = await walletClient.writeContract(_request);
            setTxHash(hash);
        }
    } catch (e) {
        console.error(e);
    } finally {
        setLoading(false);
    }

    return txHash;

}