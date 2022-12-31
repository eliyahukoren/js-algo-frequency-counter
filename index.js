module.exports = validAnagram = (str1, str2) => {
	if( str1.length !== str2.length) return false;
	
	let leftCharsFrequencyCounter = {};
	let rightCharsFrequencyCounter = {};

	for( let char of str1){
		leftCharsFrequencyCounter[char] = (leftCharsFrequencyCounter[char] || 0) + 1;
	}

	for (let char of str2) {
		rightCharsFrequencyCounter[char] =
			(rightCharsFrequencyCounter[char] || 0) + 1;
	}

	for (let key in leftCharsFrequencyCounter){
		if( !rightCharsFrequencyCounter[key] ) return false;

		if( leftCharsFrequencyCounter[key] !== rightCharsFrequencyCounter[key]) return false;
	}

	return true;
}
