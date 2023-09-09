import SwiftUI

struct GalleryView: View {
    // MARK: PROPERTIES
    
    
    // MARK: BODY
    var body: some View {
        ScrollView(.vertical, showsIndicators: false){
            Text("Hello World")
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .background(MotionAnimationView())
    }
}


// MARK: PREVIEWS
struct GalleryView_Previews: PreviewProvider {
    static var previews: some View {
        GalleryView()
    }
}
