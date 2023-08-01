import UIKit

// Closure: 참조타입으로 코드에서 전달 및 사용할 수 있는 독립 기능 블록으로 일급객체의 역할을 한다.
// 일급객체 : 전달인자로 보낼수 있고, 변수/상수 전달/저장 가능하며, 함수의 반환값이 될 수 있다.
// Named & unNamed

let hello = { () -> () in
    print("Hello")
}

hello()
print("--------------------------------")

let hello2 = { (name: String) -> String in
    return "Hello, \(name)"
}

// closures are not directly callable using the name assigned to them
// don't have external parameter names like regular functions.
// hello2(name: "Heath") // error
hello2("Heath")

print("--------------------------------")

func doSth(closure: () -> ()) {
    closure()
}
// takes a single argument of type () -> (), which is a closure that takes no arguments and returns nothing.
// Inside the doSth(closure:) function, it calls the closure that was passed as an argument.
doSth(closure: {() -> () in
    print("Hello")
})
doSth(){
    print("Hello2")
}
doSth{
    print("Hello2")
}


print("--------------------------------")
// 1. doSth2() returns a closure that takes no arguments and returns another closure that also takes no arguments and returns nothing
// 2. returned closure is defined as { () -> () in print("hello4") } > closure with an empty parameter list and an empty return type. When executed, it will simply print "hello4" to the console.
func doSth2()-> () -> () {
    return { () -> () in
        print("hello4")
    }
}

// The first set of parentheses doSth2() calls the doSth2() function, which returns the closure.
// The second set of parentheses () calls the returned closure, executing the code inside it.
doSth2()()

print("--------------------------------")

func doSth3(success: () -> (), fail: () -> ()) {
    // Simulate some operation
    let successCondition = true
    
    if successCondition {
        // Call the success closure if the operation is successful
        success()
    } else {
        // Call the fail closure if the operation fails
        fail()
    }
}

func doSomething() {
    // Simulate success
    func successBlock() {
        print("Operation completed successfully.")
    }
    
    // Simulate failure
    func failBlock() {
        print("Operation failed.")
    }
    
    // Call doSth3 and pass the success and fail closures
    doSth3(success: successBlock, fail: failBlock)
}

// Call the doSomething function
doSomething()

// In this example, we have a function doSth3(success:fail:) that takes two closures as arguments: success and fail.

// Inside doSth3, we simulate an operation by setting the successCondition to true to indicate a successful operation.

// When we call doSth3(success:fail:), it will execute the closure provided in the success argument if successCondition is true.
// If successCondition is false, it will execute the closure provided in the fail argument.

// In the doSomething() function, we define two closures successBlock and failBlock to simulate the success and failure scenarios, respectively.

// We then call doSth3(success:fail:) with these closures as arguments.


// https://babbab2.tistory.com/81
