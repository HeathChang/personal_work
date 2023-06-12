import SwiftUI



struct ImageExample5_async: View {
    let appleURL = "https://images.pexels.com/photos/2417848/pexels-photo-2417848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    
    @State private var scaleToFit = true
    var body: some View {
        ImageFromURL(
            urlString: appleURL,
            width: .infinity, // does not mean the image will become infinitely wide. Instead, it means the image will expand to the maximum width available within the container or parent view.
            height: 300,
            contentMode: scaleToFit ? .fit : .fill,
            cornerRadius: 20
        )
        .shadow(radius: 30)
        .background(.red) // background before padding
        .padding() // adding padding will increase content size, thus background will change
        .background(.blue) // background after padding
        .onTapGesture {
            scaleToFit.toggle()
        }
        
    }
}

struct ImageFromURL: View {
    let urlString: String;
    let width: CGFloat;
    let height: CGFloat;
    let contentMode: ContentMode;
    let cornerRadius: CGFloat;
    
    var body: some View{
        // AsyncImage do not have resizable or frame etc..
        AsyncImage(url: URL(string: urlString)){
            // phase closure allows to handle different loading phases of an image and display appropriate views accordingly.
            phase in
            switch phase {
            case .empty:
                ProgressView()
            case .success(let image):
                image
                    .resizable()
                    .aspectRatio(contentMode: contentMode)
                    .frame(width: width, height: height)
                    .cornerRadius(cornerRadius)
            case .failure:
                Image(systemName: "photo")
                    .imageScale(.large)
            @unknown default:
                EmptyView()
            }
        }
    }
}

struct ImageExample5_async_Previews: PreviewProvider {
    static var previews: some View {
        ImageExample5_async()
    }
}
