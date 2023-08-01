import UIKit

// Enum: 연관성이 있는 값을 모아 놓은 것

enum CompassPoint {
    case north
    case south
    case east
    case west
}

var direction = CompassPoint.east
direction = .north
direction = .west


switch direction{
case .north: print("north")
case .south: print("south")
case .east: print("east")
case .west: print("west")
}




enum primitiveCompassPoint: String {
    case north = "북"
    case south = "남"
    case east = "동"
    case west = "서"
}
var primitiveDirection: primitiveCompassPoint = .north
print(primitiveDirection)

 
switch primitiveDirection{
case .north: print(primitiveDirection.rawValue)
case .south: print(primitiveDirection.rawValue)
case .east:  print(primitiveDirection.rawValue)
case .west:  print(primitiveDirection.rawValue)
}


let direction2 = primitiveCompassPoint(rawValue: "북")


// 연관값
enum phoneError {
    case unknown
    case batteryLow(String)
}

let error = phoneError.batteryLow("배터리가 곧 방전됩니다")

switch error {
    case.batteryLow(let message): print(message)
    case.unknown: print("알수없습니다")
}
