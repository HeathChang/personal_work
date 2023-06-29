import SwiftUI

struct CentralDatePickerView: View {
    let size: CGFloat
    @Binding var alarmModel: AlarmModel

    
    var lineWidth: CGFloat = 10.0
    
    var body: some View {
        VStack{
            Circle()
                .stroke(lightGray, lineWidth: lineWidth)
                .frame(width: size, height: size)
                .overlay {
                    VStack{
                        VStack{
                            GrayedTextView(text: "Start", font: .caption)
                            TimePicker(time: $alarmModel.start.animation(), scale: 1)
                        }
                        Spacer()
                        GrayedTextView(text: "Set Alarm")
                        Spacer()
                        VStack{
                            TimePicker(time: $alarmModel.end.animation(), scale: 1)
                            GrayedTextView(text: "End", font: .caption)
                        }
                    }
                    .padding()
                    .padding(.vertical)
                }
        }
    }
}

struct CentralDatePickerView_Previews: PreviewProvider {
    static var previews: some View {
        CentralDatePickerView(size: 200, alarmModel: .constant(AlarmModel.DefaultAlaram()))
    }
}
