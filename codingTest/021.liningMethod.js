//줄 서는 방법
// 문제 설명
// n명의 사람이 일렬로 줄을 서고 있습니다. n명의 사람들에게는 각각 1번부터 n번까지 번호가 매겨져 있습니다. n명이 사람을 줄을 서는 방법은 여러가지 방법이 있습니다. 예를 들어서 3명의 사람이 있다면 다음과 같이 6개의 방법이 있습니다.
//
// [1, 2, 3]
// [1, 3, 2]
// [2, 1, 3]
// [2, 3, 1]
// [3, 1, 2]
// [3, 2, 1]
// 사람의 수 n과, 자연수 k가 주어질 때, 사람을 나열 하는 방법을 사전 순으로 나열 했을 때, k번째 방법을 return하는 solution 함수를 완성해주세요.
//
// 제한사항
// n은 20이하의 자연수 입니다.
// k는 n! 이하의 자연수 입니다.
// 입출력 예
// n	k	result
// 3	5	[3,1,2]

const solution = (n , k) => {
	let answer = []; // [3,1,2]
	const people = Array.from({ length: n }, (_, i) => i + 1);
	let caseNum = people.reduce((ac, v) => ac * v, 1)


	console.log(people) // 첫
	console.log(caseNum) // 팩토리얼

	while(answer.length < n){
		caseNum = caseNum / people.length // => 24/4
		console.log('caseNum:: ', caseNum) // 6
		answer.push(...people.splice(Math.floor((k - 1)/ caseNum),1));
		console.log('answer',answer)
		k = k % caseNum;
	}

	console.log('answer:: ', answer)
	return answer
}

solution(4, 5)