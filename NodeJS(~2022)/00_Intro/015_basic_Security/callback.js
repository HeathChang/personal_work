//익명함수: 이름이 없는 함수
var a = function () {
	console.log("A");
}

function slow_func(callback) {
	callback();
}

slow_func(a);
//함수는 콜백을 매개변수로 받아서 호출