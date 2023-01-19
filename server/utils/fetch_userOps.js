var axios = require("axios");
const { PassThrough } = require("stream");
var data = {
    query: `query LatestTransactionQuery($first: Int, $skip: Int, ) {
        userOps(first: $first, skip: $skip, orderBy: blockTime, orderDirection: desc) {
            paymaster
            nonce
            transactionHash
            success
            sender
            revertReason
            userOpHash
            actualGasCost
            actualGasPrice
            blockTime
            blockNumber
            network
            input
        }
    }`,
    variables: { first: 100, skip: 10 },
};

var config = {
    method: "post",
    url: "https://api.thegraph.com/subgraphs/name/lazycoder1/mumbai-aa-indexer",
    // url: "https://api.thegraph.com/subgraphs/name/lazycoder1/aa-subgraphs-test",
    headers: {
        "Content-Type": "application/json",
    },
    data: data,
};

const filter_for_addresses = async (addresses) => {
    let first = 1000;
    let skip = 0;
    // const resp = await axios(config);
    while (true) {
        data.variables.first = first;
        data.variables.skip = skip;
        config.data = JSON.stringify(data);
        
        let resp = await axios(config);

        let userOps = resp?.data?.data?.userOps;
        if (userOps == undefined) {
          console.log(resp.data)
          break
        }
        for (i in userOps) {
            let userOp = userOps[i];
            for (ai in addresses) {
                let address = addresses[ai].toLowerCase();

                if (userOp.input.toLowerCase().indexOf(address.slice(2)) != -1) {
                  console.log(userOp);
                  console.log(userOp.input.toLowerCase().indexOf(address.slice(2).toLowerCase()))
                }
            }
        }
        // console.log(userOps[0])
        if (userOps.length != 1000) {
          console.log(userOps.length)
          break
        } else {
          console.log(userOps.length)
        }
        // first = first + 1000;
        skip = skip + 1000;
    }
};

const addresses = [
    "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
    "0xE592427A0AEce92De3Edee1F18E0157C05861564",
    "0xA5644E29708357803b5A882D272c41cC0dF92B34",
    "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",
    "0x1F98431c8aD98523631AE4a59f267346ea31F984",
];

filter_for_addresses(addresses).then(console.log("test"));
