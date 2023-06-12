import SwiftUI

struct ImageExploreExample4: View {
    @State private var showName = false;
    var body: some View {
        ScrollView(showsIndicators: false) {
            VStack(spacing: 30) {
                ForEach(ImgType.allCases, id: \.self) { image in
                    let name = image.rawValue
                    let niceName = name.replacingOccurrences(of: "img", with: "") // remove img from image Name
                    Image(name)
                        .resizable()
                        .frame(width: UIScreen.main.bounds.width * 0.8, height: UIScreen.main.bounds.height*0.25)
                        .scaledToFit()
                        .cornerRadius(20)
                        .padding()
                        .overlay(
                            Text(showName ? niceName.capitalized : "")
                                .foregroundColor(.white)
                                .font(.title)
                                .fontWeight(.semibold)
                                .shadow(
                                    color: .white.opacity(0.7),radius: 5,x: 5, y: 5)
                            
                        )
                        .onTapGesture {
                            withAnimation(){
                                showName.toggle();
                            }
                        }
                    
                }
            }
        }
        
    }
}

struct ImageExploreExample4_Previews: PreviewProvider {
    static var previews: some View {
        ImageExploreExample4()
    }
}
