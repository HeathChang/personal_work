
import Foundation

class Shop: ObservableObject {
    // @Published property wrapper tells SwiftUI that any changes to these properties will trigger view to reload.
    @Published var showingProduct: Bool = false
    @Published var selectedProduct: Product? = nil // optional > nil if no value
}
