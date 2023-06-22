//
//  RightChartButtonView.swift
//  Chart Demo 2
//
//  Created by Hyunsoo Chang on 2023/06/22.
//

import SwiftUI

struct RightChartButtonView: View {
    @Binding var chartType: ChartType
    @Binding var isVerticalChart: Bool
    @Binding var barColors: [Color]
    @Binding var titleAlignment:HorizontalAlignment

    
    var body: some View {
        // Chart Buttons
        VStack(spacing: 50) {
            Button(action: {
                withAnimation {
                    isVerticalChart.toggle()
                }
            }, label: {
                Image(systemName: "chart.bar.fill")
                    .rotationEffect(.degrees(isVerticalChart ? 90 : 0))
                    .foregroundColor(.black.opacity(0.7))
            })
            
            TitleAlignmentButton(titleAlignment: $titleAlignment)
            
        }
        .padding()
    }

}

struct RightChartButtonView_Previews: PreviewProvider {
    static var previews: some View {
        HStack {
            Spacer()
            RightChartButtonView(chartType: .constant(.bar), isVerticalChart: .constant(true), barColors: .constant(defaultBarColors), titleAlignment: .constant(.center))
        }
    }
}
