const solution = (weightArr, limit) => {
	let result = 0;
	weightArr.sort() // 50 50 70 80


	for(let i = 0 ; i <= weightArr.length-1 ; i++){
		result  = result + 1
		let newLimit = limit
		newLimit = newLimit - weightArr [i]
		weightArr.splice(i, 1)
		console.log(9989283948283, weightArr)
		const second = Math.max(null, weightArr.filter(item => newLimit >= item))

		if(second !== 0){
			console.log('값:: ',weightArr.indexOf(second))
			weightArr.splice(weightArr.indexOf(second),1)
		}
		console.log('done:: ', weightArr, "result 값:: ", result)
	}
	return result
}

solution([70, 50, 80, 50], 100)



// 1. 50과 50이 빠짐
// 2. 70 한번 빠짐
// 3. 80 한번 빠짐