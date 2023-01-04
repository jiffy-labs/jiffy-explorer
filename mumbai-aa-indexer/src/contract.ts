import {
  AccountDeployed as AccountDeployedEvent,
  ContractDeposited as ContractDepositedEvent,
  SignatureAggregatorChanged as SignatureAggregatorChangedEvent,
  ContractStakeLocked as ContractStakeLockedEvent,
  ContractStakeUnlocked as ContractStakeUnlockedEvent,
  ContractStakeWithdrawn as ContractStakeWithdrawnEvent,
  ContractUserOperationEvent as ContractUserOperationEventEvent,
  ContractUserOperationRevertReason as ContractUserOperationRevertReasonEvent,
  ContractWithdrawn as ContractWithdrawnEvent
} from "../generated/Contract/Contract"
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
} from "../generated/schema"

export function handleAccountDeployed(event: AccountDeployedEvent): void {
  let entity = new AccountDeployed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userOpHash = event.params.userOpHash
  entity.sender = event.params.sender
  entity.factory = event.params.factory
  entity.paymaster = event.params.paymaster

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleContractDeposited(event: ContractDepositedEvent): void {
  let entity = new ContractDeposited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.totalDeposit = event.params.totalDeposit

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSignatureAggregatorChanged(
  event: SignatureAggregatorChangedEvent
): void {
  let entity = new SignatureAggregatorChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.aggregator = event.params.aggregator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleContractStakeLocked(
  event: ContractStakeLockedEvent
): void {
  let entity = new ContractStakeLocked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.totalStaked = event.params.totalStaked
  entity.withdrawTime = event.params.withdrawTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleContractStakeUnlocked(
  event: ContractStakeUnlockedEvent
): void {
  let entity = new ContractStakeUnlocked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.withdrawTime = event.params.withdrawTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleContractStakeWithdrawn(
  event: ContractStakeWithdrawnEvent
): void {
  let entity = new ContractStakeWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.withdrawAddress = event.params.withdrawAddress
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleContractUserOperationEvent(
  event: ContractUserOperationEventEvent
): void {
  let entity = new ContractUserOperationEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userOpHash = event.params.userOpHash
  entity.sender = event.params.sender
  entity.paymaster = event.params.paymaster
  entity.nonce = event.params.nonce
  entity.success = event.params.success
  entity.actualGasCost = event.params.actualGasCost
  entity.actualGasUsed = event.params.actualGasUsed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleContractUserOperationRevertReason(
  event: ContractUserOperationRevertReasonEvent
): void {
  let entity = new ContractUserOperationRevertReason(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userOpHash = event.params.userOpHash
  entity.sender = event.params.sender
  entity.nonce = event.params.nonce
  entity.revertReason = event.params.revertReason

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleContractWithdrawn(event: ContractWithdrawnEvent): void {
  let entity = new ContractWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.withdrawAddress = event.params.withdrawAddress
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
