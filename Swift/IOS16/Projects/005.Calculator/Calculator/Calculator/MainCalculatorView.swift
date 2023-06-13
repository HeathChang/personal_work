

import SwiftUI

struct MainCalculatorView: View {
    @State var lightMode: Bool = true
    @State var currentComputation: String = "123"
    @State var mainResult: String = "23"
    
    var body: some View {
        ZStack{
            primaryBackgroundColor.ignoresSafeArea();
            VStack{
                SunMoonView(lightMode: lightMode)
                    .onTapGesture {
                        withAnimation {
                            lightMode.toggle();
                        }
                    }
                Spacer();

                ComputationView(mainResult: mainResult, currentComputation: currentComputation);
                Spacer();

                CalcsButtonsView(mainResult: $mainResult, currentComputation: $currentComputation);
            }
        }
        // background 
        .environment(\.colorScheme, lightMode ? .light : .dark)
    }
}

struct MainCalculatorView_Previews: PreviewProvider {
    static var previews: some View {
        MainCalculatorView()
    }
}
