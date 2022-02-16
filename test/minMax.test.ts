import chai from "chai"
import minMax from "../src/minMax"
chai.should()


describe( "minMax", () => {

	it("should keep the same number in range", () => {
		const result = minMax(150, 100, 200)
		result.should.equal(150)
	})
	it("should change the val outside min bounds", () => {
		const result = minMax(50, 100, 200)
		result.should.equal(100)
	})
	it("should change the val outside max bounds", () => {
		const result = minMax(250, 100, 200)
		result.should.equal(200)
	})
})