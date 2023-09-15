

import SwiftUI

struct ContentView: View {
    @State private var isClicked = false
    
    var body: some View {
        VStack {

            Image("woman")
                .resizable()
                .frame(width: 200, height: 400)
                .foregroundColor(isClicked ? .red : .blue)
                .onTapGesture {
                    isClicked.toggle()
                }
        }
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
