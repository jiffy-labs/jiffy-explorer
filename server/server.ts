import express, { Express, Request, Response, Router } from "express";
import * as bodyParser from 'body-parser';
import path from "path";
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })
import { ethers } from "ethers";
import UserOpABI from "./ABIs/UserOpsFunc.json";
import ExecFromEntryPointABI from "./ABIs/ExecFromEntryPoint.json";
import { getUsersOperationDetails } from "./utils/nodeQueries";
import indexerRoutes from './routes/indexerRoutes';

const app: Express = express();
const port = process.env.PORT || 3000;
const router: Router = express.Router();
const userOpInter = new ethers.utils.Interface(UserOpABI);
// const execFromEntryPointABI = new ethers.utils.Interface(ExecFromEntryPointABI);

const mumbaiProvider = new ethers.providers.InfuraProvider(
    "maticmum",
    process.env.INFURA_ID
);
const georliProvider = new ethers.providers.InfuraProvider(
    "goerli",
    process.env.INFURA_ID
);

// console.log(process.env.INFURA_ID)
// console.log(path.join(__dirname, "../../client", "build"))
app.use(express.static(path.join(__dirname, "../../client", "build")));
app.use(express.static("public"));
app.use(bodyParser.json())

//configure routes
app.use('/api', indexerRoutes);

interface TransactionInputsQuery {
    network?: string,
    txHash?: string,
    sender?: string,
    nonce?: string
}

type TransactionInputsRequestHandler =  Request<TransactionInputsQuery>

app.get("/getTransactionInput", async (req: TransactionInputsRequestHandler, res: Response) => {
    const queryParams = req?.query;
    const network = queryParams.network as string
    const transactionHash = queryParams.txHash as string
    const sender = queryParams.sender as string
    const nonce = queryParams.nonce as string
    let userOp;
    try {
        if (network && transactionHash && sender && nonce) {
            userOp = await getUsersOperationDetails(transactionHash, sender, nonce, (network == "goerli") ? georliProvider: mumbaiProvider, userOpInter) 
        } else {
            res.send({error: 1})
            return;
        }
    } catch (err) {
        console.log(err);
        res.send({error: 1})
        return;
    }
    
    
    res.send(userOp);
})

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "../../client", "build", "index.html"), { root: "../../"});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


