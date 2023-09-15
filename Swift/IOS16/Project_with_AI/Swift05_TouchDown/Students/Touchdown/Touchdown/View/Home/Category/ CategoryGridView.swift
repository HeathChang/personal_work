
import SwiftUI

struct CategoryGridView: View {
    var body: some View {
        ScrollView(.horizontal, showsIndicators: false){
            LazyHGrid(rows: gridLayout, alignment: .center, spacing: columnSpacing){
                Section(
                    header: SectionView(rotateClockwise: false),
                    footer: SectionView(rotateClockwise: true)
                ) {
                    ForEach(categories) { category in
                        CategoryItemView(category: category)
                    }
                }
            } // ; LAZYH
            .frame(height: 140)
            .padding(.horizontal, 15)
            .padding(.vertical, 10)
        } // ; SCROLL
    }
}

// MARK: PREVIEWS

struct CategoryGridView_Previews: PreviewProvider {
    static var previews: some View {
        ProductGridView()
            .previewLayout(.sizeThatFits)
            .padding()
            .background(colorBackground)

    }
}
