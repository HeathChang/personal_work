const solution = (n, lost, reserve) => {
	let result = n-lost.length;

	for(let i = 0 ; i < lost.length ; i++){
		for(let j = 0 ; j < reserve.length ; j++){
			if(lost[i] === reserve[j]) {
				result++
				reserve = reserve.filter(item => item !== reserve[j] )
				lost = lost.filter(item => item !== lost[i] )
			}
		}
	}

	for(let i=0; i<lost.length; i++){
		for(let j=0; j<reserve.length; j++){
			if(lost[i] === reserve[j] -1  || lost[i] === reserve[j]+1) {
				reserve = reserve.filter(item => item !== reserve[j] )
				lost = lost.filter(item => item !== lost[i] )
				result++;
			}
		}
	}//end for
	return result
}

solution(5, [2,4], [1,3,5])