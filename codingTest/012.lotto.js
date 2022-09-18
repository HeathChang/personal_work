const solution = (lottos, win_nums) => {
	const result = [];
	const win = (index) => {
		if(index === 0 ) index = 1
		return 7 - index;
	}
	let lowest = lottos.filter(lotto => win_nums.includes(lotto)).length
	let highest = lowest + lottos.filter(lotto => lotto === 0).length;
	result.push(win(highest),win(lowest))
	//console.log(result)
	return result
}

solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19])