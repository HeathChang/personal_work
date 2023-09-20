//import SwiftUI
//
//import SVGView
//import SwiftSVG
//
//struct ContentView: View {
//    @State private var isClicked: Bool = false
//    
//    
//    let view = SVGView(contentsOf: Bundle.main.url(forResource: "web-modifier2", withExtension: "svg")!)
//    
//    
//    var body: some View {
//        
//        
//        if let part = view.getNode(byId: "LeftThigh") {
//            part.opaque = !part.opaque
//            part.onTapGesture {
//                
//                if isClicked {
//                    part.opacity = 1
//                    
//                    
//                } else {
//                    view.getNode(byId: "LeftThigh")?.opacity = 0.2
//                    
//                    
//                }
//                isClicked.toggle()
//            }
//            
//        }
//        return ZStack{
//            view.frame(width: 400, height: 600).zIndex(1)
//            
//        }.onTapGesture { cord in
//            print(view.getNode(byId: "Head-4")!)
//            view.getNode(byId: "Stroke_Shadow")!.opacity = 0
//        }
//    }
//}
//
//
//// MARK: Previews
//struct ContentView_Previews: PreviewProvider {
//    static var previews: some View {
//        ContentView()
//            .colorScheme(.dark)
//    }
//}
//
