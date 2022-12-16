import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AccountDeployed,
  ContractDeposited,
  SignatureAggregatorChanged,
  ContractStakeLocked,
  ContractStakeUnlocked,
  ContractStakeWithdrawn,
  ContractUserOperationEvent,
  ContractUserOperationRevertReason,
  ContractWithdrawn
} from "../generated/Contract/Contract"

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

export function createContractDepositedEvent(
  account: Address,
  totalDeposit: BigInt
): ContractDeposited {
  let contractDepositedEvent = changetype<ContractDeposited>(newMockEvent())

  contractDepositedEvent.parameters = new Array()

  contractDepositedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  contractDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "totalDeposit",
      ethereum.Value.fromUnsignedBigInt(totalDeposit)
    )
  )

  return contractDepositedEvent
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

export function createContractStakeLockedEvent(
  account: Address,
  totalStaked: BigInt,
  withdrawTime: BigInt
): ContractStakeLocked {
  let contractStakeLockedEvent = changetype<ContractStakeLocked>(newMockEvent())

  contractStakeLockedEvent.parameters = new Array()

  contractStakeLockedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  contractStakeLockedEvent.parameters.push(
    new ethereum.EventParam(
      "totalStaked",
      ethereum.Value.fromUnsignedBigInt(totalStaked)
    )
  )
  contractStakeLockedEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawTime",
      ethereum.Value.fromUnsignedBigInt(withdrawTime)
    )
  )

  return contractStakeLockedEvent
}

export function createContractStakeUnlockedEvent(
  account: Address,
  withdrawTime: BigInt
): ContractStakeUnlocked {
  let contractStakeUnlockedEvent = changetype<ContractStakeUnlocked>(
    newMockEvent()
  )

  contractStakeUnlockedEvent.parameters = new Array()

  contractStakeUnlockedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  contractStakeUnlockedEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawTime",
      ethereum.Value.fromUnsignedBigInt(withdrawTime)
    )
  )

  return contractStakeUnlockedEvent
}

export function createContractStakeWithdrawnEvent(
  account: Address,
  withdrawAddress: Address,
  amount: BigInt
): ContractStakeWithdrawn {
  let contractStakeWithdrawnEvent = changetype<ContractStakeWithdrawn>(
    newMockEvent()
  )

  contractStakeWithdrawnEvent.parameters = new Array()

  contractStakeWithdrawnEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  contractStakeWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawAddress",
      ethereum.Value.fromAddress(withdrawAddress)
    )
  )
  contractStakeWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return contractStakeWithdrawnEvent
}

export function createContractUserOperationEventEvent(
  userOpHash: Bytes,
  sender: Address,
  paymaster: Address,
  nonce: BigInt,
  success: boolean,
  actualGasCost: BigInt,
  actualGasUsed: BigInt
): ContractUserOperationEvent {
  let contractUserOperationEventEvent = changetype<ContractUserOperationEvent>(
    newMockEvent()
  )

  contractUserOperationEventEvent.parameters = new Array()

  contractUserOperationEventEvent.parameters.push(
    new ethereum.EventParam(
      "userOpHash",
      ethereum.Value.fromFixedBytes(userOpHash)
    )
  )
  contractUserOperationEventEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  contractUserOperationEventEvent.parameters.push(
    new ethereum.EventParam("paymaster", ethereum.Value.fromAddress(paymaster))
  )
  contractUserOperationEventEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  contractUserOperationEventEvent.parameters.push(
    new ethereum.EventParam("success", ethereum.Value.fromBoolean(success))
  )
  contractUserOperationEventEvent.parameters.push(
    new ethereum.EventParam(
      "actualGasCost",
      ethereum.Value.fromUnsignedBigInt(actualGasCost)
    )
  )
  contractUserOperationEventEvent.parameters.push(
    new ethereum.EventParam(
      "actualGasUsed",
      ethereum.Value.fromUnsignedBigInt(actualGasUsed)
    )
  )

  return contractUserOperationEventEvent
}

export function createContractUserOperationRevertReasonEvent(
  userOpHash: Bytes,
  sender: Address,
  nonce: BigInt,
  revertReason: Bytes
): ContractUserOperationRevertReason {
  let contractUserOperationRevertReasonEvent = changetype<
    ContractUserOperationRevertReason
  >(newMockEvent())

  contractUserOperationRevertReasonEvent.parameters = new Array()

  contractUserOperationRevertReasonEvent.parameters.push(
    new ethereum.EventParam(
      "userOpHash",
      ethereum.Value.fromFixedBytes(userOpHash)
    )
  )
  contractUserOperationRevertReasonEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  contractUserOperationRevertReasonEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  contractUserOperationRevertReasonEvent.parameters.push(
    new ethereum.EventParam(
      "revertReason",
      ethereum.Value.fromBytes(revertReason)
    )
  )

  return contractUserOperationRevertReasonEvent
}

export function createContractWithdrawnEvent(
  account: Address,
  withdrawAddress: Address,
  amount: BigInt
): ContractWithdrawn {
  let contractWithdrawnEvent = changetype<ContractWithdrawn>(newMockEvent())

  contractWithdrawnEvent.parameters = new Array()

  contractWithdrawnEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  contractWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawAddress",
      ethereum.Value.fromAddress(withdrawAddress)
    )
  )
  contractWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return contractWithdrawnEvent
}
