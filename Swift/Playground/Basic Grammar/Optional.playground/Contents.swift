import UIKit

// Optional, Default is nil
var name: String
var nameOpt1: String?
var nameOpt2: String? = "Hello"

//print(name) // 초기화 안되서 > 에러
print(nameOpt1) // Nil 로 초기화
print(nameOpt2) // Optional 로 감싸여있음


// 이렇게, Optional로 쌓여있는 경우는 바로 사용 불가 > 해제 필요
// 1. 명시적 해제 > 강제해제, 비강제해제 (옵셔널바인딩)

// 1.1 명시적해제 > 강제해제
var number: Int? = 3
print(number) // > Optinal(3)
print(number!) // > 3

// 1.2 명시적해제 > 비강제해제 (옵셔널바인딩)

if let result = number {
    print(result)
} else {
    print("Error")
}

func test() {
    let number: Int? = 5
    guard let result = number else {return}
    // result가 true 일 경우만 진행
    print(result)
}
test()

// 2. 묵시적 해제 > [컴파일러 / 옵셔널]을 통한 해제
// 2.1 묵시적해제 > 컴파일러를 통한 자동해제
// > 비교 연산자를 통해 다른값과 비교하면, 컴파일러가 자동 해제해줌
let value: Int? = 6

if value == 6 {
    print("value is 6")
} else {
    print("value is not 6")
}

// 2.1 묵시적해제 > 옵셔널을 통한 자동해제
let string = "ㅗㄷ"
var stringToInt: Int! = Int(string)
print(+stringToInt) // + 써도 해제 가능함
print(stringToInt + 1)
