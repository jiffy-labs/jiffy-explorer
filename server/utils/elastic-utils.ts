const elasticClient = require("./elastic-client");

const storeAbi = async (contractAddress:string, contractABI:string) => {
    const result = await elasticClient.index({
        index: "posts",
        document: {
          contractAddress: contractAddress,
          contractABI: contractABI,
        },
      });
    
      return result
}

