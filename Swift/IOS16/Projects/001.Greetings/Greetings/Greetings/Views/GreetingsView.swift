
import SwiftUI




let messages = [
//    DataItemModel(text: "Hello There", color: .green),
//    DataItemModel(text: "Welcome to Swift Programming", color: .gray),
//    DataItemModel(text: "Are you Ready?", color: .yellow),
//    DataItemModel(text: "Start Exploring", color: .red),
//    DataItemModel(text: "Boom", color: .purple),
    
    DataItemModel(text: "Hello There", color: Color("green")),
    DataItemModel(text: "Welcome to Swift Programming", color: Color("gray")),
    DataItemModel(text: "Are you Ready?", color: Color("yellow")),
    DataItemModel(text: "Start Exploring", color: Color("red")),
    DataItemModel(text: "Boom", color: Color("purple")),
];

struct GreetingsView: View {
    var body: some View {
        ZStack {
            BackgroundView(); // safe area: 남는 영역 ignore
            VStack(alignment: .leading) {
                TitleView()
                Spacer()
                MessagesView()
                Spacer()
                Spacer()
                
                
                // ExtractedView: technique refers to the process of extracting reusable view from existing code.
                //            TextView(text: messages[0].text, color: messages[0].color)
                //            TextView(text: messages[1].text, color: messages[1].color)
                //            TextView(text: messages[2].text, color: messages[2].color)
                //            TextView(text: messages[3].text, color: messages[3].color)
                //            TextView(text: messages[4].text, color: messages[4].color)
            }
        }
    }
}

struct GreetingsView_Previews: PreviewProvider {
    static var previews: some View {
        //        ContentView()
        
        GreetingsView()
            .preferredColorScheme(.dark) // dark mode
    }
}
