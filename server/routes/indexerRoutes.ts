import express, { Router, Request, Response } from 'express';
import { getBuiltGraphSDK, UserOp } from '../.graphclient';
import { ethers, BigNumber } from "ethers";
import { findSourceMap } from 'module';
import { Result } from 'ethers/lib/utils';
import { decodeInputData } from '../utils/decoder';
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
    value: string
    callData: string
}

const router: Router = express.Router();
const { AddressActivityQuery, BlockNumberQuery, UserOpQuery, PaymasterActivityQuery, LatestTransactionQuery  } = getBuiltGraphSDK();
const indexers: string[] = ["mumbai-aa-indexer", "aa-subgraphs-test"]
let abiCoder = new ethers.utils.AbiCoder()
let userOpsParams = ["tuple(address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[]", "address"]
let candideUserOpsParams = ["tuple(address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,address,bytes,bytes)[]", "address"]
let calldataParams = ["address","uint256","bytes"]

const getCalldata = (network: String, calldata: String, sender: String, nonce: String): Result => {
    let decodedInput = abiCoder.decode(userOpsParams, "0x" + calldata.slice(10))
    try {
        let userOp = decodedInput[0][0]
    } catch(err) {
        // TODO: find out a better way to detect its from candide wallet
        decodedInput = abiCoder.decode(candideUserOpsParams, "0x" + calldata.slice(10))
        if (decodedInput == null) return ["","",""]
    }
    
    for (let userOpIdx in decodedInput[0]) {
        let userOp = decodedInput[0][userOpIdx]
        if (sender.toLowerCase() == userOp[0].toLowerCase() && nonce.toString() == userOp[1].toString()) {
            try{
                let callDataDecoded = abiCoder.decode(calldataParams, "0x"+userOp[3].slice(10))
                if (callDataDecoded == null) return ["","",""]
                return callDataDecoded;
            } catch {
                return null
            }
        }
    }
}



const populateCrossUserOpsWithTarget = (crossUserOps: Pick<UserOp, "paymaster" | "nonce" | "transactionHash" | "success" | "sender" | "revertReason" | "userOpHash" | "actualGasCost" | "actualGasPrice" | "blockTime" | "blockNumber" | "network" | "input">[]): PopulatedCrossUserOp[] => {
    let populatedCrossUserOps: PopulatedCrossUserOp[] = []
    for (let userOpIdx in crossUserOps) {
        let crossUserOp = crossUserOps[userOpIdx]
        let decodedCallData = getCalldata(crossUserOp.network, crossUserOp.input, crossUserOp.sender, crossUserOp.nonce)
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
            target: decodedCallData != null ? decodedCallData[0] : "" ,
            value: decodedCallData != null ? decodedCallData[1].toString() : "",
            callData: decodedCallData != null ? decodedCallData[2] : ""
        }
        populatedCrossUserOps.push(populatedUserOp)
    }
    return populatedCrossUserOps
}

router.get('/decodeTransaction', async (req: Request, res: Response) => {
    const inputData = req.query.inputData as string;
    const value = req.query.value as string; 
    const contractAddress = req.query.contractAddress as string;
    const network = req.query.network as string;
    
    if (!inputData || !value || !contractAddress || !network) {
        return {error:1, message: "Missing input params"}
    }

    if (inputData == "0x") {
        {}
    }
    const decodedInputData = await decodeInputData(inputData, value, contractAddress, network);
    res.send(decodedInputData);
})


router.get('/getAddressActivity', async (req: Request, res: Response) => {
    const address = req.query.address as string;
    let first = parseInt(req.query.first? req.query.first as string: "50");
    let skip = parseInt(req.query.skip? req.query.skip as string: "0");
    
    if (first > 100) first = 100;

    if (!address) {
        res.send({ error: true, message: "Missing address parameter" })
        return;
    }

    let { crossUserOps } = await AddressActivityQuery({
        senderAddress: address,
        first: first,
        skip: skip,
        indexerNames: indexers
    });

    let decodedCrossUserOps = populateCrossUserOpsWithTarget(crossUserOps)
    res.send(decodedCrossUserOps);
});

router.get('/getLatestTransactions', async (req: Request, res: Response) => {
    let { crossUserOps } = await LatestTransactionQuery({
        first: 5,
        skip: 0,
        indexerNames: indexers
    });

    let decodedCrossUserOps = populateCrossUserOpsWithTarget(crossUserOps)
    res.send(decodedCrossUserOps);
});


router.get('/getBlockActivity', async (req: Request, res: Response) => {
    const block = parseInt(req.query.block as string);
    let first = parseInt(req.query.first? req.query.first as string: "50");
    let skip = parseInt(req.query.skip? req.query.skip as string: "0");
    
    if (first > 100) first = 100;

    if (isNaN(block)) {
        res.send({ error: true, message: "Missing block parameter" })
        return;
    }

    const { crossUserOps } = await BlockNumberQuery({
        blockNumber: block,
        first: first,
        skip: skip,
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

router.get('/getPaymasterActivity', async (req: Request, res: Response) => {
    const address = req.query.address as string;
    let first = parseInt(req.query.first? req.query.first as string: "50");
    let skip = parseInt(req.query.skip? req.query.skip as string: "0");
    
    if (first > 100) first = 100;

    if (!address) {
        res.send({ error: true, message: "Missing address parameter" })
        return;
    }

    let { crossUserOps } = await PaymasterActivityQuery({
        paymasterAddress: address,
        first: first,
        skip: skip,
        indexerNames: indexers
    });

    if (crossUserOps.length > 0) {
        let decodedCrossUserOps = populateCrossUserOpsWithTarget(crossUserOps)
        res.send(decodedCrossUserOps);
    } else {
        res.send({error:true , message:"Paymaster not found"})
    }
})

//export this router to use in our index.js
export default router;