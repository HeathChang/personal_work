
import SwiftUI

struct AddEditAlarmView: View {
    let currentIndex: Int?
    @State var alarmModel: AlarmModel
    @State private var showYouDidItView: Bool = true
    
    var body: some View {
        ZStack {
            backgroundColor
                .opacity(0.7)
                .ignoresSafeArea()
            
            VStack{
                if showYouDidItView {
                    YouDidItView()
                }
                ToBedWakeUpView(currentIndex: currentIndex, alarmModel: alarmModel)
            }
        }
        .onAppear(){
            DispatchQueue.main.asyncAfter(deadline: .now() + 3.0){
                withAnimation{
                    showYouDidItView = false
                }
            }
        }
    }
}

struct AddEditAlarmView_Previews: PreviewProvider {
    static var previews: some View {
        AddEditAlarmView(currentIndex: nil, alarmModel: .DefaultAlaram())        .ignoresSafeArea()
        
    }
}
