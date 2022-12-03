import {
  BEntryPointDeposited as BEntryPointDepositedEvent,
  BEntryPointStakeLocked as BEntryPointStakeLockedEvent,
  BEntryPointStakeUnlocked as BEntryPointStakeUnlockedEvent,
  BEntryPointStakeWithdrawn as BEntryPointStakeWithdrawnEvent,
  BEntryPointUserOperationEvent as BEntryPointUserOperationEventEvent,
  BEntryPointUserOperationRevertReason as BEntryPointUserOperationRevertReasonEvent,
  BEntryPointWithdrawn as BEntryPointWithdrawnEvent
} from "../generated/BEntryPoint/BEntryPoint"
import {
  UserOp
} from "../generated/schema"

export function handleBEntryPointDeposited(
  event: BEntryPointDepositedEvent
): void {
}

export function handleBEntryPointStakeLocked(
  event: BEntryPointStakeLockedEvent
): void {
}

export function handleBEntryPointStakeUnlocked(
  event: BEntryPointStakeUnlockedEvent
): void {
}

export function handleBEntryPointStakeWithdrawn(
  event: BEntryPointStakeWithdrawnEvent
): void {
}

export function handleBEntryPointUserOperationEvent(
  event: BEntryPointUserOperationEventEvent
): void {
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

export function handleBEntryPointUserOperationRevertReason(
  event: BEntryPointUserOperationRevertReasonEvent
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

export function handleBEntryPointWithdrawn(
  event: BEntryPointWithdrawnEvent
): void {

}
