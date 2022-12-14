import express, { Router, Request, Response } from 'express';
import { getBuiltGraphSDK } from '../.graphclient';

const router: Router = express.Router();
const { AddressActivityQuery, BlockNumberQuery, RequestIdQuery } = getBuiltGraphSDK();
const indexers: string[] = ["aa-subgraphs-test","mumbai-aa-indexer"]

router.get('/getAddressActivity', async (req: Request, res: Response) => {
    const address = req.query.address as string;
    if (!address) {
        res.send({error: true, message: "Missing address parameter"})
        return;
    }
    const { crossUserOps } = await AddressActivityQuery({
        senderAddress: address,
        indexerNames: indexers
    });

    res.send(crossUserOps);
});

router.get('/getActivityInBlock', async (req: Request, res: Response) => {
    const block = parseInt(req.query.block as string);
    if (!isNaN(block)) {
        res.send({error: true, message: "Missing address parameter"})
        return;
    }
    const { userOps } = await BlockNumberQuery({
        blockNumber: block
    });

    res.send(userOps);
});

router.get('/getUserOpInfo', async (req: Request, res: Response) => {
    const userOpHash = req.query.userOpHash as string;
    if (!userOpHash) {
        res.send({error: true, message: "Missing userOpHash parameter"})
        return;
    }
    const { userOps } = await RequestIdQuery({
        requestId: userOpHash
    })

    if (userOps.length > 0){
        res.send(userOps[0]);
    } else {
        res.send([])
    }
})

//export this router to use in our index.js
export default router;