import SwiftUI

struct ArcView: View {
    let color: Color;
    let startRadius: CGFloat;
    let endRadius: CGFloat;
    let startTrim: CGFloat;
    let endTrim: CGFloat;
    let rotate: CGFloat;
    @State private var finalTrime: CGFloat = 0;
    var lineWidth: CGFloat {
        endRadius - startRadius
    }
    
    var body: some View {
        Circle()
            .frame()
    }
}

struct ArcView_Previews: PreviewProvider {
    static var previews: some View {
        ArcView(
            color: Color.darkOrchid,
            startRadius: 90,
            endRadius: 100,
            startTrim: 0.25,
            endTrim: 0.75,
            rotate: 30
        )
    }
}
