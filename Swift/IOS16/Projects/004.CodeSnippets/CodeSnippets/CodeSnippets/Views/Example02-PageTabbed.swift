import SwiftUI

struct Example02_PageTabbed: View {
    @State private var selectedTab = "One";
    var body: some View {
        
        
        
        ZStack {
            TabView(selection: $selectedTab){
                HelloView()
                    .tag("One")
                ByeView()
                    .tag("Two")
                GenericView(color: Color.gray, opacity: 0.7, text: "Good Afternoon")
                    .tag("Three")
                GenericView(color: Color.yellow, opacity: 0.7, text: "Good Night")
                    .tag("Four")
            }
            .tabViewStyle(.page(indexDisplayMode: .always))
        .ignoresSafeArea()
        }
    }
}


struct Example02_PageTabbed_Previews: PreviewProvider {
    static var previews: some View {
        Example02_PageTabbed()
    }
}
