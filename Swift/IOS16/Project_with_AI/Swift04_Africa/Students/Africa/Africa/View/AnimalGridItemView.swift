

import SwiftUI

struct AnimalGridItemView: View {
    // MARK: PROPERTIES
    let animal: AnimalModel

    
    // MARK: BODY
    var body: some View {
        Image(animal.image)
            .resizable()
            .scaledToFit()
            .cornerRadius(12)
    }
}


// MARK: PREVIEWS
struct AnimalGridItemView_Previews: PreviewProvider {
    static let animals: [AnimalModel] = Bundle.main.decode("animals.json")

    static var previews: some View {
        AnimalGridItemView(animal: animals[0])
            .previewLayout(.sizeThatFits)
            .padding()
    }
}
