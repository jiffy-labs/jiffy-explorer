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
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  staking?: Maybe<Staking>;
  stakings: Array<Staking>;
  userOp?: Maybe<UserOp>;
  userOps: Array<UserOp>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  crossUserOps: Array<UserOp>;
};


export type QuerytransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystakingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystakingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Staking_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Staking_filter>;
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
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  staking?: Maybe<Staking>;
  stakings: Array<Staking>;
  userOp?: Maybe<UserOp>;
  userOps: Array<UserOp>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptiontransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstakingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstakingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Staking_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Staking_filter>;
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


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Staking = {
  id: Scalars['ID'];
  userOpHash?: Maybe<Scalars['Bytes']>;
  type?: Maybe<Scalars['String']>;
  requestFrom?: Maybe<Scalars['Bytes']>;
  to?: Maybe<Scalars['Bytes']>;
  value?: Maybe<Scalars['BigInt']>;
};

export type Staking_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  userOpHash?: InputMaybe<Scalars['Bytes']>;
  userOpHash_not?: InputMaybe<Scalars['Bytes']>;
  userOpHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userOpHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userOpHash_contains?: InputMaybe<Scalars['Bytes']>;
  userOpHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  type?: InputMaybe<Scalars['String']>;
  type_not?: InputMaybe<Scalars['String']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_contains_nocase?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  requestFrom?: InputMaybe<Scalars['Bytes']>;
  requestFrom_not?: InputMaybe<Scalars['Bytes']>;
  requestFrom_in?: InputMaybe<Array<Scalars['Bytes']>>;
  requestFrom_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  requestFrom_contains?: InputMaybe<Scalars['Bytes']>;
  requestFrom_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  value?: InputMaybe<Scalars['BigInt']>;
  value_not?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Staking_orderBy =
  | 'id'
  | 'userOpHash'
  | 'type'
  | 'requestFrom'
  | 'to'
  | 'value';

export type Transfer = {
  id: Scalars['ID'];
  txHash?: Maybe<Scalars['Bytes']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['Bytes']>;
  from?: Maybe<Scalars['Bytes']>;
};

export type Transfer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  type?: InputMaybe<Scalars['String']>;
  type_not?: InputMaybe<Scalars['String']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_contains_nocase?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['BigInt']>;
  value_not?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Transfer_orderBy =
  | 'id'
  | 'txHash'
  | 'type'
  | 'value'
  | 'to'
  | 'from';

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
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  userOpHash?: InputMaybe<Scalars['Bytes']>;
  userOpHash_not?: InputMaybe<Scalars['Bytes']>;
  userOpHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userOpHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userOpHash_contains?: InputMaybe<Scalars['Bytes']>;
  userOpHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  paymaster?: InputMaybe<Scalars['Bytes']>;
  paymaster_not?: InputMaybe<Scalars['Bytes']>;
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
  input_in?: InputMaybe<Array<Scalars['Bytes']>>;
  input_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  input_contains?: InputMaybe<Scalars['Bytes']>;
  input_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
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
  | 'input';

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
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  OrderDirection: OrderDirection;
  Staking: ResolverTypeWrapper<Staking>;
  Staking_filter: Staking_filter;
  Staking_orderBy: Staking_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  Transfer: ResolverTypeWrapper<Transfer>;
  Transfer_filter: Transfer_filter;
  Transfer_orderBy: Transfer_orderBy;
  UserOp: ResolverTypeWrapper<UserOp>;
  UserOp_filter: UserOp_filter;
  UserOp_orderBy: UserOp_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Staking: Staking;
  Staking_filter: Staking_filter;
  String: Scalars['String'];
  Transfer: Transfer;
  Transfer_filter: Transfer_filter;
  UserOp: UserOp;
  UserOp_filter: UserOp_filter;
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
  transfer?: Resolver<Maybe<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<QuerytransferArgs, 'id' | 'subgraphError'>>;
  transfers?: Resolver<Array<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<QuerytransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  staking?: Resolver<Maybe<ResolversTypes['Staking']>, ParentType, ContextType, RequireFields<QuerystakingArgs, 'id' | 'subgraphError'>>;
  stakings?: Resolver<Array<ResolversTypes['Staking']>, ParentType, ContextType, RequireFields<QuerystakingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  userOp?: Resolver<Maybe<ResolversTypes['UserOp']>, ParentType, ContextType, RequireFields<QueryuserOpArgs, 'id' | 'subgraphError'>>;
  userOps?: Resolver<Array<ResolversTypes['UserOp']>, ParentType, ContextType, RequireFields<QueryuserOpsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
  crossUserOps?: Resolver<Array<ResolversTypes['UserOp']>, ParentType, ContextType, RequireFields<QuerycrossUserOpsArgs, 'skip' | 'first' | 'indexerNames'>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext & { indexerName: string }, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  transfer?: SubscriptionResolver<Maybe<ResolversTypes['Transfer']>, "transfer", ParentType, ContextType, RequireFields<SubscriptiontransferArgs, 'id' | 'subgraphError'>>;
  transfers?: SubscriptionResolver<Array<ResolversTypes['Transfer']>, "transfers", ParentType, ContextType, RequireFields<SubscriptiontransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  staking?: SubscriptionResolver<Maybe<ResolversTypes['Staking']>, "staking", ParentType, ContextType, RequireFields<SubscriptionstakingArgs, 'id' | 'subgraphError'>>;
  stakings?: SubscriptionResolver<Array<ResolversTypes['Staking']>, "stakings", ParentType, ContextType, RequireFields<SubscriptionstakingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  userOp?: SubscriptionResolver<Maybe<ResolversTypes['UserOp']>, "userOp", ParentType, ContextType, RequireFields<SubscriptionuserOpArgs, 'id' | 'subgraphError'>>;
  userOps?: SubscriptionResolver<Array<ResolversTypes['UserOp']>, "userOps", ParentType, ContextType, RequireFields<SubscriptionuserOpsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
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

export type StakingResolvers<ContextType = MeshContext & { indexerName: string }, ParentType extends ResolversParentTypes['Staking'] = ResolversParentTypes['Staking']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userOpHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  requestFrom?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransferResolvers<ContextType = MeshContext & { indexerName: string }, ParentType extends ResolversParentTypes['Transfer'] = ResolversParentTypes['Transfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  txHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
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
  indexerName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Staking?: StakingResolvers<ContextType>;
  Transfer?: TransferResolvers<ContextType>;
  UserOp?: UserOpResolvers<ContextType>;
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
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/lazycoder1/{context.indexerName:aa-subgraphs-test}"},
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
        document: BlockNumberQueryDocument,
        get rawSDL() {
          return printWithCache(BlockNumberQueryDocument);
        },
        location: 'BlockNumberQueryDocument.graphql'
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


export type AddressActivityQueryQuery = { crossUserOps: Array<Pick<UserOp, 'paymaster' | 'nonce' | 'transactionHash' | 'success' | 'sender' | 'revertReason' | 'userOpHash' | 'actualGasCost' | 'actualGasPrice' | 'actualGasUsed' | 'blockTime' | 'blockNumber' | 'network' | 'input'>> };

export type BlockNumberQueryQueryVariables = Exact<{
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  indexerNames: Array<Scalars['String']> | Scalars['String'];
}>;


export type BlockNumberQueryQuery = { crossUserOps: Array<Pick<UserOp, 'paymaster' | 'nonce' | 'transactionHash' | 'success' | 'sender' | 'revertReason' | 'userOpHash' | 'actualGasCost' | 'actualGasPrice' | 'actualGasUsed' | 'blockTime' | 'blockNumber' | 'network' | 'input'>> };

export type LatestTransactionQueryQueryVariables = Exact<{
  senderAddress?: InputMaybe<Scalars['Bytes']>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  indexerNames: Array<Scalars['String']> | Scalars['String'];
}>;


export type LatestTransactionQueryQuery = { crossUserOps: Array<Pick<UserOp, 'paymaster' | 'nonce' | 'transactionHash' | 'success' | 'sender' | 'revertReason' | 'userOpHash' | 'actualGasCost' | 'actualGasPrice' | 'actualGasUsed' | 'blockTime' | 'blockNumber' | 'network' | 'input'>> };

export type PaymasterActivityQueryQueryVariables = Exact<{
  paymasterAddress?: InputMaybe<Scalars['Bytes']>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  indexerNames: Array<Scalars['String']> | Scalars['String'];
}>;


export type PaymasterActivityQueryQuery = { crossUserOps: Array<Pick<UserOp, 'paymaster' | 'nonce' | 'transactionHash' | 'success' | 'sender' | 'revertReason' | 'userOpHash' | 'actualGasCost' | 'actualGasPrice' | 'actualGasUsed' | 'blockTime' | 'blockNumber' | 'network' | 'input'>> };

export type UserOpQueryQueryVariables = Exact<{
  userOpHash?: InputMaybe<Scalars['Bytes']>;
  indexerNames: Array<Scalars['String']> | Scalars['String'];
}>;


export type UserOpQueryQuery = { crossUserOps: Array<Pick<UserOp, 'paymaster' | 'nonce' | 'transactionHash' | 'success' | 'sender' | 'revertReason' | 'userOpHash' | 'actualGasCost' | 'actualGasPrice' | 'actualGasUsed' | 'blockTime' | 'blockNumber' | 'network' | 'input'>> };


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
  }
}
    ` as unknown as DocumentNode<AddressActivityQueryQuery, AddressActivityQueryQueryVariables>;
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
  }
}
    ` as unknown as DocumentNode<BlockNumberQueryQuery, BlockNumberQueryQueryVariables>;
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
  }
}
    ` as unknown as DocumentNode<PaymasterActivityQueryQuery, PaymasterActivityQueryQueryVariables>;
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
  }
}
    ` as unknown as DocumentNode<UserOpQueryQuery, UserOpQueryQueryVariables>;






export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    AddressActivityQuery(variables: AddressActivityQueryQueryVariables, options?: C): Promise<AddressActivityQueryQuery> {
      return requester<AddressActivityQueryQuery, AddressActivityQueryQueryVariables>(AddressActivityQueryDocument, variables, options) as Promise<AddressActivityQueryQuery>;
    },
    BlockNumberQuery(variables: BlockNumberQueryQueryVariables, options?: C): Promise<BlockNumberQueryQuery> {
      return requester<BlockNumberQueryQuery, BlockNumberQueryQueryVariables>(BlockNumberQueryDocument, variables, options) as Promise<BlockNumberQueryQuery>;
    },
    LatestTransactionQuery(variables: LatestTransactionQueryQueryVariables, options?: C): Promise<LatestTransactionQueryQuery> {
      return requester<LatestTransactionQueryQuery, LatestTransactionQueryQueryVariables>(LatestTransactionQueryDocument, variables, options) as Promise<LatestTransactionQueryQuery>;
    },
    PaymasterActivityQuery(variables: PaymasterActivityQueryQueryVariables, options?: C): Promise<PaymasterActivityQueryQuery> {
      return requester<PaymasterActivityQueryQuery, PaymasterActivityQueryQueryVariables>(PaymasterActivityQueryDocument, variables, options) as Promise<PaymasterActivityQueryQuery>;
    },
    UserOpQuery(variables: UserOpQueryQueryVariables, options?: C): Promise<UserOpQueryQuery> {
      return requester<UserOpQueryQuery, UserOpQueryQueryVariables>(UserOpQueryDocument, variables, options) as Promise<UserOpQueryQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;