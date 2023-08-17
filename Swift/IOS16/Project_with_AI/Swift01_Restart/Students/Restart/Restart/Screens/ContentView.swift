import SwiftUI

struct ContentView: View {
    
    @AppStorage("onboarding") var isOnboadrdingViewActive: Bool = true // permanent phone device storage
    
    
    var body: some View {
        ZStack {
            if isOnboadrdingViewActive {
                OnboardingView()
            } else {
                HomeView()
            }
        }
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
