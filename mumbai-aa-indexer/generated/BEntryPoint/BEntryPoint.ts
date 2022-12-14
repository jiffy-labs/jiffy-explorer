// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BEntryPointDeposited extends ethereum.Event {
  get params(): BEntryPointDeposited__Params {
    return new BEntryPointDeposited__Params(this);
  }
}

export class BEntryPointDeposited__Params {
  _event: BEntryPointDeposited;

  constructor(event: BEntryPointDeposited) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get totalDeposit(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class BEntryPointStakeLocked extends ethereum.Event {
  get params(): BEntryPointStakeLocked__Params {
    return new BEntryPointStakeLocked__Params(this);
  }
}

export class BEntryPointStakeLocked__Params {
  _event: BEntryPointStakeLocked;

  constructor(event: BEntryPointStakeLocked) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get totalStaked(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get withdrawTime(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class BEntryPointStakeUnlocked extends ethereum.Event {
  get params(): BEntryPointStakeUnlocked__Params {
    return new BEntryPointStakeUnlocked__Params(this);
  }
}

export class BEntryPointStakeUnlocked__Params {
  _event: BEntryPointStakeUnlocked;

  constructor(event: BEntryPointStakeUnlocked) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get withdrawTime(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class BEntryPointStakeWithdrawn extends ethereum.Event {
  get params(): BEntryPointStakeWithdrawn__Params {
    return new BEntryPointStakeWithdrawn__Params(this);
  }
}

export class BEntryPointStakeWithdrawn__Params {
  _event: BEntryPointStakeWithdrawn;

  constructor(event: BEntryPointStakeWithdrawn) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get withdrawAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class BEntryPointUserOperationEvent extends ethereum.Event {
  get params(): BEntryPointUserOperationEvent__Params {
    return new BEntryPointUserOperationEvent__Params(this);
  }
}

export class BEntryPointUserOperationEvent__Params {
  _event: BEntryPointUserOperationEvent;

  constructor(event: BEntryPointUserOperationEvent) {
    this._event = event;
  }

  get userOpHash(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get paymaster(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get nonce(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get actualGasCost(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get actualGasPrice(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get success(): boolean {
    return this._event.parameters[6].value.toBoolean();
  }
}

export class BEntryPointUserOperationRevertReason extends ethereum.Event {
  get params(): BEntryPointUserOperationRevertReason__Params {
    return new BEntryPointUserOperationRevertReason__Params(this);
  }
}

export class BEntryPointUserOperationRevertReason__Params {
  _event: BEntryPointUserOperationRevertReason;

  constructor(event: BEntryPointUserOperationRevertReason) {
    this._event = event;
  }

  get userOpHash(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get nonce(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get revertReason(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class BEntryPointWithdrawn extends ethereum.Event {
  get params(): BEntryPointWithdrawn__Params {
    return new BEntryPointWithdrawn__Params(this);
  }
}

export class BEntryPointWithdrawn__Params {
  _event: BEntryPointWithdrawn;

  constructor(event: BEntryPointWithdrawn) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get withdrawAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class BEntryPoint__depositsResult {
  value0: BigInt;
  value1: boolean;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: boolean,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }

  getDeposit(): BigInt {
    return this.value0;
  }

  getStaked(): boolean {
    return this.value1;
  }

  getStake(): BigInt {
    return this.value2;
  }

  getUnstakeDelaySec(): BigInt {
    return this.value3;
  }

  getWithdrawTime(): BigInt {
    return this.value4;
  }
}

export class BEntryPoint__getDepositInfoResultInfoStruct extends ethereum.Tuple {
  get deposit(): BigInt {
    return this[0].toBigInt();
  }

  get staked(): boolean {
    return this[1].toBoolean();
  }

  get stake(): BigInt {
    return this[2].toBigInt();
  }

  get unstakeDelaySec(): BigInt {
    return this[3].toBigInt();
  }

  get withdrawTime(): BigInt {
    return this[4].toBigInt();
  }
}

export class BEntryPoint__getUserOpHashInputUserOpStruct extends ethereum.Tuple {
  get sender(): Address {
    return this[0].toAddress();
  }

  get nonce(): BigInt {
    return this[1].toBigInt();
  }

  get initCode(): Bytes {
    return this[2].toBytes();
  }

  get callData(): Bytes {
    return this[3].toBytes();
  }

  get callGasLimit(): BigInt {
    return this[4].toBigInt();
  }

  get verificationGasLimit(): BigInt {
    return this[5].toBigInt();
  }

  get preVerificationGas(): BigInt {
    return this[6].toBigInt();
  }

  get maxFeePerGas(): BigInt {
    return this[7].toBigInt();
  }

  get maxPriorityFeePerGas(): BigInt {
    return this[8].toBigInt();
  }

  get paymasterAndData(): Bytes {
    return this[9].toBytes();
  }

  get signature(): Bytes {
    return this[10].toBytes();
  }
}

export class BEntryPoint__innerHandleOpInputOpInfoStruct extends ethereum.Tuple {
  get mUserOp(): BEntryPoint__innerHandleOpInputOpInfoMUserOpStruct {
    return changetype<BEntryPoint__innerHandleOpInputOpInfoMUserOpStruct>(
      this[0].toTuple()
    );
  }

  get userOpHash(): Bytes {
    return this[1].toBytes();
  }

  get prefund(): BigInt {
    return this[2].toBigInt();
  }

  get contextOffset(): BigInt {
    return this[3].toBigInt();
  }

  get preOpGas(): BigInt {
    return this[4].toBigInt();
  }
}

export class BEntryPoint__innerHandleOpInputOpInfoMUserOpStruct extends ethereum.Tuple {
  get sender(): Address {
    return this[0].toAddress();
  }

  get nonce(): BigInt {
    return this[1].toBigInt();
  }

  get callGasLimit(): BigInt {
    return this[2].toBigInt();
  }

  get verificationGasLimit(): BigInt {
    return this[3].toBigInt();
  }

  get preVerificationGas(): BigInt {
    return this[4].toBigInt();
  }

  get paymaster(): Address {
    return this[5].toAddress();
  }

  get maxFeePerGas(): BigInt {
    return this[6].toBigInt();
  }

  get maxPriorityFeePerGas(): BigInt {
    return this[7].toBigInt();
  }
}

export class BEntryPoint extends ethereum.SmartContract {
  static bind(address: Address): BEntryPoint {
    return new BEntryPoint("BEntryPoint", address);
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  deposits(param0: Address): BEntryPoint__depositsResult {
    let result = super.call(
      "deposits",
      "deposits(address):(uint112,bool,uint112,uint32,uint64)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new BEntryPoint__depositsResult(
      result[0].toBigInt(),
      result[1].toBoolean(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_deposits(
    param0: Address
  ): ethereum.CallResult<BEntryPoint__depositsResult> {
    let result = super.tryCall(
      "deposits",
      "deposits(address):(uint112,bool,uint112,uint32,uint64)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new BEntryPoint__depositsResult(
        value[0].toBigInt(),
        value[1].toBoolean(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  getDepositInfo(
    account: Address
  ): BEntryPoint__getDepositInfoResultInfoStruct {
    let result = super.call(
      "getDepositInfo",
      "getDepositInfo(address):((uint112,bool,uint112,uint32,uint64))",
      [ethereum.Value.fromAddress(account)]
    );

    return changetype<BEntryPoint__getDepositInfoResultInfoStruct>(
      result[0].toTuple()
    );
  }

  try_getDepositInfo(
    account: Address
  ): ethereum.CallResult<BEntryPoint__getDepositInfoResultInfoStruct> {
    let result = super.tryCall(
      "getDepositInfo",
      "getDepositInfo(address):((uint112,bool,uint112,uint32,uint64))",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<BEntryPoint__getDepositInfoResultInfoStruct>(
        value[0].toTuple()
      )
    );
  }

  getUserOpHash(userOp: BEntryPoint__getUserOpHashInputUserOpStruct): Bytes {
    let result = super.call(
      "getUserOpHash",
      "getUserOpHash((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes)):(bytes32)",
      [ethereum.Value.fromTuple(userOp)]
    );

    return result[0].toBytes();
  }

  try_getUserOpHash(
    userOp: BEntryPoint__getUserOpHashInputUserOpStruct
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getUserOpHash",
      "getUserOpHash((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes)):(bytes32)",
      [ethereum.Value.fromTuple(userOp)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  innerHandleOp(
    callData: Bytes,
    opInfo: BEntryPoint__innerHandleOpInputOpInfoStruct,
    context: Bytes
  ): BigInt {
    let result = super.call(
      "innerHandleOp",
      "innerHandleOp(bytes,((address,uint256,uint256,uint256,uint256,address,uint256,uint256),bytes32,uint256,uint256,uint256),bytes):(uint256)",
      [
        ethereum.Value.fromBytes(callData),
        ethereum.Value.fromTuple(opInfo),
        ethereum.Value.fromBytes(context)
      ]
    );

    return result[0].toBigInt();
  }

  try_innerHandleOp(
    callData: Bytes,
    opInfo: BEntryPoint__innerHandleOpInputOpInfoStruct,
    context: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "innerHandleOp",
      "innerHandleOp(bytes,((address,uint256,uint256,uint256,uint256,address,uint256,uint256),bytes32,uint256,uint256,uint256),bytes):(uint256)",
      [
        ethereum.Value.fromBytes(callData),
        ethereum.Value.fromTuple(opInfo),
        ethereum.Value.fromBytes(context)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class AddStakeCall extends ethereum.Call {
  get inputs(): AddStakeCall__Inputs {
    return new AddStakeCall__Inputs(this);
  }

  get outputs(): AddStakeCall__Outputs {
    return new AddStakeCall__Outputs(this);
  }
}

export class AddStakeCall__Inputs {
  _call: AddStakeCall;

  constructor(call: AddStakeCall) {
    this._call = call;
  }

  get _unstakeDelaySec(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AddStakeCall__Outputs {
  _call: AddStakeCall;

  constructor(call: AddStakeCall) {
    this._call = call;
  }
}

export class DepositToCall extends ethereum.Call {
  get inputs(): DepositToCall__Inputs {
    return new DepositToCall__Inputs(this);
  }

  get outputs(): DepositToCall__Outputs {
    return new DepositToCall__Outputs(this);
  }
}

export class DepositToCall__Inputs {
  _call: DepositToCall;

  constructor(call: DepositToCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DepositToCall__Outputs {
  _call: DepositToCall;

  constructor(call: DepositToCall) {
    this._call = call;
  }
}

export class GetSenderAddressCall extends ethereum.Call {
  get inputs(): GetSenderAddressCall__Inputs {
    return new GetSenderAddressCall__Inputs(this);
  }

  get outputs(): GetSenderAddressCall__Outputs {
    return new GetSenderAddressCall__Outputs(this);
  }
}

export class GetSenderAddressCall__Inputs {
  _call: GetSenderAddressCall;

  constructor(call: GetSenderAddressCall) {
    this._call = call;
  }

  get initCode(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class GetSenderAddressCall__Outputs {
  _call: GetSenderAddressCall;

  constructor(call: GetSenderAddressCall) {
    this._call = call;
  }
}

export class HandleAggregatedOpsCall extends ethereum.Call {
  get inputs(): HandleAggregatedOpsCall__Inputs {
    return new HandleAggregatedOpsCall__Inputs(this);
  }

  get outputs(): HandleAggregatedOpsCall__Outputs {
    return new HandleAggregatedOpsCall__Outputs(this);
  }
}

export class HandleAggregatedOpsCall__Inputs {
  _call: HandleAggregatedOpsCall;

  constructor(call: HandleAggregatedOpsCall) {
    this._call = call;
  }

  get opsPerAggregator(): Array<HandleAggregatedOpsCallOpsPerAggregatorStruct> {
    return this._call.inputValues[0].value.toTupleArray<
      HandleAggregatedOpsCallOpsPerAggregatorStruct
    >();
  }

  get beneficiary(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class HandleAggregatedOpsCall__Outputs {
  _call: HandleAggregatedOpsCall;

  constructor(call: HandleAggregatedOpsCall) {
    this._call = call;
  }
}

export class HandleAggregatedOpsCallOpsPerAggregatorStruct extends ethereum.Tuple {
  get userOps(): Array<HandleAggregatedOpsCallOpsPerAggregatorUserOpsStruct> {
    return this[0].toTupleArray<
      HandleAggregatedOpsCallOpsPerAggregatorUserOpsStruct
    >();
  }

  get aggregator(): Address {
    return this[1].toAddress();
  }

  get signature(): Bytes {
    return this[2].toBytes();
  }
}

export class HandleAggregatedOpsCallOpsPerAggregatorUserOpsStruct extends ethereum.Tuple {
  get sender(): Address {
    return this[0].toAddress();
  }

  get nonce(): BigInt {
    return this[1].toBigInt();
  }

  get initCode(): Bytes {
    return this[2].toBytes();
  }

  get callData(): Bytes {
    return this[3].toBytes();
  }

  get callGasLimit(): BigInt {
    return this[4].toBigInt();
  }

  get verificationGasLimit(): BigInt {
    return this[5].toBigInt();
  }

  get preVerificationGas(): BigInt {
    return this[6].toBigInt();
  }

  get maxFeePerGas(): BigInt {
    return this[7].toBigInt();
  }

  get maxPriorityFeePerGas(): BigInt {
    return this[8].toBigInt();
  }

  get paymasterAndData(): Bytes {
    return this[9].toBytes();
  }

  get signature(): Bytes {
    return this[10].toBytes();
  }
}

export class HandleOpsCall extends ethereum.Call {
  get inputs(): HandleOpsCall__Inputs {
    return new HandleOpsCall__Inputs(this);
  }

  get outputs(): HandleOpsCall__Outputs {
    return new HandleOpsCall__Outputs(this);
  }
}

export class HandleOpsCall__Inputs {
  _call: HandleOpsCall;

  constructor(call: HandleOpsCall) {
    this._call = call;
  }

  get ops(): Array<HandleOpsCallOpsStruct> {
    return this._call.inputValues[0].value.toTupleArray<
      HandleOpsCallOpsStruct
    >();
  }

  get beneficiary(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class HandleOpsCall__Outputs {
  _call: HandleOpsCall;

  constructor(call: HandleOpsCall) {
    this._call = call;
  }
}

export class HandleOpsCallOpsStruct extends ethereum.Tuple {
  get sender(): Address {
    return this[0].toAddress();
  }

  get nonce(): BigInt {
    return this[1].toBigInt();
  }

  get initCode(): Bytes {
    return this[2].toBytes();
  }

  get callData(): Bytes {
    return this[3].toBytes();
  }

  get callGasLimit(): BigInt {
    return this[4].toBigInt();
  }

  get verificationGasLimit(): BigInt {
    return this[5].toBigInt();
  }

  get preVerificationGas(): BigInt {
    return this[6].toBigInt();
  }

  get maxFeePerGas(): BigInt {
    return this[7].toBigInt();
  }

  get maxPriorityFeePerGas(): BigInt {
    return this[8].toBigInt();
  }

  get paymasterAndData(): Bytes {
    return this[9].toBytes();
  }

  get signature(): Bytes {
    return this[10].toBytes();
  }
}

export class InnerHandleOpCall extends ethereum.Call {
  get inputs(): InnerHandleOpCall__Inputs {
    return new InnerHandleOpCall__Inputs(this);
  }

  get outputs(): InnerHandleOpCall__Outputs {
    return new InnerHandleOpCall__Outputs(this);
  }
}

export class InnerHandleOpCall__Inputs {
  _call: InnerHandleOpCall;

  constructor(call: InnerHandleOpCall) {
    this._call = call;
  }

  get callData(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get opInfo(): InnerHandleOpCallOpInfoStruct {
    return changetype<InnerHandleOpCallOpInfoStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }

  get context(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class InnerHandleOpCall__Outputs {
  _call: InnerHandleOpCall;

  constructor(call: InnerHandleOpCall) {
    this._call = call;
  }

  get actualGasCost(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class InnerHandleOpCallOpInfoStruct extends ethereum.Tuple {
  get mUserOp(): InnerHandleOpCallOpInfoMUserOpStruct {
    return changetype<InnerHandleOpCallOpInfoMUserOpStruct>(this[0].toTuple());
  }

  get userOpHash(): Bytes {
    return this[1].toBytes();
  }

  get prefund(): BigInt {
    return this[2].toBigInt();
  }

  get contextOffset(): BigInt {
    return this[3].toBigInt();
  }

  get preOpGas(): BigInt {
    return this[4].toBigInt();
  }
}

export class InnerHandleOpCallOpInfoMUserOpStruct extends ethereum.Tuple {
  get sender(): Address {
    return this[0].toAddress();
  }

  get nonce(): BigInt {
    return this[1].toBigInt();
  }

  get callGasLimit(): BigInt {
    return this[2].toBigInt();
  }

  get verificationGasLimit(): BigInt {
    return this[3].toBigInt();
  }

  get preVerificationGas(): BigInt {
    return this[4].toBigInt();
  }

  get paymaster(): Address {
    return this[5].toAddress();
  }

  get maxFeePerGas(): BigInt {
    return this[6].toBigInt();
  }

  get maxPriorityFeePerGas(): BigInt {
    return this[7].toBigInt();
  }
}

export class SimulateValidationCall extends ethereum.Call {
  get inputs(): SimulateValidationCall__Inputs {
    return new SimulateValidationCall__Inputs(this);
  }

  get outputs(): SimulateValidationCall__Outputs {
    return new SimulateValidationCall__Outputs(this);
  }
}

export class SimulateValidationCall__Inputs {
  _call: SimulateValidationCall;

  constructor(call: SimulateValidationCall) {
    this._call = call;
  }

  get userOp(): SimulateValidationCallUserOpStruct {
    return changetype<SimulateValidationCallUserOpStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class SimulateValidationCall__Outputs {
  _call: SimulateValidationCall;

  constructor(call: SimulateValidationCall) {
    this._call = call;
  }
}

export class SimulateValidationCallUserOpStruct extends ethereum.Tuple {
  get sender(): Address {
    return this[0].toAddress();
  }

  get nonce(): BigInt {
    return this[1].toBigInt();
  }

  get initCode(): Bytes {
    return this[2].toBytes();
  }

  get callData(): Bytes {
    return this[3].toBytes();
  }

  get callGasLimit(): BigInt {
    return this[4].toBigInt();
  }

  get verificationGasLimit(): BigInt {
    return this[5].toBigInt();
  }

  get preVerificationGas(): BigInt {
    return this[6].toBigInt();
  }

  get maxFeePerGas(): BigInt {
    return this[7].toBigInt();
  }

  get maxPriorityFeePerGas(): BigInt {
    return this[8].toBigInt();
  }

  get paymasterAndData(): Bytes {
    return this[9].toBytes();
  }

  get signature(): Bytes {
    return this[10].toBytes();
  }
}

export class UnlockStakeCall extends ethereum.Call {
  get inputs(): UnlockStakeCall__Inputs {
    return new UnlockStakeCall__Inputs(this);
  }

  get outputs(): UnlockStakeCall__Outputs {
    return new UnlockStakeCall__Outputs(this);
  }
}

export class UnlockStakeCall__Inputs {
  _call: UnlockStakeCall;

  constructor(call: UnlockStakeCall) {
    this._call = call;
  }
}

export class UnlockStakeCall__Outputs {
  _call: UnlockStakeCall;

  constructor(call: UnlockStakeCall) {
    this._call = call;
  }
}

export class WithdrawStakeCall extends ethereum.Call {
  get inputs(): WithdrawStakeCall__Inputs {
    return new WithdrawStakeCall__Inputs(this);
  }

  get outputs(): WithdrawStakeCall__Outputs {
    return new WithdrawStakeCall__Outputs(this);
  }
}

export class WithdrawStakeCall__Inputs {
  _call: WithdrawStakeCall;

  constructor(call: WithdrawStakeCall) {
    this._call = call;
  }

  get withdrawAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class WithdrawStakeCall__Outputs {
  _call: WithdrawStakeCall;

  constructor(call: WithdrawStakeCall) {
    this._call = call;
  }
}

export class WithdrawToCall extends ethereum.Call {
  get inputs(): WithdrawToCall__Inputs {
    return new WithdrawToCall__Inputs(this);
  }

  get outputs(): WithdrawToCall__Outputs {
    return new WithdrawToCall__Outputs(this);
  }
}

export class WithdrawToCall__Inputs {
  _call: WithdrawToCall;

  constructor(call: WithdrawToCall) {
    this._call = call;
  }

  get withdrawAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get withdrawAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawToCall__Outputs {
  _call: WithdrawToCall;

  constructor(call: WithdrawToCall) {
    this._call = call;
  }
}