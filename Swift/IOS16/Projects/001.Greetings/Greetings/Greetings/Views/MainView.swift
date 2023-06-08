import SwiftUI

struct MainView: View {
    // @Environment: providing a way to share data or configuration settings across multiple views without explicitly passing them as parameters.
    @Environment(\.horizontalSizeClass) var horizontalSizeClass;
    @Environment(\.verticalSizeClass) var verticalSizeClass;
    @Binding var language: String;
    @Binding var layoutDirection: LayoutDirection;
    
    var body: some View {
        
        if(horizontalSizeClass == .compact && verticalSizeClass == .regular){
            // Portrait
            NavigationStack {
                GreetingsView().toolbar{ ToolbarItem(placement: .navigationBarTrailing){
                    LanguageOptionsView(language: $language, layoutDirection: $layoutDirection)
                }
                }
            }
        } else {
            // LandScape
            NavigationStack {
                LandScapeGreetingsView()
                    .toolbar{
                        ToolbarItem(
                            placement: .navigationBarTrailing
                        ){
                            LanguageOptionsView(language: $language, layoutDirection: $layoutDirection)
                        }
                    }
            }
            
        }
    }
}

struct MainView_Previews: PreviewProvider {
    static var previews: some View {
        MainView(
            language: .constant("en"),
            layoutDirection: .constant(.leftToRight))
    }
}
