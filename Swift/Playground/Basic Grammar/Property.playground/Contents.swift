import UIKit

// 저장 프로퍼티 > 클래스, 구조체, 또는 열겨형에 관련된 성질? 을 의미.
// > 저장, 연산, 타입 프로퍼티가 존재
// 1. 저장 프로퍼티 > 구조체내에서 생성된 변수 (name propery & gender property)
struct Dog {
    var name: String
    let gender: String
    
}

var dog = Dog(name: "Dobi ", gender: "Male")
print(dog)

var dog2 = Dog(name: "Dobi ", gender: "Female")
dog2.name = "sukubidoo" // let dog2> Error, var dog2> no Error -> 구조체는 value type이기때문에
print(dog2.name)


// Class > Ref Type
class Cat {
    var name: String
    let gender: String
    
    init(name: String, gender: String) {
        self.name = name
        self.gender = gender
    }
}

let cat = Cat(name: "json", gender: "male")
cat.name="hunter" // >> Class는 참조 타입이기 떄문에 변경 가능
print(cat.name)

var cat2 = Cat(name: "json", gender: "male")
cat2.name="munter"
print(cat2.name)

//////////////////////////////////////////////////////////////////////////////////////

// 2. 연산(계산) 프로퍼티 : getter , setter 사용하여 다른 프로퍼티의 값을 사용 가능

struct Stock {
    var averagePrice: Int
    var quantity : Int
    
    // 연산프로퍼티
    var purchasePrice: Int {
        get {
            return averagePrice * quantity
        }
//        set(newPrice){
//            averagePrice = newPrice / quantity
//        }
        set{
            // 매개변수 없을 경우, newValue로 지정가능
            averagePrice = newValue / quantity
        }
    }
}


var stock  = Stock(averagePrice: 2300, quantity: 3)
print(stock)
stock.purchasePrice // get 안의 코드 블록 실행 > 6,900
stock.purchasePrice = 3000 // set 코드 블록 실행 > 3000 / 3이 averagePrice에 저장
stock.averagePrice // 1000


//////////////////////////////////////////////////////////////////////////////////////
//3. Property Obsever : preoperty 값을 봄

class Account {
    // 저장형 프로퍼티
    var credit: Int = 0 {
        willSet{
            print("잔액이 \(credit)원에서 \(newValue)원으로 변경 예정")
        }
        didSet{
            print("잔액이 \(oldValue)원에서 \(credit)원으로 변경 완료")
        }
    }
}

var account = Account()
account.credit = 1000 ; //  0 > 1000
account.credit // 1000


//////////////////////////////////////////////////////////////////////////////////////
// 3. 타입 프로퍼티 > 인스턴스 생성없이 객체 프로퍼티  접근이 자유로워짐

struct SomeStructure {
    static var  storedTypeProerty = "some value"
    static var computedTypeProeprty: Int {
        return 1
    }
    
    
}
// var SomeStructure = SomeStructure() > 이런식으로 생성자를 안써도 됨.
SomeStructure.computedTypeProeprty
SomeStructure.storedTypeProerty


// Property (변수) >  저장 프로퍼티, 연산 프로퍼티, 타입 프로퍼티

//1. 저장 프로퍼티는 가장 일반적인 프로퍼티로써, 값을 저장하는 용도로 사용됩니다.
//let name = "Hohyeon Moon"
//var age = 25

//1.a 지연 저장 프로퍼티 > 프로퍼티가 처음으로 사용되기 전까지 초기값이 계산되지 않는 특성
// class Position {
//    lazy var point: CoordinatePoint = CoordinatePoint()
// }

//2. 연산 프로퍼티 > 실제로 값을 저장하지는 않고, get과 set 키워드로 값을 간접적으로 설정하거나 받는 프로퍼티
// var wallet: Int = 10000
//
// var counter: Int {
//    get {
//        return wallet
//    }
//
//    set(money) {
//        wallet += money
//    }
//}

//3.타입 프로퍼티 > 인스턴스의 속성이 아닌, 타입에 따른 속성을 정의 (인스턴스 생성없이 객체 프로퍼티  접근이 자유로워짐)
// struct AudioChannel {
//  static let level = 10
//  static var maxLevel = 0
// }
//
// print(AudioChannel.level)
// print(AudioChannel.maxLevel)


// 4. 프로퍼티 옵저버 > 프로퍼티의 값이 변경 될 때 지정된 코드를 실행
// class Account {
// var credit: Int = 0 {
//    willSet {
//        print("잔액이 \(credit)에서 \(newValue)원으로 변경될 예정입니다.")
//    }
//
//    didSet {
//        print("잔액이 \(oldValue)에서 \(credit)으로 변경되었습니다.")
//    }
// }
// }
//
// let myAccount = Account()
// myAccount.credit = 1000
