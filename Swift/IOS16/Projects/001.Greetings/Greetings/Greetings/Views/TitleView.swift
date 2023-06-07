import SwiftUI
struct TitleView: View {
    @State var isRotated: Bool = false;
    @State var captionIndex: Int = 0;
    let caption: [String] = [
        "Exploring iOS 15 programming",
        "Learning how to bake",
        "Programming recipes",
        "A quest for knowledge"
    ]
    
    var body: some View {
        HStack {
            VStack(alignment: .leading, spacing: -1.0) {
                Text("Greetings").font(.largeTitle).fontWeight(.bold)
                Text(caption[captionIndex]).font(.headline).fontWeight(.thin)
            }
            .padding()
            .onTapGesture {
                captionIndex = Int.random(in: 0 ..< caption.count)
            }
            Spacer()
            Circle()
                .strokeBorder(
                    AngularGradient(
                        gradient: Gradient(colors: [.pink, .purple, .blue, .orange, .yellow]),
                        center: .center,
                        angle: .zero),
                    lineWidth:15
                )
            //            isRotated
                .rotationEffect(isRotated ? .zero: .degrees(180))
                .frame(
                    maxWidth: 70,
                    maxHeight: 70
                )
                .onTapGesture {
                    withAnimation(Animation.spring()){
                        //.toggle(): Toggles the Boolean variable’s value.
                        isRotated.toggle()
                    }
                }
        }.padding()
    }
}
