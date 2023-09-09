
import SwiftUI

struct MotionAnimationView: View {
    // MARK: PROPERTIES
    @State private var randomeCircle = Int.random(in: 12...16)
    @State private var isAnimating: Bool = false
    
    // MARK: FUNCTIONS
    // 1. RANDOM CORD
    func randomCordinate(max: CGFloat) -> CGFloat {
        return CGFloat.random(in: 0...max)
    }
    // 2. RANDOM SIZE
    func randomSize() -> CGFloat {
        return CGFloat(Int.random(in: 10...300))
    }
    // 3. RANDOM SCALE
    func randomScale() -> CGFloat {
        return CGFloat(Double.random(in: 0.1...2.0))
    }
    // 4. RANDOM SPEED
    func randomSpeed() -> Double {
        return Double.random(in: 0.025...1.0)
    }
    // 5. RANDOM DELAY
    func randomDelay() -> Double {
        return Double.random(in: 0 ... 2)
    }
    
    
    // MARK: BODY
    var body: some View {
        GeometryReader { geometry in
            ZStack {
                ForEach(0 ... randomeCircle, id: \.self) { item in
                    Circle()
                        .foregroundColor(.gray)
                        .opacity(0.15)
                        .frame(width: randomSize(), height: randomSize(), alignment: .center)
                        .scaleEffect(isAnimating ? randomScale() : 1)
                        .position(
                            x: randomCordinate(max: geometry.size.width),
                            y: randomCordinate(max: geometry.size.height)
                        )
                        .animation(.interpolatingSpring(stiffness: 0.5, damping: 0.5).repeatForever().speed(randomSpeed()).delay(randomDelay())
                        )
                        .onAppear{
                            isAnimating = true
                        }
                }
            } // ; ZSTACK
            .drawingGroup() //  avoid slow down caused by complex rendering
        } // ; GeometryReader
    }
}


// MARK: PREVIEWS

struct MotionAnimationView_Previews: PreviewProvider {
    static var previews: some View {
        MotionAnimationView()
    }
}
