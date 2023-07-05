
import SwiftUI

@main
struct AlarmApp: App {
    @StateObject var lnManager: LocalNoficationManager = LocalNoficationManager()
    
    
    var body: some Scene {
        WindowGroup {
//            MainAlarmView()
//            AboutView()
            SplashScreenView().environmentObject(lnManager)
//            EnableNotifications()
//                .environmentObject(lnManager)
        }
    }
}
