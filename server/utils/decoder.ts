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

var config = {
    method: 'get',
    url: 'https://api-goerli.etherscan.io/api?module=contract&action=getabi&address=CONTRACT_ADDRESS&apikey=2KGBKDYR37DT79WBY1JPKKCINXU97YZ3KI',
    headers: {}
};

const decodeInputData = async (inputData: string, contractAddress: string) => {
    let url = config.url.replace('CONTRACT_ADDRESS', contractAddress);
    config.url = url;
    const etherscanResponse: ServerResponse = await axios(config);
    let etherscanData: ServerData; 
    if (!etherscanResponse.data != undefined) {
        etherscanData =  etherscanResponse.data;
    } else {
        return {error:1, message: "Contract ABI was not found"};
    }
    console.log(JSON.stringify(etherscanData))
    const contractABI = (!etherscanData.result != undefined) ? JSON.parse(etherscanData.result) : []
    const abiInterface = new ethers.utils.Interface(contractABI);
    const decodedData = abiInterface.decodeFunctionData(inputData);
    console.log(decodedData);

}

decodeInputData('','0xfc724f3f942bbc63f14fe4dd4b9128c23c693909').then(() => console.log('yep'));

