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

export type Bundle = {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  userOps: Array<UserOp>;
  userOpsLength: Scalars['BigInt'];
  network?: Maybe<Scalars['String']>;
};


export type BundleuserOpsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserOp_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserOp_filter>;
};

export type Bundle_filter = {
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
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userOps_?: InputMaybe<UserOp_filter>;
  userOpsLength?: InputMaybe<Scalars['BigInt']>;
  userOpsLength_not?: InputMaybe<Scalars['BigInt']>;
  userOpsLength_gt?: InputMaybe<Scalars['BigInt']>;
  userOpsLength_lt?: InputMaybe<Scalars['BigInt']>;
  userOpsLength_gte?: InputMaybe<Scalars['BigInt']>;
  userOpsLength_lte?: InputMaybe<Scalars['BigInt']>;
  userOpsLength_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userOpsLength_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bundle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bundle_filter>>>;
};

export type Bundle_orderBy =
  | 'id'
  | 'transactionHash'
  | 'blockNumber'
  | 'timestamp'
  | 'userOps'
  | 'userOpsLength'
  | 'network';

export type DailyCounter = {
  id: Scalars['ID'];
  userOpsDaily: Scalars['BigInt'];
  bundleDaily: Scalars['BigInt'];
  walletsCreatedDaily: Scalars['BigInt'];
  gasCostCollectedDaily: Scalars['BigInt'];
  userOpsTotal: Scalars['BigInt'];
  bundlesTotal: Scalars['BigInt'];
  walletsCreatedTotal: Scalars['BigInt'];
  gasCostCollectedTotal: Scalars['BigInt'];
  daySinceEpoch: Scalars['BigInt'];
};

export type DailyCounter_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  userOpsDaily?: InputMaybe<Scalars['BigInt']>;
  userOpsDaily_not?: InputMaybe<Scalars['BigInt']>;
  userOpsDaily_gt?: InputMaybe<Scalars['BigInt']>;
  userOpsDaily_lt?: InputMaybe<Scalars['BigInt']>;
  userOpsDaily_gte?: InputMaybe<Scalars['BigInt']>;
  userOpsDaily_lte?: InputMaybe<Scalars['BigInt']>;
  userOpsDaily_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userOpsDaily_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bundleDaily?: InputMaybe<Scalars['BigInt']>;
  bundleDaily_not?: InputMaybe<Scalars['BigInt']>;
  bundleDaily_gt?: InputMaybe<Scalars['BigInt']>;
  bundleDaily_lt?: InputMaybe<Scalars['BigInt']>;
  bundleDaily_gte?: InputMaybe<Scalars['BigInt']>;
  bundleDaily_lte?: InputMaybe<Scalars['BigInt']>;
  bundleDaily_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bundleDaily_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  walletsCreatedDaily?: InputMaybe<Scalars['BigInt']>;
  walletsCreatedDaily_not?: InputMaybe<Scalars['BigInt']>;
  walletsCreatedDaily_gt?: InputMaybe<Scalars['BigInt']>;
  walletsCreatedDaily_lt?: InputMaybe<Scalars['BigInt']>;
  walletsCreatedDaily_gte?: InputMaybe<Scalars['BigInt']>;
  walletsCreatedDaily_lte?: InputMaybe<Scalars['BigInt']>;
  walletsCreatedDaily_in?: InputMaybe<Array<Scalars['BigInt']>>;
  walletsCreatedDaily_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasCostCollectedDaily?: InputMaybe<Scalars['BigInt']>;
  gasCostCollectedDaily_not?: InputMaybe<Scalars['BigInt']>;
  gasCostCollectedDaily_gt?: InputMaybe<Scalars['BigInt']>;
  gasCostCollectedDaily_lt?: InputMaybe<Scalars['BigInt']>;
  gasCostCollectedDaily_gte?: InputMaybe<Scalars['BigInt']>;
  gasCostCollectedDaily_lte?: InputMaybe<Scalars['BigInt']>;
  gasCostCollectedDaily_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasCostCollectedDaily_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userOpsTotal?: InputMaybe<Scalars['BigInt']>;
  userOpsTotal_not?: InputMaybe<Scalars['BigInt']>;
  userOpsTotal_gt?: InputMaybe<Scalars['BigInt']>;
  userOpsTotal_lt?: InputMaybe<Scalars['BigInt']>;
  userOpsTotal_gte?: InputMaybe<Scalars['BigInt']>;
  userOpsTotal_lte?: InputMaybe<Scalars['BigInt']>;
  userOpsTotal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userOpsTotal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bundlesTotal?: InputMaybe<Scalars['BigInt']>;
  bundlesTotal_not?: InputMaybe<Scalars['BigInt']>;
  bundlesTotal_gt?: InputMaybe<Scalars['BigInt']>;
  bundlesTotal_lt?: InputMaybe<Scalars['BigInt']>;
  bundlesTotal_gte?: InputMaybe<Scalars['BigInt']>;
  bundlesTotal_lte?: InputMaybe<Scalars['BigInt']>;
  bundlesTotal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bundlesTotal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  walletsCreatedTotal?: InputMaybe<Scalars['BigInt']>;
  walletsCreatedTotal_not?: InputMaybe<Scalars['BigInt']>;
  walletsCreatedTotal_gt?: InputMaybe<Scalars['BigInt']>;
  walletsCreatedTotal_lt?: InputMaybe<Scalars['BigInt']>;
  walletsCreatedTotal_gte?: InputMaybe<Scalars['BigInt']>;
  walletsCreatedTotal_lte?: InputMaybe<Scalars['BigInt']>;
  walletsCreatedTotal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  walletsCreatedTotal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasCostCollectedTotal?: InputMaybe<Scalars['BigInt']>;
  gasCostCollectedTotal_not?: InputMaybe<Scalars['BigInt']>;
  gasCostCollectedTotal_gt?: InputMaybe<Scalars['BigInt']>;
  gasCostCollectedTotal_lt?: InputMaybe<Scalars['BigInt']>;
  gasCostCollectedTotal_gte?: InputMaybe<Scalars['BigInt']>;
  gasCostCollectedTotal_lte?: InputMaybe<Scalars['BigInt']>;
  gasCostCollectedTotal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasCostCollectedTotal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  daySinceEpoch?: InputMaybe<Scalars['BigInt']>;
  daySinceEpoch_not?: InputMaybe<Scalars['BigInt']>;
  daySinceEpoch_gt?: InputMaybe<Scalars['BigInt']>;
  daySinceEpoch_lt?: InputMaybe<Scalars['BigInt']>;
  daySinceEpoch_gte?: InputMaybe<Scalars['BigInt']>;
  daySinceEpoch_lte?: InputMaybe<Scalars['BigInt']>;
  daySinceEpoch_in?: InputMaybe<Array<Scalars['BigInt']>>;
  daySinceEpoch_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DailyCounter_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DailyCounter_filter>>>;
};

export type DailyCounter_orderBy =
  | 'id'
  | 'userOpsDaily'
  | 'bundleDaily'
  | 'walletsCreatedDaily'
  | 'gasCostCollectedDaily'
  | 'userOpsTotal'
  | 'bundlesTotal'
  | 'walletsCreatedTotal'
  | 'gasCostCollectedTotal'
  | 'daySinceEpoch';

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

export type GlobalCounter = {
  id: Scalars['ID'];
  userOpCounter: Scalars['BigInt'];
  bundleCounter: Scalars['BigInt'];
  walletsCreated: Scalars['BigInt'];
};

export type GlobalCounter_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  userOpCounter?: InputMaybe<Scalars['BigInt']>;
  userOpCounter_not?: InputMaybe<Scalars['BigInt']>;
  userOpCounter_gt?: InputMaybe<Scalars['BigInt']>;
  userOpCounter_lt?: InputMaybe<Scalars['BigInt']>;
  userOpCounter_gte?: InputMaybe<Scalars['BigInt']>;
  userOpCounter_lte?: InputMaybe<Scalars['BigInt']>;
  userOpCounter_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userOpCounter_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bundleCounter?: InputMaybe<Scalars['BigInt']>;
  bundleCounter_not?: InputMaybe<Scalars['BigInt']>;
  bundleCounter_gt?: InputMaybe<Scalars['BigInt']>;
  bundleCounter_lt?: InputMaybe<Scalars['BigInt']>;
  bundleCounter_gte?: InputMaybe<Scalars['BigInt']>;
  bundleCounter_lte?: InputMaybe<Scalars['BigInt']>;
  bundleCounter_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bundleCounter_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  walletsCreated?: InputMaybe<Scalars['BigInt']>;
  walletsCreated_not?: InputMaybe<Scalars['BigInt']>;
  walletsCreated_gt?: InputMaybe<Scalars['BigInt']>;
  walletsCreated_lt?: InputMaybe<Scalars['BigInt']>;
  walletsCreated_gte?: InputMaybe<Scalars['BigInt']>;
  walletsCreated_lte?: InputMaybe<Scalars['BigInt']>;
  walletsCreated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  walletsCreated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GlobalCounter_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GlobalCounter_filter>>>;
};

export type GlobalCounter_orderBy =
  | 'id'
  | 'userOpCounter'
  | 'bundleCounter'
  | 'walletsCreated';

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

export type MetaData = {
  id: Scalars['ID'];
  dailyCountCounter: Scalars['BigInt'];
};

export type MetaData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  dailyCountCounter?: InputMaybe<Scalars['BigInt']>;
  dailyCountCounter_not?: InputMaybe<Scalars['BigInt']>;
  dailyCountCounter_gt?: InputMaybe<Scalars['BigInt']>;
  dailyCountCounter_lt?: InputMaybe<Scalars['BigInt']>;
  dailyCountCounter_gte?: InputMaybe<Scalars['BigInt']>;
  dailyCountCounter_lte?: InputMaybe<Scalars['BigInt']>;
  dailyCountCounter_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyCountCounter_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MetaData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MetaData_filter>>>;
};

export type MetaData_orderBy =
  | 'id'
  | 'dailyCountCounter';

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
  globalCounter?: Maybe<GlobalCounter>;
  globalCounters: Array<GlobalCounter>;
  metaData?: Maybe<MetaData>;
  metaDatas: Array<MetaData>;
  dailyCounter?: Maybe<DailyCounter>;
  dailyCounters: Array<DailyCounter>;
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  userOpCounter?: Maybe<UserOpCounter>;
  userOpCounters: Array<UserOpCounter>;
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


export type QueryglobalCounterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryglobalCountersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GlobalCounter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GlobalCounter_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymetaDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymetaDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MetaData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MetaData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydailyCounterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydailyCountersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DailyCounter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DailyCounter_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybundleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybundlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bundle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bundle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserOpCounterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserOpCountersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserOpCounter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserOpCounter_filter>;
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
  globalCounter?: Maybe<GlobalCounter>;
  globalCounters: Array<GlobalCounter>;
  metaData?: Maybe<MetaData>;
  metaDatas: Array<MetaData>;
  dailyCounter?: Maybe<DailyCounter>;
  dailyCounters: Array<DailyCounter>;
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  userOpCounter?: Maybe<UserOpCounter>;
  userOpCounters: Array<UserOpCounter>;
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


export type SubscriptionglobalCounterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionglobalCountersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GlobalCounter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GlobalCounter_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmetaDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmetaDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MetaData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MetaData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondailyCounterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondailyCountersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DailyCounter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DailyCounter_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbundleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbundlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bundle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bundle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserOpCounterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserOpCountersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserOpCounter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserOpCounter_filter>;
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
  bundle: Bundle;
  count: UserOpCounter;
  userOpHash?: Maybe<Scalars['Bytes']>;
  sender?: Maybe<Scalars['Bytes']>;
  paymaster?: Maybe<Scalars['Bytes']>;
  paymasterAndData?: Maybe<Scalars['Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  actualGasCost?: Maybe<Scalars['BigInt']>;
  actualGasUsed?: Maybe<Scalars['BigInt']>;
  callGasLimit?: Maybe<Scalars['BigInt']>;
  verificationGasLimit?: Maybe<Scalars['BigInt']>;
  preVerificationGas?: Maybe<Scalars['BigInt']>;
  maxFeePerGas?: Maybe<Scalars['BigInt']>;
  maxPriorityFeePerGas?: Maybe<Scalars['BigInt']>;
  baseFeePerGas?: Maybe<Scalars['BigInt']>;
  gasPrice?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  signature?: Maybe<Scalars['Bytes']>;
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

export type UserOpCounter = {
  id: Scalars['ID'];
  count: Scalars['BigInt'];
  userOpHash: Array<UserOp>;
};


export type UserOpCounteruserOpHashArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserOp_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserOp_filter>;
};

export type UserOpCounter_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  count?: InputMaybe<Scalars['BigInt']>;
  count_not?: InputMaybe<Scalars['BigInt']>;
  count_gt?: InputMaybe<Scalars['BigInt']>;
  count_lt?: InputMaybe<Scalars['BigInt']>;
  count_gte?: InputMaybe<Scalars['BigInt']>;
  count_lte?: InputMaybe<Scalars['BigInt']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']>>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userOpHash_?: InputMaybe<UserOp_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserOpCounter_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UserOpCounter_filter>>>;
};

export type UserOpCounter_orderBy =
  | 'id'
  | 'count'
  | 'userOpHash';

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
  bundle?: InputMaybe<Scalars['String']>;
  bundle_not?: InputMaybe<Scalars['String']>;
  bundle_gt?: InputMaybe<Scalars['String']>;
  bundle_lt?: InputMaybe<Scalars['String']>;
  bundle_gte?: InputMaybe<Scalars['String']>;
  bundle_lte?: InputMaybe<Scalars['String']>;
  bundle_in?: InputMaybe<Array<Scalars['String']>>;
  bundle_not_in?: InputMaybe<Array<Scalars['String']>>;
  bundle_contains?: InputMaybe<Scalars['String']>;
  bundle_contains_nocase?: InputMaybe<Scalars['String']>;
  bundle_not_contains?: InputMaybe<Scalars['String']>;
  bundle_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bundle_starts_with?: InputMaybe<Scalars['String']>;
  bundle_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bundle_not_starts_with?: InputMaybe<Scalars['String']>;
  bundle_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bundle_ends_with?: InputMaybe<Scalars['String']>;
  bundle_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bundle_not_ends_with?: InputMaybe<Scalars['String']>;
  bundle_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bundle_?: InputMaybe<Bundle_filter>;
  count?: InputMaybe<Scalars['String']>;
  count_not?: InputMaybe<Scalars['String']>;
  count_gt?: InputMaybe<Scalars['String']>;
  count_lt?: InputMaybe<Scalars['String']>;
  count_gte?: InputMaybe<Scalars['String']>;
  count_lte?: InputMaybe<Scalars['String']>;
  count_in?: InputMaybe<Array<Scalars['String']>>;
  count_not_in?: InputMaybe<Array<Scalars['String']>>;
  count_contains?: InputMaybe<Scalars['String']>;
  count_contains_nocase?: InputMaybe<Scalars['String']>;
  count_not_contains?: InputMaybe<Scalars['String']>;
  count_not_contains_nocase?: InputMaybe<Scalars['String']>;
  count_starts_with?: InputMaybe<Scalars['String']>;
  count_starts_with_nocase?: InputMaybe<Scalars['String']>;
  count_not_starts_with?: InputMaybe<Scalars['String']>;
  count_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  count_ends_with?: InputMaybe<Scalars['String']>;
  count_ends_with_nocase?: InputMaybe<Scalars['String']>;
  count_not_ends_with?: InputMaybe<Scalars['String']>;
  count_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  count_?: InputMaybe<UserOpCounter_filter>;
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
  paymasterAndData?: InputMaybe<Scalars['Bytes']>;
  paymasterAndData_not?: InputMaybe<Scalars['Bytes']>;
  paymasterAndData_gt?: InputMaybe<Scalars['Bytes']>;
  paymasterAndData_lt?: InputMaybe<Scalars['Bytes']>;
  paymasterAndData_gte?: InputMaybe<Scalars['Bytes']>;
  paymasterAndData_lte?: InputMaybe<Scalars['Bytes']>;
  paymasterAndData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  paymasterAndData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  paymasterAndData_contains?: InputMaybe<Scalars['Bytes']>;
  paymasterAndData_not_contains?: InputMaybe<Scalars['Bytes']>;
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
  actualGasUsed?: InputMaybe<Scalars['BigInt']>;
  actualGasUsed_not?: InputMaybe<Scalars['BigInt']>;
  actualGasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  actualGasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  actualGasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  actualGasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  actualGasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  actualGasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callGasLimit?: InputMaybe<Scalars['BigInt']>;
  callGasLimit_not?: InputMaybe<Scalars['BigInt']>;
  callGasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  callGasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  callGasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  callGasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  callGasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callGasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  verificationGasLimit?: InputMaybe<Scalars['BigInt']>;
  verificationGasLimit_not?: InputMaybe<Scalars['BigInt']>;
  verificationGasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  verificationGasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  verificationGasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  verificationGasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  verificationGasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  verificationGasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  preVerificationGas?: InputMaybe<Scalars['BigInt']>;
  preVerificationGas_not?: InputMaybe<Scalars['BigInt']>;
  preVerificationGas_gt?: InputMaybe<Scalars['BigInt']>;
  preVerificationGas_lt?: InputMaybe<Scalars['BigInt']>;
  preVerificationGas_gte?: InputMaybe<Scalars['BigInt']>;
  preVerificationGas_lte?: InputMaybe<Scalars['BigInt']>;
  preVerificationGas_in?: InputMaybe<Array<Scalars['BigInt']>>;
  preVerificationGas_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxFeePerGas?: InputMaybe<Scalars['BigInt']>;
  maxFeePerGas_not?: InputMaybe<Scalars['BigInt']>;
  maxFeePerGas_gt?: InputMaybe<Scalars['BigInt']>;
  maxFeePerGas_lt?: InputMaybe<Scalars['BigInt']>;
  maxFeePerGas_gte?: InputMaybe<Scalars['BigInt']>;
  maxFeePerGas_lte?: InputMaybe<Scalars['BigInt']>;
  maxFeePerGas_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxFeePerGas_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxPriorityFeePerGas?: InputMaybe<Scalars['BigInt']>;
  maxPriorityFeePerGas_not?: InputMaybe<Scalars['BigInt']>;
  maxPriorityFeePerGas_gt?: InputMaybe<Scalars['BigInt']>;
  maxPriorityFeePerGas_lt?: InputMaybe<Scalars['BigInt']>;
  maxPriorityFeePerGas_gte?: InputMaybe<Scalars['BigInt']>;
  maxPriorityFeePerGas_lte?: InputMaybe<Scalars['BigInt']>;
  maxPriorityFeePerGas_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxPriorityFeePerGas_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  baseFeePerGas?: InputMaybe<Scalars['BigInt']>;
  baseFeePerGas_not?: InputMaybe<Scalars['BigInt']>;
  baseFeePerGas_gt?: InputMaybe<Scalars['BigInt']>;
  baseFeePerGas_lt?: InputMaybe<Scalars['BigInt']>;
  baseFeePerGas_gte?: InputMaybe<Scalars['BigInt']>;
  baseFeePerGas_lte?: InputMaybe<Scalars['BigInt']>;
  baseFeePerGas_in?: InputMaybe<Array<Scalars['BigInt']>>;
  baseFeePerGas_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signature?: InputMaybe<Scalars['Bytes']>;
  signature_not?: InputMaybe<Scalars['Bytes']>;
  signature_gt?: InputMaybe<Scalars['Bytes']>;
  signature_lt?: InputMaybe<Scalars['Bytes']>;
  signature_gte?: InputMaybe<Scalars['Bytes']>;
  signature_lte?: InputMaybe<Scalars['Bytes']>;
  signature_in?: InputMaybe<Array<Scalars['Bytes']>>;
  signature_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  signature_contains?: InputMaybe<Scalars['Bytes']>;
  signature_not_contains?: InputMaybe<Scalars['Bytes']>;
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
  | 'bundle'
  | 'bundle__id'
  | 'bundle__transactionHash'
  | 'bundle__blockNumber'
  | 'bundle__timestamp'
  | 'bundle__userOpsLength'
  | 'bundle__network'
  | 'count'
  | 'count__id'
  | 'count__count'
  | 'userOpHash'
  | 'sender'
  | 'paymaster'
  | 'paymasterAndData'
  | 'nonce'
  | 'actualGasCost'
  | 'actualGasUsed'
  | 'callGasLimit'
  | 'verificationGasLimit'
  | 'preVerificationGas'
  | 'maxFeePerGas'
  | 'maxPriorityFeePerGas'
  | 'baseFeePerGas'
  | 'gasPrice'
  | 'gasLimit'
  | 'signature'
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
  globalCounter: InContextSdkMethod<Query['globalCounter'], QueryglobalCounterArgs, MeshContext>,
  /** null **/
  globalCounters: InContextSdkMethod<Query['globalCounters'], QueryglobalCountersArgs, MeshContext>,
  /** null **/
  metaData: InContextSdkMethod<Query['metaData'], QuerymetaDataArgs, MeshContext>,
  /** null **/
  metaDatas: InContextSdkMethod<Query['metaDatas'], QuerymetaDatasArgs, MeshContext>,
  /** null **/
  dailyCounter: InContextSdkMethod<Query['dailyCounter'], QuerydailyCounterArgs, MeshContext>,
  /** null **/
  dailyCounters: InContextSdkMethod<Query['dailyCounters'], QuerydailyCountersArgs, MeshContext>,
  /** null **/
  bundle: InContextSdkMethod<Query['bundle'], QuerybundleArgs, MeshContext>,
  /** null **/
  bundles: InContextSdkMethod<Query['bundles'], QuerybundlesArgs, MeshContext>,
  /** null **/
  userOpCounter: InContextSdkMethod<Query['userOpCounter'], QueryuserOpCounterArgs, MeshContext>,
  /** null **/
  userOpCounters: InContextSdkMethod<Query['userOpCounters'], QueryuserOpCountersArgs, MeshContext>,
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
  globalCounter: InContextSdkMethod<Subscription['globalCounter'], SubscriptionglobalCounterArgs, MeshContext>,
  /** null **/
  globalCounters: InContextSdkMethod<Subscription['globalCounters'], SubscriptionglobalCountersArgs, MeshContext>,
  /** null **/
  metaData: InContextSdkMethod<Subscription['metaData'], SubscriptionmetaDataArgs, MeshContext>,
  /** null **/
  metaDatas: InContextSdkMethod<Subscription['metaDatas'], SubscriptionmetaDatasArgs, MeshContext>,
  /** null **/
  dailyCounter: InContextSdkMethod<Subscription['dailyCounter'], SubscriptiondailyCounterArgs, MeshContext>,
  /** null **/
  dailyCounters: InContextSdkMethod<Subscription['dailyCounters'], SubscriptiondailyCountersArgs, MeshContext>,
  /** null **/
  bundle: InContextSdkMethod<Subscription['bundle'], SubscriptionbundleArgs, MeshContext>,
  /** null **/
  bundles: InContextSdkMethod<Subscription['bundles'], SubscriptionbundlesArgs, MeshContext>,
  /** null **/
  userOpCounter: InContextSdkMethod<Subscription['userOpCounter'], SubscriptionuserOpCounterArgs, MeshContext>,
  /** null **/
  userOpCounters: InContextSdkMethod<Subscription['userOpCounters'], SubscriptionuserOpCountersArgs, MeshContext>,
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
