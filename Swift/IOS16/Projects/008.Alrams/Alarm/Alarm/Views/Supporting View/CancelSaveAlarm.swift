import SwiftUI

struct CancelSaveAlarm: View {
    let currentAlarmIndex: Int?
    @Binding var alarmModel: AlarmModel
    
    var body: some View {
        HStack{
            Button(action: {print("Cancel")}, label: {Text("Cancel")})
            Spacer()
            Button(action: {
                print("Save")
                if let currentAlarmIndex = currentAlarmIndex {
                    print("\(currentAlarmIndex)")
                } else {
                   // TODO:  Append Alarm to view
                
                }
                
            }, label: {Text("Save")})
        }
    }
}

struct CancelSaveAlarm_Previews: PreviewProvider {
    static var previews: some View {
        CancelSaveAlarm(currentAlarmIndex: nil, alarmModel: .constant(.DefaultAlaram()))
    }
}
