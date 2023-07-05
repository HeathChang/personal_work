
import SwiftUI

struct EnableNotifications: View {
    
    
    @EnvironmentObject var lnManager: LocalNoficationManager
    
    var body: some View {
        
        ZStack{
            FourCoolCircles()
            VStack {
                Spacer()
                CoolTextView(text: LocalizedStringKey("Enable notifications, please"), size: 48)
                    .multilineTextAlignment(.center)
                Spacer()
                Button(action: {
                    // 버튼 클릭시 Setting Open
                    lnManager.openSettings()
                }, label: {
                    ButtonView(text: "Enable").padding()
                })
            }

        }
    }
}

struct EnableNotifications_Previews: PreviewProvider {
    static var previews: some View {
        // need to add environmentObject(LocalNoficationManager) to use lnManager
        EnableNotifications()
            .environmentObject(LocalNoficationManager())
    }
}
