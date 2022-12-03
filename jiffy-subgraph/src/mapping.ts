import { BigInt } from "@graphprotocol/graph-ts"
import {
  entryPointTesting,
  Deposited,
  StakeLocked,
  StakeUnlocked,
  StakeWithdrawn,
  UserOperationEvent,
  UserOperationRevertReason,
  Withdrawn
} from "../generated/entryPointTesting/entryPointTesting"
import { Transfer, Staking, UserOp } from "../generated/schema"
import { log } from '@graphprotocol/graph-ts'

  // let contract = Contract.bind(event.address)
  // - contract.balanceOf(...)
  // - contract.create2factory(...)
  // - contract.deposits(...)
  // - contract.getDepositInfo(...)
  // - contract.getRequestId(...)
  // - contract.getSenderAddress(...)
  // - contract.getSenderStorage(...)
  // - contract.innerHandleOp(...)
  // - contract.paymasterStake(...)
  // - contract.simulateValidation(...)
  // - contract.unstakeDelaySec(...)

export function handleDeposited(event: Deposited): void {
  let transfer = Transfer.load(event.transaction.hash.toHex())
  if (transfer == null) {
    transfer = new Transfer(event.transaction.hash.toHex())
  }

  transfer
  transfer.requestId = event.transaction.hash
  transfer.type = "Deposited"
  transfer.value = event.params.totalDeposit
  transfer.to = event.transaction.to
  transfer.from = event.params.account
  transfer.save()
}

export function handleStakeLocked(event: StakeLocked): void {}

export function handleStakeUnlocked(event: StakeUnlocked): void {}

export function handleStakeWithdrawn(event: StakeWithdrawn): void {}

export function handleUserOperationEvent(event: UserOperationEvent): void {
  let userOp = UserOp.load(event.params.requestId.toHex())
  if (userOp == null) {
    userOp = new UserOp(event.params.requestId.toHex())
  }

  userOp.requestId = event.params.requestId
  userOp.transactionHash = event.transaction.hash
  userOp.sender = event.params.sender
  userOp.paymaster = event.params.paymaster
  userOp.nonce = event.params.nonce
  userOp.actualGasCost = event.params.actualGasCost
  userOp.actualGasPrice = event.params.actualGasPrice
  userOp.success = event.params.success
  userOp.blockTime = event.block.timestamp
  userOp.blockNumber = event.block.number
  userOp.network = "georli"
  // let transactionReceipt = event.receipt
  // if(transactionReceipt) {
  //   userOp.logLen = BigInt.fromI32(transactionReceipt.logs.length)
  // }
  userOp.save()
}

export function handleUserOperationRevertReason(
  event: UserOperationRevertReason
): void {
  let userOp = UserOp.load(event.params.requestId.toHex())
  if (userOp == null) {
    userOp = new UserOp(event.params.requestId.toHex())
  }

  userOp.requestId = event.params.requestId
  userOp.transactionHash = event.transaction.hash
  userOp.sender = event.params.sender
  userOp.revertReason = event.params.revertReason
  userOp.success = false
  userOp.save()
}

export function handleWithdrawn(event: Withdrawn): void {
  let transfer = Transfer.load(event.transaction.hash.toHex())
  if (transfer == null) {
    transfer = new Transfer(event.transaction.hash.toHex())
  }

  transfer.requestId = event.transaction.hash
  transfer.type = "Withdraw"
  transfer.value = event.params.amount
  transfer.to = event.params.withdrawAddress
  transfer.from = event.transaction.from
  transfer.save()
}
