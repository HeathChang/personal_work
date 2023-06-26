
import SwiftUI

struct TimeModel: Equatable, Comparable, Identifiable {
    static func < (lhs: TimeModel, rhs: TimeModel) -> Bool {
        //        if(lhs.hours < rhs.hours){
        //            return true
        //        } else if(lhs.hours == rhs.hours && rhs.hours < lhs.minutes) {
        //            return true
        //        } else {
        //            return false
        //        }
        return (lhs.hours < rhs.hours ) || (lhs.hours == rhs.hours && rhs.hours < lhs.minutes)
    }
    
    let id = UUID()
    let hours: Int
    let minutes: Int
    
    
}
