const solution = (nums, target) => {
	let arr = [...nums]
	let result = 0;
	result = arr.indexOf(target)
	if(result !== -1) return result;
	arr.push(target)
	arr.sort((a,b)=> {return a-b})
	return result = arr.indexOf(target)
}

solution([3,5,7,9,10], 8)