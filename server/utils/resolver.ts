import { Resolvers, MeshContext } from '../.graphclient'

export const resolvers: Resolvers = {
    UserOp: {
        // chainName can exist already in root as we pass it in the other resolver
        indexerName: (root: any, args: any, context: any, info: any) => root.indexerName || context.indexerName || 'optimism-goerli-jiffy-scan' || "matic-jiffy-scan" || "mainnet-jiffy-scan", // The value we provide in the config
    },
    Query: {
        crossUserOps: async (root: any, args: any, context: any, info: any) =>
            Promise.all(
                args.indexerNames.map((indexerName: string) =>
                    context.userOpIndexer.Query.userOps({
                        root,
                        args,
                        context: {
                            ...context,
                            indexerName,
                        },
                        info,
                    }).then((userOps: any) =>
                        // We send indexerName here so we can take it in the resolver above
                        {
                            console.log(Object.keys(userOps)[0]);
                            if (Object.keys(userOps)[0] != 'message') {
                                return userOps.map((userOp: any) => ({
                                    ...userOp,
                                    indexerName,
                        })) } else { return {
                               paymaster: '0x0000000000000000000000000000000000000000',
                               nonce: '0',
                               transactionHash: '0x601ed9468fb9c5b7bbda03dc70b4415f350d98bb798dd3a2e4d46579f9d5c23a',
                               success: true,
                               sender: '0x4f01e579b50674312db06cd3a9fd5123fb74dd1b',
                               revertReason: null,
                               userOpHash: '0x9d4ee8229125807d9b48683367cae52c81107090ed954f83daef5ca61e1d18ec',
                               actualGasCost: '13179244081714452',
                               actualGasPrice: null,
                               actualGasUsed: '396933',
                           blockTime: '1677715043',
                              blockNumber: '16737176',
                               network: 'mainnet',
                               input: '0x1fad948c00000000000000000000000000000000000000000000000000000000000000400000000000000000000000009c98b1528c26cf36e78527308c1b21d89baed700000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000004f01e579b50674312db06cd3a9fd5123fb74dd1b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016000000000000000000000000000000000000000000000000000000000000001e0000000000000000000000000000000000000000000000000000000000000557400000000000000000000000000000000000000000000000000000000000650b1000000000000000000000000000000000000000000000000000000000000bc300000000000000000000000000000000000000000000000000000000d3a061fe90000000000000000000000000000000000000000000000000000000006bc3e4100000000000000000000000000000000000000000000000000000000000002a000000000000000000000000000000000000000000000000000000000000002c0000000000000000000000000000000000000000000000000000000000000005871d63edcda95c61d6235552b5bc74e32d8e2527b5fbfb9cf000000000000000000000000b6867559070bdce9992c51386f310c91ca0436ed000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000084b61d27f60000000000000000000000004f01e579b50674312db06cd3a9fd5123fb74dd1b00000000000000000000000000000000000000000000000000000002540be400000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041ccd1f1ad9a98a282b3a0b192e58811974834701f3b128bf63a3adef45742f7d45ea7eed9118d6d8ffa034b67ff1371ae0a3e93cbfc40bc618a1479f8fd2a12cf1b00000000000000000000000000000000000000000000000000000000000000',
                               target: '0x4f01e579b50674312db06cd3a9fd5123fb74dd1b',
                               beneficiary: '0x9c98b1528c26cf36e78527308c1b21d89baed700',
                               factory: '0x71d63edcda95c61d6235552b5bc74e32d8e2527b'
                             }} 
                    }
                    ),
                ),
            ).then((allUserOps) => allUserOps.flat()),
    },
}