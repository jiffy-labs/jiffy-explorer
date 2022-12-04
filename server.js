const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
require('dotenv').config()
// const { BlockNumberQuery, DepositsQuery, RequestIdQuery, SenderAddressQuery, StakingQuery, execute } = require('./.graphclient');
const { ethers } = require("ethers");

// const MumbaiProvider = new ethers.providers.InfuraProvider(
//     "mumbai",
//     process.env.INFURA_ID
// );
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
    let network = req.query.network
    let txHash = req.query.txHash
    let transaction;
    if (network == "goerli") {
        transaction = await georliProvider.getTransaction(txHash);
    }
    res.send(transaction.data);
})

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "/client", "build", "index.html"));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
