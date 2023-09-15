
import SwiftUI

struct ContentView: View {
    // MARK: PROPERTIES
    
    let windowScene = UIApplication.shared.windows.first?.safeAreaInsets
    @EnvironmentObject var shop: Shop
    
    
    // MARK: BODY
    var body: some View {
        ZStack {
            if shop.showingProduct == false && shop.selectedProduct == nil {
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
                            // MARK: TABVIEW > Swiper
                            FeaturedTabView()
                       
                            // MARK: Category
                            CategoryGridView()
                            
                            // MARK: Helmet
                            TitleView(title: "Helmets")
                            ProductGridView()
                            
                            // MARK: Brand
                            TitleView(title: "Brands")
                            BrandGridView()
                            
                            
                            // MARK: FOOTER
                            FooterView()
                               
                        } //; VSTACK
                    } //; SCROLLVIEW
                    
                } // ; VSTACK
                .background(colorBackground.ignoresSafeArea(.all, edges: .all))
            } else {
                ProductDetailView()
            }
        } // ; ZSTACK
        .ignoresSafeArea(.all, edges: .top)
    }
}

// MARK: PREVIEWS
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
            .environmentObject(Shop()) // need to add enviroment object to use
    }
}
