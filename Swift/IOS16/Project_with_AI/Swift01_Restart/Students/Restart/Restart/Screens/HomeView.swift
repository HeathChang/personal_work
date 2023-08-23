
import SwiftUI

struct HomeView: View {
    @AppStorage("onboarding") var isOnboadrdingViewActive: Bool = true
    
    var body: some View {
        VStack(spacing: 20) {
            // Header
            Spacer()
            
            ZStack {
                CircleGroupView(ShapeColor: Color.gray, ShapeOpacity: 0.1)
                Image("character-2")
                    .resizable()
                    .scaledToFit()
                    .padding()
            }
            
            // Center
            Text("The time that leads to mastery is dependent on the intensity of our focus")
                .font(.title3)
                .fontWeight(.light)
                .foregroundColor(.secondary)
                .multilineTextAlignment(.center)
                .padding()
            
            
            // Footer
            
            Spacer()
            
            Button(action: {
                isOnboadrdingViewActive = true
            }, label: {
                Image(systemName: "arrow.triangle.2.circlepath.circle.fill")
                    .imageScale(.large)
                Text("Restarts")
                    .font(.system(.title3, design: .rounded))
                    .fontWeight(.bold)
            })
            .buttonStyle(.borderedProminent)
            .buttonBorderShape(.capsule)
            .controlSize(.large)
        }
    }
}

struct HomeView_Previews: PreviewProvider {
    static var previews: some View {
        HomeView()
    }
}
