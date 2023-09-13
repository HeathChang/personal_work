
import SwiftUI

struct ContentView: View {
    // MARK: PROPERTIES
    
    let windowScene = UIApplication.shared.windows.first?.safeAreaInsets
    
    // MARK: BODY
    var body: some View {
        ZStack {
            VStack(spacing: 0) {
                // MARK: HEADER
                NavigationBarView()
                    .padding(.horizontal, 15)
                    .padding(.bottom)
                    .padding(.top, windowScene?.top) // > set the value itself
                    .background(Color.white)
                    .shadow(color: .black.opacity(0.05), radius: 5,x:0,y:5)
                
              
                ScrollView(.vertical, showsIndicators: false){
                    VStack(spacing: 0){
                        // MARK: BODY
                        FeaturedTabView()
                            .frame(height: 220)
                            .padding(.vertical, 20)
                        
                        CategoryGridView()
                     
                        // MARK: FOOTER
                        FooterView()
                            .padding(.horizontal)
                    } //; VSTACK
                } //; SCROLLVIEW
            
            } // ; VSTACK
            .background(colorBackground.ignoresSafeArea(.all, edges: .all))
        } // ; ZSTACK
        .ignoresSafeArea(.all, edges: .top)
    }
}

// MARK: PREVIEWS
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
