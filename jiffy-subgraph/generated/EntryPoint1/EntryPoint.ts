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

export class Deposited extends ethereum.Event {
  get params(): Deposited__Params {
    return new Deposited__Params(this);
  }
}

export class Deposited__Params {
  _event: Deposited;

  constructor(event: Deposited) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get totalDeposit(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class StakeLocked extends ethereum.Event {
  get params(): StakeLocked__Params {
    return new StakeLocked__Params(this);
  }
}

export class StakeLocked__Params {
  _event: StakeLocked;

  constructor(event: StakeLocked) {
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

export class StakeUnlocked extends ethereum.Event {
  get params(): StakeUnlocked__Params {
    return new StakeUnlocked__Params(this);
  }
}

export class StakeUnlocked__Params {
  _event: StakeUnlocked;

  constructor(event: StakeUnlocked) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get withdrawTime(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class StakeWithdrawn extends ethereum.Event {
  get params(): StakeWithdrawn__Params {
    return new StakeWithdrawn__Params(this);
  }
}

export class StakeWithdrawn__Params {
  _event: StakeWithdrawn;

  constructor(event: StakeWithdrawn) {
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

export class UserOperationEvent extends ethereum.Event {
  get params(): UserOperationEvent__Params {
    return new UserOperationEvent__Params(this);
  }
}

export class UserOperationEvent__Params {
  _event: UserOperationEvent;

  constructor(event: UserOperationEvent) {
    this._event = event;
  }

  get requestId(): Bytes {
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

export class UserOperationRevertReason extends ethereum.Event {
  get params(): UserOperationRevertReason__Params {
    return new UserOperationRevertReason__Params(this);
  }
}

export class UserOperationRevertReason__Params {
  _event: UserOperationRevertReason;

  constructor(event: UserOperationRevertReason) {
    this._event = event;
  }

  get requestId(): Bytes {
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

export class Withdrawn extends ethereum.Event {
  get params(): Withdrawn__Params {
    return new Withdrawn__Params(this);
  }
}

export class Withdrawn__Params {
  _event: Withdrawn;

  constructor(event: Withdrawn) {
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

export class EntryPoint__depositsResult {
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

export class EntryPoint__getDepositInfoResultInfoStruct extends ethereum.Tuple {
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

export class EntryPoint__getRequestIdInputUserOpStruct extends ethereum.Tuple {
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

  get callGas(): BigInt {
    return this[4].toBigInt();
  }

  get verificationGas(): BigInt {
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

  get paymaster(): Address {
    return this[9].toAddress();
  }

  get paymasterData(): Bytes {
    return this[10].toBytes();
  }

  get signature(): Bytes {
    return this[11].toBytes();
  }
}

export class EntryPoint__innerHandleOpInputOpStruct extends ethereum.Tuple {
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

  get callGas(): BigInt {
    return this[4].toBigInt();
  }

  get verificationGas(): BigInt {
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

  get paymaster(): Address {
    return this[9].toAddress();
  }

  get paymasterData(): Bytes {
    return this[10].toBytes();
  }

  get signature(): Bytes {
    return this[11].toBytes();
  }
}

export class EntryPoint__innerHandleOpInputOpInfoStruct extends ethereum.Tuple {
  get requestId(): Bytes {
    return this[0].toBytes();
  }

  get prefund(): BigInt {
    return this[1].toBigInt();
  }

  get paymentMode(): i32 {
    return this[2].toI32();
  }

  get contextOffset(): BigInt {
    return this[3].toBigInt();
  }

  get preOpGas(): BigInt {
    return this[4].toBigInt();
  }
}

export class EntryPoint__simulateValidationResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getPreOpGas(): BigInt {
    return this.value0;
  }

  getPrefund(): BigInt {
    return this.value1;
  }
}

export class EntryPoint__simulateValidationInputUserOpStruct extends ethereum.Tuple {
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

  get callGas(): BigInt {
    return this[4].toBigInt();
  }

  get verificationGas(): BigInt {
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

  get paymaster(): Address {
    return this[9].toAddress();
  }

  get paymasterData(): Bytes {
    return this[10].toBytes();
  }

  get signature(): Bytes {
    return this[11].toBytes();
  }
}

export class EntryPoint extends ethereum.SmartContract {
  static bind(address: Address): EntryPoint {
    return new EntryPoint("EntryPoint", address);
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

  create2factory(): Address {
    let result = super.call("create2factory", "create2factory():(address)", []);

    return result[0].toAddress();
  }

  try_create2factory(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "create2factory",
      "create2factory():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  deposits(param0: Address): EntryPoint__depositsResult {
    let result = super.call(
      "deposits",
      "deposits(address):(uint112,bool,uint112,uint32,uint64)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new EntryPoint__depositsResult(
      result[0].toBigInt(),
      result[1].toBoolean(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_deposits(
    param0: Address
  ): ethereum.CallResult<EntryPoint__depositsResult> {
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
      new EntryPoint__depositsResult(
        value[0].toBigInt(),
        value[1].toBoolean(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  getDepositInfo(account: Address): EntryPoint__getDepositInfoResultInfoStruct {
    let result = super.call(
      "getDepositInfo",
      "getDepositInfo(address):((uint112,bool,uint112,uint32,uint64))",
      [ethereum.Value.fromAddress(account)]
    );

    return changetype<EntryPoint__getDepositInfoResultInfoStruct>(
      result[0].toTuple()
    );
  }

  try_getDepositInfo(
    account: Address
  ): ethereum.CallResult<EntryPoint__getDepositInfoResultInfoStruct> {
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
      changetype<EntryPoint__getDepositInfoResultInfoStruct>(value[0].toTuple())
    );
  }

  getRequestId(userOp: EntryPoint__getRequestIdInputUserOpStruct): Bytes {
    let result = super.call(
      "getRequestId",
      "getRequestId((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,address,bytes,bytes)):(bytes32)",
      [ethereum.Value.fromTuple(userOp)]
    );

    return result[0].toBytes();
  }

  try_getRequestId(
    userOp: EntryPoint__getRequestIdInputUserOpStruct
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRequestId",
      "getRequestId((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,address,bytes,bytes)):(bytes32)",
      [ethereum.Value.fromTuple(userOp)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getSenderAddress(initCode: Bytes, salt: BigInt): Address {
    let result = super.call(
      "getSenderAddress",
      "getSenderAddress(bytes,uint256):(address)",
      [
        ethereum.Value.fromBytes(initCode),
        ethereum.Value.fromUnsignedBigInt(salt)
      ]
    );

    return result[0].toAddress();
  }

  try_getSenderAddress(
    initCode: Bytes,
    salt: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getSenderAddress",
      "getSenderAddress(bytes,uint256):(address)",
      [
        ethereum.Value.fromBytes(initCode),
        ethereum.Value.fromUnsignedBigInt(salt)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getSenderStorage(sender: Address): Array<BigInt> {
    let result = super.call(
      "getSenderStorage",
      "getSenderStorage(address):(uint256[])",
      [ethereum.Value.fromAddress(sender)]
    );

    return result[0].toBigIntArray();
  }

  try_getSenderStorage(sender: Address): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getSenderStorage",
      "getSenderStorage(address):(uint256[])",
      [ethereum.Value.fromAddress(sender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  innerHandleOp(
    op: EntryPoint__innerHandleOpInputOpStruct,
    opInfo: EntryPoint__innerHandleOpInputOpInfoStruct,
    context: Bytes
  ): BigInt {
    let result = super.call(
      "innerHandleOp",
      "innerHandleOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,address,bytes,bytes),(bytes32,uint256,uint8,uint256,uint256),bytes):(uint256)",
      [
        ethereum.Value.fromTuple(op),
        ethereum.Value.fromTuple(opInfo),
        ethereum.Value.fromBytes(context)
      ]
    );

    return result[0].toBigInt();
  }

  try_innerHandleOp(
    op: EntryPoint__innerHandleOpInputOpStruct,
    opInfo: EntryPoint__innerHandleOpInputOpInfoStruct,
    context: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "innerHandleOp",
      "innerHandleOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,address,bytes,bytes),(bytes32,uint256,uint8,uint256,uint256),bytes):(uint256)",
      [
        ethereum.Value.fromTuple(op),
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

  paymasterStake(): BigInt {
    let result = super.call("paymasterStake", "paymasterStake():(uint256)", []);

    return result[0].toBigInt();
  }

  try_paymasterStake(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "paymasterStake",
      "paymasterStake():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  simulateValidation(
    userOp: EntryPoint__simulateValidationInputUserOpStruct
  ): EntryPoint__simulateValidationResult {
    let result = super.call(
      "simulateValidation",
      "simulateValidation((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,address,bytes,bytes)):(uint256,uint256)",
      [ethereum.Value.fromTuple(userOp)]
    );

    return new EntryPoint__simulateValidationResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_simulateValidation(
    userOp: EntryPoint__simulateValidationInputUserOpStruct
  ): ethereum.CallResult<EntryPoint__simulateValidationResult> {
    let result = super.tryCall(
      "simulateValidation",
      "simulateValidation((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,address,bytes,bytes)):(uint256,uint256)",
      [ethereum.Value.fromTuple(userOp)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new EntryPoint__simulateValidationResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  unstakeDelaySec(): BigInt {
    let result = super.call(
      "unstakeDelaySec",
      "unstakeDelaySec():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_unstakeDelaySec(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "unstakeDelaySec",
      "unstakeDelaySec():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _create2factory(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _paymasterStake(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _unstakeDelaySec(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
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

  get callGas(): BigInt {
    return this[4].toBigInt();
  }

  get verificationGas(): BigInt {
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

  get paymaster(): Address {
    return this[9].toAddress();
  }

  get paymasterData(): Bytes {
    return this[10].toBytes();
  }

  get signature(): Bytes {
    return this[11].toBytes();
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

  get op(): InnerHandleOpCallOpStruct {
    return changetype<InnerHandleOpCallOpStruct>(
      this._call.inputValues[0].value.toTuple()
    );
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

export class InnerHandleOpCallOpStruct extends ethereum.Tuple {
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

  get callGas(): BigInt {
    return this[4].toBigInt();
  }

  get verificationGas(): BigInt {
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

  get paymaster(): Address {
    return this[9].toAddress();
  }

  get paymasterData(): Bytes {
    return this[10].toBytes();
  }

  get signature(): Bytes {
    return this[11].toBytes();
  }
}

export class InnerHandleOpCallOpInfoStruct extends ethereum.Tuple {
  get requestId(): Bytes {
    return this[0].toBytes();
  }

  get prefund(): BigInt {
    return this[1].toBigInt();
  }

  get paymentMode(): i32 {
    return this[2].toI32();
  }

  get contextOffset(): BigInt {
    return this[3].toBigInt();
  }

  get preOpGas(): BigInt {
    return this[4].toBigInt();
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

  get preOpGas(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get prefund(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
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

  get callGas(): BigInt {
    return this[4].toBigInt();
  }

  get verificationGas(): BigInt {
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

  get paymaster(): Address {
    return this[9].toAddress();
  }

  get paymasterData(): Bytes {
    return this[10].toBytes();
  }

  get signature(): Bytes {
    return this[11].toBytes();
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
