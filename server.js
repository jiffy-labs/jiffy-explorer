const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
require('dotenv').config()
// const { BlockNumberQuery, DepositsQuery, RequestIdQuery, SenderAddressQuery, StakingQuery, execute } = require('./.graphclient');
const ethers = require("ethers");
const UserOpABI = require("./ABIs/UserOpsFunc.json");
const ExecFromEntryPointABI = require("./ABIs/ExecFromEntryPoint.json");
const { getUsersOperationDetails } = require("./utils/nodeQueries.js");
const userOpInter = new ethers.utils.Interface(UserOpABI);
const execFromEntryPointABI = new ethers.utils.Interface(ExecFromEntryPointABI);

const mumbaiProvider = new ethers.providers.InfuraProvider(
    "maticmum",
    process.env.INFURA_ID
);
const georliProvider = new ethers.providers.InfuraProvider(
    "goerli",
    process.env.INFURA_ID
);

app.use(express.static(path.join(__dirname, "/client", "build")));
app.use(express.static("public"));



// app.get("/getRequestsForAddress", async (req,res) => {
//     let senderAddress = req.query.address;
//     let queryRes = await execute(SenderAddressQuery, {senderAddress});
//     res.send(queryRes?.data);
// })

app.get("/getTransactionInput", async (req, res) => {
    const queryParams = req?.query;
    if (Object.keys(queryParams) == []) {
        res.send({error: 1})
        return;
    }
    const network = queryParams.network
    const txHash = queryParams.txHash
    const sender = queryParams.sender
    const nonce = queryParams.nonce 
    let userOp;
    if (network && txHash && sender && nonce) {
        userOp = await getUsersOperationDetails(txHash, sender, nonce, (network == "goerli") ? georliProvider: mumbaiProvider, userOpInter, execFromEntryPointABI) 
    } else {
        res.send({error: 1})
        return;
    }
    
    res.send(userOp);
})

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "/client", "build", "index.html"));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


