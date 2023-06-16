
import SwiftUI

struct RandomArcFromColorListView: View {
    // Params
    let colors: [Color];
    let index: Int;
    let minRadius: CGFloat;
    let maxRadius: CGFloat;
    let opacity: CGFloat;
    
    // Const
    let startTrim = Double.random(in: 0...0.5)
    let endTrim = 1.0
    
    // computed property
    var isValidIndex: Bool {
        return index < colors.count && index >= 0
    }
    var theIndex: Int{
        return isValidIndex ? index : 0
    }
    var count: CGFloat {
        return CGFloat(colors.count)
    }
    var color: Color{
        colors[theIndex]
    }
    var endRadius: CGFloat{
        minRadius + maxRadius / count
    }
    var rotate: CGFloat {
        Double.random(in: 0...360)
    }
    
    
    var body: some View {
        ArcView(color: color.opacity(opacity),
                startRadius: minRadius,
                endRadius: endRadius,
                startTrim: startTrim,
                endTrim: 1,
                rotate: rotate)
    }
}

struct RandomArcFromColorListView_Previews: PreviewProvider {
    static var previews: some View {
        RandomArcFromColorListView(
            colors: Color.defaultColors,
            index: 2,
            minRadius: 170,
            maxRadius: 180,
            opacity: 0.9
        )
    }
}
