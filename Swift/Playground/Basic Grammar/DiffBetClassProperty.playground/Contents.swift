import UIKit

// 클래스와 구조체의 공통점
// 1. 갑을 저장할 프로퍼티 선언
// 2. 매서드 선언 가능
// 3. 내부값에 . 을 사용해 접근 가능
// 4. 생성자를 사용해, 초기 상태 설정 가능
// 5. extension을 사용해 기능 확장 가능
// 6. Protocol을 사용해 기능 설정 가능

// 클래스와 구조체의 차이점
// 클래스            구조체
// 1. 참조타입  <-> 값 타입
// 2. ARC로 메모리 (deinit을 통해 인스턴스 메모리 할당 해제 가능) <->
// 3. 상속 가능 <-> 
// 4. 같은 클래스의 인스턴스를 여러개의 변수에 할당한 뒤, 값 변경시 모든 변수 영향 줌 <->  같은 구조체를 여러개 할당한 뒤, 값을 변경해도 다른 변수 영향 X


//class someClass{
//    var count:Int
//
//    init(count: Int) {
//        self.count = count
//    }
//}

// 위와 동일
class someClass{
    var count:Int = 0
    
    
}


struct someStruct{
    var count: Int = 0
}


//var class1 = someClass(count: 2)
var class1 = someClass()
var class2 = class1
var class3 = class1

class3.count =  3
class1.count //3
class2.count //3
class3.count //3


var struct1 = someStruct()
var struct2 = struct1
var struct3 = struct1

struct2.count = 3
struct3.count = 4
struct1.count // 0
struct2.count // 3
struct3.count // 4
