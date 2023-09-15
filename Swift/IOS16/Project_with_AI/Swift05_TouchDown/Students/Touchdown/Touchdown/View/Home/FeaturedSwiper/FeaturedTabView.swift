
import SwiftUI

struct FeaturedTabView: View {
    // MARK: PROPERTIES

    var body: some View {
        TabView{
            ForEach(players){ player in
                FeaturedItemView(player: player)
                    .padding(.top, 10)
                    .padding(.horizontal,15)
            }
        }// ; TAB
        .tabViewStyle(PageTabViewStyle(indexDisplayMode: .always))
        .frame(height: 220)
        .padding(.vertical, 20)
        
    }
}

struct FeaturedTabView_Previews: PreviewProvider {
    static var previews: some View {
        FeaturedTabView()
            .background(.gray)
    }
}
