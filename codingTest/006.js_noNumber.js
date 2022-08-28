//문제 설명
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
//
// 제한사항
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 원소 ≤ 9
// numbers의 모든 원소는 서로 다릅니다.
// 입출력 예
// numbers	result
// [1,2,3,4,6,7,8,0]	14
// [5,8,4,0,6,7,9]	6
// 입출력 예 설명
// 입출력 예 #1
//
// 5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.
// 입출력 예 #2
//
// 1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.

const solution = (arr) => {
	// const oneNine = [1,2,3,4,5,6,7,8,9]
	// const result  = oneNine.reduce((i,j)=> i+j) - arr.reduce((i,j) => i+j)
	const result = 45 - arr.reduce((total, current) => total + current)
	console.log(result)

	// reduce() 작동 방식

	// [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
	//   return accumulator + currentValue;
	// });
	// Copy to Clipboard
	// 콜백은 4번 호출됩니다. 각 호출의 인수와 반환값은 다음과 같습니다.
	//
	// callback	accumulator	currentValue	currentIndex	array	반환 값
	// 1번째 호출	0	1	1	[0, 1, 2, 3, 4]	1
	// 2번째 호출	1	2	2	[0, 1, 2, 3, 4]	3
	// 3번째 호출	3	3	3	[0, 1, 2, 3, 4]	6
	// 4번째 호출	6	4	4	[0, 1, 2, 3, 4]	10
}

solution([ 1, 2, 3, 4, 6, 7, 8, 0 ])