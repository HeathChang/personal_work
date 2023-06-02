import UIKit

var greeting = "Hello, playground"


for i in -3...3 {
    print(i);
}

print("----------------");

for i in -3..<3 {
    print(i);
}

print("----------------");
// while loop

var sum = 0;
var j = 0;
while j < 10{
    sum += j;
    j += 1;
}

print("The sum 0 + 1 + .... + n =  \(sum)")

print("----------------");
var i = 1;
let n = 10;
repeat{
    print(i)
    i += 1;
} while(i < n);



print("----------------");
