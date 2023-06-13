//
//  ComputationView.swift
//  Calculator
//
//  Created by Hyunsoo Chang on 2023/06/13.
//

import SwiftUI

struct ComputationView: View {
    let mainResult: String;
    let currentComputation: String;

    
    
    var body: some View {
        VStack(spacing: 10) {
            HStack {
                Spacer()
                Text(currentComputation)
                    .foregroundColor(foregroundDigitsColor)
                    .lineLimit(1)
            }
            .minimumScaleFactor(0.1) // set font-size min to 10% when, the text is wrong.
            HStack(spacing: 20) {
                Spacer()
                Text("=")
                Text(mainResult)
                    .foregroundColor(foregroundDigitsColor)
                    .font(.largeTitle)
                    .fontWeight(.bold)
                    .lineLimit(1)
            }
        }.padding(.horizontal)
    }
}

struct ComputationView_Previews: PreviewProvider {
    static var previews: some View {
        VStack(spacing: 20) {
            ComputationView(mainResult: "12936", currentComputation: "12000+936")
        
        };
    }
}
