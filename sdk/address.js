const axios = require("axios");

var data = {
    query: `query MyQuery {
    userOps(first: 25, orderBy: blockTime, orderDirection: desc) {
      paymaster
      nonce
      transactionHash
      success
      sender
      revertReason
      requestId
      actualGasCost
      actualGasPrice
      blockTime
      blockNumber
    }
  }`,
    variables: {}
  };

const fetchAddressActivity = async (address) => {
    data.query= data.query.replace("SENDER_ADDRESS", address);
    console.log(data)
    var config = {
        method: 'post',
        url: 'https://api.thegraph.com/subgraphs/name/lazycoder1/aa-subgraphs-test',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : JSON.stringify(data)
      };
    const res = await axios(config);
    axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
};

fetchAddressActivity("0x9327bcd8914d685fc9aa0c835255de5e0a2abc94")
    .then();
