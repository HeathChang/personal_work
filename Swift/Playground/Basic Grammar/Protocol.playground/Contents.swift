import UIKit

// Protocol > 특정활동을 하기위한 메서드, 프롵퍼티, 기타 요구사항등의 blue-print
// 구조체, 클래스, 열거형은 프로토콜을 채택(Adopted) 해서 특정 기능을 수행하기 위한 프로토콜의 요구사항을 실제로 구현
protocol someProtocol {
}

protocol someProtocol2 {
}


struct someStruct: someProtocol, someProtocol2 {
}

// 상속받은 superclass 있을경우, Class > Protocol 순서
class someClass: someProtocol{
}


//

protocol FullyNames {
    var fullName: String { get set}
    func printFullName()
}

struct Person: FullyNames {
    // Super Protocol Property를 따라야함
    var fullName: String
    
    func printFullName() {
        print(fullName)
    }
    
}


//

protocol someProtocol5 {
    // enforce certain behavior in conforming types and ensures that objects of these types can be initialized correctly and safely.
    init()
}

extension someProtocol5 {
    // Default initializer implementation in the protocol extension
    init(defaultValue: Int) {
        self.init()
        print("Default initializer with default value \(defaultValue) called.")
    }
}

class someClass5: someProtocol5{
    // Initializer requirement 'init()' can only be satisfied by a 'required' initializer in non-final class 'someClass5' (Class 에서만 필요, Struct는 필요 X)
    required init() {
        print("someClass5 initializer called.")
    }
}

struct someStruct5: someProtocol5 {
    // No need to provide an explicit initializer
    // The default initializer from the protocol extension will be used
}


// Example usage
let structInstance = someStruct5() // Output: "Default initializer with default value 0 called."
let classInstance = someClass5()   // Output: "someClass5 initializer called."
let instanceWithDefaultValue = someStruct5(defaultValue: 42) // Output: "Default initializer with default value 42 called."


//                  Protocol vs Interface
// 기본값 설정      >  기본값 설정 X <-> 기본값 설정 O
// 요구사항 구현 정도 >  optional로 선택 구현 가능 <-> 모두 구현해야함
