import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AccountDeployed,
  EntryPointLatestDeposited,
  SignatureAggregatorChanged,
  EntryPointLatestStakeLocked,
  EntryPointLatestStakeUnlocked,
  EntryPointLatestStakeWithdrawn,
  EntryPointLatestUserOperationEvent,
  EntryPointLatestUserOperationRevertReason,
  EntryPointLatestWithdrawn
} from "../generated/EntryPointLatest/EntryPointLatest"

export function createAccountDeployedEvent(
  userOpHash: Bytes,
  sender: Address,
  factory: Address,
  paymaster: Address
): AccountDeployed {
  let accountDeployedEvent = changetype<AccountDeployed>(newMockEvent())

  accountDeployedEvent.parameters = new Array()

  accountDeployedEvent.parameters.push(
    new ethereum.EventParam(
      "userOpHash",
      ethereum.Value.fromFixedBytes(userOpHash)
    )
  )
  accountDeployedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  accountDeployedEvent.parameters.push(
    new ethereum.EventParam("factory", ethereum.Value.fromAddress(factory))
  )
  accountDeployedEvent.parameters.push(
    new ethereum.EventParam("paymaster", ethereum.Value.fromAddress(paymaster))
  )

  return accountDeployedEvent
}

export function createEntryPointLatestDepositedEvent(
  account: Address,
  totalDeposit: BigInt
): EntryPointLatestDeposited {
  let entryPointLatestDepositedEvent = changetype<EntryPointLatestDeposited>(
    newMockEvent()
  )

  entryPointLatestDepositedEvent.parameters = new Array()

  entryPointLatestDepositedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  entryPointLatestDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "totalDeposit",
      ethereum.Value.fromUnsignedBigInt(totalDeposit)
    )
  )

  return entryPointLatestDepositedEvent
}

export function createSignatureAggregatorChangedEvent(
  aggregator: Address
): SignatureAggregatorChanged {
  let signatureAggregatorChangedEvent = changetype<SignatureAggregatorChanged>(
    newMockEvent()
  )

  signatureAggregatorChangedEvent.parameters = new Array()

  signatureAggregatorChangedEvent.parameters.push(
    new ethereum.EventParam(
      "aggregator",
      ethereum.Value.fromAddress(aggregator)
    )
  )

  return signatureAggregatorChangedEvent
}

export function createEntryPointLatestStakeLockedEvent(
  account: Address,
  totalStaked: BigInt,
  withdrawTime: BigInt
): EntryPointLatestStakeLocked {
  let entryPointLatestStakeLockedEvent = changetype<
    EntryPointLatestStakeLocked
  >(newMockEvent())

  entryPointLatestStakeLockedEvent.parameters = new Array()

  entryPointLatestStakeLockedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  entryPointLatestStakeLockedEvent.parameters.push(
    new ethereum.EventParam(
      "totalStaked",
      ethereum.Value.fromUnsignedBigInt(totalStaked)
    )
  )
  entryPointLatestStakeLockedEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawTime",
      ethereum.Value.fromUnsignedBigInt(withdrawTime)
    )
  )

  return entryPointLatestStakeLockedEvent
}

export function createEntryPointLatestStakeUnlockedEvent(
  account: Address,
  withdrawTime: BigInt
): EntryPointLatestStakeUnlocked {
  let entryPointLatestStakeUnlockedEvent = changetype<
    EntryPointLatestStakeUnlocked
  >(newMockEvent())

  entryPointLatestStakeUnlockedEvent.parameters = new Array()

  entryPointLatestStakeUnlockedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  entryPointLatestStakeUnlockedEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawTime",
      ethereum.Value.fromUnsignedBigInt(withdrawTime)
    )
  )

  return entryPointLatestStakeUnlockedEvent
}

export function createEntryPointLatestStakeWithdrawnEvent(
  account: Address,
  withdrawAddress: Address,
  amount: BigInt
): EntryPointLatestStakeWithdrawn {
  let entryPointLatestStakeWithdrawnEvent = changetype<
    EntryPointLatestStakeWithdrawn
  >(newMockEvent())

  entryPointLatestStakeWithdrawnEvent.parameters = new Array()

  entryPointLatestStakeWithdrawnEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  entryPointLatestStakeWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawAddress",
      ethereum.Value.fromAddress(withdrawAddress)
    )
  )
  entryPointLatestStakeWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return entryPointLatestStakeWithdrawnEvent
}

export function createEntryPointLatestUserOperationEventEvent(
  userOpHash: Bytes,
  sender: Address,
  paymaster: Address,
  nonce: BigInt,
  success: boolean,
  actualGasCost: BigInt,
  actualGasUsed: BigInt
): EntryPointLatestUserOperationEvent {
  let entryPointLatestUserOperationEventEvent = changetype<
    EntryPointLatestUserOperationEvent
  >(newMockEvent())

  entryPointLatestUserOperationEventEvent.parameters = new Array()

  entryPointLatestUserOperationEventEvent.parameters.push(
    new ethereum.EventParam(
      "userOpHash",
      ethereum.Value.fromFixedBytes(userOpHash)
    )
  )
  entryPointLatestUserOperationEventEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  entryPointLatestUserOperationEventEvent.parameters.push(
    new ethereum.EventParam("paymaster", ethereum.Value.fromAddress(paymaster))
  )
  entryPointLatestUserOperationEventEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  entryPointLatestUserOperationEventEvent.parameters.push(
    new ethereum.EventParam("success", ethereum.Value.fromBoolean(success))
  )
  entryPointLatestUserOperationEventEvent.parameters.push(
    new ethereum.EventParam(
      "actualGasCost",
      ethereum.Value.fromUnsignedBigInt(actualGasCost)
    )
  )
  entryPointLatestUserOperationEventEvent.parameters.push(
    new ethereum.EventParam(
      "actualGasUsed",
      ethereum.Value.fromUnsignedBigInt(actualGasUsed)
    )
  )

  return entryPointLatestUserOperationEventEvent
}

export function createEntryPointLatestUserOperationRevertReasonEvent(
  userOpHash: Bytes,
  sender: Address,
  nonce: BigInt,
  revertReason: Bytes
): EntryPointLatestUserOperationRevertReason {
  let entryPointLatestUserOperationRevertReasonEvent = changetype<
    EntryPointLatestUserOperationRevertReason
  >(newMockEvent())

  entryPointLatestUserOperationRevertReasonEvent.parameters = new Array()

  entryPointLatestUserOperationRevertReasonEvent.parameters.push(
    new ethereum.EventParam(
      "userOpHash",
      ethereum.Value.fromFixedBytes(userOpHash)
    )
  )
  entryPointLatestUserOperationRevertReasonEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  entryPointLatestUserOperationRevertReasonEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  entryPointLatestUserOperationRevertReasonEvent.parameters.push(
    new ethereum.EventParam(
      "revertReason",
      ethereum.Value.fromBytes(revertReason)
    )
  )

  return entryPointLatestUserOperationRevertReasonEvent
}

export function createEntryPointLatestWithdrawnEvent(
  account: Address,
  withdrawAddress: Address,
  amount: BigInt
): EntryPointLatestWithdrawn {
  let entryPointLatestWithdrawnEvent = changetype<EntryPointLatestWithdrawn>(
    newMockEvent()
  )

  entryPointLatestWithdrawnEvent.parameters = new Array()

  entryPointLatestWithdrawnEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  entryPointLatestWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawAddress",
      ethereum.Value.fromAddress(withdrawAddress)
    )
  )
  entryPointLatestWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return entryPointLatestWithdrawnEvent
}
