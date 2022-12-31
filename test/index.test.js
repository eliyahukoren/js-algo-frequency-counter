const validAnagram = require("../index");

describe("Test if function is exists", () => {
	it("Function exists", () => {
		expect( validAnagram('', '')).toBeDefined();
	})
});

describe("Anagram words", () => {
	it("Test anagram words", () => {
		expect(validAnagram("", "")).toEqual(true);
		expect(validAnagram("anagram", "nagaram")).toEqual(true);
		expect(validAnagram("qwerty", "qweyrt")).toEqual(true);
		expect(validAnagram("texttwisttime", "timetwisttext")).toEqual(true);
	});
});

describe("NON Anagram words", () => {
	it("Test NON anagram words", () => {
		expect(validAnagram("s", "")).toEqual(false);
		expect(validAnagram("aaz", "zza")).toEqual(false);
		expect(validAnagram("awesome", "awesom")).toEqual(false);
		expect(validAnagram("amanaplanacanalpanama", "acanalmanplanpanama")).toEqual(false);
		expect(validAnagram("anagrams", "nagaramm")).toEqual(false);
	});
});

