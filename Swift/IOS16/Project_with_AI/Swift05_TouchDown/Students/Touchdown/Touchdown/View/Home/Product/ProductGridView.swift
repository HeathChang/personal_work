
import SwiftUI

struct ProductGridView: View {
    @EnvironmentObject var shop: Shop

    var body: some View {
        LazyVGrid(columns: gridLayout, spacing: 15){
            ForEach(products){ product in
                ProductItemView(product: product)
                    .onTapGesture {
                        feedback.impactOccurred()
                        
                        withAnimation(.easeOut) {
                            shop.selectedProduct = product
                            shop.showingProduct = true
                        }
                    }
            }
        }.padding(15) // ; LazyVGrid
    }
}

struct ProductGridView_Previews: PreviewProvider {
    static var previews: some View {
        ProductGridView()
            .environmentObject(Shop())
    }
}
