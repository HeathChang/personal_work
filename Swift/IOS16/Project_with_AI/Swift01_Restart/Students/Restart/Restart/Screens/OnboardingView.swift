

import SwiftUI

struct OnboardingView: View {
    
    @AppStorage("onboarding") var isOnboadrdingViewActive: Bool = true
    
    var body: some View {
        VStack(spacing: 20) {
            Text("OnBoarding")
                .font(.largeTitle)
            Button(action: {
                isOnboadrdingViewActive = false
            }, label: {
                Text("Starts")
            })
        }
    }
}

struct OnboardingView_Previews: PreviewProvider {
    static var previews: some View {
        OnboardingView()
    }
}
