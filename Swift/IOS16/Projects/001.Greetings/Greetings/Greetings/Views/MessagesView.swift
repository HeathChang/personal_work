import SwiftUI
struct MessagesView: View {
    var body: some View {
        VStack(alignment: .leading) {
            ForEach(messages, content: {dataItem in
                TextView(text: dataItem.text, color: dataItem.color)
            })
        }.padding()
    }
}

