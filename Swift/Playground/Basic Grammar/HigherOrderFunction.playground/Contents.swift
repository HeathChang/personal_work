import UIKit

//HigherOrderFunction > 다름 함수를 전달 인자로 받거나, 함수 실행의 결과를 함수로 반환하는 함수 > map, filter, reduce

// Map> 기존 데이터를 변형하여 새로운 컨테이너를 만드는데, 기존 데이터는 변형되지 않습니다.
let numArray = [1,3,5,7,9]
let multiArray = numArray.map { $0 * 2 } // $0 is a shorthand notation
print(multiArray) // [2, 6, 10, 14, 18]

print("----------------------------------------------")

let multiArray2 = numArray.map({ (number: Int) -> Int in
    return number * 2
})
print(multiArray2) // [2, 6, 10, 14, 18]


print("////////////////////////////////////////////////")
// Filter(추출) > 내부의 값을 걸러 새로운 컨테이너를 만듭니다.

let stringAttay = ["가수", "대통령", "개발자", "선생님", "의사", "검사", "건물주"]
let threeCountArray = stringAttay.filter { $0.count == 3 }
print(threeCountArray) // ["대통령", "개발자", "선생님", "건물주"]

print("----------------------------------------------")

let threeCountArray2 = stringAttay.filter({ (value: String) -> Bool in
    return value.count == 3
})
print(threeCountArray2) // ["대통령", "개발자", "선생님", "건물주"]


print("////////////////////////////////////////////////")
// Reduce > 내부의 값들을 결합하여 새로운 값을 만듭니다.
let numberArray = [1,2,3,4,5,6,7,8,9,10]
let sum = numberArray.reduce(0) { $0 + $1 }
print(sum) // 55

print("----------------------------------------------")

let sum2 = numberArray.reduce(0, { (first: Int, second: Int) -> Int in
    return first + second
})
print(sum2) // 55

