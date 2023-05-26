//
//  ContentView.swift
//  Restart
//
//  Created by Hyunsoo Chang on 2023/05/26.
//

import SwiftUI

struct ContentView: View {
    // 1. AppStorage: store  value on the device's permanent storage by utilizing a getting set method.
    // 2. "onboarding": Unique Key identifier: Used to edit or recall it saved value on the device storage.

    @AppStorage("onboarding") var isOnboardViewActive: Bool = true
    var body: some View {
        ZStack{
            if isOnboardViewActive {
                OnboardingView()
            } else {
                HomeView()
            }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
