

import SwiftUI

struct OnboardingView: View {
    
    @AppStorage("onboarding") var isOnboadrdingViewActive: Bool = true
    @State private var buttonWidth: Double = UIScreen.main.bounds.width - 80 // actual Iphone device screen size - width
    @State private var buttonOffset: CGFloat = 0 // Location during the dragging activity
    @State private var isAnimating: Bool = false
    @State private var imageOffset: CGSize = .zero // CGSize(width: 0, height: 0)
    @State private var indicatorOpacity: Double  = 1.0
    
    @State private var textTitle: String  = "Share."
    
    // MARK: - Body
    var body: some View {
        
        
        ZStack {
            Color("ColorBlue")
                .ignoresSafeArea(.all, edges: .all)
            VStack(spacing: 20) {
                //MARK: Header
                Spacer()
                VStack(spacing: 0){
                    Text(textTitle)
                        .font(.system(size: 60))
                        .fontWeight(.heavy)
                        .foregroundColor(.white)
                        .transition(.opacity) // dealing with dynamic changes in your UI hierarchy
                        .id(textTitle) // 텍스트만 변경될때 에러 발생할수 있다고는 하는데, apple에서 수정된듯
                    
                    Text("""
                    It's not how much we give
                    how much love we put into giving.
                    """)
                    .font(.title3)
                    .fontWeight(.light)
                    .foregroundColor(.white)
                    .multilineTextAlignment(.center)
                    .padding(.horizontal, 10)
                }
                .opacity(isAnimating ? 1 : 0) // opacity of animation
                .offset(x: isAnimating ? 0 : -40) // slide down
                .animation(.easeOut(duration: 1), value: isAnimating) // animation type (animation parameter - curve type , what value that cause animation)
                
                // MARK: Center
                ZStack{
                    CircleGroupView(ShapeColor: .white, ShapeOpacity: 0.2)
                        // MARK: Parallax Effect >> in this situation, when image moves right, the circle group moves left with blur
                        .offset(x: imageOffset.width * -1)
                        .blur(radius: abs(imageOffset.width / 5))
                        .animation(.easeOut(duration: 1), value: imageOffset)
                    Image("character-1")
                        .resizable()
                        .scaledToFit()
                        .opacity(isAnimating ? 1 : 0)
                        .animation(.easeOut(duration: 0.5), value: isAnimating)
                        .offset(x: imageOffset.width * 1.2 , y : 0)
                        .rotationEffect(.degrees(Double(imageOffset.width / 20))) // angle and anchor (the centre point)
                        .gesture(
                            DragGesture()
                                .onChanged({ gesture in
                                    if abs(imageOffset.width) <= 100 {
                                        imageOffset = gesture.translation

                                        withAnimation(.linear(duration: 0.25)) { // animate changes within view hierarchy
                                            textTitle = "Give."
                                            indicatorOpacity = 0
                                        }
                                    }
                                })
                                .onEnded({ _ in
                                    imageOffset = .zero
                                    withAnimation(.linear(duration: 0.25)) {
                                        textTitle = "Share."
                                        indicatorOpacity = 1
                                    }
                                })
                        ) // gesture
                        .animation(.easeOut(duration: 1), value: imageOffset)
                    
                }
                .overlay(alignment: .bottom) {
                    Image(systemName: "arrow.left.and.right.circle")
                        .font(.system(size: 44, weight: .ultraLight))
                        .foregroundColor(.white)
                        .offset(y : 20)
                        .opacity(isAnimating ? 1 : 0)
                        .animation(.easeOut(duration: 1).delay(2), value: isAnimating)
                        .opacity(indicatorOpacity)
                }
                Spacer()
                
                // MARK: Footer
                ZStack{
                    // 1. Static Background
                    Capsule()
                        .fill(.white.opacity(0.2))
                    Capsule()
                        .fill(.white.opacity(0.2))
                        .padding(8)
                    
                    // 2. Call-To-Action
                    
                    Text("Get Started")
                        .font(.system(.title3, design: .rounded))
                        .fontWeight(.bold)
                        .foregroundColor(.white)
                        .offset(x: 20)
                    
                    // 3. Capsule (Dynamic)
                    HStack{
                        Capsule()
                            .fill(Color("ColorRed"))
                            .frame(width: buttonOffset + 80)
                        Spacer()
                    }
                    
                    // 4. Draggable Circle
                    HStack {
                        ZStack{
                            Circle()
                                .fill(Color("ColorRed"))
                            Circle()
                                .fill(.black.opacity(0.15))
                                .padding(8)
                            Image(systemName: "chevron.right.2")
                                .font(.system(size: 24, weight: .bold))
                        }
                        .foregroundColor(.white)
                        .frame(width: 80, height: 80, alignment: .center)
                        .offset(x: buttonOffset)
                        .gesture(
                            DragGesture()
                                .onChanged(){ gesture in
                                    if gesture.translation.width > 0 && buttonOffset <= buttonWidth - 80{
                                        buttonOffset  = gesture.translation.width
                                    }
                                }
                                .onEnded(){ _ in
                                    withAnimation(Animation.easeOut(duration: 1)) {
                                        if buttonOffset > buttonWidth / 2 {
                                            // right Area
                                            buttonOffset = buttonWidth - 80
                                            isOnboadrdingViewActive = false
                                        } else  {
                                            // left Area
                                            buttonOffset = 0
                                        }
                                    }
                                }
                        )
                        Spacer()
                    }
                }
                .frame(width: buttonWidth, height: 80, alignment: .center)
                .padding()
                .opacity(isAnimating ? 1 : 0)
                .offset(x: isAnimating ? 1 : 40)
                .animation(.easeOut(duration: 1), value: isAnimating)
            }
        }
        .onAppear(){
            isAnimating = true
        }
    }
}

struct OnboardingView_Previews: PreviewProvider {
    static var previews: some View {
        OnboardingView()
    }
}
