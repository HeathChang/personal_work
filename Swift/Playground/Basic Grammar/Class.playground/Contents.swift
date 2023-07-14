import UIKit

// Class
class Dog {
    var name: String = ""
    var age: Int = 0
    // Class에서는 생성자 필요! > 없으면 자동 생성
    // 함수내, 혹은 생성자에서 필수적으로 초기화를 해야됨
    init(){}
    
    func introduction() -> Void {
        print("name is \(name), age is \(age)")
    }
}


var dog = Dog()
dog.name = "COCO"
dog.age = 3
dog.introduction()





