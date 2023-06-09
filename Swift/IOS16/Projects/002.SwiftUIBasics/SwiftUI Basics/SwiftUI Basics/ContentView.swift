
import SwiftUI

struct ContentView: View {
    
    let colorList1: [Color] = [.red, .purple,.green,.pink];
    let colorList2: [Color] = [.black, .white,.blue];
    
    @State private var screenTapped: Bool = true;
    //    @State private var offsetY: CGFloat = -1000;
    
    var body: some View {
        ZStack {
            // Background Color
            //            Color.black.opacity(0.6).ignoresSafeArea()
            LinearGradient(colors: screenTapped ? colorList1 : colorList2, startPoint: .topLeading, endPoint: .bottomTrailing).opacity(0.8).ignoresSafeArea()
          
            TextView(screenTapped: $screenTapped)
            
        }
        .onTapGesture {
            // Change Screen color if tapped.
            // Generally, when we are inside a view, we need state variables (@State)
            // we can only able to animate state variables.
            withAnimation(.easeIn(duration: 1)){
                screenTapped.toggle();
                
              
            }
        }
        
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

struct TextView: View {
    @Binding var screenTapped: Bool;
    let rotationAngle: CGFloat = 360

    var body: some View {
        VStack (){
            Spacer()
            Text(screenTapped ? "SwiftUI Basics1" : "To know what you know and what you do not know, that is true knowledge.")
            Spacer()
            Text(screenTapped ? "SwiftUI Basics2" : "2222")
            Spacer()

        }
        .font(.largeTitle)
        .fontWeight(.semibold)
        .foregroundColor(Color.blue)
        .multilineTextAlignment(.center)
        .padding(.horizontal)
        .rotation3DEffect(
            .degrees(screenTapped ? 0 : rotationAngle),
            axis: (x: 0, y: 1, z: 0)
        )
    }
}
