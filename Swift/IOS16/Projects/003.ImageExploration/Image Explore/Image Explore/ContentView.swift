

import SwiftUI

struct ContentView: View {
    var body: some View {
        Text("Hello, world!") .onAppear(perform:{
            for i in 1...48{
                print("\tcase img\(i)")
            }
        })
        
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
