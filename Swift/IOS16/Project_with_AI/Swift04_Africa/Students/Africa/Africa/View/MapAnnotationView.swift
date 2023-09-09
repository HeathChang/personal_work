import SwiftUI

struct MapAnnotationView: View {
    // MARK: PROPERTIES
    var location: NationParkLocationModel
    @State private var animation: Double = 0.0
    
    
    // MARK: BODY
    
    var body: some View {
        ZStack {
            Circle()
                .fill(Color.accentColor)
                .frame(width: 54, height: 54, alignment: .center)
            
            Circle()
                .stroke(Color.accentColor)
                .frame(width: 52, height: 52, alignment: .center)
                .scaleEffect( 1 + CGFloat(animation)) // 밖으로 퍼짐
                .opacity(1 - animation) // 퍼지면서 사라짐
            
            Image(location.image)
                .resizable()
                .scaledToFit()
                .frame(width: 48, height: 48, alignment: .center)
                .clipShape(Circle())
        } // ; ZSTACK
        .onAppear{
            withAnimation(.easeOut(duration: 2).repeatForever(autoreverses: false)) {
                animation = 1
            }
        }
    }
}

// MARK: PREVIEWS

struct MapAnnotationView_Previews: PreviewProvider {
    static var locations: [NationParkLocationModel] = Bundle.main.decode("locations.json")
    static var previews: some View {
        MapAnnotationView(location: locations[0])
            .previewLayout(.sizeThatFits)
            .padding()
    }
}
