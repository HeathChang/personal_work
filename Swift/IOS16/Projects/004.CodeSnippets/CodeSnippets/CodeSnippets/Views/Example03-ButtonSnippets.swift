//
//  Example03-ButtonSnippets.swift
//  CodeSnippets
//
//  Created by Hyunsoo Chang on 2023/06/12.
//

import SwiftUI

struct Example03_ButtonSnippets: View {
    var body: some View {
        VStack{
            Text("Buttons")
            
            
            // Capsule Button1
            HStack {
                Button {
                    print("Button Clicked")
                } label: {
                    Text("Button 1")
                        .foregroundColor(Color.white)
                        .padding()
                        .background(
                            Capsule().fill(Color.red)
                        )
                }
                // Capsule Button2
                Button {
                    print("Button Clicked")
                } label: {
                    Text("Button 2")
                        .foregroundColor(Color.white)
                        .padding()
                        .background(
                            Capsule().fill(Color.black)
                        )
                }
                
                
                
                
            }
            
            
            Button {
                print("Button Clicked")
            } label: {
                Text("Button 3")
                    .foregroundColor(Color.white)
                    .padding()
                    .background(
                        RoundedRectangle(cornerRadius:  15)
                            .fill(Color.blue)
                            .shadow(color: Color.red.opacity(0.3), radius: 20, x: 10, y: 10)
                    )
            }
            
        }
    }
}

struct Example03_ButtonSnippets_Previews: PreviewProvider {
    static var previews: some View {
        Example03_ButtonSnippets()
    }
}
