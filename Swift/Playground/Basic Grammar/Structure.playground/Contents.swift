import UIKit

// 구조체 (값타입) > 프로퍼티 & 메서드
struct User {
    var nickName: String = "John Doe"
    var age: Int = 30
    
    func information() {
        print("\(nickName) \(age)")
    }
}
// Struct(구조체)를 사용하기 위해서는 인스턴스를 생성 필요 (메모리에 생성)
var user = User(nickName: "Heath", age: 20)
user.nickName = "Albert" // 변경
print(user)

// Method 도 저장가능
print(user.information())

