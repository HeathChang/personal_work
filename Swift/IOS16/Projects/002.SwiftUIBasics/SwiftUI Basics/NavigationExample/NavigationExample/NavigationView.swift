//
//  ContentView.swift
//  NavigationExample
//
//  Created by Hyunsoo Chang on 2023/06/09.
//

import SwiftUI

struct NavigationView: View {
    @State var name: String = "";
    @State var age: String = "";
    
    
    
    var body: some View {
        NavigationStack {
            VStack {
//                Text("Navigation Example")
//                    .font(Font.largeTitle)
                Spacer()
                
                VStack(alignment: .leading) {
                    Text("Enter your name")
                    TextField("Heath Chang", text: $name)
                }
                
                
                VStack(alignment: .leading) {
                    Text("Enter your age")
                    TextField("Password", text: $age)
                        .keyboardType(.numberPad) // only number(type="number")
                    
                }
                
                Spacer()
                
                NavigationLink(
                    destination:{
                        // 질문: 왜 $name 이 아닌가?
                        DrinkingView(name: name, age: age, dirnkingAge: 18)
                    },
                    label: {
                        Text("Okay")
                            .font(.title)
                            .padding()
                            .overlay {
                                // rounded rectangle where the corner radius
                                Capsule().stroke()
                            }
                    })
                
            }
            .padding()
            .navigationTitle("Example") // title
        }
    }
}


struct DrinkingView: View{
    let name: String;
    let age: String;
    
    let dirnkingAge: Int
    
    
    var numericalAge: Int {
        Int(age) ?? -1
    }
    
    var body: some View {
        ZStack{
            Color.blue.opacity(0.2).ignoresSafeArea()
            if(numericalAge > dirnkingAge){
                Text("\(name.capitalized) Drinking Age")
            } else if(numericalAge < 0){
                Text("\"\(age)\" is invalid Input")
            } else {
                VStack {
                    Text("Sorry, \(name.capitalized)")
                    Text("Not Drinking Age")
                }
            }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView()
    }
}
