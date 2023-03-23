import express, { Router, Request, Response, NextFunction } from 'express';
import { getBuiltGraphSDK, UserOp } from '../.graphclient';
import { ethers } from "ethers";
import { Result } from 'ethers/lib/utils';
import { decodeInputData } from '../utils/decoder';
import ApiError from "../error/ApiError";
interface PopulatedCrossUserOp {
    paymaster: string
    nonce: string
    transactionHash: string
    success: boolean
    sender: string
    revertReason: string
    userOpHash: string
    actualGasCost: string
    blockTime: string
    blockNumber: string
    network: string
    input: string
    target: string
    value: string
    callData: string
    beneficiary: string
    factory: string
}

const router: Router = express.Router();
const { AddressActivityQuery, BlockNumberQuery, UserOpQuery, PaymasterActivityQuery, LatestTransactionQuery, TargetQuery, BeneficiaryActivityQuery, GetLatestAccounts, GetFactoryAccounts } = getBuiltGraphSDK();
const indexers: string[] = ["mainnet-jiffy-scan", "matic-jiffy-scan" , "optimism-goerli-jiffy-scan", "georli-jiffy-scan", "mumbai-aa-indexer"]
let abiCoder = new ethers.utils.AbiCoder()
let userOpsParams = ["tuple(address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[]", "address"]
let candideUserOpsParams = ["tuple(address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,address,bytes,bytes)[]", "address"]
let calldataParams = ["address", "uint256", "bytes"]

const getCalldata = (network: String, calldata: String, sender: String, nonce: String): Result => {
    let decodedInput = abiCoder.decode(userOpsParams, "0x" + calldata.slice(10))
    try {
        let userOp = decodedInput[0][0]
    } catch (err) {
        // TODO: find out a better way to detect its from candide wallet
        decodedInput = abiCoder.decode(candideUserOpsParams, "0x" + calldata.slice(10))
        if (decodedInput == null) return ["", "", ""]
    }

    for (let userOpIdx in decodedInput[0]) {
        let userOp = decodedInput[0][userOpIdx]
        if (sender.toLowerCase() == userOp[0].toLowerCase() && nonce.toString() == userOp[1].toString()) {
            try {
                let callDataDecoded = abiCoder.decode(calldataParams, "0x" + userOp[3].slice(10))
                if (callDataDecoded == null) return ["", "", ""]
                return callDataDecoded;
            } catch {
                return null
            }
        }
    }
}



const populateCrossUserOpsWithTarget = (crossUserOps: Pick<UserOp, "paymaster" | "nonce" | "transactionHash" | "success" | "sender" | "revertReason" | "userOpHash" | "actualGasCost"  | "blockTime" | "blockNumber" | "network" | "input" | "factory" | "beneficiary" | "target">[]): PopulatedCrossUserOp[] => {
    let populatedCrossUserOps: PopulatedCrossUserOp[] = []
    for (let userOpIdx in crossUserOps) {
        let crossUserOp = crossUserOps[userOpIdx]
        let decodedCallData;
        try{
            decodedCallData = getCalldata(crossUserOp.network, crossUserOp.input, crossUserOp.sender, crossUserOp.nonce)
        } catch(err) {
            decodedCallData = null
        }
        let populatedUserOp: PopulatedCrossUserOp = {
            paymaster: crossUserOp.paymaster,
            nonce: crossUserOp.nonce,
            transactionHash: crossUserOp.transactionHash,
            success: crossUserOp.success,
            sender: crossUserOp.sender,
            revertReason: crossUserOp.revertReason,
            userOpHash: crossUserOp.userOpHash,
            actualGasCost: crossUserOp.actualGasCost,
            blockTime: crossUserOp.blockTime,
            blockNumber: crossUserOp.blockNumber,
            network: crossUserOp.network,
            input: crossUserOp.input,
            target: crossUserOp.target,
            beneficiary: crossUserOp.beneficiary,
            factory: crossUserOp.factory,
            value: decodedCallData != null ? decodedCallData[1].toString() : "",
            callData: decodedCallData != null ? decodedCallData[2] : ""
        }
        populatedCrossUserOps.push(populatedUserOp)
    }
    return populatedCrossUserOps
}

router.get('/decodeTransaction', async (req: Request, res: Response, next: NextFunction) => {
    const inputData = req.query.inputData as string;
    const value = req.query.value as string;
    const contractAddress = req.query.contractAddress as string;
    const network = req.query.network as string;

    if (!inputData || !value || !contractAddress || !network) {
        next(ApiError.badRequest("Missing input params"))
        return;
    }

    if (inputData == "0x") {
        { }
    }
    const decodedInputData = await decodeInputData(inputData, value, contractAddress, network);
    res.send(decodedInputData);
})


router.get('/getAddressActivity', async (req: Request, res: Response, next: NextFunction) => {
    const address = req.query.address as string;
    let first = parseInt(req.query.first ? req.query.first as string : "50");
    let skip = parseInt(req.query.skip ? req.query.skip as string : "0");

    if (first > 100) first = 100;

    if (!address) {
        next(ApiError.badRequest("Missing address param"))
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

router.get('/getTargetActivity', async (req: Request, res: Response, next: NextFunction) => {
    const target = req.query.target as string;
    let first = parseInt(req.query.first ? req.query.first as string : "50");
    let skip = parseInt(req.query.skip ? req.query.skip as string : "0");

    if (first > 100) first = 100;

    if (!target) {
        next(ApiError.badRequest("Missing target param"))
        return;
    }

    let { crossUserOps } = await TargetQuery({
        targetAddress: target,
        first: first,
        skip: skip,
        indexerNames: indexers
    });

    let decodedCrossUserOps = populateCrossUserOpsWithTarget(crossUserOps)
    res.send(crossUserOps);
});

router.get('/getBeneficiaryActivity', async (req: Request, res: Response, next: NextFunction) => {
    const beneficiary = req.query.beneficiary as string;
    let first = parseInt(req.query.first ? req.query.first as string : "50");
    let skip = parseInt(req.query.skip ? req.query.skip as string : "0");

    if (first > 100) first = 100;

    if (!beneficiary) {
        next(ApiError.badRequest("Missing beneficiary param"))
        return;
    }

    let { crossUserOps } = await BeneficiaryActivityQuery({
        beneficiaryAddress: beneficiary,
        first: first,
        skip: skip,
        indexerNames: indexers
    });

    let decodedCrossUserOps = populateCrossUserOpsWithTarget(crossUserOps)
    res.send(decodedCrossUserOps);
});

router.get('/getFactoryAccounts', async (req: Request, res: Response, next: NextFunction) => {
    const factory = req.query.factory as string;
    let first = parseInt(req.query.first ? req.query.first as string : "50");
    let skip = parseInt(req.query.skip ? req.query.skip as string : "0");

    if (first > 100) first = 100;

    if (!factory) {
        next(ApiError.badRequest("Missing factory param"))
        return;
    }

    let { crossUserOps } = await GetFactoryAccounts({
        factoryAddress: factory,
        first: first,
        skip: skip,
        indexerNames: indexers
    });

    res.send(crossUserOps);
});

router.get('/getLatestAccounts', async (req: Request, res: Response, next: NextFunction) => {
    let first = parseInt(req.query.first ? req.query.first as string : "50");
    let skip = parseInt(req.query.skip ? req.query.skip as string : "0");

    if (first > 100) first = 100;

    let { crossUserOps } = await GetLatestAccounts({
        first: first,
        skip: skip,
        indexerNames: indexers
    });

    res.send(crossUserOps);
});

router.get('/getAddressActivityTest', async (req: Request, res: Response, next: NextFunction) => {
    const address = req.query.address as string;
    let first = parseInt(req.query.first ? req.query.first as string : "50");
    let skip = parseInt(req.query.skip ? req.query.skip as string : "0");

    if (first > 100) first = 100;

    if (!address) {
        next(ApiError.badRequest("Missing address parameter"))
        return
    }

    let { crossUserOps } = await AddressActivityQuery({
        senderAddress: address,
        first: first,
        skip: skip,
        indexerNames: indexers
    });

    // let decodedCrossUserOps = populateCrossUserOpsWithTarget(crossUserOps)
    res.send(crossUserOps);
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


router.get('/getBlockActivity', async (req: Request, res: Response, next: NextFunction) => {
    const block = parseInt(req.query.block as string);
    let first = parseInt(req.query.first ? req.query.first as string : "50");
    let skip = parseInt(req.query.skip ? req.query.skip as string : "0");

    if (first > 100) first = 100;

    if (isNaN(block)) {
        next(ApiError.badRequest("Missing block parameter"))
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

router.get('/getUserOpInfo', async (req: Request, res: Response, next: NextFunction) => {
    const userOpHash = req.query.userOpHash as string;
    if (!userOpHash) {
        next(ApiError.badRequest("Missing userOpHash parameter"))
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

router.get('/getPaymasterActivity', async (req: Request, res: Response, next: NextFunction) => {
    const address = req.query.address as string;
    let first = parseInt(req.query.first ? req.query.first as string : "50");
    let skip = parseInt(req.query.skip ? req.query.skip as string : "0");

    if (first > 100) first = 100;

    if (!address) {
        next(ApiError.badRequest("Missing address parameter"))
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
        next(ApiError.badRequest("Paymaster not found"))
    }
})

//export this router to use in our index.js
export default router;