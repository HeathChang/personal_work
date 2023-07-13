
import SwiftUI

struct AlarmRowView: View {
    @EnvironmentObject var lnManager: LocalNoficationManager
    
    let model: AlarmModel
    let i : Int
    
    var body: some View {
        HStack {
            Image(systemName: model.activity)
                .foregroundColor(model.activityColor)
                .font(.title)
            VStack(alignment: .leading){
                Text("\(getTimeFromDate(date: model.start))- \(getTimeFromDate(date: model.end))")
                    .font(.title)
                    .fontWeight(model.alarmEnabled ? .regular : .thin)
                    .scaleEffect(model.alarmEnabled ? 1.05 : 1.0)
                    .opacity(model.alarmEnabled ? 1.0 : 0.7)
            }
            Spacer()
            
            if i < lnManager.alarmViewModels.count {
                TheToggleView(isOn: .constant(lnManager
                    .alarmViewModels[i].alarmEnabled))
            }
            
//            let alarmViewModels = AlarmModel.DummyAlarmData()
//            TheToggleView(isOn: .constant(alarmViewModels[i].alarmEnabled))
        }
        .onChange(of: model.alarmEnabled){ alarmEnabled in
            if alarmEnabled{
                print("Enabled")
                // TODO: Enable alarm.
                // ToDO: Need Schedule
            
            } else {
                print("Disabled alarm")
                // TODO: disable alarm.
                // ToDO: remove Schedule

            }
        }
    }
}

struct AlarmRowView_Previews: PreviewProvider {
    static var previews: some View {
        AlarmRowView(model: .DefaultAlaram(), i : 0)
            .environmentObject(LocalNoficationManager())
    }
}
