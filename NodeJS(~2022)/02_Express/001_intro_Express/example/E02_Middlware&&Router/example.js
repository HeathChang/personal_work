//1번째 라우트
app.get('/user:id', function (request, response, next) {
	if ( request.params.id == 0 ) { //----1
		next('route');
	} else {
		next(); //----2
	}
})
//2번째 라우트
app.get('/user:id', function (request, response, next) {  //----3
	response.send("Hi World")
})

//위의 예제에서, 1, 즉 request.params.id 값이 0 일시, 2를 실행하지 않고 다음 라우트에 있는 미들웨어 3번이 실행된다. 
//반대로, 0 이 아닐시, 2번이 실행된다. 
