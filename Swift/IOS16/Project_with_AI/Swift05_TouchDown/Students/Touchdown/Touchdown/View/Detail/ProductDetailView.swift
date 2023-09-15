
import SwiftUI

struct ProductDetailView: View {
    // MARK: PROPERTIES
    @EnvironmentObject var shop: Shop
    
    // MARK: BODY
    var body: some View {
        VStack(alignment: .leading, spacing: 5){
            // NAVBAR
            NavigationBarDetailView()
                .padding(.horizontal)
                .padding(.top, UIApplication.shared.windows.first?.safeAreaInsets.top)
            // HEADER
            HeaderDetailView()
                .padding(.horizontal)
                .padding(.top, 10)
            // DETAIL TOP
            TopPartDetailView()
                .padding(.horizontal)
                .zIndex(1)
            // DETAIL BOT
            BottomPartDetailView()
            
            VStack(alignment: .center, spacing: 10) {
                // RATINGS + SIZES
                RatingsSizesDetailView()
                    .padding(.top, -20)
                    .padding(.bottom, 10)
                
                // DESCRIPTION
                ScrollView(.vertical, showsIndicators: false){
                    Text(shop.selectedProduct?.description ?? sampleProduct.description)
                        .font(.system(.body, design: .rounded))
                        .foregroundColor(.gray)
                        .multilineTextAlignment(.leading)
                    Spacer()
                } // ; ScrollView
                
                // QUANTITY + FAV
                QuantityFavouriteDetailView()
                    .padding(.vertical, 10)
                
                // ADD TO CART
                AddToCartDetailView()
                    .padding(.bottom, 20)
                
            } // ; VStack > Ratings & Detail Contents & Quantity
            .padding(.horizontal)
            .background(
                Color.white
                    .clipShape(CustomShape())
                    .padding(.top, -105)
            )
        } // ;VStack
        .zIndex(0)
        .ignoresSafeArea(.all, edges: .all)
        .background(
            Color(
                red: shop.selectedProduct?.red ?? sampleProduct.red,
                green: shop.selectedProduct?.green ?? sampleProduct.green,
                blue: shop.selectedProduct?.blue ?? sampleProduct.blue))
        .ignoresSafeArea(.all, edges: .all)
    }
}


// MARK: PREVIEWS
struct ProductDetailView_Previews: PreviewProvider {
    static var previews: some View {
        ProductDetailView()
            .previewLayout(.fixed(width: 375, height: 812))
            .environmentObject(Shop())
    }
}
