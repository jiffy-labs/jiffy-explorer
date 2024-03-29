import { Resolvers, MeshContext } from '../.graphclient'

export const resolvers: Resolvers = {
    UserOp: {
        // chainName can exist already in root as we pass it in the other resolver
        indexerName: (root: any, args: any, context: any, info: any) => root.indexerName || context.indexerName || 'optimism-goerli-jiffy-scan' || "matic-jiffy-scan" || "mainnet-jiffy-scan" || "mumbai-aa-indexer", // The value we provide in the config
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
                        })) } else { return userOps} 
                    }
                    ),
                ),
            ).then((allUserOps) => allUserOps.flat()),
    },
}