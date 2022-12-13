var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var graphql = JSON.stringify({
  query: "query MyQuery {\n    userOps(first: 25, orderBy: blockTime, orderDirection: desc) {\n      paymaster\n      nonce\n      transactionHash\n      success\n      sender\n      revertReason\n      requestId\n      actualGasCost\n      actualGasPrice\n      blockTime\n      blockNumber\n    }\n  }",
  variables: {}
})
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: graphql,
  redirect: 'follow'
};

fetch("https://api.thegraph.com/subgraphs/name/lazycoder1/aa-subgraphs-test", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));