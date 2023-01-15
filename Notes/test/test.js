
const isAnagram = (s,t) => {

	const a = s.split('').sort()

	const b = t.split('').sort()


	for ( let i = 0 ; i < s.length ; i++) {
		if ( a[i] !== b[i] ) {
			return false;
		}
	}

	return true
}

isAnagram('rat', 'art');
