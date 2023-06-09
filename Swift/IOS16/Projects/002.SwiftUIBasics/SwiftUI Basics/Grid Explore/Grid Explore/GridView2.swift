import SwiftUI

struct GridView2: View {
    var body: some View {
        ZStack {
            Color.gray.opacity(0.7).ignoresSafeArea()
            Grid {
                GridRow {
                    Rect(color: .red, count: 2, total: 3)
                    Rect(color: .blue, count: 1, total: 3)
                }
            }
        }
    }
}

struct Rect: View{
    let color: Color
    let count: Int
    let total: Int
    
    
    var text: String{
        return "\(count) out of \(total)"
    }
    
    var body: some View{
        Rectangle()
            .fill(color.opacity(0.5))
            .cornerRadius(20)
            .overlay(
                    Text(text)
                    .font(.subheadline)
                    .fontWeight(.semibold))
            .gridCellColumns(count)
    }
}


struct GridView2_Previews: PreviewProvider {
    static var previews: some View {
        GridView2()
    }
}

