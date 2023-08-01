import UIKit

// Try Catch


enum phoneError: Error {
    case unknown
    case batteryLow(batteryLevel: Int)
}
// throw phoneError.batteryLow(batteryLevel: 30)

// 1. throws > throw되는 오류를 함수호출되는 곳으로 전파
func checkPhoneBatteryStatus(batteryLevel: Int) throws -> String {
    guard batteryLevel > 0 else { throw phoneError.unknown }
    guard batteryLevel > 20 else { throw phoneError.batteryLow(batteryLevel: 20)}
    return "배터리 상태가 정상입니다. "
}



do {
//    try checkPhoneBatteryStatus(batteryLevel: -10)
//    try checkPhoneBatteryStatus(batteryLevel: 20)
    try checkPhoneBatteryStatus(batteryLevel: 40)
} catch phoneError.unknown {
    print("알수없는 에러입니다. ")
} catch phoneError.batteryLow(let batteryLabel){
    // 연관값 사용
    print("배터리 부족 : \(batteryLabel)%")
} catch {
    print("그 외 오류 발생: \(error)")
}

print("////////////////////////////////////")
let status = try? checkPhoneBatteryStatus(batteryLevel: 10)
print(status)


print("////////////////////////////////////")
let status2 = try! checkPhoneBatteryStatus(batteryLevel: 30) // !는 확실한 값이 있을 경우
print(status2)
