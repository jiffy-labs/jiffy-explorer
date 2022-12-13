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

const decodeUserOpCallData = (calldata: string) => {
    // TODO: for every wallet , get the execFromEntryPoint function/ function that packs the UserOp calldata 
    // and decode it. For now we are just getting the first parameter using slice 
    // console.log('0x'+calldata.slice(34,74))
    return '0x'+calldata.slice(34,74);
}

const getUserOpsfromTransaction = async (transactionHash: String, provider: Provider, userOpInterface: any): Promise<UserOpArgs[]> => {
    const tx = await provider.getTransaction("0xcb4822646a27facfd9bab20a887dc996b59effddee79f88d244d29cf61b09979");
    console.log(tx);
    const decodedInput = userOpInterface.parseTransaction({ data: tx.data, value: tx.value });

    // Decoded Transaction
    return decodedInput.args
}

const getUsersOperationDetails = async (transactionHash: string, sender: string, nonce: string, provider: Provider, userOpInterface: any) => {
    const decodedInputArgs: any = await getUserOpsfromTransaction(transactionHash, provider, userOpInterface);
    let filteredUserOpData;
    for ( let i in decodedInputArgs) {
        if (decodedInputArgs[i][0].nonce?.toString() == nonce.toString() && decodedInputArgs[i][0].sender.localeCompare(sender)) {
            let userOpData = decodedInputArgs[i][0]
            let target = decodeUserOpCallData(userOpData.callData)
            console.log(target)
            filteredUserOpData = {
                sender: userOpData.sender,
                callData: userOpData.callData,
                target: target,
                nonce: userOpData.nonce?.toString(),
                callGas: userOpData.callGas?.toString(),
                verificationGas: userOpData.verificationGas?.toString(),
                preVerificationGas: userOpData.preVerificationGas?.toString(),
                maxFeePerGas: userOpData.maxFeePerGas?.toString(),
                maxPriorityFeePerGas: userOpData.maxPriorityFeePerGas?.toString(),
                paymaster: userOpData.paymaster,
                paymasterData: userOpData.paymasterData,
                signature: userOpData.signature
            }
            
            break;
        }
    }
    
    return filteredUserOpData;
}

export { getUsersOperationDetails };