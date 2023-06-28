import SwiftUI

struct TheToggleView: View {
    var width = 35.0
    let factor = 59.0 / 35.0
    let innerCircleFactor = 59.0 / 25.0
    
    @Binding var isOn: Bool
    
    var sign: Double {
        isOn ? 1.0 : -1.0
    }
    let offsetDelta = 12.0
    
    // randge from -offSetDelta to offSetDelta
    var xShift: Double {
        sign * offsetDelta
    }
    // should be a value between 0.5 to 1.0
    var backgroundWhiteness: Double {
        var result = xShift + offsetDelta
        result / (2 * offsetDelta)
        // normalize
        result = result * 0.5
        result = 0.5 - result
        return result
        
    }
    
    var onOffText: LocalizedStringKey{
        isOn ? "on" : "off"
    }
    
    var textColor: Color {
        isOn ? lightGray : black
    }
    
    var body: some View {
        let dragGesture = DragGesture()
            .onChanged { gesture in
                withAnimation(.easeIn(duration: 0.2)){
                    isOn = gesture.translation.width > 0 ? true : false
                }
            }
        let tapGesture = TapGesture()
            .onEnded { _ in
                withAnimation(.easeIn(duration: 0.2)){
                    isOn.toggle()
                }
            }
        let combinedGesture = dragGesture
            .simultaneously(with: tapGesture)
        
        ZStack {
            RoundedRectangle(cornerRadius: 30)
                .fill(Color(white: backgroundWhiteness)
                )
            ShiftedText(text: onOffText,
                        color:  textColor,
                        xShift: -xShift)
            // circular "knob"
            ShiftedCircle(xShift: xShift)
        }
        .frame(width: width * factor,
               height: width,
               alignment: .leading)
        .gesture(combinedGesture)

    }
}


struct ShiftedCircle: View {
    let color: Color = cardBackgroundColor
    let xShift: Double
    var padding: Double = 7.0
    
    var body: some View{
        Circle()
            .fill(color)
            .padding(7)
            .offset(x: xShift)
    }
}

struct ShiftedText: View {
    let text: LocalizedStringKey
    var color: Color = cardBackgroundColor
    let xShift: Double
    var body: some View{
        Text(text)
            .foregroundColor(color)
            .font(.subheadline)
            .offset(x: xShift)
    }
}

struct TheToggleView_Previews: PreviewProvider {
    static var previews: some View {
        VStack {
            TheToggleView(isOn: .constant(true))
            TheToggleView(isOn: .constant(false))
        }
    }
}
