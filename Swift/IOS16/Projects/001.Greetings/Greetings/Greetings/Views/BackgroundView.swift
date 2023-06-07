import SwiftUI

/// Using Summary wih triple slash [ /// ]
struct BackgroundView: View {
    // Linear Background
    var body: some View {
        LinearGradient(colors: [Color("blue"),
                                Color("blue2")
                                //                                Color(red: 139/255, green: 80/255, blue: 240/255)
                               ],
                       startPoint: .topLeading,
                       endPoint: .bottomLeading)
        .opacity(0.8)
        .ignoresSafeArea()
    }
}
