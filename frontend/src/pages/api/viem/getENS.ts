import { client } from "./client"
export const ensName = async (user_address: any) => {
    let _address = user_address.startsWith('0x') ? user_address : "";
    return await client.getEnsName({
        address: _address
    })
};