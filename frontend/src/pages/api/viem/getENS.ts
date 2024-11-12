import { ethPublicClient } from "./client"
import { namehash, normalize } from 'viem/ens'

export const getENSName = async (user_address: any) => {
    let _address = user_address.startsWith('0x') ? user_address : "";
    return await ethPublicClient.getEnsName({
        address: _address
    })
};

export const getNamehash = (ens: string) => namehash(ens);