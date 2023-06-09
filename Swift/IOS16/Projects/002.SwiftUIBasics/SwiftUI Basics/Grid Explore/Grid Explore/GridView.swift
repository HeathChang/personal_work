import SwiftUI

struct GridView: View {
    var body: some View {
        ZStack {
            Color.gray.opacity(0.7).ignoresSafeArea()
            Grid {
                GridRow{
                    Rectangle()
                        .fill(Color.blue).cornerRadius(20)
                    Rectangle()
                        .fill(Color.blue).cornerRadius(20)
                    
                    Rectangle()
                        .fill(Color.blue).cornerRadius(20)
                    
                    Rectangle()
                        .fill(Color.blue).cornerRadius(20)
                }
                GridRow{
                    Rectangle()
                        .fill(Color.red).cornerRadius(20)
                    
                    Rectangle()
                        .fill(Color.green).cornerRadius(20)
                        .gridCellColumns(2)
                    Rectangle()
                        .fill(Color.red).cornerRadius(20)
                }
                
                GridRow{
                    Rectangle()
                        .fill(Color.yellow).cornerRadius(20)
                    
                    Rectangle()
                        .fill(Color.orange).cornerRadius(20)
                    Rectangle()
                        .fill(Color.orange).cornerRadius(20)
                    Rectangle()
                        .fill(Color.orange).cornerRadius(20)
                }
                
                
            }.padding()
        }
    }
}

struct GridView_Previews: PreviewProvider {
    static var previews: some View {
        GridView()
    }
}
