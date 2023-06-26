import SwiftUI

struct SplashScreenView: View {
    @State private var isActive: Bool = false
    @State private var opacity: Double = 0.3
    @State private var fontSize: Double = 12.0
    
    var body: some View {
        ZStack{
            if isActive{
                MainAlarmView()
            } else {
                FourCoolCircles(
                    color1: blue,
                    color2: .clear
                )
                VStack{
                    VStack(alignment: .leading,spacing: 0 ){
                        CoolTextView(text: LocalizedStringKey("hello there!"), size: fontSize)
                        CoolTextView(text: LocalizedStringKey(String(isActive)), size: fontSize)
                        CoolTextView(text: LocalizedStringKey("alarm"), size: fontSize)
                        CoolTextView(text: LocalizedStringKey("let's add an alarm"), size: fontSize)
                    }
                    .multilineTextAlignment(.leading)
                    .padding()
                    .onAppear(){
                        withAnimation(
                            .easeIn(duration: 1.5)
                        ){
                            opacity = 1.0
                            fontSize = 36.0
                        }
                    }
                    Spacer()
                    Image(welcome)
                        .resizable()
                        .scaledToFit()
                        .opacity(0.4)
                    Spacer()
                }
            }
            
        }
        .opacity(opacity)
        .onAppear {
            DispatchQueue.main.asyncAfter(deadline: .now() + 2.0) {
                withAnimation {
                    isActive = true
                }
            }
        }
        .onTapGesture {
            withAnimation{
                print("Tapped")
                isActive = true
            }
        }
        
    }
}

struct SplashScreenView_Previews: PreviewProvider {
    static var previews: some View {
        SplashScreenView()
    }
}
