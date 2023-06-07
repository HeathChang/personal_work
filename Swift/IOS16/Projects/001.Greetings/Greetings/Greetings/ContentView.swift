//
//  ContentView.swift
//  Greetings
//
//  Created by Hyunsoo Chang on 2023/06/05.
//

import SwiftUI


struct DataItemModel: Identifiable {
    // In order to use ForEach, need to set verifier.
    let id = UUID()
    let text: String
    let color: Color
}

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

struct ContentView: View {
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



struct TextView: View {
    let text: String;
    // The purpose of using @State is to allow the view to monitor and react to changes in the state, updating its content accordingly.
    @State var color: Color;
    
    let colors: [Color] = [
        .red, .green, .blue, .orange,
        .yellow, .purple,
        Color(red: 0.5, green: 0, blue: 0.5),
        Color(red: 0, green: 0.5, blue: 0.5),
        Color(red: 139/255, green: 207/255, blue: 240/255),
        Color(red: 1, green: 215/255, blue: 0),
        
    ]
    var body: some View {
        Text(text)
            .font(.title2)
            .fontWeight(.semibold)
            .foregroundColor(Color.white)
            .padding()
            .background(color.opacity(0.8))
            .cornerRadius(/*@START_MENU_TOKEN@*/20.0/*@END_MENU_TOKEN@*/)
            .shadow(color: color.opacity(0.4), radius:5, x: 10, y: 10)
            .onTapGesture {
                let length = colors.count
                let randomIndex = Int.random(in: 0 ..< length)
                color = colors[randomIndex]
                // will occur error if not @State car color: Color;
                // why?
                // Immutable Self: In SwiftUI, the view struct itself is immutable by default. It means you cannot modify the properties of self directly within the view.
                
                // @State Property Wrapper: When you use the @State property wrapper on a property within a view, SwiftUI creates a separate storage for that property and automatically generates a getter and a setter for it. The property wrapper ensures that changes to the state property trigger the appropriate view updates.
                
                
                
            }
    }
}

struct TitleView: View {
    @State var isRotated: Bool = false;
    @State var captionIndex: Int = 0;
    let caption: [String] = [
        "Exploring iOS 15 programming",
        "Learning how to bake",
        "Programming recipes",
        "A quest for knowledge"
    ]
    
    var body: some View {
        HStack {
            VStack(alignment: .leading, spacing: -1.0) {
                Text("Greetings").font(.largeTitle).fontWeight(.bold)
                Text(caption[captionIndex]).font(.headline).fontWeight(.thin)
            }
            .padding()
            .onTapGesture {
                captionIndex = Int.random(in: 0 ..< caption.count)
            }
            Spacer()
            Circle()
                .strokeBorder(
                    AngularGradient(
                        gradient: Gradient(colors: [.pink, .purple, .blue, .orange, .yellow]),
                        center: .center,
                        angle: .zero),
                    lineWidth:15
                )
//            isRotated
                .rotationEffect(isRotated ? .zero: .degrees(180))
                .frame(
                    maxWidth: 70,
                    maxHeight: 70
                )
                .onTapGesture {
                    withAnimation(Animation.spring()){
                        //.toggle(): Toggles the Boolean variable’s value.
                        isRotated.toggle()
                    }
                }
        }.padding()
    }
}

struct MessagesView: View {
    var body: some View {
        VStack(alignment: .leading) {
            ForEach(messages, content: {dataItem in
                TextView(text: dataItem.text, color: dataItem.color)
            })
        }.padding()
    }
}

struct BackgroundView: View {
    // Linear Background
    var body: some View {
        LinearGradient(colors: [Color("blue"),
                                Color("blue2")
//                                Color(red: 139/255, green: 80/255, blue: 240/255)
                                ],
                       startPoint: .topLeading,
                       endPoint: .bottomLeading)
        .opacity(0.8)
        .ignoresSafeArea()
    }
}




struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
//        ContentView()

        ContentView()
            .preferredColorScheme(.dark) // dark mode
    }
}
