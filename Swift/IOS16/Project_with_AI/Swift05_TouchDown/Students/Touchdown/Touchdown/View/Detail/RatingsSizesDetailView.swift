
import SwiftUI

struct RatingsSizesDetailView: View {
    // MARK: PROPERTIES
    
    let sizes: [String] = ["XS", "S","M","L","XL"]
    
    // MARK: BODY
    var body: some View {
        HStack(alignment: .top, spacing:  3) {
            // MARK: RATINGS
            VStack(alignment: .leading, spacing:  3){
                Text("Ratings")
                    .font(.footnote)
                    .fontWeight(.semibold)
                    .foregroundColor(colorGray)
                
                HStack(alignment: .center, spacing:  3){
                    ForEach(0...4,id: \.self){ item in
                        Button {
                            
                        } label: {
                            Image(systemName: "star.fill")
                                .frame(width: 28, height: 28)
                                .background(colorGray.cornerRadius(5))
                                .foregroundColor(Color.white)
                        }
                        
                    }
                } // ; HStack > Star ICON
            } // ; VStack > LHS Ratings
            
            
            Spacer()
            // MARK: SIZES
            VStack(alignment: .trailing, spacing:  3){
                Text("Sizes")
                    .font(.footnote)
                    .fontWeight(.semibold)
                    .foregroundColor(colorGray)
                
                HStack(alignment: .center, spacing: 5){
                    ForEach(sizes,id: \.self){ size in
                        Button {
                            
                        } label: {
                            Text(size)
                                .font(.footnote)
                                .fontWeight(.heavy)
                                .foregroundColor(colorGray)
                                .frame(width: 28, height: 28)
                                .background(Color.white.cornerRadius(5))
                                .background(
                                    RoundedRectangle(cornerRadius: 5)
                                        .stroke(colorGray, lineWidth: 2)
                                )
                        }
                        
                    }
                } // ; HStack > Star ICON
                
            } // ; VStack > RHS Ratings
        } // ; HStack
    }
}


// MARK: PREVIEWS
struct RatingsSizesDetailView_Previews: PreviewProvider {
    static var previews: some View {
        RatingsSizesDetailView()
            .previewLayout(.sizeThatFits)
            .padding()
    }
}
