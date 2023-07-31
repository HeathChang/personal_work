import UIKit

// 상속 > Class가 다른 Class로 부터 값을 받는 경우

// 부모
class Vehicle {
    // var 앞에 final 붙이면, override 안됨
    var currentSpeed: Double = 0.0
    var description: String {
        return "Traveling at \(currentSpeed) miles per hour"
    }
    func makeNoise() -> Void {
        print("Activated from super...")
    }
}


class Bicycle: Vehicle {
    var hasBasket: Bool = false
}


var bicycle = Bicycle()
//bicycle.currentSpeed = 15.0
bicycle.description


// Function over-ride
class Train: Vehicle {
    override func makeNoise() {
        super.makeNoise() // super class 먼저 실행
        print("CHOO CHOO")
    }
}

var train = Train()
train.makeNoise()

// property over-ride
class Car: Vehicle {
    var gear: Int = 1
    override var description: String {
        return super.description + "in \(gear) gear/s"
    }
}

var car = Car()
car.currentSpeed = 30.0
car.gear = 3
print(car.description) // console  > Traveling at 30.0 miles per hourin 3 gear/s

// 상속된 propery에 over-ride, propery obeserver 추가
class AutomaticCar: Car {
    override var currentSpeed: Double {
        didSet {
            print("change in AutomaticCar..")
            gear = Int(currentSpeed / 10) + 1
        }
    }
}

let automatic = AutomaticCar()
automatic.currentSpeed = 35.0 // > print("change in AutomaticCar..")
print("Automatic car: \(automatic.description)") // Automatic car: Traveling at 35.0 miles per hourin 4 gear/s
