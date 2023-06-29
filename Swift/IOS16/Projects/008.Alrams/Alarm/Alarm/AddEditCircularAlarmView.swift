
import SwiftUI

struct AddEditCircularAlarmView: View {
    let currentAlarmIndex: Int?
    @State var alarmModel: AlarmModel
    
    var body: some View {
        VStack {
            CancelSaveAlarm(currentAlarmIndex: currentAlarmIndex, alarmModel: $alarmModel)
            AlarmToggleView(alarmEnabled: $alarmModel.alarmEnabled)
            Divider()
            Spacer()
            CircularTimeView(currentAlarmIndex: currentAlarmIndex, size: screenWidth / 2, alarmModel: .DefaultAlaram())
            Spacer()
            
        }.padding()
    }
}

struct AddEditCircularAlarmView_Previews: PreviewProvider {
    static var previews: some View {
        AddEditCircularAlarmView(currentAlarmIndex: nil, alarmModel: .DefaultAlaram())
    }
}
