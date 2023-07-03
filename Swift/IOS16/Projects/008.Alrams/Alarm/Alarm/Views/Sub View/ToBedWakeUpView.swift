
import SwiftUI

struct ToBedWakeUpView: View {
    let currentIndex: Int?
    @State var alarmModel: AlarmModel
    
    
    var body: some View {
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
                            Menu(content: {
                                //pop-up menu that appears when the user performs a long press or right-click on the view. The menu options defined within the curly braces { ... } will be displayed in the context menu
                                ForEach(Sounds.allCases, id: \.self){ sound in
                                    Button(action: {
                                        alarmModel.sound = sound
                                    }, label: {
                                        Text(sound.rawValue)
                                    })
                                }.padding(.vertical)
                            }, label: {
                                HStack{
                                    Text("Sound")
                                        .fontWeight(.semibold)
                                    
                                    Text(alarmModel.sound.rawValue)
                                        .font(.caption)
                                        .fontWeight(.thin)
                                    
                                }.padding(7)
                                    .overlay( //  to create a layer on top of another element
                                        Capsule() // rounded rectangle with semi-circular ends, resembling a pill or capsule shape
                                            .stroke()
                                    ) // rendered using the default stroke color and width
                            })
                            //                            HStack{
                            //                                Text("Sound")
                            //                                    .fontWeight(.semibold)
                            //
                            //                                Text(alarmModel.sound.rawValue)
                            //                                    .font(.caption)
                            //                                    .fontWeight(.thin)
                            //
                            //                            }.padding(7)
                            //                                .overlay( //  to create a layer on top of another element
                            //                                    Capsule() // rounded rectangle with semi-circular ends, resembling a pill or capsule shape
                            //                                        .stroke()
                            //                                ) // rendered using the default stroke color and width
                            //                                .contextMenu{
                            //                                    //pop-up menu that appears when the user performs a long press or right-click on the view. The menu options defined within the curly braces { ... } will be displayed in the context menu
                            //                                    ForEach(Sounds.allCases, id: \.self){ sound in
                            //                                        Button(action: {
                            //                                            alarmModel.sound = sound
                            //                                        }, label: {
                            //                                            Text(sound.rawValue)
                            //                                        })
                            //                                    }.padding(.vertical)
                            //                                }
                        }
                    }.frame(maxWidth: .infinity, alignment: .leading)
                    
                }.padding()
            }
            
        }.padding().background(cardBackgroundColor.cornerRadius(20)).padding()
    }
}

struct ToBedWakeUpView_Previews: PreviewProvider {
    static var previews: some View {
        ToBedWakeUpView(currentIndex: nil, alarmModel: AlarmModel.DefaultAlaram())
    }
}
