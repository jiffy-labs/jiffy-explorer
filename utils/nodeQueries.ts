import { BigNumber } from "ethers";
import {
    Provider,
} from "@ethersproject/abstract-provider";

interface UserOpArgs {
    sender: String,
    none: BigNumber,
    initCode: String,
    calldata: String,
    callGas: BigNumber,
    verificationGas: BigNumber,
    perVerificationGas: BigNumber,
    maxFeePerGas: BigNumber,
    maxPriorityFeePerGas: BigNumber,
    paymaster: String,
    paymasterData: String,
    signature: String
}

const getUserOpsfromTransaction = async (transactionHash: String, network: String, provider: Provider, inter: any): Promise<UserOpArgs[]> => {
    const tx = await provider.getTransaction("0xcb4822646a27facfd9bab20a887dc996b59effddee79f88d244d29cf61b09979");
    console.log(tx);
    const decodedInput = inter.parseTransaction({ data: tx.data, value: tx.value });

    // Decoded Transaction
    return decodedInput.args
}

const getUsersOperationDetails = async (transactionHash: String, network: String, sender: String, nonce: Number, provider: Provider, inter: any) => {
    const decodedInputArgs: UserOpArgs[] = await getUserOpsfromTransaction(transactionHash, network, provider, inter);
    console.log(decodedInputArgs);
}

export { getUsersOperationDetails };