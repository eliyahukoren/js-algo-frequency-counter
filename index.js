const validAnagram = (first, second) => {
	// if not the same length, not anagram
	if (first.length !== second.length) return false;
	if (first === second ) return true;

	let lookup = {};

	// create frequency counter for first word
	for (let char of first) {
		lookup[char] = (lookup[char] || 0) + 1;
	}

	// loop over the second string and check
	// if char from the first word is exists
	for (let char of second) {
		// not found, exit. not anagram
		if (!lookup[char]) return false;

		lookup[char] -= 1;
	}

	// anagram, all good!
	return true;
};

const areThereDuplicates = function (){
	// no arguments, no duplicates
	if (arguments.length < 1) return false;

	let lookup = {};

	// loop over arguments and search for duplicates
	for (let i = 0; i < arguments.length; i ++) {
		let val = arguments[i];

		// already exists ? duplicate found
		if (lookup[val]) {
			return true;
		}

		lookup[val] = 1;
	}
	
	return false;
};

module.exports = {
	validAnagram,
	areThereDuplicates
}
