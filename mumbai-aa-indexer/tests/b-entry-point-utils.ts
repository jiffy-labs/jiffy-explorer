import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  BEntryPointDeposited,
  BEntryPointStakeLocked,
  BEntryPointStakeUnlocked,
  BEntryPointStakeWithdrawn,
  BEntryPointUserOperationEvent,
  BEntryPointUserOperationRevertReason,
  BEntryPointWithdrawn
} from "../generated/BEntryPoint/BEntryPoint"

export function createBEntryPointDepositedEvent(
  account: Address,
  totalDeposit: BigInt
): BEntryPointDeposited {
  let bEntryPointDepositedEvent = changetype<BEntryPointDeposited>(
    newMockEvent()
  )

  bEntryPointDepositedEvent.parameters = new Array()

  bEntryPointDepositedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  bEntryPointDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "totalDeposit",
      ethereum.Value.fromUnsignedBigInt(totalDeposit)
    )
  )

  return bEntryPointDepositedEvent
}

export function createBEntryPointStakeLockedEvent(
  account: Address,
  totalStaked: BigInt,
  withdrawTime: BigInt
): BEntryPointStakeLocked {
  let bEntryPointStakeLockedEvent = changetype<BEntryPointStakeLocked>(
    newMockEvent()
  )

  bEntryPointStakeLockedEvent.parameters = new Array()

  bEntryPointStakeLockedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  bEntryPointStakeLockedEvent.parameters.push(
    new ethereum.EventParam(
      "totalStaked",
      ethereum.Value.fromUnsignedBigInt(totalStaked)
    )
  )
  bEntryPointStakeLockedEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawTime",
      ethereum.Value.fromUnsignedBigInt(withdrawTime)
    )
  )

  return bEntryPointStakeLockedEvent
}

export function createBEntryPointStakeUnlockedEvent(
  account: Address,
  withdrawTime: BigInt
): BEntryPointStakeUnlocked {
  let bEntryPointStakeUnlockedEvent = changetype<BEntryPointStakeUnlocked>(
    newMockEvent()
  )

  bEntryPointStakeUnlockedEvent.parameters = new Array()

  bEntryPointStakeUnlockedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  bEntryPointStakeUnlockedEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawTime",
      ethereum.Value.fromUnsignedBigInt(withdrawTime)
    )
  )

  return bEntryPointStakeUnlockedEvent
}

export function createBEntryPointStakeWithdrawnEvent(
  account: Address,
  withdrawAddress: Address,
  amount: BigInt
): BEntryPointStakeWithdrawn {
  let bEntryPointStakeWithdrawnEvent = changetype<BEntryPointStakeWithdrawn>(
    newMockEvent()
  )

  bEntryPointStakeWithdrawnEvent.parameters = new Array()

  bEntryPointStakeWithdrawnEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  bEntryPointStakeWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawAddress",
      ethereum.Value.fromAddress(withdrawAddress)
    )
  )
  bEntryPointStakeWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return bEntryPointStakeWithdrawnEvent
}

export function createBEntryPointUserOperationEventEvent(
  userOpHash: Bytes,
  sender: Address,
  paymaster: Address,
  nonce: BigInt,
  actualGasCost: BigInt,
  actualGasPrice: BigInt,
  success: boolean
): BEntryPointUserOperationEvent {
  let bEntryPointUserOperationEventEvent = changetype<
    BEntryPointUserOperationEvent
  >(newMockEvent())

  bEntryPointUserOperationEventEvent.parameters = new Array()

  bEntryPointUserOperationEventEvent.parameters.push(
    new ethereum.EventParam(
      "userOpHash",
      ethereum.Value.fromFixedBytes(userOpHash)
    )
  )
  bEntryPointUserOperationEventEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  bEntryPointUserOperationEventEvent.parameters.push(
    new ethereum.EventParam("paymaster", ethereum.Value.fromAddress(paymaster))
  )
  bEntryPointUserOperationEventEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  bEntryPointUserOperationEventEvent.parameters.push(
    new ethereum.EventParam(
      "actualGasCost",
      ethereum.Value.fromUnsignedBigInt(actualGasCost)
    )
  )
  bEntryPointUserOperationEventEvent.parameters.push(
    new ethereum.EventParam(
      "actualGasPrice",
      ethereum.Value.fromUnsignedBigInt(actualGasPrice)
    )
  )
  bEntryPointUserOperationEventEvent.parameters.push(
    new ethereum.EventParam("success", ethereum.Value.fromBoolean(success))
  )

  return bEntryPointUserOperationEventEvent
}

export function createBEntryPointUserOperationRevertReasonEvent(
  userOpHash: Bytes,
  sender: Address,
  nonce: BigInt,
  revertReason: Bytes
): BEntryPointUserOperationRevertReason {
  let bEntryPointUserOperationRevertReasonEvent = changetype<
    BEntryPointUserOperationRevertReason
  >(newMockEvent())

  bEntryPointUserOperationRevertReasonEvent.parameters = new Array()

  bEntryPointUserOperationRevertReasonEvent.parameters.push(
    new ethereum.EventParam(
      "userOpHash",
      ethereum.Value.fromFixedBytes(userOpHash)
    )
  )
  bEntryPointUserOperationRevertReasonEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  bEntryPointUserOperationRevertReasonEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  bEntryPointUserOperationRevertReasonEvent.parameters.push(
    new ethereum.EventParam(
      "revertReason",
      ethereum.Value.fromBytes(revertReason)
    )
  )

  return bEntryPointUserOperationRevertReasonEvent
}

export function createBEntryPointWithdrawnEvent(
  account: Address,
  withdrawAddress: Address,
  amount: BigInt
): BEntryPointWithdrawn {
  let bEntryPointWithdrawnEvent = changetype<BEntryPointWithdrawn>(
    newMockEvent()
  )

  bEntryPointWithdrawnEvent.parameters = new Array()

  bEntryPointWithdrawnEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  bEntryPointWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawAddress",
      ethereum.Value.fromAddress(withdrawAddress)
    )
  )
  bEntryPointWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return bEntryPointWithdrawnEvent
}
