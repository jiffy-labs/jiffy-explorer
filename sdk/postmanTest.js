var axios = require('axios');
var data = JSON.stringify({
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
});

var config = {
  method: 'post',
  url: 'https://api.thegraph.com/subgraphs/name/lazycoder1/aa-subgraphs-test',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

