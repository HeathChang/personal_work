//
//  TextView.swift
//  Greetings
//
//  Created by Hyunsoo Chang on 2023/06/07.
//

import SwiftUI

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

struct TextView_Previews: PreviewProvider {
    static var previews: some View {
        TextView(text: "Hello", color: .purple)
    }
}
