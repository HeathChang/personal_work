
import SwiftUI

struct RecipeView: View {
    // Initialzing is needed
    @StateObject var recipeViewModel: RecipeViewModel =  RecipeViewModel()
    
    var body: some View {
        NavigationView() {
            List(self.recipeViewModel.recipeModels){
                item in  NavigationLink(destination: {
                    ShowRecipeView(theRecipe: item.recipe,
                                   imageName: item.recipeImage,
                                   recipeURL: item.recipeURL)
                    .navigationBarTitle("", displayMode: .inline)
                }, label: {
                    ListItemView(name: item.name, caloriesPer100Grams: item.caloriesPer100Grams, recipeImage: item.recipeImage)
                })
                
            }.navigationTitle("Recipes")
        }
    }
}

struct RecipeView_Previews: PreviewProvider {
    static var previews: some View {
        RecipeView()
    }
}
