
import SwiftUI

struct MainAlarmView: View {
    @StateObject var lnManager: LocalNoficationManager = LocalNoficationManager()
    
    // Every time the scene phase change this will update > way to observe and react to changes in the app's lifecycle.
    @Environment(\.scenePhase) var scenePhase
    
    var body: some View {
        TabView{
            if lnManager.isAuthorized {
                ListOfTheAlarmsView(alarmViewModels: AlarmModel.DummyAlarmData())
                    .tabItem({
                        Label("Alarms", systemImage: "alarm.fill")
                    })
                AboutView()
                    .tabItem({
                        Label("About", systemImage: "info.circle.fill")
                    })
            } else {
                EnableNotifications()
            }
        }
        .ignoresSafeArea()
        .task {
            // Authorization 물어봄
            try? await lnManager.requestAuthorization()
        }
        .onChange(of: scenePhase){ newValue in
            if newValue == .active {
                Task {
                    await lnManager.getCurrentSetting()
                    
                    // if view is active. > update view
                    await lnManager.getPendingAlarms()
                }
            }
        }
    }
    
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        MainAlarmView()
    }
}
