
import SwiftUI

struct ToBedWakeUpView: View {
    let currentIndex: Int?
    @State var alarmModel: AlarmModel
    
    
    var body: some View {
        NavigationStack {
            VStack {
                // Cancel and Save Button
                CancelSaveAlarm(currentAlarmIndex: currentIndex, alarmModel: $alarmModel)
                
                /// Alarm Toggler
                AlarmToggleView(alarmEnabled: $alarmModel.alarmEnabled)
                
                Divider()
                
                HStack{
                    VStack {
                        Grid{
                            GridRow{
                                TimeOfDayIcon(date: alarmModel.start)
                                    .font(.largeTitle)
                                VStack(alignment: .leading){
                                    GrayedTextView(text: "Start")
                                    TimePicker(time: $alarmModel.start, scale: 1.3)
                                }
                            }
                            GridRow{
                                HStack{
                                    Divider()
                                        .frame(height: 30)
                                        .padding(2)
                                }
                            }
                            GridRow{
                                Image(systemName: alarmModel.activity)
                                    .foregroundColor(alarmModel.activityColor)
                                    .font(.headline)
                                SelectActivityView(currentColorIndex: $alarmModel.colorIndex,
                                                   currentActivity:  $alarmModel.activity)
                            }.padding(.vertical)
                            GridRow{
                                HStack{
                                    Divider()
                                        .frame(height: 30)
                                        .padding(2)
                                }
                            }
                            GridRow{
                                TimeOfDayIcon(date: alarmModel.end)
                                    .font(.largeTitle)
                                VStack(alignment: .leading){
                                    TimePicker(time: $alarmModel.end, scale: 1.3)
                                    
                                    GrayedTextView(text: "End")
                                }
                            }
                            GridRow{
                                Text("")
                                SoundMenuViewFromButton(alarmModel: $alarmModel)
                                
                            }
                        }.frame(maxWidth: .infinity, alignment: .leading)
                        
                    }.padding()
                }
                
            }.padding().background(cardBackgroundColor.cornerRadius(20)).padding()
        }
    }
}

struct ToBedWakeUpView_Previews: PreviewProvider {
    static var previews: some View {
        ZStack{
            Color.gray.opacity(0.3).ignoresSafeArea()
            ToBedWakeUpView(currentIndex: nil, alarmModel: AlarmModel.DefaultAlaram())
        }
    }
}
