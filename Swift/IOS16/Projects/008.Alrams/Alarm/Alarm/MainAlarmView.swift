
import SwiftUI

struct MainAlarmView: View {
    var body: some View {
        TabView{
//            AddEditAlarmView(currentIndex: nil, alarmModel: AlarmModel.DefaultAlaram())
            ListOfTheAlarmsView(alarmViewModels: AlarmModel.DummyAlarmData())
                .tabItem({
                    Label("Alarms", systemImage: "alarm.fill")
                })
            AboutView()
                .tabItem({
                    Label("About", systemImage: "info.circle.fill")
                })
        }
    }
        
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        MainAlarmView()
    }
}
