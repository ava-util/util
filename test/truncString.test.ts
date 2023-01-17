import chai from "chai"
chai.should()

import truncString from "../src/truncString"

describe("truncString", () => {

	it("should return original value if less than 20 letters", () => {
		const str = truncString("short string", 20)
		str.should.equal("short string")
	})
	it("should return truncated value with ... if greater than 20 letters", () => {
		const str = truncString("this string is much longer than the first", 20) 
		str.should.equal("this string is much longer ... ")
	})
})