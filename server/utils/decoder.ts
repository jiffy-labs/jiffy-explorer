import { decode } from "punycode";

var axios = require('axios');
const { ethers } = require('ethers')

interface ServerResponse {
    data: ServerData
}

interface ServerData {
    status: Number
    message: string
    result: string
}

// https://api.polygonscan.com/api?module=contract&action=getabi&address=0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270

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

export const decodeInputData = async (inputData: string, value: string, contractAddress: string, network: string): Promise<any> => {
    let config = (network == "georli") ? configGeorli : configMumbai;
    
    if (inputData == "0x") return {
        functionName: "Transfer",
        params: []
    }
    let url = config.url.replace('CONTRACT_ADDRESS', contractAddress);
    config.url = url;
    const etherscanResponse: ServerResponse = await axios(config);
    let etherscanData: ServerData; 
    if (!etherscanResponse.data != undefined) {
        etherscanData =  etherscanResponse.data;
    } else {
        return {error:1, message: "Contract ABI was not found"};
    }
    if (etherscanData.status == 0) {
        return {error:1, message: "Contract source code is not verified"}
    }
    const contractABI = (!etherscanData.result != undefined) ? JSON.parse(etherscanData.result) : []
    const abiInterface = new ethers.utils.Interface(contractABI);
    try{
        const decodedData = abiInterface.parseTransaction({data:inputData, value: value});

        return decodedData
    } catch (err) {
        console.log(err)
        return {error:1, message: "Could not decode sigHash"}
    }
    
    
}



// decodeInputData('0x8d80ff0a0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000013200da5289fcaaf71d52a80a254da614a192b693e97700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044095ea7b300000000000000000000000066aad3dc0f9aac8a31e07f0787d3d476489d75d300000000000000000000000000000000000000000000000000000000000f42400066aad3dc0f9aac8a31e07f0787d3d476489d75d30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004414fe72aa000000000000000000000000da5289fcaaf71d52a80a254da614a192b693e97700000000000000000000000000000000000000000000000000000000000f42400000000000000000000000000000','0','0x2f65beD438a30827D408b7c6818ec5A22C022Dd1').then(() => console.log('yep'));

