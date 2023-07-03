//
//  MainAddEditView.swift
//  Alarm
//
//  Created by Hyunsoo Chang on 2023/07/03.
//

import SwiftUI

struct MainAddEditAlarmView: View {
    let currnetAlaramIndex: Int?
    @State var alarmModel: AlarmModel
    @State private var selectedTab = "One"
    
    
    var body: some View {
        TabView(selection:$selectedTab){
            AddEditAlarmView(currentIndex: currnetAlaramIndex, alarmModel: alarmModel)
                .tag("one")
            AddEditAlarmView(currentIndex: currnetAlaramIndex, alarmModel: alarmModel)
                .tag("two")
        }
        // Pagination
        .onAppear(){
            UIPageControl
                .appearance()
                .currentPageIndicatorTintColor = .blue
        }
        .tabViewStyle(.page(indexDisplayMode: .always))
        .ignoresSafeArea()
    }
}

struct MainAddEditView_Previews: PreviewProvider {
    static var previews: some View {
        MainAddEditAlarmView(currnetAlaramIndex: nil, alarmModel: .DefaultAlaram())
    }
}
