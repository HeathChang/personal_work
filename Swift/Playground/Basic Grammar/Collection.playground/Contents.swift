import UIKit

// 컬렉션 타입 (집합묶음): Array, Dictionary, Set

// Array
var arr: [Int] = [
    0,1,2,3,4,5
]

print(arr[0])
print(arr[1])
arr.insert(99, at: 2) // 2번째에 넣어주기
print(arr)

arr.remove(at: 2) // 2번째 삭제
print(arr)


// Dictionary
var dic: [String: Int] = [
    "제로": 3
]
// 넣기
dic["일번"] = 4
dic["이번"] = 5
dic["삼번"] = 6
dic["사번"] = 10

// 빼기
dic.removeValue(forKey: "삼번") //제거하려는 키
print(dic)


// Set
var set: Set<Int> = [] // 세트는 축약 X

set.insert(10)
set.insert(20)
set.insert(30)
set.insert(30)
set.insert(30)

set.remove(30)


print(set)


