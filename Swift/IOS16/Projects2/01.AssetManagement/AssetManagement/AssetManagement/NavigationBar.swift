import SwiftUI

struct NavigationBar: ViewModifier {
    var title: String = ""
    func body(content: Content) -> some View {
        return content
            .navigationBarItems(leading: Text(title).font(.system(size: 24, weight: .bold)).padding(), trailing: Button(action: {
                print("자산 추가 버튼")
            }, label: {
                Image(systemName: "plus")
                Text("자산 추가")
                    .font(.system(size: 12))
            })
                .accentColor(.black)
                .padding(EdgeInsets(top: 8, leading: 8, bottom: 8, trailing: 8))
                .overlay(RoundedRectangle(cornerRadius: 10).stroke(Color.black)) //덧씌우기
            )
            .navigationBarTitleDisplayMode(.inline)
            .onAppear{
                let appearance = UINavigationBarAppearance()
                appearance.configureWithOpaqueBackground()
                appearance.backgroundColor = UIColor(white: 1, alpha: 0.5)
                UINavigationBar.appearance().standardAppearance = appearance
                UINavigationBar.appearance().compactAppearance = appearance
                UINavigationBar.appearance().scrollEdgeAppearance = appearance
            }
        
    }
}

// convenient way to apply NavigationBar modifier to any view
extension View {
    func navigationBarWithButtonStyle(_ title: String) -> some View {
        return self.modifier(NavigationBar(title: title))
    }
}




struct NavigationBar_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView{
            Color.gray.edgesIgnoringSafeArea(.all)
                .navigationBarWithButtonStyle("내자산")
        }
    }
}
