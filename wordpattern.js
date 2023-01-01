const wordPattern = (pattern, s) => {
    const patternHash = {};
	const inspectedHash = {};

	const arr = s.split(" ");
	if(pattern.length !== arr.length ) return false;

	for (let i = 0; i < pattern.length; i++) {
		if (!patternHash[pattern[i]]) {
			if( !inspectedHash[arr[i]]){
				patternHash[pattern[i]] = arr[i];
				inspectedHash[arr[i]] = 1;
			}else{
				return false;
			}
		}
		
		if (patternHash[pattern[i]] !== arr[i]) return false;
	}

	return true;
};

module.exports = { wordPattern};