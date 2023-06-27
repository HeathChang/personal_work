import SwiftUI

struct AboutView: View {
    var body: some View {
        VStack{
            ZStack{
                MainGradient(endRadius: screenHeight / 2)
                    .opacity(0.7)
                    .ignoresSafeArea()
                VStack{
                    VStack(spacing: 30){
                        CoolTextView(text: LocalizedStringKey("About"), size: 48)
                        Text(LocalizedStringKey("The UI for this nice Alarm app was largely inspired by the amazing work of Anton Leogky.")).font(.title)
                    }
                    .multilineTextAlignment(.leading)
                    .minimumScaleFactor(0.1)
                    .padding()
                    Spacer()
                    Image(appImageSamples)
                        .resizable()
                        .scaledToFit()
                        .cornerRadius(5)
                        .frame(width: screenWidth * 0.8)
                    Spacer()
                    if let url = URL(string: "https://dribbble.com/antonleogky") {
                        Link(destination: url, label: {
                            ButtonView(text: "to Anton's page")
                                .padding()
                        })
                    }
                }
            }
            
        }
    }
}

struct AboutView_Previews: PreviewProvider {
    static var previews: some View {
        AboutView()
    }
}
