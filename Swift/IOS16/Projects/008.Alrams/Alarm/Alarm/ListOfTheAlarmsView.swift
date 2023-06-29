
import SwiftUI

struct ListOfTheAlarmsView: View {
    var alarmViewModels: [AlarmModel]
    
    
    var body: some View {
        NavigationStack {
            ZStack {
                List {
                    ForEach(0 ..< alarmViewModels.count, id: \.self) { i in
                        let alarmModel = alarmViewModels[i]
                        NavigationLink {
                            AddEditAlarmView(currentIndex: i, alarmModel: alarmModel)
                        } label: {
                            HStack {
                                AlarmRowView(model: alarmModel, i: i)
                            }
                        }
                        
                    }
                }
                
            }
            .navigationTitle("Alarm LIst")
            .toolbar(){
                // Edit
                ToolbarItem(placement: .navigationBarLeading){
                    EditButton()
                }
                
                // Add
                ToolbarItem(placement: .navigationBarTrailing){
                    NavigationLink {
                        AddEditAlarmView(currentIndex: nil, alarmModel: AlarmModel.DefaultAlaram())
                    } label: {
                        Text("+")
                            .font(.largeTitle)
                            .fontWeight(.semibold)
                            .foregroundColor(black)
                    }
                    
                }
                
            }
        }
        
    }
}

struct ListOfTheAlarmsView_Previews: PreviewProvider {
    static var previews: some View {
        ListOfTheAlarmsView(alarmViewModels: AlarmModel.DummyAlarmData())
    }
}
