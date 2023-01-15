function solution(arr) {
  let answer = [];
  console.log(arr[0]); //1번째
  answer.push(arr[0]);
  console.log(answer);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }

  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
