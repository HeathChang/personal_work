import UIKit

var greeting = "Hello, playground"


let x1: Bool = true;
let x2: Bool = false;

func guardExample(expr: Bool, str: String) {
    guard(expr) else {
        // if expr is true, dont do express, if false, do this
        print("We are here because the expression is false");
        return
    }
    print("Have a Nice day")
}


guardExample(expr: x1, str: "x1");
guardExample(expr: x2, str: "x1");
guardExample(expr: 1+1 == 3, str: "x1");
guardExample(expr: 1+1 == 2, str: "x12");
