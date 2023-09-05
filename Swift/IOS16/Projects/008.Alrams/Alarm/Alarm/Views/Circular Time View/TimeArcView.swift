import SwiftUI

struct TimeArcView: View {
    let percertDiffernce: CGFloat
    let strokeStyle: StrokeStyle
    let size: CGFloat
    let rotateCircleOffset: CGFloat
    let color: Color
    
    var body: some View {
        Circle()
            .trim(from: 0, to: percertDiffernce)
            .stroke(style: strokeStyle)
            .foregroundColor(color)
            .frame(width: size, height: size)
            .rotationEffect(.degrees(-90))
            .rotationEffect(.degrees(rotateCircleOffset))
    }
}

struct TimeArcView_Previews: PreviewProvider {
    static var previews: some View {
        TimeArcView(percertDiffernce: 0.5,
                    strokeStyle: StrokeStyle(lineWidth: 15, dash: [1,2]),
                    size: 200,
                    rotateCircleOffset: 30,
                    color: black)
    }
}