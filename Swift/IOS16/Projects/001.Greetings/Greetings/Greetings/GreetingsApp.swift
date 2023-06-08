
import SwiftUI

let LEFT_TO_RIGHT = "leftToRight"
let RIGHT_TO_LEFT = "rightToLeft"

@main
struct GreetingsApp: App {
    // to store and retrieve user preferences or application settings in SwiftUI apps. It simplifies the process of persisting and accessing user-specific data without the need for managing the storage and retrieval logic manually
    @AppStorage("language") var language: String = "en"; // if
    @State var layoutDirection: LayoutDirection = .leftToRight;
    
    
    
    var body: some Scene {
        WindowGroup {
            MainView(language: $language, layoutDirection: $layoutDirection)
            // locale environment value represents the preferred language and region settings of the user.
                .environment(\.locale, Locale(identifier: language))
            //layoutDirection environment value controls the layout direction of the user interface, particularly for languages that are written from right to left (RTL), such as Arabic or Hebrew. 
                .environment(\.layoutDirection, layoutDirection)
        }
    }
}





