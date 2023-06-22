
import SwiftUI

struct TitleAlignmentButton: View {
    @Binding var titleAlignment:HorizontalAlignment
    var body: some View {
        VStack(spacing: 20){
            SimpleTitleButtonView(titleAlignment: $titleAlignment, myAlignment: .leading, iconName: "align.horizontal.left.fill")
            SimpleTitleButtonView(titleAlignment: $titleAlignment, myAlignment: .center, iconName: "align.horizontal.center.fill")
            SimpleTitleButtonView(titleAlignment: $titleAlignment, myAlignment: .trailing, iconName: "align.horizontal.right.fill")
        }
        .overlay(RoundedRectangle(cornerRadius: 5).stroke(lineWidth: 0.3))
    }
}


struct TitleAlignmentButton_Previews: PreviewProvider {
    static var previews: some View {
        TitleAlignmentButton(titleAlignment: .constant(.center))
    }
}
