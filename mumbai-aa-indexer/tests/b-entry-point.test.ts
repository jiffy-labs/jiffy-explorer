import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { BEntryPointDeposited } from "../generated/schema"
import { BEntryPointDeposited as BEntryPointDepositedEvent } from "../generated/BEntryPoint/BEntryPoint"
import { handleBEntryPointDeposited } from "../src/b-entry-point"
import { createBEntryPointDepositedEvent } from "./b-entry-point-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let account = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let totalDeposit = BigInt.fromI32(234)
    let newBEntryPointDepositedEvent = createBEntryPointDepositedEvent(
      account,
      totalDeposit
    )
    handleBEntryPointDeposited(newBEntryPointDepositedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BEntryPointDeposited created and stored", () => {
    assert.entityCount("BEntryPointDeposited", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BEntryPointDeposited",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "account",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BEntryPointDeposited",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "totalDeposit",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
