// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace UserOpIndexerTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

  export type QuerySdk = {
      /** null **/
  accountDeployed: InContextSdkMethod<Query['accountDeployed'], QueryaccountDeployedArgs, MeshContext>,
  /** null **/
  accountDeployeds: InContextSdkMethod<Query['accountDeployeds'], QueryaccountDeployedsArgs, MeshContext>,
  /** null **/
  deposited: InContextSdkMethod<Query['deposited'], QuerydepositedArgs, MeshContext>,
  /** null **/
  depositeds: InContextSdkMethod<Query['depositeds'], QuerydepositedsArgs, MeshContext>,
  /** null **/
  signatureAggregatorChanged: InContextSdkMethod<Query['signatureAggregatorChanged'], QuerysignatureAggregatorChangedArgs, MeshContext>,
  /** null **/
  signatureAggregatorChangeds: InContextSdkMethod<Query['signatureAggregatorChangeds'], QuerysignatureAggregatorChangedsArgs, MeshContext>,
  /** null **/
  stakeLocked: InContextSdkMethod<Query['stakeLocked'], QuerystakeLockedArgs, MeshContext>,
  /** null **/
  stakeLockeds: InContextSdkMethod<Query['stakeLockeds'], QuerystakeLockedsArgs, MeshContext>,
  /** null **/
  stakeUnlocked: InContextSdkMethod<Query['stakeUnlocked'], QuerystakeUnlockedArgs, MeshContext>,
  /** null **/
  stakeUnlockeds: InContextSdkMethod<Query['stakeUnlockeds'], QuerystakeUnlockedsArgs, MeshContext>,
  /** null **/
  stakeWithdrawn: InContextSdkMethod<Query['stakeWithdrawn'], QuerystakeWithdrawnArgs, MeshContext>,
  /** null **/
  stakeWithdrawns: InContextSdkMethod<Query['stakeWithdrawns'], QuerystakeWithdrawnsArgs, MeshContext>,
  /** null **/
  evmaddress: InContextSdkMethod<Query['evmaddress'], QueryevmaddressArgs, MeshContext>,
  /** null **/
  evmaddresses: InContextSdkMethod<Query['evmaddresses'], QueryevmaddressesArgs, MeshContext>,
  /** null **/
  hash: InContextSdkMethod<Query['hash'], QueryhashArgs, MeshContext>,
  /** null **/
  hashes: InContextSdkMethod<Query['hashes'], QueryhashesArgs, MeshContext>,
  /** null **/
  userOp: InContextSdkMethod<Query['userOp'], QueryuserOpArgs, MeshContext>,
  /** null **/
  userOps: InContextSdkMethod<Query['userOps'], QueryuserOpsArgs, MeshContext>,
  /** null **/
  withdrawn: InContextSdkMethod<Query['withdrawn'], QuerywithdrawnArgs, MeshContext>,
  /** null **/
  withdrawns: InContextSdkMethod<Query['withdrawns'], QuerywithdrawnsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  accountDeployed: InContextSdkMethod<Subscription['accountDeployed'], SubscriptionaccountDeployedArgs, MeshContext>,
  /** null **/
  accountDeployeds: InContextSdkMethod<Subscription['accountDeployeds'], SubscriptionaccountDeployedsArgs, MeshContext>,
  /** null **/
  deposited: InContextSdkMethod<Subscription['deposited'], SubscriptiondepositedArgs, MeshContext>,
  /** null **/
  depositeds: InContextSdkMethod<Subscription['depositeds'], SubscriptiondepositedsArgs, MeshContext>,
  /** null **/
  signatureAggregatorChanged: InContextSdkMethod<Subscription['signatureAggregatorChanged'], SubscriptionsignatureAggregatorChangedArgs, MeshContext>,
  /** null **/
  signatureAggregatorChangeds: InContextSdkMethod<Subscription['signatureAggregatorChangeds'], SubscriptionsignatureAggregatorChangedsArgs, MeshContext>,
  /** null **/
  stakeLocked: InContextSdkMethod<Subscription['stakeLocked'], SubscriptionstakeLockedArgs, MeshContext>,
  /** null **/
  stakeLockeds: InContextSdkMethod<Subscription['stakeLockeds'], SubscriptionstakeLockedsArgs, MeshContext>,
  /** null **/
  stakeUnlocked: InContextSdkMethod<Subscription['stakeUnlocked'], SubscriptionstakeUnlockedArgs, MeshContext>,
  /** null **/
  stakeUnlockeds: InContextSdkMethod<Subscription['stakeUnlockeds'], SubscriptionstakeUnlockedsArgs, MeshContext>,
  /** null **/
  stakeWithdrawn: InContextSdkMethod<Subscription['stakeWithdrawn'], SubscriptionstakeWithdrawnArgs, MeshContext>,
  /** null **/
  stakeWithdrawns: InContextSdkMethod<Subscription['stakeWithdrawns'], SubscriptionstakeWithdrawnsArgs, MeshContext>,
  /** null **/
  evmaddress: InContextSdkMethod<Subscription['evmaddress'], SubscriptionevmaddressArgs, MeshContext>,
  /** null **/
  evmaddresses: InContextSdkMethod<Subscription['evmaddresses'], SubscriptionevmaddressesArgs, MeshContext>,
  /** null **/
  hash: InContextSdkMethod<Subscription['hash'], SubscriptionhashArgs, MeshContext>,
  /** null **/
  hashes: InContextSdkMethod<Subscription['hashes'], SubscriptionhashesArgs, MeshContext>,
  /** null **/
  userOp: InContextSdkMethod<Subscription['userOp'], SubscriptionuserOpArgs, MeshContext>,
  /** null **/
  userOps: InContextSdkMethod<Subscription['userOps'], SubscriptionuserOpsArgs, MeshContext>,
  /** null **/
  withdrawn: InContextSdkMethod<Subscription['withdrawn'], SubscriptionwithdrawnArgs, MeshContext>,
  /** null **/
  withdrawns: InContextSdkMethod<Subscription['withdrawns'], SubscriptionwithdrawnsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["userOpIndexer"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      ["indexerName"]: Scalars['ID']
    };
}
