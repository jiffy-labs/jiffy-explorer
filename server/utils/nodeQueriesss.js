const { BigNumber } = require("ethers");
const {
    Provider,
} = require("@ethersproject/abstract-provider");


const getUserOpsfromTransaction = async (transactionHash, provider, inter) => {
    const tx = await provider.getTransaction(transactionHash);
    const decodedInput = inter.parseTransaction({ data: tx.data, value: tx.value });
    console.log(decodedInput)
    // Decoded Transaction
    return decodedInput.args
}

const decodeUserOpCallData = (calldata) => {
    // TODO: for every wallet , get the execFromEntryPoint function/ function that packs the UserOp calldata 
    // and decode it. For now we are just getting the first parameter using slice 
    // console.log('0x'+calldata.slice(34,74))
    return '0x'+calldata.slice(34,74);
}

const getUsersOperationDetails = async (transactionHash, sender, nonce, provider, userOpInterface) => {
    const decodedInputArgs = await getUserOpsfromTransaction(transactionHash, provider, userOpInterface);
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

module.exports =
    { getUsersOperationDetails };