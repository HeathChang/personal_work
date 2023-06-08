import SwiftUI



struct TitleView: View {
    @State var isRotated: Bool = false;
    @State var captionIndex: Int = 0;

    
    var body: some View {
        HStack {
            // if we use, @Binding, need to use [$] sign in parent view.
            GreetingsTextView(captionIndex: $captionIndex)
            Spacer()
            RotatableCircleView(isRotated: $isRotated)

        }.padding()
    }
}


struct VerticalTitleView: View {
    @State var isRotated: Bool = false;
    @State var captionIndex: Int = 0;
    
    
    var body: some View {
        VStack(alignment: .leading ) {
            GreetingsTextView(captionIndex: $captionIndex)
            RotatableCircleView(isRotated: $isRotated)
            Spacer()

        }.padding()
    }
}

// Greeting Text, when clicked, the text will change
struct GreetingsTextView: View {
    //@Binding: indicating that the value of that property will be provided from outside the view. Typically, this binding is passed down from a parent view to a child view, allowing the child view to read and modify the value.
    @Binding var captionIndex: Int;
    
    let caption: [String] = [
        "Exploring iOS 16 programming",
        "Learning how to bake",
        "Programming recipes",
        "A quest for knowledge"
    ];
    
    var body: some View {
        VStack(alignment: .leading, spacing: -1.0) {
            // LocalizedStringKey: 언어 변환
            Text(LocalizedStringKey("Greetings")).font(.largeTitle).fontWeight(.bold)
            Text(LocalizedStringKey(caption[captionIndex])).font(.headline).fontWeight(.thin)
        }
        .padding()
        .onTapGesture {
            captionIndex = Int.random(in: 0 ..< caption.count)
        }
    }
}

/// Rotatble Circle View, when clicked, the circle will rotate
struct RotatableCircleView: View {
    @Binding var isRotated: Bool;

    var body: some View {
        Circle()
            .strokeBorder(
                AngularGradient(
                    gradient: Gradient(colors: [.pink, .purple, .blue, .orange, .yellow]),
                    center: .center,
                    angle: .zero),
                lineWidth:15
            )
            .rotationEffect(isRotated ? .zero: .degrees(180))
            .frame(
                maxWidth: 70,
                maxHeight: 70
            )
            .onTapGesture {
                withAnimation(Animation.spring()){
                    
                    isRotated.toggle()//.toggle(): Toggles the Boolean variable’s value.
                }
            }
    }
}


struct TitleView_Previews: PreviewProvider {
    static var previews: some View {
//        TitleView()
        VerticalTitleView();
    }
}
