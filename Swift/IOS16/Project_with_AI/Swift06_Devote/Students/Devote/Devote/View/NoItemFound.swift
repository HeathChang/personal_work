
import SwiftUI

struct NoItemFound: View {
    var body: some View {
        VStack {
            ZStack{
                
                Text("No Item Found")
                    .font(.system(size: 40, weight: .heavy, design: .rounded))
                Image(systemName: "nosign")
                    .resizable()
                    .scaledToFit()
                    .opacity(0.3)
                
            }
            .padding()
            .frame( width: .infinity, height: 500)
            .padding()
            
            
            
            
        }
        
    }
}

struct NoItemFound_Previews: PreviewProvider {
    static var previews: some View {
        NoItemFound()
            .previewLayout(.sizeThatFits)
            .padding()
    }
}
