import SwiftUI

struct ImageExample6_lazyVGrid: View {
    
    var body: some View {
        ImageExplore_Body()
    }
}


struct ImageExplore_Body: View {
    let columns: [GridItem] = [
        GridItem(.flexible()),
        GridItem(.flexible()),
    ];
    var body: some View {
        ScrollView(showsIndicators: false) {
            LazyVGrid(columns: columns) {
                ForEach(Array(MoreImages.allCases.enumerated()), id: \.element) {
                    (index, image) in
                    Image(image.rawValue)
                        .resizable()
                        .scaledToFit()
                        .cornerRadius(10)
                        .shadow(radius: 10)
                        .overlay(
                            Text("\(index)")
                                .foregroundColor(.white)
                                .font(.title)
                                .fontWeight(.bold)
                                .shadow(radius: 20)
                        )
                }
            }
        }
    }
}



struct ImageExample6_lazyVGrid_Previews: PreviewProvider {
    static var previews: some View {
        ImageExample6_lazyVGrid()
    }
}


