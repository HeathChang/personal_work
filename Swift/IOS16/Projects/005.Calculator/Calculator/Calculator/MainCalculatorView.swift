

import SwiftUI

struct MainCalculatorView: View {
    @State var lightMode: Bool = true
    @State var currentComputation: String = ""
    @State var mainResult: String = "0"
    
    var body: some View {
        Text("Hello World")
    }
}

struct MainCalculatorView_Previews: PreviewProvider {
    static var previews: some View {
        MainCalculatorView()
    }
}
