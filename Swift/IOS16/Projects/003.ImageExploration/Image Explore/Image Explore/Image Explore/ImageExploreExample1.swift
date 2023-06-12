import SwiftUI

struct ImageExploreExample1: View {
    // Using two Image might cause problem in Xcode14.2, use V-stack or dynamic to avoid the issue.
    @State private var scaleToFit = true;
    var frameWidth: CGFloat? {
        return scaleToFit ? nil :UIScreen.main.bounds.width * 0.8
    }
    
    var frameHeight: CGFloat? {
        return scaleToFit ? nil :UIScreen.main.bounds.height * 0.25
    }
    
    var aspectRation: ContentMode {
        return scaleToFit ? .fit: .fill
    }
    
    
    var body: some View {
        Image(imgLightening1)
            .resizable()
            .frame(width: frameWidth, height: frameHeight)
            .aspectRatio(contentMode: aspectRation)
            .scaledToFit()
            .cornerRadius(20)
            .padding()
            .onTapGesture {
                scaleToFit.toggle()
            }
    }
}

struct ImageExploreExample1_Previews: PreviewProvider {
    static var previews: some View {
        ImageExploreExample1()
    }
}
