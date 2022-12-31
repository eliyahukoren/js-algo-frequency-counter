module.exports = validAnagram = (first, second) => {
	// if not the same length, not anagram
	if( first.length !== second.length) return false;
	
	let lookup = {};

	// create frequency counter for first word
	for( let char of first){
		lookup[char] = (lookup[char] || 0) + 1;
	}

	// loop over the second string and check 
	// if char from the first word is exists
	for (let char of second){
		// not found, exit. not anagram
		if( !lookup[char] ) return false;

		lookup[char] -= 1;
	}

	// anagram, all good!
	return true;
}
