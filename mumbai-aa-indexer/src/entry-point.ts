import {
  Deposited as DepositedEvent,
  StakeLocked as StakeLockedEvent,
  StakeUnlocked as StakeUnlockedEvent,
  StakeWithdrawn as StakeWithdrawnEvent,
  UserOperationEvent as UserOperationEventEvent,
  UserOperationRevertReason as UserOperationRevertReasonEvent,
  Withdrawn as WithdrawnEvent
} from "../generated/EntryPoint/EntryPoint"
import {
  UserOp
} from "../generated/schema"

export function handleDeposited(event: DepositedEvent): void {

}

export function handleStakeLocked(event: StakeLockedEvent): void {

}

export function handleStakeUnlocked(event: StakeUnlockedEvent): void {

}

export function handleStakeWithdrawn(event: StakeWithdrawnEvent): void {

}

export function handleUserOperationEvent(event: UserOperationEventEvent): void {
  let userOp = UserOp.load(event.params.userOpHash.toHex())
  if (userOp == null) {
    userOp = new UserOp(event.params.userOpHash.toHex())
  }

  userOp.requestId = event.params.userOpHash
  userOp.transactionHash = event.transaction.hash
  userOp.sender = event.params.sender
  userOp.paymaster = event.params.paymaster
  userOp.nonce = event.params.nonce
  userOp.actualGasCost = event.params.actualGasCost
  userOp.actualGasPrice = event.params.actualGasPrice
  userOp.success = event.params.success
  userOp.blockTime = event.block.timestamp
  userOp.blockNumber = event.block.number
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

  userOp.requestId = event.params.userOpHash
  userOp.transactionHash = event.transaction.hash
  userOp.sender = event.params.sender
  userOp.revertReason = event.params.revertReason
  userOp.success = false
  userOp.save()
}

export function handleWithdrawn(event: WithdrawnEvent): void {

}
