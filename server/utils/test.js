const axios = require("axios");
const {ethers} = require("ethers");
const { decode } = require("punycode");

let abiCoder = new ethers.utils.AbiCoder()

var configMumbai = {
    method: 'get',
    url: 'https://api-testnet.polygonscan.com/api?module=contract&action=getabi&address=CONTRACT_ADDRESS&apikey='+process.env.POLYSCAN_API_KEY,
    headers: {}
};

var configGeorli = {
    method: 'get',
    url: 'https://api-goerli.etherscan.io/api?module=contract&action=getabi&address=CONTRACT_ADDRESS&apikey='+process.env.ETHERSCAN_API_KEY,
    headers: {}
};
let params = ["uint8", "address", "uint256", "uint256", "bytes"]

let transactionInput = "0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000099006e65fcb2aafe004b6808890eda2b502d5595f8de00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044eb4041f100000000000000000000000014007449b25ff24e7b386b2ee7ddd38847cbb7a2000000000000000000000000000000000000000000000000000000000000000300000000000000"
let slicedTxInp = transactionInput.slice(2);
for (let i=0;i<(slicedTxInp.length)/64;i++) {
    
    console.log(slicedTxInp.slice(i*64,(i+1)*64))
}

// let decodedInput = abiCoder.decode(params, "")

// console.log(decodedInput);

