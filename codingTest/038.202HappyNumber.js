const solution = (n) => {
	const array = []
	let sum = n

	while (sum !== 1) {
		let newSum = 0
		sum.toString().split("").forEach(item => {
			return newSum += item * item;
		})
		if (array.includes(newSum)) return false
		array.push(newSum)
		sum = newSum
	}
	return true
}

const result = solution(19)
console.log('result:: ', result)