//
//  ButtonView.swift
//  Calculator
//
//  Created by Hyunsoo Chang on 2023/06/13.
//

import SwiftUI

struct ButtonView: View {
    let calcButton: CalcButton;
    let fgColor: Color;
    let bgColor: Color;
    
    var systemImage: String? {
        let value = calcButton.rawValue
        return value.contains("IMG") ? value.replacingOccurrences(of: "IMG", with: "") : nil
    };
    
    
    var text: String? {
        let value = calcButton.rawValue;
        return value.contains("IMG") ?  nil : value
    }
    
    let buttonDim: CGFloat = UIScreen.main.bounds.width / 5
    
    var body: some View {
        ZStack {
            if let systemImage = systemImage {
                Image(systemName: systemImage)
            } else {
                Text(text!)
            }
        }
            .font(.title2)
            .fontWeight(.semibold)
            .frame(width: buttonDim, height: buttonDim)
            .foregroundColor(fgColor)
            .background(bgColor)
            .clipShape(RoundedRectangle(cornerRadius:  15))
            .overlay(RoundedRectangle(cornerRadius: 15).stroke(primaryBackgroundColor, lineWidth: 1))
            .shadow(color: bgColor, radius: 5, x:5, y: 5)
    }
       
}

struct ButtonView_Previews: PreviewProvider {
    static var previews: some View {
        VStack {
            ButtonView(calcButton: .one, fgColor: foregroundDigitsColor, bgColor: buttonBackgroundColor)
            ButtonView(calcButton: .multiply, fgColor: foregroundRightButtonsColor, bgColor: buttonBackgroundColor)
            ButtonView(calcButton: .divide, fgColor: foregroundTopButtonsColor, bgColor: buttonBackgroundColor)
        }
    }
}
