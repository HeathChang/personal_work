import UIKit

// Extension: 기존의 클래스, 구조체, 열거형, 프로토콜에 새로운 기능을 추가하는 기능, 오버라이드는 불가
// 연산프로퍼티만 추가 가능, 저장 프로퍼티 불가, oberserver는 불가

extension Int {
    var isEven: Bool {
        return self % 2 == 0
    }
    
    var isOdd: Bool {
        return self % 2 == 1
    }
}

var number = 3

number.isOdd
number.isEven


extension String {
    func converToInt() -> Int? {
        return Int(self)
    }
}

var string = "0"
string.converToInt()
