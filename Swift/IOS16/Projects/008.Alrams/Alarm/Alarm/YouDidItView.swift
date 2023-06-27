//
//  YouDidItView.swift
//  Alarm
//
//  Created by Hyunsoo Chang on 2023/06/27.
//

import SwiftUI

struct YouDidItView: View {
    var body: some View {
        ZStack{
            MainGradient(endRadius: 120, scaleX: 1.5, yellowColor: darkYellow)
                .cornerRadius(20)
                .frame(height: screenHeight / 4)
                .overlay(
                    HStack {
                        CoolTextView(text: "you did it! here you can manage your alarm, change time and other things.", size: 18)
                            .padding(.horizontal)
                            .padding(.horizontal)
                            .multilineTextAlignment(.leading)
                        .frame(width: screenWidth / 1.8)
                        Spacer()
                        Image(partyPerson)
                            .resizable()
                            .scaledToFit()
                            .padding(.horizontal)
                            .opacity(0.9)
                    }
                        
                    
                )
                .clipShape(Rectangle()) // outside shape > falls within the boundaries of the rectangular shape will be visible > over the boundaries will be cutted.
                .padding()
               
        }
    }
}

struct YouDidItView_Previews: PreviewProvider {
    static var previews: some View {
        ZStack {
            Color.black.opacity(0.3).ignoresSafeArea()
            YouDidItView()
        }
    }
}
