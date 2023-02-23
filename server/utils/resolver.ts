import { Resolvers, MeshContext } from '../.graphclient'

export const resolvers: Resolvers = {
    UserOp: {
        // chainName can exist already in root as we pass it in the other resolver
        indexerName: (root: any, args: any, context: any, info: any) => root.indexerName || context.indexerName || 'optimism-goerli-jiffy-scan', // The value we provide in the config
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
                        userOps.map((userOp: any) => ({
                            ...userOp,
                            indexerName,
                            network: getNetworkParam(indexerName)
                        })),
                    ),
                ),
            ).then((allUserOps) => allUserOps.flat()),
    },
}

function getNetworkParam(indexerName: string): string {
    let network = "";
    if (indexerName == "georli-jiffy-scan"){
        network = 'goerli';
    } else if (indexerName == "optimism-goerli-jiffy-scan") {
        network = 'optimism-goerli'
    } 
    return network
}