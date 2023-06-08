import SwiftUI

struct LanguageOptionsView: View {
    @Binding var language: String;
    @Binding var layoutDirection: LayoutDirection;
    
    
    var body: some View {
        Image(systemName: "gearshape.fill")
            .contextMenu{
                Button(action: {
                    language = "en"
                    layoutDirection = .leftToRight
                }, label: {Text("English")})
                Button(action: {
                    language = "ko"
                    layoutDirection = .leftToRight
                }, label: {Text("Korean")})
                Button(action: {
                    language = "ja"
                    layoutDirection = .leftToRight
                }, label: {Text("Japnanese")})
            }
    }
}

struct LanguageOptionsView_Previews: PreviewProvider {
    static var previews: some View {
        LanguageOptionsView(language: .constant("en"), layoutDirection: .constant(.leftToRight))
    }
}
