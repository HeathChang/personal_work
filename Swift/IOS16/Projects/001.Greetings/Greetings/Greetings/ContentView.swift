//
//  ContentView.swift
//  Greetings
//
//  Created by Hyunsoo Chang on 2023/06/05.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading) {
            // ExtractedView: technique refers to the process of extracting a reusable view from existing code. 
            TextView(text: "Hello There", color: .green)
            TextView(text: "Welcome to Swift Programming", color: .gray)
            TextView(text: "Are you Ready?", color: .yellow)
            TextView(text: "Start Exploring", color: .red)
            TextView(text: "Boom", color: .purple)
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
