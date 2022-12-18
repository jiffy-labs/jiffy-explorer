import express, { Router, Request, Response } from 'express';
import { getBuiltGraphSDK, UserOp } from '../.graphclient';
import { ethers, BigNumber } from "ethers";

interface PopulatedCrossUserOp {
    paymaster: string
    nonce: string
    transactionHash: string
    success: boolean
    sender: string
    revertReason: string
    userOpHash: string
    actualGasCost: string
    actualGasPrice: string
    blockTime: string
    blockNumber: string
    network: string
    input: string
    target: string
}

const router: Router = express.Router();
const { AddressActivityQuery, BlockNumberQuery, UserOpQuery } = getBuiltGraphSDK();
const indexers: string[] = ["aa-subgraphs-test", "mumbai-aa-indexer"]
let abiCoder = new ethers.utils.AbiCoder()
let userOpsParams = ["tuple(address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[]", "address"]


const getTarget = (network: String, calldata: String, sender: String, nonce: String): string => {
    if (network != "mumbai") return ""

    const decodedInput = abiCoder.decode(userOpsParams, "0x" + calldata.slice(10))
    console.log(decodedInput[0]);
    if (decodedInput == null) return ""
    for (let userOpIdx in decodedInput[0]) {
        let userOp = decodedInput[0][userOpIdx]
        if (sender.toLowerCase() == userOp[0].toLowerCase() && nonce.toString() == userOp[1].toString()) {
            console.log("here3")
            return "0x" + userOp[3].slice(34, 74)
        }
    }
}



const populateCrossUserOpsWithTarget = (crossUserOps: Pick<UserOp, "paymaster" | "nonce" | "transactionHash" | "success" | "sender" | "revertReason" | "userOpHash" | "actualGasCost" | "actualGasPrice" | "blockTime" | "blockNumber" | "network" | "input">[]): PopulatedCrossUserOps[] => {
    let populatedCrossUserOps: PopulatedCrossUserOp[] = []
    for (let userOpIdx in crossUserOps) {
        let crossUserOp = crossUserOps[userOpIdx]
        let populatedUserOp: PopulatedCrossUserOp = {
            paymaster: crossUserOp.paymaster,
            nonce: crossUserOp.nonce,
            transactionHash: crossUserOp.transactionHash,
            success: crossUserOp.success,
            sender: crossUserOp.sender,
            revertReason: crossUserOp.revertReason,
            userOpHash: crossUserOp.userOpHash,
            actualGasCost: crossUserOp.actualGasCost,
            actualGasPrice: crossUserOp.actualGasPrice,
            blockTime: crossUserOp.blockTime,
            blockNumber: crossUserOp.blockNumber,
            network: crossUserOp.network,
            input: crossUserOp.input,
            target: getTarget(crossUserOp.network, crossUserOp.input, crossUserOp.sender, crossUserOp.nonce),
        }
        populatedCrossUserOps.push(populatedUserOp)
    }
    return populatedCrossUserOps
}


router.get('/getAddressActivity', async (req: Request, res: Response) => {
    const address = req.query.address as string;
    if (!address) {
        res.send({ error: true, message: "Missing address parameter" })
        return;
    }
    let { crossUserOps } = await AddressActivityQuery({
        senderAddress: address,
        indexerNames: indexers
    });

    let decodedCrossUserOps = populateCrossUserOpsWithTarget(crossUserOps)
    res.send(decodedCrossUserOps);
});

router.get('/getActivityInBlock', async (req: Request, res: Response) => {
    const block = parseInt(req.query.block as string);
    console.log(block)
    if (isNaN(block)) {
        res.send({ error: true, message: "Missing address parameter" })
        return;
    }
    const { crossUserOps } = await BlockNumberQuery({
        blockNumber: block,
        indexerNames: indexers
    });

    let decodedCrossUserOps = populateCrossUserOpsWithTarget(crossUserOps)
    res.send(decodedCrossUserOps);
});

router.get('/getUserOpInfo', async (req: Request, res: Response) => {
    const userOpHash = req.query.userOpHash as string;
    if (!userOpHash) {
        res.send({ error: true, message: "Missing userOpHash parameter" })
        return;
    }
    const { crossUserOps } = await UserOpQuery({
        userOpHash: userOpHash,
        indexerNames: indexers
    })

    if (crossUserOps.length > 0) {
        let decodedCrossUserOps = populateCrossUserOpsWithTarget(crossUserOps)
        res.send(decodedCrossUserOps[0]);
    } else {
        res.send([])
    }
})

//export this router to use in our index.js
export default router;