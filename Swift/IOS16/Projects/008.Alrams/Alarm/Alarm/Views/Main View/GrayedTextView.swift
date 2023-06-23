//
//  GrayedTextView.swift
//  Alarm
//
//  Created by Hyunsoo Chang on 2023/06/23.
//

import SwiftUI

struct GrayedTextView: View {
    // LocalizedStringKey: ability to have multiple translation.
    let text: LocalizedStringKey
    var font: Font = .headline
    
    var body: some View {
        Text(text)
            .font(font)
            .fontWeight(.bold)
            .foregroundColor(.gray)
    }
}

struct GrayedTextView_Previews: PreviewProvider {
    static var previews: some View {
        ScrollView{
            VStack(spacing: 30){
                GrayedTextView(text: "The UI for this nice Alarm app was largely inspired by the amazing work of Anton Leogky.", font: .title)
                GrayedTextView(text: "you did it! here you can manage your alarm, change time and other things", font: .title)
                GrayedTextView(text: "hello there!", font: .title)
                GrayedTextView(text: "Hello World", font: .title)
            }
        }.padding()
    }
}
