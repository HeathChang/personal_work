
import SwiftUI

struct ContentView: View {
    
    let colorList1: [Color] = [.red, .purple,.green,.pink];
    let colorList2: [Color] = [.black, .white,.blue];
    let rotationAngle: CGFloat = 360
    
    @State private var screenTapped: Bool = true;
//    @State private var offsetY: CGFloat = -1000;
    
    var body: some View {
        ZStack {
            // Background Color
            //            Color.black.opacity(0.6).ignoresSafeArea()
            LinearGradient(colors: screenTapped ? colorList1 : colorList2, startPoint: .topLeading, endPoint: .bottomTrailing).opacity(0.8).ignoresSafeArea()
            Text(screenTapped ? "SwiftUI Basics1" : "To know what you know and what you do not know, that is true knowledge.")
                .font(.largeTitle)
                .fontWeight(.semibold)
                .foregroundColor(Color.red)
                .multilineTextAlignment(.center)
                .padding()
            
        }
        .onTapGesture {
            // Change Screen color if tapped.
            // Generally, when we are inside a view, we need state variables (@State)
            screenTapped.toggle();

        }
        
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
