
import SwiftUI

struct ContentView: View {
    
    @State private var isAnimating: Bool = false
    @State private var imageScale: CGFloat = 1
    @State private var imageOffset: CGSize = CGSize(width: 0, height: 0)
    
    func resetImageState() {
        return withAnimation(.spring()) {
            imageScale = 1
            imageOffset = .zero
        }
    }
    
    
    var body: some View {
        NavigationView {
            ZStack{
                // MARK: - Page Image
                Image("magazine-front-cover")
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                    .cornerRadius(10)
                    .padding()
                    .shadow(color: .black.opacity(0.2), radius: 12, x: 2, y: 2)
                    .opacity(isAnimating ? 1 : 0)
                    .offset(x: imageOffset.width, y: imageOffset.height) // need before scaleEffect
                
                    .animation(.linear(duration: 1), value: isAnimating)
                    .scaleEffect(imageScale)
                // MARK:: 1. TAP Gesture
                    .onTapGesture(count: 2) {
                        if imageScale == 1 {
                            withAnimation(.spring()) {
                                imageScale = 5
                            }
                        } else {
                            withAnimation(.spring()) {
                                resetImageState()
                            }
                        }
                    }
                
                
                // MARK:: 2. DRAG Gesture
                    .gesture(
                        DragGesture()
                            .onChanged{ value in
                                withAnimation(.linear(duration: 1)) {
                                    imageOffset = value.translation
                                }
                            }
                            .onEnded(){ _ in
                                if imageScale <= 1 {
                                    resetImageState()
                                }
                            }
                    )
                
            } // ZSTACK
            .navigationTitle("Pinch & Zoom")
            .navigationBarTitleDisplayMode(.inline)
            .onAppear {
                withAnimation {
                    isAnimating = true
                }
            }
        }
        .navigationViewStyle(.stack)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
