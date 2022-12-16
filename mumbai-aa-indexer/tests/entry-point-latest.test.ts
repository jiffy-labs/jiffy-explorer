import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import { AccountDeployed } from "../generated/schema"
import { AccountDeployed as AccountDeployedEvent } from "../generated/EntryPointLatest/EntryPointLatest"
import { handleAccountDeployed } from "../src/entry-point-latest"
import { createAccountDeployedEvent } from "./entry-point-latest-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let userOpHash = Bytes.fromI32(1234567890)
    let sender = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let factory = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let paymaster = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAccountDeployedEvent = createAccountDeployedEvent(
      userOpHash,
      sender,
      factory,
      paymaster
    )
    handleAccountDeployed(newAccountDeployedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AccountDeployed created and stored", () => {
    assert.entityCount("AccountDeployed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AccountDeployed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "userOpHash",
      "1234567890"
    )
    assert.fieldEquals(
      "AccountDeployed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sender",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AccountDeployed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "factory",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AccountDeployed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "paymaster",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
