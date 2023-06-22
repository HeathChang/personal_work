//
//  SimpleTitleButtonView.swift
//  Chart Demo 2
//
//  Created by Hyunsoo Chang on 2023/06/22.
//

import SwiftUI

struct SimpleTitleButtonView: View {
    @Binding var titleAlignment:HorizontalAlignment
    
    let myAlignment: HorizontalAlignment
    let iconName: String
    
    let selectedOpacity = 0.85
    let deselectedOpacity = 0.3
    
    
    var body: some View {
        Button(
            action: {
                withAnimation{
                    titleAlignment = myAlignment
                }
            },
            label: {
                Image(systemName: iconName)
                    .foregroundColor(.black.opacity(titleAlignment == myAlignment ? selectedOpacity : deselectedOpacity))
            }
        )
    }
}

struct SimpleTitleButtonView_Previews: PreviewProvider {
    static var previews: some View {
        VStack(spacing: 10) {
            SimpleTitleButtonView(titleAlignment: .constant(.leading), myAlignment: .leading, iconName: "align.horizontal.left.fill")
            SimpleTitleButtonView(titleAlignment: .constant(.center), myAlignment: .center, iconName: "align.horizontal.center.fill")
            SimpleTitleButtonView(titleAlignment: .constant(.trailing), myAlignment: .trailing, iconName: "align.horizontal.right.fill")
        }
    }
}
