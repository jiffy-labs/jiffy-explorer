import {
  Deposited as DepositedEvent,
  StakeLocked as StakeLockedEvent,
  StakeUnlocked as StakeUnlockedEvent,
  StakeWithdrawn as StakeWithdrawnEvent,
  UserOperationEvent as UserOperationEventEvent,
  UserOperationRevertReason as UserOperationRevertReasonEvent,
  Withdrawn as WithdrawnEvent
} from "../../mumbai-aa-indexer/generated/EntryPoint/EntryPoint"
import {
  UserOp,
  Transfer,
  Staking
} from "../../mumbai-aa-indexer/generated/schema"
import { log } from '@graphprotocol/graph-ts'

export function handleDeposited(event: DepositedEvent): void {
  let transfer = Transfer.load(event.transaction.hash.toHex())
  if (transfer == null) {
    transfer = new Transfer(event.transaction.hash.toHex())
  }

  transfer
  transfer.txHash = event.transaction.hash
  transfer.type = "Deposited"
  transfer.value = event.params.totalDeposit
  transfer.to = event.transaction.to
  transfer.from = event.params.account
  transfer.save()
}

export function handleStakeLocked(event: StakeLockedEvent): void {
  let stake = Staking.load(event.transaction.hash.toHex())
  if (stake == null) {
    stake = new Staking(event.transaction.hash.toHex())
  }

  stake.type = "LOCKED"
  stake.requestFrom = event.params.account
  stake.value = event.params.totalStaked
}

export function handleStakeUnlocked(event: StakeUnlockedEvent): void {
  let stake = Staking.load(event.transaction.hash.toHex())
  if (stake == null) {
    stake = new Staking(event.transaction.hash.toHex())
  }

  stake.type = "UNLOCKED"
  stake.requestFrom = event.params.account
}

export function handleStakeWithdrawn(event: StakeWithdrawnEvent): void {
  let stake = Staking.load(event.transaction.hash.toHex())
  if (stake == null) {
    stake = new Staking(event.transaction.hash.toHex())
  }

  stake.type = "WITHDRAW"
  stake.requestFrom = event.params.account
  stake.value = event.params.amount
  stake.to = event.params.withdrawAddress
}

export function handleUserOperationEvent(event: UserOperationEventEvent): void {
  let userOp = UserOp.load(event.params.userOpHash.toHex())
  if (userOp == null) {
    userOp = new UserOp(event.params.userOpHash.toHex())
  }

  userOp.userOpHash = event.params.userOpHash
  userOp.transactionHash = event.transaction.hash
  userOp.input = event.transaction.input
  userOp.sender = event.params.sender
  userOp.paymaster = event.params.paymaster
  userOp.nonce = event.params.nonce
  userOp.actualGasCost = event.params.actualGasCost
  userOp.actualGasPrice = event.params.actualGasPrice
  userOp.success = event.params.success
  userOp.blockTime = event.block.timestamp
  userOp.blockNumber = event.block.number
  userOp.network = "mumbai"
  log.info("userOpHash {}",[event.params.userOpHash.toHexString()])
  // let transactionReceipt = event.receipt
  // if(transactionReceipt) {
  //   userOp.logLen = BigInt.fromI32(transactionReceipt.logs.length)
  // }
  userOp.save()
}

export function handleUserOperationRevertReason(
  event: UserOperationRevertReasonEvent
): void {
  let userOp = UserOp.load(event.params.userOpHash.toHex())
  if (userOp == null) {
    userOp = new UserOp(event.params.userOpHash.toHex())
  }

  userOp.userOpHash = event.params.userOpHash
  userOp.transactionHash = event.transaction.hash
  userOp.input = event.transaction.input
  userOp.sender = event.params.sender
  userOp.revertReason = event.params.revertReason
  userOp.network = "mumbai"
  userOp.success = false
  userOp.save()
}

export function handleWithdrawn(event: WithdrawnEvent): void {
  let transfer = Transfer.load(event.transaction.hash.toHex())
  if (transfer == null) {
    transfer = new Transfer(event.transaction.hash.toHex())
  }

  transfer.txHash = event.transaction.hash
  transfer.type = "Withdraw"
  transfer.value = event.params.amount
  transfer.to = event.params.withdrawAddress
  transfer.from = event.transaction.from
  transfer.save()
}
