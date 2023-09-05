//
//  Created by Robert Petras
//  SwiftUI Masterclass ♥ Better Apps. Less Code.
//  https://swiftuimasterclass.com 
//

import SwiftUI

struct ContentView: View {
    // MARK: - PROPERTIES
    
    @State private var isShowingSettings: Bool = false
    
    var fruits: [Fruit] = fruitsData
    
    // MARK: - BODY
    
    var body: some View {
        NavigationView {
            List {
                ForEach(fruits.shuffled()) { item in
                    NavigationLink(destination: FruitDetailView(fruit: item)) {
                        FruitRowView(fruit: item)
                            .padding(.vertical, 4)
                    }
                }
            }
            .navigationTitle("Fruits")
            // navigationBarItems > customize the navigation bar of a view
            .navigationBarItems(
                trailing:
                    Button(action: {
                        isShowingSettings = true
                    }, label: {
                        Image(systemName: "slider.horizontal.3")
                    })//: BUTTON
                    .sheet(isPresented: $isShowingSettings){
                        // .sheet >  present a new view as a sheet on top of the current view. >  slides up from the bottom of the screen
                        // isPresented >  binds the presentation of the sheet to the isShowingSettings boolean. When isShowingSettings is true, the sheet is presented.
                        SettingsView()
                    }
            ) //: NAVIGATION
            .navigationViewStyle(StackNavigationViewStyle()) // > to make sure the navi will be stacked with no sidebars nor sliding panels
        }
        .navigationViewStyle(StackNavigationViewStyle())
    }
}

// MARK: - PREVIEW

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView(fruits: fruitsData)
            .previewDevice("iPhone 11 Pro")
    }
}
