// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import { parse } from 'graphql';
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { UserOpIndexerTypes } from './sources/userOpIndexer/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Query = {
  accountDeployed?: Maybe<AccountDeployed>;
  accountDeployeds: Array<AccountDeployed>;
  deposited?: Maybe<Deposited>;
  depositeds: Array<Deposited>;
  signatureAggregatorChanged?: Maybe<SignatureAggregatorChanged>;
  signatureAggregatorChangeds: Array<SignatureAggregatorChanged>;
  stakeLocked?: Maybe<StakeLocked>;
  stakeLockeds: Array<StakeLocked>;
  stakeUnlocked?: Maybe<StakeUnlocked>;
  stakeUnlockeds: Array<StakeUnlocked>;
  stakeWithdrawn?: Maybe<StakeWithdrawn>;
  stakeWithdrawns: Array<StakeWithdrawn>;
  evmaddress?: Maybe<EVMAddress>;
  evmaddresses: Array<EVMAddress>;
  hash?: Maybe<Hash>;
  hashes: Array<Hash>;
  userOp?: Maybe<UserOp>;
  userOps: Array<UserOp>;
  withdrawn?: Maybe<Withdrawn>;
  withdrawns: Array<Withdrawn>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  crossUserOps: Array<UserOp>;
};


export type QueryaccountDeployedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountDeployedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountDeployed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountDeployed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposited_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposited_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysignatureAggregatorChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysignatureAggregatorChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SignatureAggregatorChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SignatureAggregatorChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystakeLockedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystakeLockedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StakeLocked_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakeLocked_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystakeUnlockedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystakeUnlockedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StakeUnlocked_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakeUnlocked_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystakeWithdrawnArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystakeWithdrawnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StakeWithdrawn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakeWithdrawn_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryevmaddressArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryevmaddressesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EVMAddress_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EVMAddress_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhashArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhashesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Hash_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Hash_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserOpArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserOpsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserOp_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserOp_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywithdrawnArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywithdrawnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdrawn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdrawn_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};


export type QuerycrossUserOpsArgs = {
  orderBy?: InputMaybe<UserOp_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserOp_filter>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  indexerNames: Array<Scalars['String']>;
};

export type Subscription = {
  accountDeployed?: Maybe<AccountDeployed>;
  accountDeployeds: Array<AccountDeployed>;
  deposited?: Maybe<Deposited>;
  depositeds: Array<Deposited>;
  signatureAggregatorChanged?: Maybe<SignatureAggregatorChanged>;
  signatureAggregatorChangeds: Array<SignatureAggregatorChanged>;
  stakeLocked?: Maybe<StakeLocked>;
  stakeLockeds: Array<StakeLocked>;
  stakeUnlocked?: Maybe<StakeUnlocked>;
  stakeUnlockeds: Array<StakeUnlocked>;
  stakeWithdrawn?: Maybe<StakeWithdrawn>;
  stakeWithdrawns: Array<StakeWithdrawn>;
  evmaddress?: Maybe<EVMAddress>;
  evmaddresses: Array<EVMAddress>;
  hash?: Maybe<Hash>;
  hashes: Array<Hash>;
  userOp?: Maybe<UserOp>;
  userOps: Array<UserOp>;
  withdrawn?: Maybe<Withdrawn>;
  withdrawns: Array<Withdrawn>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionaccountDeployedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountDeployedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountDeployed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountDeployed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposited_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposited_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsignatureAggregatorChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsignatureAggregatorChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SignatureAggregatorChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SignatureAggregatorChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstakeLockedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstakeLockedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StakeLocked_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakeLocked_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstakeUnlockedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstakeUnlockedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StakeUnlocked_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakeUnlocked_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstakeWithdrawnArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstakeWithdrawnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StakeWithdrawn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakeWithdrawn_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionevmaddressArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionevmaddressesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EVMAddress_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EVMAddress_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhashArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhashesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Hash_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Hash_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserOpArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserOpsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserOp_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserOp_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwithdrawnArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwithdrawnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdrawn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdrawn_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type AccountDeployed = {
  id: Scalars['Bytes'];
  userOpHash: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  factory: Scalars['Bytes'];
  paymaster: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type AccountDeployed_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  userOpHash?: InputMaybe<Scalars['Bytes']>;
  userOpHash_not?: InputMaybe<Scalars['Bytes']>;
  userOpHash_gt?: InputMaybe<Scalars['Bytes']>;
  userOpHash_lt?: InputMaybe<Scalars['Bytes']>;
  userOpHash_gte?: InputMaybe<Scalars['Bytes']>;
  userOpHash_lte?: InputMaybe<Scalars['Bytes']>;
  userOpHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userOpHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userOpHash_contains?: InputMaybe<Scalars['Bytes']>;
  userOpHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  factory?: InputMaybe<Scalars['Bytes']>;
  factory_not?: InputMaybe<Scalars['Bytes']>;
  factory_gt?: InputMaybe<Scalars['Bytes']>;
  factory_lt?: InputMaybe<Scalars['Bytes']>;
  factory_gte?: InputMaybe<Scalars['Bytes']>;
  factory_lte?: InputMaybe<Scalars['Bytes']>;
  factory_in?: InputMaybe<Array<Scalars['Bytes']>>;
  factory_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  factory_contains?: InputMaybe<Scalars['Bytes']>;
  factory_not_contains?: InputMaybe<Scalars['Bytes']>;
  paymaster?: InputMaybe<Scalars['Bytes']>;
  paymaster_not?: InputMaybe<Scalars['Bytes']>;
  paymaster_gt?: InputMaybe<Scalars['Bytes']>;
  paymaster_lt?: InputMaybe<Scalars['Bytes']>;
  paymaster_gte?: InputMaybe<Scalars['Bytes']>;
  paymaster_lte?: InputMaybe<Scalars['Bytes']>;
  paymaster_in?: InputMaybe<Array<Scalars['Bytes']>>;
  paymaster_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  paymaster_contains?: InputMaybe<Scalars['Bytes']>;
  paymaster_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AccountDeployed_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AccountDeployed_filter>>>;
};

export type AccountDeployed_orderBy =
  | 'id'
  | 'userOpHash'
  | 'sender'
  | 'factory'
  | 'paymaster'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type AddressType =
  | 'WALLET'
  | 'PAYMASTER'
  | 'FACTORY'
  | 'BENEFICIARY';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Deposited = {
  id: Scalars['Bytes'];
  account: Scalars['Bytes'];
  totalDeposit: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type Deposited_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  totalDeposit?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_not?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Deposited_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Deposited_filter>>>;
};

export type Deposited_orderBy =
  | 'id'
  | 'account'
  | 'totalDeposit'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type EVMAddress = {
  id: Scalars['ID'];
  address?: Maybe<Scalars['Bytes']>;
  Addresstype?: Maybe<AddressType>;
};

export type EVMAddress_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_gt?: InputMaybe<Scalars['Bytes']>;
  address_lt?: InputMaybe<Scalars['Bytes']>;
  address_gte?: InputMaybe<Scalars['Bytes']>;
  address_lte?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  Addresstype?: InputMaybe<AddressType>;
  Addresstype_not?: InputMaybe<AddressType>;
  Addresstype_in?: InputMaybe<Array<AddressType>>;
  Addresstype_not_in?: InputMaybe<Array<AddressType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EVMAddress_filter>>>;
  or?: InputMaybe<Array<InputMaybe<EVMAddress_filter>>>;
};

export type EVMAddress_orderBy =
  | 'id'
  | 'address'
  | 'Addresstype';

export type Hash = {
  id: Scalars['ID'];
  hash?: Maybe<Scalars['Bytes']>;
  HashType?: Maybe<HashType>;
};

export type HashType =
  | 'USER_OP_HASH'
  | 'TRANSACTION_HASH';

export type Hash_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['Bytes']>;
  hash_not?: InputMaybe<Scalars['Bytes']>;
  hash_gt?: InputMaybe<Scalars['Bytes']>;
  hash_lt?: InputMaybe<Scalars['Bytes']>;
  hash_gte?: InputMaybe<Scalars['Bytes']>;
  hash_lte?: InputMaybe<Scalars['Bytes']>;
  hash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  hash_contains?: InputMaybe<Scalars['Bytes']>;
  hash_not_contains?: InputMaybe<Scalars['Bytes']>;
  HashType?: InputMaybe<HashType>;
  HashType_not?: InputMaybe<HashType>;
  HashType_in?: InputMaybe<Array<HashType>>;
  HashType_not_in?: InputMaybe<Array<HashType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Hash_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Hash_filter>>>;
};

export type Hash_orderBy =
  | 'id'
  | 'hash'
  | 'HashType';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type SignatureAggregatorChanged = {
  id: Scalars['Bytes'];
  aggregator: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type SignatureAggregatorChanged_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  aggregator?: InputMaybe<Scalars['Bytes']>;
  aggregator_not?: InputMaybe<Scalars['Bytes']>;
  aggregator_gt?: InputMaybe<Scalars['Bytes']>;
  aggregator_lt?: InputMaybe<Scalars['Bytes']>;
  aggregator_gte?: InputMaybe<Scalars['Bytes']>;
  aggregator_lte?: InputMaybe<Scalars['Bytes']>;
  aggregator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  aggregator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  aggregator_contains?: InputMaybe<Scalars['Bytes']>;
  aggregator_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SignatureAggregatorChanged_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SignatureAggregatorChanged_filter>>>;
};

export type SignatureAggregatorChanged_orderBy =
  | 'id'
  | 'aggregator'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type StakeLocked = {
  id: Scalars['Bytes'];
  account: Scalars['Bytes'];
  totalStaked: Scalars['BigInt'];
  unstakeDelaySec: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type StakeLocked_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  totalStaked?: InputMaybe<Scalars['BigInt']>;
  totalStaked_not?: InputMaybe<Scalars['BigInt']>;
  totalStaked_gt?: InputMaybe<Scalars['BigInt']>;
  totalStaked_lt?: InputMaybe<Scalars['BigInt']>;
  totalStaked_gte?: InputMaybe<Scalars['BigInt']>;
  totalStaked_lte?: InputMaybe<Scalars['BigInt']>;
  totalStaked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalStaked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unstakeDelaySec?: InputMaybe<Scalars['BigInt']>;
  unstakeDelaySec_not?: InputMaybe<Scalars['BigInt']>;
  unstakeDelaySec_gt?: InputMaybe<Scalars['BigInt']>;
  unstakeDelaySec_lt?: InputMaybe<Scalars['BigInt']>;
  unstakeDelaySec_gte?: InputMaybe<Scalars['BigInt']>;
  unstakeDelaySec_lte?: InputMaybe<Scalars['BigInt']>;
  unstakeDelaySec_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unstakeDelaySec_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StakeLocked_filter>>>;
  or?: InputMaybe<Array<InputMaybe<StakeLocked_filter>>>;
};

export type StakeLocked_orderBy =
  | 'id'
  | 'account'
  | 'totalStaked'
  | 'unstakeDelaySec'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type StakeUnlocked = {
  id: Scalars['Bytes'];
  account: Scalars['Bytes'];
  withdrawTime: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type StakeUnlocked_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  withdrawTime?: InputMaybe<Scalars['BigInt']>;
  withdrawTime_not?: InputMaybe<Scalars['BigInt']>;
  withdrawTime_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawTime_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawTime_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawTime_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StakeUnlocked_filter>>>;
  or?: InputMaybe<Array<InputMaybe<StakeUnlocked_filter>>>;
};

export type StakeUnlocked_orderBy =
  | 'id'
  | 'account'
  | 'withdrawTime'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type StakeWithdrawn = {
  id: Scalars['Bytes'];
  account: Scalars['Bytes'];
  withdrawAddress: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type StakeWithdrawn_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  withdrawAddress?: InputMaybe<Scalars['Bytes']>;
  withdrawAddress_not?: InputMaybe<Scalars['Bytes']>;
  withdrawAddress_gt?: InputMaybe<Scalars['Bytes']>;
  withdrawAddress_lt?: InputMaybe<Scalars['Bytes']>;
  withdrawAddress_gte?: InputMaybe<Scalars['Bytes']>;
  withdrawAddress_lte?: InputMaybe<Scalars['Bytes']>;
  withdrawAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  withdrawAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  withdrawAddress_contains?: InputMaybe<Scalars['Bytes']>;
  withdrawAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StakeWithdrawn_filter>>>;
  or?: InputMaybe<Array<InputMaybe<StakeWithdrawn_filter>>>;
};

export type StakeWithdrawn_orderBy =
  | 'id'
  | 'account'
  | 'withdrawAddress'
  | 'amount'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type UserOp = {
  id: Scalars['ID'];
  transactionHash?: Maybe<Scalars['Bytes']>;
  userOpHash?: Maybe<Scalars['Bytes']>;
  sender?: Maybe<Scalars['Bytes']>;
  paymaster?: Maybe<Scalars['Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  actualGasCost?: Maybe<Scalars['BigInt']>;
  actualGasPrice?: Maybe<Scalars['BigInt']>;
  actualGasUsed?: Maybe<Scalars['BigInt']>;
  success?: Maybe<Scalars['Boolean']>;
  revertReason?: Maybe<Scalars['Bytes']>;
  blockTime?: Maybe<Scalars['BigInt']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
  network?: Maybe<Scalars['String']>;
  input?: Maybe<Scalars['Bytes']>;
  target?: Maybe<Scalars['Bytes']>;
  callData?: Maybe<Scalars['Bytes']>;
  beneficiary?: Maybe<Scalars['Bytes']>;
  factory?: Maybe<Scalars['Bytes']>;
  indexerName?: Maybe<Scalars['String']>;
};

export type UserOp_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  userOpHash?: InputMaybe<Scalars['Bytes']>;
  userOpHash_not?: InputMaybe<Scalars['Bytes']>;
  userOpHash_gt?: InputMaybe<Scalars['Bytes']>;
  userOpHash_lt?: InputMaybe<Scalars['Bytes']>;
  userOpHash_gte?: InputMaybe<Scalars['Bytes']>;
  userOpHash_lte?: InputMaybe<Scalars['Bytes']>;
  userOpHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userOpHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userOpHash_contains?: InputMaybe<Scalars['Bytes']>;
  userOpHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  paymaster?: InputMaybe<Scalars['Bytes']>;
  paymaster_not?: InputMaybe<Scalars['Bytes']>;
  paymaster_gt?: InputMaybe<Scalars['Bytes']>;
  paymaster_lt?: InputMaybe<Scalars['Bytes']>;
  paymaster_gte?: InputMaybe<Scalars['Bytes']>;
  paymaster_lte?: InputMaybe<Scalars['Bytes']>;
  paymaster_in?: InputMaybe<Array<Scalars['Bytes']>>;
  paymaster_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  paymaster_contains?: InputMaybe<Scalars['Bytes']>;
  paymaster_not_contains?: InputMaybe<Scalars['Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  actualGasCost?: InputMaybe<Scalars['BigInt']>;
  actualGasCost_not?: InputMaybe<Scalars['BigInt']>;
  actualGasCost_gt?: InputMaybe<Scalars['BigInt']>;
  actualGasCost_lt?: InputMaybe<Scalars['BigInt']>;
  actualGasCost_gte?: InputMaybe<Scalars['BigInt']>;
  actualGasCost_lte?: InputMaybe<Scalars['BigInt']>;
  actualGasCost_in?: InputMaybe<Array<Scalars['BigInt']>>;
  actualGasCost_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  actualGasPrice?: InputMaybe<Scalars['BigInt']>;
  actualGasPrice_not?: InputMaybe<Scalars['BigInt']>;
  actualGasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  actualGasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  actualGasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  actualGasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  actualGasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  actualGasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  actualGasUsed?: InputMaybe<Scalars['BigInt']>;
  actualGasUsed_not?: InputMaybe<Scalars['BigInt']>;
  actualGasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  actualGasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  actualGasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  actualGasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  actualGasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  actualGasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  success?: InputMaybe<Scalars['Boolean']>;
  success_not?: InputMaybe<Scalars['Boolean']>;
  success_in?: InputMaybe<Array<Scalars['Boolean']>>;
  success_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  revertReason?: InputMaybe<Scalars['Bytes']>;
  revertReason_not?: InputMaybe<Scalars['Bytes']>;
  revertReason_gt?: InputMaybe<Scalars['Bytes']>;
  revertReason_lt?: InputMaybe<Scalars['Bytes']>;
  revertReason_gte?: InputMaybe<Scalars['Bytes']>;
  revertReason_lte?: InputMaybe<Scalars['Bytes']>;
  revertReason_in?: InputMaybe<Array<Scalars['Bytes']>>;
  revertReason_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  revertReason_contains?: InputMaybe<Scalars['Bytes']>;
  revertReason_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockTime?: InputMaybe<Scalars['BigInt']>;
  blockTime_not?: InputMaybe<Scalars['BigInt']>;
  blockTime_gt?: InputMaybe<Scalars['BigInt']>;
  blockTime_lt?: InputMaybe<Scalars['BigInt']>;
  blockTime_gte?: InputMaybe<Scalars['BigInt']>;
  blockTime_lte?: InputMaybe<Scalars['BigInt']>;
  blockTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  network?: InputMaybe<Scalars['String']>;
  network_not?: InputMaybe<Scalars['String']>;
  network_gt?: InputMaybe<Scalars['String']>;
  network_lt?: InputMaybe<Scalars['String']>;
  network_gte?: InputMaybe<Scalars['String']>;
  network_lte?: InputMaybe<Scalars['String']>;
  network_in?: InputMaybe<Array<Scalars['String']>>;
  network_not_in?: InputMaybe<Array<Scalars['String']>>;
  network_contains?: InputMaybe<Scalars['String']>;
  network_contains_nocase?: InputMaybe<Scalars['String']>;
  network_not_contains?: InputMaybe<Scalars['String']>;
  network_not_contains_nocase?: InputMaybe<Scalars['String']>;
  network_starts_with?: InputMaybe<Scalars['String']>;
  network_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_starts_with?: InputMaybe<Scalars['String']>;
  network_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_ends_with?: InputMaybe<Scalars['String']>;
  network_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_ends_with?: InputMaybe<Scalars['String']>;
  network_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<Scalars['Bytes']>;
  input_not?: InputMaybe<Scalars['Bytes']>;
  input_gt?: InputMaybe<Scalars['Bytes']>;
  input_lt?: InputMaybe<Scalars['Bytes']>;
  input_gte?: InputMaybe<Scalars['Bytes']>;
  input_lte?: InputMaybe<Scalars['Bytes']>;
  input_in?: InputMaybe<Array<Scalars['Bytes']>>;
  input_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  input_contains?: InputMaybe<Scalars['Bytes']>;
  input_not_contains?: InputMaybe<Scalars['Bytes']>;
  target?: InputMaybe<Scalars['Bytes']>;
  target_not?: InputMaybe<Scalars['Bytes']>;
  target_gt?: InputMaybe<Scalars['Bytes']>;
  target_lt?: InputMaybe<Scalars['Bytes']>;
  target_gte?: InputMaybe<Scalars['Bytes']>;
  target_lte?: InputMaybe<Scalars['Bytes']>;
  target_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target_contains?: InputMaybe<Scalars['Bytes']>;
  target_not_contains?: InputMaybe<Scalars['Bytes']>;
  callData?: InputMaybe<Scalars['Bytes']>;
  callData_not?: InputMaybe<Scalars['Bytes']>;
  callData_gt?: InputMaybe<Scalars['Bytes']>;
  callData_lt?: InputMaybe<Scalars['Bytes']>;
  callData_gte?: InputMaybe<Scalars['Bytes']>;
  callData_lte?: InputMaybe<Scalars['Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  callData_contains?: InputMaybe<Scalars['Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_gt?: InputMaybe<Scalars['Bytes']>;
  beneficiary_lt?: InputMaybe<Scalars['Bytes']>;
  beneficiary_gte?: InputMaybe<Scalars['Bytes']>;
  beneficiary_lte?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  factory?: InputMaybe<Scalars['Bytes']>;
  factory_not?: InputMaybe<Scalars['Bytes']>;
  factory_gt?: InputMaybe<Scalars['Bytes']>;
  factory_lt?: InputMaybe<Scalars['Bytes']>;
  factory_gte?: InputMaybe<Scalars['Bytes']>;
  factory_lte?: InputMaybe<Scalars['Bytes']>;
  factory_in?: InputMaybe<Array<Scalars['Bytes']>>;
  factory_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  factory_contains?: InputMaybe<Scalars['Bytes']>;
  factory_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserOp_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UserOp_filter>>>;
};

export type UserOp_orderBy =
  | 'id'
  | 'transactionHash'
  | 'userOpHash'
  | 'sender'
  | 'paymaster'
  | 'nonce'
  | 'actualGasCost'
  | 'actualGasPrice'
  | 'actualGasUsed'
  | 'success'
  | 'revertReason'
  | 'blockTime'
  | 'blockNumber'
  | 'network'
  | 'input'
  | 'target'
  | 'callData'
  | 'beneficiary'
  | 'factory';

export type Withdrawn = {
  id: Scalars['Bytes'];
  account: Scalars['Bytes'];
  withdrawAddress: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type Withdrawn_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  withdrawAddress?: InputMaybe<Scalars['Bytes']>;
  withdrawAddress_not?: InputMaybe<Scalars['Bytes']>;
  withdrawAddress_gt?: InputMaybe<Scalars['Bytes']>;
  withdrawAddress_lt?: InputMaybe<Scalars['Bytes']>;
  withdrawAddress_gte?: InputMaybe<Scalars['Bytes']>;
  withdrawAddress_lte?: InputMaybe<Scalars['Bytes']>;
  withdrawAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  withdrawAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  withdrawAddress_contains?: InputMaybe<Scalars['Bytes']>;
  withdrawAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Withdrawn_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Withdrawn_filter>>>;
};

export type Withdrawn_orderBy =
  | 'id'
  | 'account'
  | 'withdrawAddress'
  | 'amount'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  AccountDeployed: ResolverTypeWrapper<AccountDeployed>;
  AccountDeployed_filter: AccountDeployed_filter;
  AccountDeployed_orderBy: AccountDeployed_orderBy;
  AddressType: AddressType;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Deposited: ResolverTypeWrapper<Deposited>;
  Deposited_filter: Deposited_filter;
  Deposited_orderBy: Deposited_orderBy;
  EVMAddress: ResolverTypeWrapper<EVMAddress>;
  EVMAddress_filter: EVMAddress_filter;
  EVMAddress_orderBy: EVMAddress_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Hash: ResolverTypeWrapper<Hash>;
  HashType: HashType;
  Hash_filter: Hash_filter;
  Hash_orderBy: Hash_orderBy;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  OrderDirection: OrderDirection;
  SignatureAggregatorChanged: ResolverTypeWrapper<SignatureAggregatorChanged>;
  SignatureAggregatorChanged_filter: SignatureAggregatorChanged_filter;
  SignatureAggregatorChanged_orderBy: SignatureAggregatorChanged_orderBy;
  StakeLocked: ResolverTypeWrapper<StakeLocked>;
  StakeLocked_filter: StakeLocked_filter;
  StakeLocked_orderBy: StakeLocked_orderBy;
  StakeUnlocked: ResolverTypeWrapper<StakeUnlocked>;
  StakeUnlocked_filter: StakeUnlocked_filter;
  StakeUnlocked_orderBy: StakeUnlocked_orderBy;
  StakeWithdrawn: ResolverTypeWrapper<StakeWithdrawn>;
  StakeWithdrawn_filter: StakeWithdrawn_filter;
  StakeWithdrawn_orderBy: StakeWithdrawn_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  UserOp: ResolverTypeWrapper<UserOp>;
  UserOp_filter: UserOp_filter;
  UserOp_orderBy: UserOp_orderBy;
  Withdrawn: ResolverTypeWrapper<Withdrawn>;
  Withdrawn_filter: Withdrawn_filter;
  Withdrawn_orderBy: Withdrawn_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  AccountDeployed: AccountDeployed;
  AccountDeployed_filter: AccountDeployed_filter;
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  Deposited: Deposited;
  Deposited_filter: Deposited_filter;
  EVMAddress: EVMAddress;
  EVMAddress_filter: EVMAddress_filter;
  Float: Scalars['Float'];
  Hash: Hash;
  Hash_filter: Hash_filter;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  SignatureAggregatorChanged: SignatureAggregatorChanged;
  SignatureAggregatorChanged_filter: SignatureAggregatorChanged_filter;
  StakeLocked: StakeLocked;
  StakeLocked_filter: StakeLocked_filter;
  StakeUnlocked: StakeUnlocked;
  StakeUnlocked_filter: StakeUnlocked_filter;
  StakeWithdrawn: StakeWithdrawn;
  StakeWithdrawn_filter: StakeWithdrawn_filter;
  String: Scalars['String'];
  UserOp: UserOp;
  UserOp_filter: UserOp_filter;
  Withdrawn: Withdrawn;
  Withdrawn_filter: Withdrawn_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext & { indexerName: string }, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext & { indexerName: string }, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext & { indexerName: string }, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext & { indexerName: string }, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  accountDeployed?: Resolver<Maybe<ResolversTypes['AccountDeployed']>, ParentType, ContextType, RequireFields<QueryaccountDeployedArgs, 'id' | 'subgraphError'>>;
  accountDeployeds?: Resolver<Array<ResolversTypes['AccountDeployed']>, ParentType, ContextType, RequireFields<QueryaccountDeployedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  deposited?: Resolver<Maybe<ResolversTypes['Deposited']>, ParentType, ContextType, RequireFields<QuerydepositedArgs, 'id' | 'subgraphError'>>;
  depositeds?: Resolver<Array<ResolversTypes['Deposited']>, ParentType, ContextType, RequireFields<QuerydepositedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  signatureAggregatorChanged?: Resolver<Maybe<ResolversTypes['SignatureAggregatorChanged']>, ParentType, ContextType, RequireFields<QuerysignatureAggregatorChangedArgs, 'id' | 'subgraphError'>>;
  signatureAggregatorChangeds?: Resolver<Array<ResolversTypes['SignatureAggregatorChanged']>, ParentType, ContextType, RequireFields<QuerysignatureAggregatorChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  stakeLocked?: Resolver<Maybe<ResolversTypes['StakeLocked']>, ParentType, ContextType, RequireFields<QuerystakeLockedArgs, 'id' | 'subgraphError'>>;
  stakeLockeds?: Resolver<Array<ResolversTypes['StakeLocked']>, ParentType, ContextType, RequireFields<QuerystakeLockedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  stakeUnlocked?: Resolver<Maybe<ResolversTypes['StakeUnlocked']>, ParentType, ContextType, RequireFields<QuerystakeUnlockedArgs, 'id' | 'subgraphError'>>;
  stakeUnlockeds?: Resolver<Array<ResolversTypes['StakeUnlocked']>, ParentType, ContextType, RequireFields<QuerystakeUnlockedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  stakeWithdrawn?: Resolver<Maybe<ResolversTypes['StakeWithdrawn']>, ParentType, ContextType, RequireFields<QuerystakeWithdrawnArgs, 'id' | 'subgraphError'>>;
  stakeWithdrawns?: Resolver<Array<ResolversTypes['StakeWithdrawn']>, ParentType, ContextType, RequireFields<QuerystakeWithdrawnsArgs, 'skip' | 'first' | 'subgraphError'>>;
  evmaddress?: Resolver<Maybe<ResolversTypes['EVMAddress']>, ParentType, ContextType, RequireFields<QueryevmaddressArgs, 'id' | 'subgraphError'>>;
  evmaddresses?: Resolver<Array<ResolversTypes['EVMAddress']>, ParentType, ContextType, RequireFields<QueryevmaddressesArgs, 'skip' | 'first' | 'subgraphError'>>;
  hash?: Resolver<Maybe<ResolversTypes['Hash']>, ParentType, ContextType, RequireFields<QueryhashArgs, 'id' | 'subgraphError'>>;
  hashes?: Resolver<Array<ResolversTypes['Hash']>, ParentType, ContextType, RequireFields<QueryhashesArgs, 'skip' | 'first' | 'subgraphError'>>;
  userOp?: Resolver<Maybe<ResolversTypes['UserOp']>, ParentType, ContextType, RequireFields<QueryuserOpArgs, 'id' | 'subgraphError'>>;
  userOps?: Resolver<Array<ResolversTypes['UserOp']>, ParentType, ContextType, RequireFields<QueryuserOpsArgs, 'skip' | 'first' | 'subgraphError'>>;
  withdrawn?: Resolver<Maybe<ResolversTypes['Withdrawn']>, ParentType, ContextType, RequireFields<QuerywithdrawnArgs, 'id' | 'subgraphError'>>;
  withdrawns?: Resolver<Array<ResolversTypes['Withdrawn']>, ParentType, ContextType, RequireFields<QuerywithdrawnsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
  crossUserOps?: Resolver<Array<ResolversTypes['UserOp']>, ParentType, ContextType, RequireFields<QuerycrossUserOpsArgs, 'skip' | 'first' | 'indexerNames'>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext & { indexerName: string }, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  accountDeployed?: SubscriptionResolver<Maybe<ResolversTypes['AccountDeployed']>, "accountDeployed", ParentType, ContextType, RequireFields<SubscriptionaccountDeployedArgs, 'id' | 'subgraphError'>>;
  accountDeployeds?: SubscriptionResolver<Array<ResolversTypes['AccountDeployed']>, "accountDeployeds", ParentType, ContextType, RequireFields<SubscriptionaccountDeployedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  deposited?: SubscriptionResolver<Maybe<ResolversTypes['Deposited']>, "deposited", ParentType, ContextType, RequireFields<SubscriptiondepositedArgs, 'id' | 'subgraphError'>>;
  depositeds?: SubscriptionResolver<Array<ResolversTypes['Deposited']>, "depositeds", ParentType, ContextType, RequireFields<SubscriptiondepositedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  signatureAggregatorChanged?: SubscriptionResolver<Maybe<ResolversTypes['SignatureAggregatorChanged']>, "signatureAggregatorChanged", ParentType, ContextType, RequireFields<SubscriptionsignatureAggregatorChangedArgs, 'id' | 'subgraphError'>>;
  signatureAggregatorChangeds?: SubscriptionResolver<Array<ResolversTypes['SignatureAggregatorChanged']>, "signatureAggregatorChangeds", ParentType, ContextType, RequireFields<SubscriptionsignatureAggregatorChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  stakeLocked?: SubscriptionResolver<Maybe<ResolversTypes['StakeLocked']>, "stakeLocked", ParentType, ContextType, RequireFields<SubscriptionstakeLockedArgs, 'id' | 'subgraphError'>>;
  stakeLockeds?: SubscriptionResolver<Array<ResolversTypes['StakeLocked']>, "stakeLockeds", ParentType, ContextType, RequireFields<SubscriptionstakeLockedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  stakeUnlocked?: SubscriptionResolver<Maybe<ResolversTypes['StakeUnlocked']>, "stakeUnlocked", ParentType, ContextType, RequireFields<SubscriptionstakeUnlockedArgs, 'id' | 'subgraphError'>>;
  stakeUnlockeds?: SubscriptionResolver<Array<ResolversTypes['StakeUnlocked']>, "stakeUnlockeds", ParentType, ContextType, RequireFields<SubscriptionstakeUnlockedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  stakeWithdrawn?: SubscriptionResolver<Maybe<ResolversTypes['StakeWithdrawn']>, "stakeWithdrawn", ParentType, ContextType, RequireFields<SubscriptionstakeWithdrawnArgs, 'id' | 'subgraphError'>>;
  stakeWithdrawns?: SubscriptionResolver<Array<ResolversTypes['StakeWithdrawn']>, "stakeWithdrawns", ParentType, ContextType, RequireFields<SubscriptionstakeWithdrawnsArgs, 'skip' | 'first' | 'subgraphError'>>;
  evmaddress?: SubscriptionResolver<Maybe<ResolversTypes['EVMAddress']>, "evmaddress", ParentType, ContextType, RequireFields<SubscriptionevmaddressArgs, 'id' | 'subgraphError'>>;
  evmaddresses?: SubscriptionResolver<Array<ResolversTypes['EVMAddress']>, "evmaddresses", ParentType, ContextType, RequireFields<SubscriptionevmaddressesArgs, 'skip' | 'first' | 'subgraphError'>>;
  hash?: SubscriptionResolver<Maybe<ResolversTypes['Hash']>, "hash", ParentType, ContextType, RequireFields<SubscriptionhashArgs, 'id' | 'subgraphError'>>;
  hashes?: SubscriptionResolver<Array<ResolversTypes['Hash']>, "hashes", ParentType, ContextType, RequireFields<SubscriptionhashesArgs, 'skip' | 'first' | 'subgraphError'>>;
  userOp?: SubscriptionResolver<Maybe<ResolversTypes['UserOp']>, "userOp", ParentType, ContextType, RequireFields<SubscriptionuserOpArgs, 'id' | 'subgraphError'>>;
  userOps?: SubscriptionResolver<Array<ResolversTypes['UserOp']>, "userOps", ParentType, ContextType, RequireFields<SubscriptionuserOpsArgs, 'skip' | 'first' | 'subgraphError'>>;
  withdrawn?: SubscriptionResolver<Maybe<ResolversTypes['Withdrawn']>, "withdrawn", ParentType, ContextType, RequireFields<SubscriptionwithdrawnArgs, 'id' | 'subgraphError'>>;
  withdrawns?: SubscriptionResolver<Array<ResolversTypes['Withdrawn']>, "withdrawns", ParentType, ContextType, RequireFields<SubscriptionwithdrawnsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type AccountDeployedResolvers<ContextType = MeshContext & { indexerName: string }, ParentType extends ResolversParentTypes['AccountDeployed'] = ResolversParentTypes['AccountDeployed']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  userOpHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  factory?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  paymaster?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type DepositedResolvers<ContextType = MeshContext & { indexerName: string }, ParentType extends ResolversParentTypes['Deposited'] = ResolversParentTypes['Deposited']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  totalDeposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EVMAddressResolvers<ContextType = MeshContext & { indexerName: string }, ParentType extends ResolversParentTypes['EVMAddress'] = ResolversParentTypes['EVMAddress']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  Addresstype?: Resolver<Maybe<ResolversTypes['AddressType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HashResolvers<ContextType = MeshContext & { indexerName: string }, ParentType extends ResolversParentTypes['Hash'] = ResolversParentTypes['Hash']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  HashType?: Resolver<Maybe<ResolversTypes['HashType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SignatureAggregatorChangedResolvers<ContextType = MeshContext & { indexerName: string }, ParentType extends ResolversParentTypes['SignatureAggregatorChanged'] = ResolversParentTypes['SignatureAggregatorChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  aggregator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StakeLockedResolvers<ContextType = MeshContext & { indexerName: string }, ParentType extends ResolversParentTypes['StakeLocked'] = ResolversParentTypes['StakeLocked']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  totalStaked?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  unstakeDelaySec?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StakeUnlockedResolvers<ContextType = MeshContext & { indexerName: string }, ParentType extends ResolversParentTypes['StakeUnlocked'] = ResolversParentTypes['StakeUnlocked']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  withdrawTime?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StakeWithdrawnResolvers<ContextType = MeshContext & { indexerName: string }, ParentType extends ResolversParentTypes['StakeWithdrawn'] = ResolversParentTypes['StakeWithdrawn']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  withdrawAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserOpResolvers<ContextType = MeshContext & { indexerName: string }, ParentType extends ResolversParentTypes['UserOp'] = ResolversParentTypes['UserOp']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  userOpHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  paymaster?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  actualGasCost?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  actualGasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  actualGasUsed?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  revertReason?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockTime?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  blockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  network?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  input?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  beneficiary?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  factory?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  indexerName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WithdrawnResolvers<ContextType = MeshContext & { indexerName: string }, ParentType extends ResolversParentTypes['Withdrawn'] = ResolversParentTypes['Withdrawn']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  withdrawAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext & { indexerName: string }, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext & { indexerName: string }, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext & { indexerName: string }> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  AccountDeployed?: AccountDeployedResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Deposited?: DepositedResolvers<ContextType>;
  EVMAddress?: EVMAddressResolvers<ContextType>;
  Hash?: HashResolvers<ContextType>;
  SignatureAggregatorChanged?: SignatureAggregatorChangedResolvers<ContextType>;
  StakeLocked?: StakeLockedResolvers<ContextType>;
  StakeUnlocked?: StakeUnlockedResolvers<ContextType>;
  StakeWithdrawn?: StakeWithdrawnResolvers<ContextType>;
  UserOp?: UserOpResolvers<ContextType>;
  Withdrawn?: WithdrawnResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext & { indexerName: string }> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = UserOpIndexerTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/userOpIndexer/introspectionSchema":
      return import("./sources/userOpIndexer/introspectionSchema") as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const userOpIndexerTransforms = [];
const userOpIndexerHandler = new GraphqlHandler({
              name: "userOpIndexer",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/lazycoder1/{context.indexerName:georli-jiffy-scan}"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("userOpIndexer"),
              logger: logger.child("userOpIndexer"),
              importFn,
            });
sources[0] = {
          name: 'userOpIndexer',
          handler: userOpIndexerHandler,
          transforms: userOpIndexerTransforms
        }
const additionalTypeDefs = [parse("extend type UserOp {\n  indexerName: String\n}\n\nextend type Query {\n  crossUserOps(orderBy: UserOp_orderBy, orderDirection: OrderDirection, where: UserOp_filter, skip: Int = 0, first: Int = 100, indexerNames: [String!]!): [UserOp!]!\n}"),] as any[];
const additionalResolvers = await Promise.all([
        import("../utils/resolver")
            .then(m => m.resolvers || m.default || m)
      ]);
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: AddressActivityQueryDocument,
        get rawSDL() {
          return printWithCache(AddressActivityQueryDocument);
        },
        location: 'AddressActivityQueryDocument.graphql'
      },{
        document: BeneficiaryActivityQueryDocument,
        get rawSDL() {
          return printWithCache(BeneficiaryActivityQueryDocument);
        },
        location: 'BeneficiaryActivityQueryDocument.graphql'
      },{
        document: BlockNumberQueryDocument,
        get rawSDL() {
          return printWithCache(BlockNumberQueryDocument);
        },
        location: 'BlockNumberQueryDocument.graphql'
      },{
        document: GetFactoryAccountsDocument,
        get rawSDL() {
          return printWithCache(GetFactoryAccountsDocument);
        },
        location: 'GetFactoryAccountsDocument.graphql'
      },{
        document: GetLatestAccountsDocument,
        get rawSDL() {
          return printWithCache(GetLatestAccountsDocument);
        },
        location: 'GetLatestAccountsDocument.graphql'
      },{
        document: LatestTransactionQueryDocument,
        get rawSDL() {
          return printWithCache(LatestTransactionQueryDocument);
        },
        location: 'LatestTransactionQueryDocument.graphql'
      },{
        document: PaymasterActivityQueryDocument,
        get rawSDL() {
          return printWithCache(PaymasterActivityQueryDocument);
        },
        location: 'PaymasterActivityQueryDocument.graphql'
      },{
        document: TargetQueryDocument,
        get rawSDL() {
          return printWithCache(TargetQueryDocument);
        },
        location: 'TargetQueryDocument.graphql'
      },{
        document: UserOpQueryDocument,
        get rawSDL() {
          return printWithCache(UserOpQueryDocument);
        },
        location: 'UserOpQueryDocument.graphql'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler(): MeshHTTPHandler<MeshContext> {
  return createMeshHTTPHandler<MeshContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type AddressActivityQueryQueryVariables = Exact<{
  senderAddress?: InputMaybe<Scalars['Bytes']>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  indexerNames: Array<Scalars['String']> | Scalars['String'];
}>;


export type AddressActivityQueryQuery = { crossUserOps: Array<Pick<UserOp, 'paymaster' | 'nonce' | 'transactionHash' | 'success' | 'sender' | 'revertReason' | 'userOpHash' | 'actualGasCost' | 'actualGasPrice' | 'actualGasUsed' | 'blockTime' | 'blockNumber' | 'network' | 'input' | 'target' | 'beneficiary' | 'factory'>> };

export type BeneficiaryActivityQueryQueryVariables = Exact<{
  beneficiaryAddress?: InputMaybe<Scalars['Bytes']>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  indexerNames: Array<Scalars['String']> | Scalars['String'];
}>;


export type BeneficiaryActivityQueryQuery = { crossUserOps: Array<Pick<UserOp, 'paymaster' | 'nonce' | 'transactionHash' | 'success' | 'sender' | 'revertReason' | 'userOpHash' | 'actualGasCost' | 'actualGasPrice' | 'actualGasUsed' | 'blockTime' | 'blockNumber' | 'network' | 'input' | 'target' | 'beneficiary' | 'factory'>> };

export type BlockNumberQueryQueryVariables = Exact<{
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  indexerNames: Array<Scalars['String']> | Scalars['String'];
}>;


export type BlockNumberQueryQuery = { crossUserOps: Array<Pick<UserOp, 'paymaster' | 'nonce' | 'transactionHash' | 'success' | 'sender' | 'revertReason' | 'userOpHash' | 'actualGasCost' | 'actualGasPrice' | 'actualGasUsed' | 'blockTime' | 'blockNumber' | 'network' | 'input' | 'target' | 'beneficiary' | 'factory'>> };

export type GetFactoryAccountsQueryVariables = Exact<{
  factoryAddress?: InputMaybe<Scalars['Bytes']>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  indexerNames: Array<Scalars['String']> | Scalars['String'];
}>;


export type GetFactoryAccountsQuery = { crossUserOps: Array<Pick<UserOp, 'factory' | 'sender' | 'blockTime' | 'blockNumber' | 'actualGasUsed' | 'actualGasCost' | 'nonce'>> };

export type GetLatestAccountsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  indexerNames: Array<Scalars['String']> | Scalars['String'];
}>;


export type GetLatestAccountsQuery = { crossUserOps: Array<Pick<UserOp, 'factory' | 'sender' | 'blockTime' | 'blockNumber' | 'actualGasUsed' | 'actualGasCost' | 'nonce'>> };

export type LatestTransactionQueryQueryVariables = Exact<{
  senderAddress?: InputMaybe<Scalars['Bytes']>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  indexerNames: Array<Scalars['String']> | Scalars['String'];
}>;


export type LatestTransactionQueryQuery = { crossUserOps: Array<Pick<UserOp, 'paymaster' | 'nonce' | 'transactionHash' | 'success' | 'sender' | 'revertReason' | 'userOpHash' | 'actualGasCost' | 'actualGasPrice' | 'actualGasUsed' | 'blockTime' | 'blockNumber' | 'network' | 'input' | 'target' | 'beneficiary' | 'factory'>> };

export type PaymasterActivityQueryQueryVariables = Exact<{
  paymasterAddress?: InputMaybe<Scalars['Bytes']>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  indexerNames: Array<Scalars['String']> | Scalars['String'];
}>;


export type PaymasterActivityQueryQuery = { crossUserOps: Array<Pick<UserOp, 'paymaster' | 'nonce' | 'transactionHash' | 'success' | 'sender' | 'revertReason' | 'userOpHash' | 'actualGasCost' | 'actualGasPrice' | 'actualGasUsed' | 'blockTime' | 'blockNumber' | 'network' | 'input' | 'target' | 'beneficiary' | 'factory'>> };

export type TargetQueryQueryVariables = Exact<{
  targetAddress?: InputMaybe<Scalars['Bytes']>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  indexerNames: Array<Scalars['String']> | Scalars['String'];
}>;


export type TargetQueryQuery = { crossUserOps: Array<Pick<UserOp, 'paymaster' | 'nonce' | 'transactionHash' | 'success' | 'sender' | 'revertReason' | 'userOpHash' | 'actualGasCost' | 'actualGasPrice' | 'actualGasUsed' | 'blockTime' | 'blockNumber' | 'network' | 'input' | 'target' | 'beneficiary' | 'factory'>> };

export type UserOpQueryQueryVariables = Exact<{
  userOpHash?: InputMaybe<Scalars['Bytes']>;
  indexerNames: Array<Scalars['String']> | Scalars['String'];
}>;


export type UserOpQueryQuery = { crossUserOps: Array<Pick<UserOp, 'paymaster' | 'nonce' | 'transactionHash' | 'success' | 'sender' | 'revertReason' | 'userOpHash' | 'actualGasCost' | 'actualGasPrice' | 'actualGasUsed' | 'blockTime' | 'blockNumber' | 'network' | 'input' | 'target' | 'beneficiary' | 'factory'>> };


export const AddressActivityQueryDocument = gql`
    query AddressActivityQuery($senderAddress: Bytes, $first: Int, $skip: Int, $indexerNames: [String!]!) {
  crossUserOps(
    first: $first
    skip: $skip
    where: {sender: $senderAddress}
    orderBy: blockTime
    orderDirection: desc
    indexerNames: $indexerNames
  ) {
    paymaster
    nonce
    transactionHash
    success
    sender
    revertReason
    userOpHash
    actualGasCost
    actualGasPrice
    actualGasUsed
    blockTime
    blockNumber
    network
    input
    target
    beneficiary
    factory
  }
}
    ` as unknown as DocumentNode<AddressActivityQueryQuery, AddressActivityQueryQueryVariables>;
export const BeneficiaryActivityQueryDocument = gql`
    query BeneficiaryActivityQuery($beneficiaryAddress: Bytes, $first: Int, $skip: Int, $indexerNames: [String!]!) {
  crossUserOps(
    first: $first
    skip: $skip
    where: {beneficiary: $beneficiaryAddress}
    orderBy: blockTime
    orderDirection: desc
    indexerNames: $indexerNames
  ) {
    paymaster
    nonce
    transactionHash
    success
    sender
    revertReason
    userOpHash
    actualGasCost
    actualGasPrice
    actualGasUsed
    blockTime
    blockNumber
    network
    input
    target
    beneficiary
    factory
  }
}
    ` as unknown as DocumentNode<BeneficiaryActivityQueryQuery, BeneficiaryActivityQueryQueryVariables>;
export const BlockNumberQueryDocument = gql`
    query BlockNumberQuery($blockNumber: BigInt, $first: Int, $skip: Int, $indexerNames: [String!]!) {
  crossUserOps(
    where: {blockNumber: $blockNumber}
    orderBy: blockTime
    orderDirection: desc
    indexerNames: $indexerNames
  ) {
    paymaster
    nonce
    transactionHash
    success
    sender
    revertReason
    userOpHash
    actualGasCost
    actualGasPrice
    actualGasUsed
    blockTime
    blockNumber
    network
    input
    target
    beneficiary
    factory
  }
}
    ` as unknown as DocumentNode<BlockNumberQueryQuery, BlockNumberQueryQueryVariables>;
export const GetFactoryAccountsDocument = gql`
    query GetFactoryAccounts($factoryAddress: Bytes, $first: Int, $skip: Int, $indexerNames: [String!]!) {
  crossUserOps(
    first: $first
    skip: $skip
    where: {factory: $factoryAddress}
    orderBy: blockTime
    orderDirection: desc
    indexerNames: $indexerNames
  ) {
    factory
    sender
    blockTime
    blockNumber
    actualGasUsed
    actualGasCost
    nonce
  }
}
    ` as unknown as DocumentNode<GetFactoryAccountsQuery, GetFactoryAccountsQueryVariables>;
export const GetLatestAccountsDocument = gql`
    query GetLatestAccounts($first: Int, $skip: Int, $indexerNames: [String!]!) {
  crossUserOps(
    first: $first
    skip: $skip
    where: {factory_not: ""}
    orderBy: blockTime
    orderDirection: desc
    indexerNames: $indexerNames
  ) {
    factory
    sender
    blockTime
    blockNumber
    actualGasUsed
    actualGasCost
    nonce
  }
}
    ` as unknown as DocumentNode<GetLatestAccountsQuery, GetLatestAccountsQueryVariables>;
export const LatestTransactionQueryDocument = gql`
    query LatestTransactionQuery($senderAddress: Bytes, $first: Int, $skip: Int, $indexerNames: [String!]!) {
  crossUserOps(
    first: $first
    skip: $skip
    orderBy: blockTime
    orderDirection: desc
    indexerNames: $indexerNames
  ) {
    paymaster
    nonce
    transactionHash
    success
    sender
    revertReason
    userOpHash
    actualGasCost
    actualGasPrice
    actualGasUsed
    blockTime
    blockNumber
    network
    input
    target
    beneficiary
    factory
  }
}
    ` as unknown as DocumentNode<LatestTransactionQueryQuery, LatestTransactionQueryQueryVariables>;
export const PaymasterActivityQueryDocument = gql`
    query PaymasterActivityQuery($paymasterAddress: Bytes, $first: Int, $skip: Int, $indexerNames: [String!]!) {
  crossUserOps(
    first: $first
    skip: $skip
    where: {paymaster: $paymasterAddress}
    orderBy: blockTime
    orderDirection: desc
    indexerNames: $indexerNames
  ) {
    paymaster
    nonce
    transactionHash
    success
    sender
    revertReason
    userOpHash
    actualGasCost
    actualGasPrice
    actualGasUsed
    blockTime
    blockNumber
    network
    input
    target
    beneficiary
    factory
  }
}
    ` as unknown as DocumentNode<PaymasterActivityQueryQuery, PaymasterActivityQueryQueryVariables>;
export const TargetQueryDocument = gql`
    query TargetQuery($targetAddress: Bytes, $first: Int, $skip: Int, $indexerNames: [String!]!) {
  crossUserOps(
    first: $first
    skip: $skip
    where: {target: $targetAddress}
    orderBy: blockTime
    orderDirection: desc
    indexerNames: $indexerNames
  ) {
    paymaster
    nonce
    transactionHash
    success
    sender
    revertReason
    userOpHash
    actualGasCost
    actualGasPrice
    actualGasUsed
    blockTime
    blockNumber
    network
    input
    target
    beneficiary
    factory
  }
}
    ` as unknown as DocumentNode<TargetQueryQuery, TargetQueryQueryVariables>;
export const UserOpQueryDocument = gql`
    query UserOpQuery($userOpHash: Bytes, $indexerNames: [String!]!) {
  crossUserOps(
    where: {userOpHash: $userOpHash}
    first: 1
    indexerNames: $indexerNames
  ) {
    paymaster
    nonce
    transactionHash
    success
    sender
    revertReason
    userOpHash
    actualGasCost
    actualGasPrice
    actualGasUsed
    blockTime
    blockNumber
    network
    input
    target
    beneficiary
    factory
  }
}
    ` as unknown as DocumentNode<UserOpQueryQuery, UserOpQueryQueryVariables>;










export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    AddressActivityQuery(variables: AddressActivityQueryQueryVariables, options?: C): Promise<AddressActivityQueryQuery> {
      return requester<AddressActivityQueryQuery, AddressActivityQueryQueryVariables>(AddressActivityQueryDocument, variables, options) as Promise<AddressActivityQueryQuery>;
    },
    BeneficiaryActivityQuery(variables: BeneficiaryActivityQueryQueryVariables, options?: C): Promise<BeneficiaryActivityQueryQuery> {
      return requester<BeneficiaryActivityQueryQuery, BeneficiaryActivityQueryQueryVariables>(BeneficiaryActivityQueryDocument, variables, options) as Promise<BeneficiaryActivityQueryQuery>;
    },
    BlockNumberQuery(variables: BlockNumberQueryQueryVariables, options?: C): Promise<BlockNumberQueryQuery> {
      return requester<BlockNumberQueryQuery, BlockNumberQueryQueryVariables>(BlockNumberQueryDocument, variables, options) as Promise<BlockNumberQueryQuery>;
    },
    GetFactoryAccounts(variables: GetFactoryAccountsQueryVariables, options?: C): Promise<GetFactoryAccountsQuery> {
      return requester<GetFactoryAccountsQuery, GetFactoryAccountsQueryVariables>(GetFactoryAccountsDocument, variables, options) as Promise<GetFactoryAccountsQuery>;
    },
    GetLatestAccounts(variables: GetLatestAccountsQueryVariables, options?: C): Promise<GetLatestAccountsQuery> {
      return requester<GetLatestAccountsQuery, GetLatestAccountsQueryVariables>(GetLatestAccountsDocument, variables, options) as Promise<GetLatestAccountsQuery>;
    },
    LatestTransactionQuery(variables: LatestTransactionQueryQueryVariables, options?: C): Promise<LatestTransactionQueryQuery> {
      return requester<LatestTransactionQueryQuery, LatestTransactionQueryQueryVariables>(LatestTransactionQueryDocument, variables, options) as Promise<LatestTransactionQueryQuery>;
    },
    PaymasterActivityQuery(variables: PaymasterActivityQueryQueryVariables, options?: C): Promise<PaymasterActivityQueryQuery> {
      return requester<PaymasterActivityQueryQuery, PaymasterActivityQueryQueryVariables>(PaymasterActivityQueryDocument, variables, options) as Promise<PaymasterActivityQueryQuery>;
    },
    TargetQuery(variables: TargetQueryQueryVariables, options?: C): Promise<TargetQueryQuery> {
      return requester<TargetQueryQuery, TargetQueryQueryVariables>(TargetQueryDocument, variables, options) as Promise<TargetQueryQuery>;
    },
    UserOpQuery(variables: UserOpQueryQueryVariables, options?: C): Promise<UserOpQueryQuery> {
      return requester<UserOpQueryQuery, UserOpQueryQueryVariables>(UserOpQueryDocument, variables, options) as Promise<UserOpQueryQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;