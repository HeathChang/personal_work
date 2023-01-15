var fs = require('fs');

//1. 동기처리 방식으로 동작하는 readFileSyn: A → Nodejs → C
console.log('A');
var result = fs.readFileSync('data/Nodejs', 'utf8');
console.log(result);
console.log('C');

//2. 비동기처리 방식으로 동작하는 readFile: A  → C → Nodejs
// Callback must be a function. Received 'utf8'
console.log('A');
//var result = fs.readFile('data/Nodejs','utf8');
//위의 방식으로 하면, 에러 발생
//파일 읽기를 마치면 세 번째 매개변수로 전달한 함수를 자동으로 호출해서 실행
fs.readFile('data/Nodejs', 'utf8', function (err, result) {
	console.log(result);
});

console.log('C');

// //3. 콜백
//익명함수: 이름이 없는 함수
var a = function () {
	console.log("A");
}

function slow_func(callback) {
	callback();
}

slow_func(a);
//함수는 콜백을 매개변수로 받아서 호출
