
import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color.green.opacity(0.7).ignoresSafeArea()
            Text("""
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
""")
                .font(.largeTitle)
                .fontWeight(.bold)
                .multilineTextAlignment(.center)
                .minimumScaleFactor(0.1)
                .padding()
        }
    }
}



struct HelloView: View {
    var body: some View {
        ZStack {
            Color.red.opacity(0.7).ignoresSafeArea()
            VStack{
                Text("Hello")
                    .font(.largeTitle)
                    .fontWeight(.bold)
                    .multilineTextAlignment(.center)
                    .minimumScaleFactor(0.1)
                    .padding()
            }
        }
    }
}

struct ByeView: View {
    var body: some View {
        ZStack {
            Color.blue.opacity(0.7)
                .ignoresSafeArea()
            VStack{
                Text("Hello, world!")
                    .font(.largeTitle)
                    .fontWeight(.bold)
                    .multilineTextAlignment(.center)
                    .minimumScaleFactor(0.1)
                    .padding()
            }
        }
    }
}

struct GenericView: View {
    let color: Color;
    let opacity: CGFloat;
    let text: String;
    
    
    var body: some View {
        ZStack {
            color.opacity(opacity).ignoresSafeArea()
            VStack{
                Text(text).font(.largeTitle).fontWeight(.bold)
                    .font(.largeTitle)
                    .fontWeight(.bold)
                    .multilineTextAlignment(.center)
                    .minimumScaleFactor(0.1)
                    .padding()
            }
        }
    }
}


struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
    
}
