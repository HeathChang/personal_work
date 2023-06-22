

import SwiftUI

struct LeftChartButtonView: View {
    
    @Binding var chartType: ChartType
    @Binding var isVerticalChart: Bool
    @Binding var barColors: [Color]
    
    var body: some View {
        // Chart Buttons
        VStack {
            
            
            
            //            Spacer()
            
            Button(action: {
                withAnimation {
                    chartType = .bar
                }
            }, label: {
                Text("BAR")
            })
            Spacer()
            Button(action: {
                withAnimation {
                    chartType = .line
                }
            }, label: {
                Text("LINE")
            })
            Spacer()
            Button(action: {
                withAnimation {
                    chartType = .area
                }
            }, label: {
                Text("AREA")
            })
            Spacer()
            
            ColorfulButtonView(
                colors: $barColors,
                dim: 30,
                offset: 10,
                action: {})
            
            //            Spacer()
            //            Button(action: {
            //                withAnimation {
            //                    isVerticalChart.toggle()
            //                }
            //            }, label: {
            //                Image(systemName: "chart.bar.fill")
            //                    .rotationEffect(.degrees(isVerticalChart ? 90 : 0))
            //            })
            
        }
        .padding()
    }
}

struct ChartButtonView_Previews: PreviewProvider {
    static var previews: some View {
        HStack {
            LeftChartButtonView(chartType: .constant(.bar), isVerticalChart: .constant(true), barColors: .constant(defaultBarColors))
            Spacer()
        }
    }
}
