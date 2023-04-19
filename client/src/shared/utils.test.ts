import { numberWithCommas } from "./utils"

describe(numberWithCommas.name, () => {
    it("should convert number to string with commas", () => {
        const result = numberWithCommas(123456789)
        expect(result).toEqual("123,456,789")
    })
});
