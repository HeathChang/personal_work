import SwiftUI

struct CircularTimeView: View {
    let currentAlarmIndex: Int?
    let size: CGFloat
    @State var alarmModel: AlarmModel
    
    var body: some View {
        Circle()
            .stroke(lineWidth: 20)
            .frame(width: size)
            .overlay {
                Text("Circular Alarm")
            }
        
    }
}

struct CircularTimeView_Previews: PreviewProvider {
    static var previews: some View {
            VStack(spacing: 50) {
                CircularTimeView(currentAlarmIndex: nil, size: screenWidth / 2, alarmModel: .DefaultAlaram())
//                CircularTimeView(currentAlarmIndex: nil, size: screenWidth / 2, alarmModel: .DefaultAlaram())
//                CircularTimeView(currentAlarmIndex: nil, size: screenWidth / 2, alarmModel: .DefaultAlaram())
//                CircularTimeView(currentAlarmIndex: nil, size: screenWidth / 2, alarmModel: .DefaultAlaram())
        }
        
    }
}
