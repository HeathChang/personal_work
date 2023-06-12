import SwiftUI

struct ImageExploreExample3: View {
    var body: some View {
        ScrollView(showsIndicators: false) {
            VStack {
                ForEach(ImgType.allCases, id: \.self) {
                    image in
                    Image(image.rawValue)
                        .resizable()
                        .scaledToFit()
                        .cornerRadius(20)
                        .padding()
                        .shadow(radius: 10)
                }
            }
        }
    }
}

struct ImageExploreExample3_Previews: PreviewProvider {
    static var previews: some View {
        ImageExploreExample3()
    }
}
