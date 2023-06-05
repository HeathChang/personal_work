//
//  ContentView.swift
//  Greetings
//
//  Created by Hyunsoo Chang on 2023/06/05.
//

import SwiftUI


struct DataItemModel {
    let text: String
    let color: Color
}


struct ContentView: View {
    
    let messages = [
        DataItemModel(text: "Hello There", color: .green),
        DataItemModel(text: "Welcome to Swift Programming", color: .gray),
        DataItemModel(text: "Are you Ready?", color: .yellow),
        DataItemModel(text: "Start Exploring", color: .red),
        DataItemModel(text: "Boom", color: .purple),
    ];
    
    var body: some View {
        VStack(alignment: .leading) {
            // ExtractedView: technique refers to the process of extracting a reusable view from existing code. 
            TextView(text: messages[0].text, color: messages[0].color)
            TextView(text: messages[1].text, color: messages[1].color)
            TextView(text: messages[2].text, color: messages[2].color)
            TextView(text: messages[3].text, color: messages[3].color)
            TextView(text: messages[4].text, color: messages[4].color)
        }
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

struct TextView: View {
    let text: String;
    let color: Color;
    
    var body: some View {
        Text(text)
            .font(.title2)
            .fontWeight(.semibold)
            .foregroundColor(Color.white)
            .padding()
            .background(color.opacity(0.8))
            .cornerRadius(/*@START_MENU_TOKEN@*/20.0/*@END_MENU_TOKEN@*/)
            .shadow(color: color.opacity(0.4), radius:5, x: 10, y: 10)
    }
}
