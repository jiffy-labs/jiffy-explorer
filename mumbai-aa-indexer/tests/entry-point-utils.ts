import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Deposited,
  StakeLocked,
  StakeUnlocked,
  StakeWithdrawn,
  UserOperationEvent,
  UserOperationRevertReason,
  Withdrawn
} from "../generated/EntryPoint/EntryPoint"

export function createDepositedEvent(
  account: Address,
  totalDeposit: BigInt
): Deposited {
  let depositedEvent = changetype<Deposited>(newMockEvent())

  depositedEvent.parameters = new Array()

  depositedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam(
      "totalDeposit",
      ethereum.Value.fromUnsignedBigInt(totalDeposit)
    )
  )

  return depositedEvent
}

export function createStakeLockedEvent(
  account: Address,
  totalStaked: BigInt,
  withdrawTime: BigInt
): StakeLocked {
  let stakeLockedEvent = changetype<StakeLocked>(newMockEvent())

  stakeLockedEvent.parameters = new Array()

  stakeLockedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  stakeLockedEvent.parameters.push(
    new ethereum.EventParam(
      "totalStaked",
      ethereum.Value.fromUnsignedBigInt(totalStaked)
    )
  )
  stakeLockedEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawTime",
      ethereum.Value.fromUnsignedBigInt(withdrawTime)
    )
  )

  return stakeLockedEvent
}

export function createStakeUnlockedEvent(
  account: Address,
  withdrawTime: BigInt
): StakeUnlocked {
  let stakeUnlockedEvent = changetype<StakeUnlocked>(newMockEvent())

  stakeUnlockedEvent.parameters = new Array()

  stakeUnlockedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  stakeUnlockedEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawTime",
      ethereum.Value.fromUnsignedBigInt(withdrawTime)
    )
  )

  return stakeUnlockedEvent
}

export function createStakeWithdrawnEvent(
  account: Address,
  withdrawAddress: Address,
  amount: BigInt
): StakeWithdrawn {
  let stakeWithdrawnEvent = changetype<StakeWithdrawn>(newMockEvent())

  stakeWithdrawnEvent.parameters = new Array()

  stakeWithdrawnEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  stakeWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawAddress",
      ethereum.Value.fromAddress(withdrawAddress)
    )
  )
  stakeWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return stakeWithdrawnEvent
}

export function createUserOperationEventEvent(
  userOpHash: Bytes,
  sender: Address,
  paymaster: Address,
  nonce: BigInt,
  actualGasCost: BigInt,
  actualGasPrice: BigInt,
  success: boolean
): UserOperationEvent {
  let userOperationEventEvent = changetype<UserOperationEvent>(newMockEvent())

  userOperationEventEvent.parameters = new Array()

  userOperationEventEvent.parameters.push(
    new ethereum.EventParam(
      "userOpHash",
      ethereum.Value.fromFixedBytes(userOpHash)
    )
  )
  userOperationEventEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  userOperationEventEvent.parameters.push(
    new ethereum.EventParam("paymaster", ethereum.Value.fromAddress(paymaster))
  )
  userOperationEventEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  userOperationEventEvent.parameters.push(
    new ethereum.EventParam(
      "actualGasCost",
      ethereum.Value.fromUnsignedBigInt(actualGasCost)
    )
  )
  userOperationEventEvent.parameters.push(
    new ethereum.EventParam(
      "actualGasPrice",
      ethereum.Value.fromUnsignedBigInt(actualGasPrice)
    )
  )
  userOperationEventEvent.parameters.push(
    new ethereum.EventParam("success", ethereum.Value.fromBoolean(success))
  )

  return userOperationEventEvent
}

export function createUserOperationRevertReasonEvent(
  userOpHash: Bytes,
  sender: Address,
  nonce: BigInt,
  revertReason: Bytes
): UserOperationRevertReason {
  let userOperationRevertReasonEvent = changetype<UserOperationRevertReason>(
    newMockEvent()
  )

  userOperationRevertReasonEvent.parameters = new Array()

  userOperationRevertReasonEvent.parameters.push(
    new ethereum.EventParam(
      "userOpHash",
      ethereum.Value.fromFixedBytes(userOpHash)
    )
  )
  userOperationRevertReasonEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  userOperationRevertReasonEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  userOperationRevertReasonEvent.parameters.push(
    new ethereum.EventParam(
      "revertReason",
      ethereum.Value.fromBytes(revertReason)
    )
  )

  return userOperationRevertReasonEvent
}

export function createWithdrawnEvent(
  account: Address,
  withdrawAddress: Address,
  amount: BigInt
): Withdrawn {
  let withdrawnEvent = changetype<Withdrawn>(newMockEvent())

  withdrawnEvent.parameters = new Array()

  withdrawnEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawAddress",
      ethereum.Value.fromAddress(withdrawAddress)
    )
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawnEvent
}
