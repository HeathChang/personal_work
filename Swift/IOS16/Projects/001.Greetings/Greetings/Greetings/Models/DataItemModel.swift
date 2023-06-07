import Foundation
import SwiftUI

struct DataItemModel: Identifiable {
    // In order to use ForEach, need to set verifier.
    let id = UUID()
    let text: String
    let color: Color
}
