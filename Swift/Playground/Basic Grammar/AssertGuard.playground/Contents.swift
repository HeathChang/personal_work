import UIKit

// assert: 특정 조건을 체크하고, 조건이 성립되지 않으면, 메시지 출력 (조건 검증)

var value = 0
assert(value == 0)

value = 2
// assert(value == 0, "값이 0이 아닙니다.") // Error > Assertion failed: 값이 0이 아닙니다.



// guard: 뭔가를 검사해 그 다음에 오는 코드를 실행할지 말지를 결정 (할당 검사)
// 조건이 false이면, else 구문이 실행되며, return 혹은 throw or break를 통해, 이후 코드 실행되지 않는다
func guardTest(value: Int) {
    guard value == 0 else {
        print("value가 0이 아닙니다 > \(value)")
        return
    }
    // 조건이 true, 즉 value가 0일 경우, print 문 노출
    print("value가 0 입니다")
}


guardTest(value: 0)2guardTest(value: 1)
guardTest(value: 2)


// using the guard statement for optional binding, the value being guarded must have an optional type.
func guardTest2(value: Int?) {
    // 여기 코드 block에서 선언된 value2 은, guardTest2 block안에서 자유롭게 사용 가능
    guard let value2 = value else { return }
    
    // guardTest2를 통해 옵셔널 바인딩 value 바로 할당
    print("value 값 > \(value2)")
}

guardTest2(value: 0)
guardTest2(value: 2)
guardTest2(value: nil)



