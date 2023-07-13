// 목표: 함수 사용법을 알아보자
import UIKit

// 기본 >
//func sum(a: Int, b: Int) -> Int {
//    return a+b
//}
//let result = sum(a: 3,b: 5)

// 와일드 카드 > _ 변수명, 으로 사용하면 sum(a:3, b:5) 안써도됨
func sum(_ a: Int = 5, _ b: Int = 7) -> Int {
    print(a+b)
    return a+b
}

sum(3,5)
sum() // 기본값사용

// 전달인자 레이블을 설정하면, 보다 명확하게 설정 할 수 있다 > 본인 지정 가능
func sendMsg(jundal1 myName: String, jundal2 name: String) -> String {
    return "Hello \(name), I am \(myName)"
}

//sendMsg(from: "Heath", to: "Olaf")
sendMsg(jundal1: "Heath", jundal2: "Olaf")

// 가변 매개 변수 ... > 을 사용하면 Object 같이 다중값 저장 가능
func sendMsg2 (me: String..., friends: String...) -> String {
    return "Hello \(friends), My name is \(me)"
}

sendMsg2(me: "Heath","Olaf" , friends: "Olaf", "Anna", "Emma")
