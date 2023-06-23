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
    let font: Font = .headline
    
    var body: some View {
        Text(text)
            .font(font)
            .fontWeight(.bold)
            .foregroundColor(.gray)
    }
}

struct GrayedTextView_Previews: PreviewProvider {
    static var previews: some View {
        GrayedTextView(text: "Hello World")
    }
}
