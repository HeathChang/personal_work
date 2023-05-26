//
//  OnboardingView.swift
//  Restart
//
//  Created by Hyunsoo Chang on 2023/05/26.
//

import SwiftUI

struct OnboardingView: View {
    @AppStorage("onboarding") var isOnboardViewActive: Bool = true
    
    var body: some View {
        VStack(spacing: 20){
            Text("Hello, OnBoarding !").font(.largeTitle)
            Button(action: {isOnboardViewActive = false}){
                Text("Starts")
            }
        }
    }
}

struct OnboardingView_Previews: PreviewProvider {
    static var previews: some View {
        OnboardingView()
    }
}
