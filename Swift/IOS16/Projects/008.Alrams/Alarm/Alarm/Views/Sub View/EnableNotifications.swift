
import SwiftUI

struct EnableNotifications: View {
    var body: some View {
        
        ZStack{
            FourCoolCircles()
            VStack {
                Spacer()
                CoolTextView(text: LocalizedStringKey("Enable notifications, please"), size: 48)
                    .multilineTextAlignment(.center)
                Spacer()
                Button(action: {
                    print("Enabled")
                }, label: {
//                    Text("Enabled")
                    ButtonView(text: "Enable").padding()
                })
            }

        }
    }
}

struct EnableNotifications_Previews: PreviewProvider {
    static var previews: some View {
        EnableNotifications()
    }
}
