
import SwiftUI

struct HeaderDetailView: View {
    
    // MARK: PROPERTY
    @EnvironmentObject var shop: Shop
    // MARK: BODY
    var body: some View {
        VStack(alignment: .leading, spacing: 6){
            Text("Protextice Gear")
            Text(shop.selectedProduct?.name ?? sampleProduct.name)
                .font(.largeTitle)
                .fontWeight(.black)
        }
        .foregroundColor(.white)
    }
}

struct HeaderDetailView_Previews: PreviewProvider {
    static var previews: some View {
        HeaderDetailView()
            .previewLayout(.sizeThatFits)
            .padding()
            .background(Color.gray)
            .environmentObject(Shop())
    }
}
