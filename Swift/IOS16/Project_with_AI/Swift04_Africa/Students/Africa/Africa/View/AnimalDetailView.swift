
import SwiftUI

struct AnimalDetailView: View {
    // MARK: PROPERTIES
    let animal: AnimalModel
    
    // MARK: BODY
    var body: some View {
        ScrollView(.vertical, showsIndicators: false){
            VStack(alignment: .center, spacing: 20) {
                // HERO IMAGE
                Image(animal.image)
                    .resizable()
                    .scaledToFit()
                // TITLE
                Text(animal.name.uppercased())
                    .font(.largeTitle)
                    .fontWeight(.heavy)
                    .multilineTextAlignment(.center)
                    .padding(.vertical, 8)
                    .foregroundColor(.primary)
                    .background(
                        Color.accentColor
                            .frame(height: 6)
                            .offset(y: 24)
                    )
                // HEADLINES
                Text(animal.headline)
                    .font(.headline)
                    .multilineTextAlignment(.leading)
                    .foregroundColor(.accentColor)
                    .padding(.horizontal)
                // GALLERY
                GroupBox{
                    HeadingView(headingImage: "photo.on.rectangle.angled", headingText: "Wilderness in Pictures")
                    Divider().padding(.vertical, 10)
                    InsetGalleryView(animal: animal)
                }.padding(.horizontal)
                
                // FACTS
                GroupBox{
                    HeadingView(headingImage: "questionmark.circle", headingText: "Did you know ?")
                    Divider().padding(.vertical, 10)
                    InsetFactView(animal: animal)
                }.padding(.horizontal)
                // DESCRIPTION
                
                GroupBox{
                    HeadingView(headingImage: "info.circle", headingText: "All about \(animal.name)")
                    Divider().padding(.vertical, 10)
                    Text(animal.description)
                        .multilineTextAlignment(.leading)
                        .layoutPriority(1)
                    
                }.padding(.horizontal)
                
                
                // MAP
                GroupBox{
                    HeadingView(headingImage: "map", headingText: "National Parks")
                    Divider().padding(.vertical, 10)
                    InsetMapView()
                }.padding(.horizontal)
                
                // LINK
                
                GroupBox(){
                    HeadingView(headingImage: "books.vertical", headingText: "Learn More")
                    Divider().padding(.vertical, 10)

                    ExternalWebLinkView(animal: animal)
                }.padding(.horizontal)
                
                
                
            } // :: VSTACK
            .navigationBarTitle("Learn about \(animal.name)", displayMode: .inline)
        } //: ScrollView
    }
}

// MARK: PREVIEWS
struct AnimalDetailView_Previews: PreviewProvider {
    static let animals: [AnimalModel] = Bundle.main.decode("animals.json")
    static var previews: some View {
        NavigationView(){
            AnimalDetailView(animal: animals[0])
        }
    }
}
