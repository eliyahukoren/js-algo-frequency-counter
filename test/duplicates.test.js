const { areThereDuplicates } = require("../index");

describe("Testing Are There Duplicates - Frequency Counter", () => {
	describe("Test if function is exists", () => {
		it("Function exists", () => {
			expect(areThereDuplicates).toBeDefined();
		});
	});

	describe("Duplicates", () => {
		it("Test duplicates is exists", () => {
			expect(areThereDuplicates(1, 2, 2)).toEqual(true);
			expect(areThereDuplicates("a", "b", "c", "a")).toEqual(true);
		});
	});

	describe("Duplicates", () => {
		it("Test duplicates is not exists", () => {
			expect(areThereDuplicates(1, 2, 3)).toEqual(false);
			expect(areThereDuplicates("a", "b", "c", "d")).toEqual(false);
		});
	});
});
