import UIKit;
import Foundation;

print("----------------")
var a : Int = 6;
a += 1;
print(a);

var b = 100
var c = 100.0
print("b = \(b)")
print("c = \(c)")
print("Type of 'b' is \(type(of: b))") // checking typeof
print("Type of 'c' is \(type(of: c))") // checking typeof


var d: Float = 100.0
print("Type of 'd' is \(type(of: d))") // checking typeof

print("Largest integer is \(Int.max)")
print("Smallest integer is \(Int.min)")

print("Largest Double is \(Double.greatestFiniteMagnitude)")
print("Smallest Double is \(-Double.greatestFiniteMagnitude)")

print("----------------")

func divisionAlgorithm(x: Int, divisor: Int) -> String /*return type*/{
    let result: String;
    
    let remainder = 112 % divisor;
    let quotient = x / divisor;
    
    if remainder == 0 {
        result = "\(x) = \(divisor) * \(quotient)"
    } else {
        result = "\(x) = \(divisor) * \(quotient) + \(remainder)"
    }
    return result
}


for divisor in 1..<9{
    print(divisionAlgorithm(x: 112, divisor: divisor));
}

