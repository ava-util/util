import { expect } from "chai"
import { hasVal } from "../src/index"


describe("hasVal", () => {

	it("should return false with null", () => {
		expect( hasVal(null) ).to.equal(false)
	})
	it("should return false with undefined", () => {
		expect( hasVal(undefined) ).to.equal(false)
	})
	it("should return false with empty string", () => {
		expect( hasVal("") ).to.equal(false)
	})
	it("should return true with number", () => {
		expect( hasVal(1) ).to.equal(true)
	})
	it("should return true with string", () => {
		expect( hasVal("1") ).to.equal(true)
	})
	it("should return true with object", () => {
		expect( hasVal({}) ).to.equal(true)
	})
})