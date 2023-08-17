
import SwiftUI

struct BannerCard: View {
    
    var banner: AssetBanner
    var body: some View {
        Color(banner.backgroundColor)
            .overlay {
                VStack{
                    Text(banner.title)
                        .font(.title)
                    Text(banner.description)
                        .font(.subheadline)
                }
            }
    }
    
    
}

struct BannerCard_Previews: PreviewProvider {
    static var previews: some View {

        VStack{
            BannerCard(banner: AssetBanner(title: "공지사항", description: "공지사항 확인해주세요.", backgroundColor: .red))
        }
    }
}
