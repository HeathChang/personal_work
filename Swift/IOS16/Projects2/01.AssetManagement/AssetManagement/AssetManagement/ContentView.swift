
import SwiftUI

struct ContentView: View {
    @State private var selection: Tab = Tab.asset
    
    enum Tab {
        case asset
        case recommend
        case alarm
        case setting
    }
    // ios 15부터, tab-bar 구분선 추가해줘야함.
    init() {
        UITabBar.appearance().scrollEdgeAppearance = .init()
    }
    
    var body: some View {
        VStack{
            // 하나의 화면에 여러 개의 View를 Tab 방식
            TabView(selection: $selection){
                AssetView()
                    .edgesIgnoringSafeArea(.all)
                    .tabItem {
                        Image(systemName: "dollarsign.circle.fill")
                        Text("자산")
                    }
                    .tag(Tab.asset)
                
                Color.blue
                    .edgesIgnoringSafeArea(.all)
                    .tabItem {
                        Image(systemName: "hand.thumbsup.fill")
                        Text("추천")
                    }
                    .tag(Tab.recommend)
                
                Color.yellow
                    .badge(10)
                    .edgesIgnoringSafeArea(.all)
                    .tabItem {
                        Image(systemName: "bell.fill")
                        Text("알림")
                    }
                    .tag(Tab.alarm)
                
                Color.red
                    .edgesIgnoringSafeArea(.all)
                    .tabItem {
                        Image(systemName: "gearshape.fill")
                        Text("설정")
                    }
                    .tag(Tab.setting)
                
            }
            .preferredColorScheme(.light)
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
