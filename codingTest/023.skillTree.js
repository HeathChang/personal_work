const solution = (skill, skill_trees) => {
	let answer = 0;
	let rules = skill.split("")
	let temp = [];
	skill_trees.filter(item => {
		temp = []
		for(let i = 0 ; i < rules.length; i++){
			temp.push(item.indexOf(rules[i]))
		}
		const sortTemp = [...temp]
		sortTemp.sort((a,b)=> a-b)
		// if(temp.indexOf(-1) === 0 ) answer--
		sortTemp.toString() === temp.toString() ? answer++ : '';
	})
	console.log(answer)
	return answer;
}

solution("CBD", [ "BACDE", "CBADF", "AECB", "BDA" ,"CB"])