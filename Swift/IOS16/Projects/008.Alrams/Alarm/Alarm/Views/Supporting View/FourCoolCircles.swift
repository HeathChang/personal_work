import SwiftUI




struct FourCoolCircles: View {
    var color1 = darkYellow
    var color2 = lightYellow
    @State private var offsetX: [CGFloat] = [0,0,0,0]
    @State private var offsetY: [CGFloat] = [0,0,0,0]
    @State private var timer = Timer.publish(every: 1, on: .main, in: .common).autoconnect()
    
    var body: some View {
        ZStack{
            CoolCircleView(radius: screenWidth/10, color1: color1, color2: color2.opacity(0.3))
                .offset(x: screenWidth/4, y: -screenHeight/4)
                .offset(x: offsetX[0], y: offsetX[0])
            
            CoolCircleView(radius: screenWidth/4, color1: color1, color2: color2.opacity(0.3))
                .offset(x: screenWidth/4, y: -screenHeight/20)
                .offset(x: offsetX[1], y: offsetX[1])
            
            CoolCircleView(radius: screenWidth/7, color1: color1, color2: color2.opacity(0.3))
                .offset(x: screenWidth/20, y: -screenHeight/4)
                .offset(x: offsetX[2], y: offsetX[2])
            
            CoolCircleView(radius: screenWidth/5, color1: color1, color2: color2.opacity(0.3))
                .offset(x: screenWidth/30, y: -screenHeight/7)
                .offset(x: offsetX[3], y: offsetX[3])
        }
        .onReceive(timer){ _ in
            withAnimation(.easeIn(duration: 20)){
                for i in 0 ..< offsetX.count{
                    offsetX[i] = Double.random(in: -300...300)
                }
                for i in 0 ..< offsetX.count{
                    offsetY[i] = Double.random(in: -300...300)
                }
            }
        }
    }
}

struct CoolCircleView: View{
    let radius: CGFloat
    var color1 = yellow
    var color2 = Color.clear
    
    
    var body: some View {
        Circle()
            .fill(LinearGradient(colors: [color1, color2], startPoint: .top, endPoint: .bottom))
            .frame(width: radius, height: radius)
    }
}

struct FourCoolCircles_Previews: PreviewProvider {
    static var previews: some View {
        FourCoolCircles()
    }
}
