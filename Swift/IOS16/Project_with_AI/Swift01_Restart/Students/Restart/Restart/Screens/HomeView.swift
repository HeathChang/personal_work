
import SwiftUI

struct HomeView: View {
    @AppStorage("onboarding") var isOnboadrdingViewActive: Bool = true
    
    var body: some View {
        VStack(spacing: 20) {
            Text("Home")
                .font(.largeTitle)
            Button(action: {
                isOnboadrdingViewActive = true
            }, label: {
                Text("Starts")
            })
        }
    }
}

struct HomeView_Previews: PreviewProvider {
    static var previews: some View {
        HomeView()
    }
}
