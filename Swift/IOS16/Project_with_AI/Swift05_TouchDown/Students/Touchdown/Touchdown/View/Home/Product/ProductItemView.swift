
import SwiftUI

struct ProductItemView: View {
    // MARK: PROPERTIES

    let product: Product
    
    // MARK: BODY
    var body: some View {
        VStack(alignment: .leading, spacing: 6){
            // photo
            ZStack{
                Image(product.image)
                    .resizable()
                    .scaledToFit()
                    .padding(10)
            } // ; ZSTACK
            .background(Color(red: product.red, green: product.green, blue: product.blue))
            
            // name
            Text(product.name)
                .font(.title3)
                .fontWeight(.black)
            
            // price
            Text("\(product.formattedPrice)")
                .fontWeight(.semibold)
                .foregroundColor(.gray)
                .frame(maxWidth:.infinity, alignment: .trailing)
            
        } // ; VSTACK
    }
}

// MARK: PREVIEWS
struct ProductItemView_Previews: PreviewProvider {
    static var previews: some View {
        ProductItemView(product: products[0])
            .previewLayout(.fixed(width: 200, height: 300))
            .padding()
            .background(colorBackground)
    }
}
