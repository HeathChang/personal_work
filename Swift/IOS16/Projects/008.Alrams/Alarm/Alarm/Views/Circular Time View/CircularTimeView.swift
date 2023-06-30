import SwiftUI

struct CircularTimeView: View {
    let currentAlarmIndex: Int?
    let size: CGFloat
    @State var alarmModel: AlarmModel
    
    var lineWidth: CGFloat = 10.0
    
    var startTime: Date {
        return alarmModel.start
    }
    
    var endTime: Date {
        return alarmModel.end
    }
    
    var startDateToPercent: CGFloat {
        return dateToPercent(date: startTime)
    }
    
    var endDateToPercent: CGFloat {
        return startDateToPercent + percentDifference
    }
    
    var percentDifference: CGFloat {
        let value = dateToPercent(date: endTime) - dateToPercent(date: startTime)
        return value >= 0 ? value: 1 + value
    }
    
    
    var rotateCircleOffset: CGFloat {
        360 * startDateToPercent
    }
    
    var body: some View {
        ZStack {
            // normal circle
            CentralDatePickerView(size: size, alarmModel: $alarmModel)
            // progression > Black
            TimeArcView(percertDiffernce: percentDifference,
                        strokeStyle: StrokeStyle(lineWidth: 20, lineCap: .round, lineJoin: .round),
                        size: size,
                        rotateCircleOffset: rotateCircleOffset,
                        color: .black
            )
            // progression - Gray
            TimeArcView(percertDiffernce: percentDifference,
                        strokeStyle: StrokeStyle(lineWidth: 15, dash: [1,2]),
                        size: size,
                        rotateCircleOffset: rotateCircleOffset,
                        color: .gray
            )
            
            //            First Icon
            //            Second Icon
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
