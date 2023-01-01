const { wordPattern } = require("../wordpattern");

describe("Word Pattern", () => {
	describe("Test if function is exists", () => {
		it("Function exists", () => {
			expect(wordPattern).toBeDefined();
		});
	});

	describe("Patterns", () => {
		test.each`
			pattern   | str                   | expected
			${"abba"} | ${"dog cat cat dog"}  | ${true}
			${"abba"} | ${"dog cat cat fish"} | ${false}
			${"abba"} | ${"dog dog dog dog"}  | ${false}
			${"aaaa"} | ${"dog cat cat dog"}  | ${false}
			${"aaa"}  | ${"aa aa aa aa"}      | ${false}
		`(
			"wordPattern returns $expected when inspect '$str' with '$pattern'",
			({ pattern, str, expected }) => {
				expect(wordPattern(pattern, str)).toEqual(expected);
			}
		);
	});
});
