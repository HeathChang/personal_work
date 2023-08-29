import SwiftUI

struct ContentView: View {
    
    @AppStorage("onboarding") var isOnboadrdingViewActive: Bool = false // permanent phone device storage
    
    
    var body: some View {
        ZStack {
            if isOnboadrdingViewActive {
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
