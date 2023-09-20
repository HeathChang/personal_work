import SwiftUI
import SVGView
import SwiftSVG

struct CardView: View {
    @State private var isClicked: Bool = false

//    let view2 = SVGView(contentsOf: Bundle.main.url(forResource: "tester2", withExtension: "svg")!)
    
    
    
    var body: some View {
        
        let view = SVGView(contentsOf: Bundle.main.url(forResource: "png@1529", withExtension: "svg")!)
        if let part = view.getNode(byId: "LeftThigh") {
            part.opaque = !part.opaque
            part.onTapGesture {
                
                if isClicked {
                    part.opacity = 1
//                    let view2 = view2.getNode(byId: "LeftThigh")
//                    let resetTransform = CGAffineTransform.identity
//
//                    view2?.transform = resetTransform
                    
                    
                } else {
                    view.getNode(byId: "LeftThigh")?.opacity = 0.2
//                    let view2 = view2.getNode(byId: "LeftThigh")
//
//
//                    let delta = CGAffineTransform(a: 1.05, b: 0.0, c: 0.0, d: 1.05, tx: -7, ty: -15)

                    
//                    view2?.opacity = 1
//                    view2?.transform = delta
                    
                    
                }
                isClicked.toggle()
            }
            
        }
        return ZStack{
            view.frame(width: 400, height: 600).zIndex(1)

        }.onTapGesture { cord in
            print(view.getNode(byId: "Head-4")!)
            view.getNode(byId: "Stroke_Shadow")!.opacity = 0
        }
    }
}

struct CardView_Previews: PreviewProvider {
    static var previews: some View {
        CardView()
            .colorScheme(.dark)
    }
}

