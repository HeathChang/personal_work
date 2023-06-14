
import Foundation


/// Returns last character if exists, otherwise retun an empty string
func getLastChar(str: String) -> String{
    return str.isEmpty ? "" : String(str.last!)
}
/// Retun true if last character is equal to char
func lastCharacterIsEqualTo(str: String, char: String) -> Bool {
    let last  = getLastChar(str: str);
    return last == char
}

// formatter
func formatResult(val: Double) -> String {
    let numberFormatter = NumberFormatter() // 숫자값과 문자적 표현 사이를 변환해주는 formatter
    numberFormatter.numberStyle = .decimal
    numberFormatter.maximumFractionDigits = 16
    let result = numberFormatter.string(from: NSNumber(value: val))
    // from :: format a given number value as a string representation. and for :: given measurement value as a string representation.
    // NSNumber :: acts as a bridge between Swift's native number types and the Objective-C-based NumberFormatter class, enabling interoperability, dynamic typing, and compatibility with Foundation APIs.
    
    return result ?? "0"
}


func lastCharIsDigit(str: String) -> Bool {
    //    return ["0","1","2","3","4","5","6","7","8","9"].contains(getLastChar(str: str))
    return "0123456789".contains(getLastChar(str: str))
}


func lastCharIsDigitOrPercent(str: String) -> Bool {
    //    return ["0","1","2","3","4","5","6","7","8","9"].contains(getLastChar(str: str))
    return "0123456789%".contains(getLastChar(str: str))
}

