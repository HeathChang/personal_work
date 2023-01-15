const solution = (index) => {
	let trial = 0;
	let result = index;
	for(let i = 0; i < 501 ; i++){
		if(result === 1) {
			break;
		}
		if(trial === 500) {
			trial = -1
			break;
		}
		if(result % 2 === 0){
			result = result / 2
		} else if ( result % 2 !== 0) {
			result = (result * 3) + 1
		}
		trial ++;
	}
	return trial // result should be 8
}

solution(16)