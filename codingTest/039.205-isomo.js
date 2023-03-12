const solution = (s,t) => {
	for(let i = 0 ; i < s.length ; i++){
		console.log(s[i], s.indexOf(s[i], i+1))
	}
}

const result = solution("egg","add")
console.log('result:: ', result)