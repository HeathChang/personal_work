import UIKit

// 초기화(init())  > 클라스, 구조체 또는 열거형 인스턴스를 사용하기 위한 준비고정

class User {
    var nickName: String
    var age: Int

    init(nickName: String, age: Int){
        self.nickName = nickName
        self.age = age
    }
    
    init(age: Int){
        self.nickName = "Albert"
        self.age = age
    }
    
    deinit {
        // allows you to define custom cleanup code to release any additional resources
        print("deinit User")
    }
}


var user = User(nickName: "Hello", age: 11)
var user2 = User(age: 22)
print(user.age)
print(user2.nickName)
print(user2.age)


var user3: User? = User(age: 33)
// runs when 1. scope exit , 2. setting as nil ,3. re-assigning

// 1. if true { var user4: User? = User(age: 44)}
// > if 구절 끝나면서, 더이상 user4 instance 사용안됨으로, dealocation 발생

// 2. user3 = nil
// > 값이 nil 로 지정된 경우


// 3. user3 = user2
// > 새롭게 정의된 경우

