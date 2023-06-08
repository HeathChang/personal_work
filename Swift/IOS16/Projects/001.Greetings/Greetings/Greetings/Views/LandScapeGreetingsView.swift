//
//  LandScapeGreetingsView.swift
//  Greetings
//
//  Created by Hyunsoo Chang on 2023/06/08.
//

import SwiftUI

struct LandScapeGreetingsView: View {
    var body: some View {
        ZStack {
            BackgroundView(); // safe area: 남는 영역 ignore
            HStack {
                VerticalTitleView()
                Spacer()
                MessagesView()
            }
        }

    }
}

struct LandScapeGreetingsView_Previews: PreviewProvider {
    static var previews: some View {
        LandScapeGreetingsView()
    }
}
