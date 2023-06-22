
import SwiftUI
import Charts

enum ChartType {
    case bar, line, area
}

struct ContentView: View {
    let dailySales: [DailySalesType]
    let min: Double
    let max: Double
    @State var barColors: [Color] = defaultBarColors
    @State var chartType: ChartType = .bar
    let xAxisMarkPosition: AxisMarkPosition = .bottom
    let yAxisMarkPosition: AxisMarkPosition = .leading
    @State private var isVerticalChart = true
    @State private var title = "Chart Title"
    @State private var titleAlignment:HorizontalAlignment = .trailing
    @State private var editMode: Bool = false
    var body: some View {
        VStack(alignment: titleAlignment) {
            // Top Button

            HStack {
                Button(action: {
                    withAnimation{
                        editMode.toggle()
                    }
                }, label: {
                    Image(systemName: editMode ?  "checkmark" : "square.and.pencil")
                })
                if !editMode {
                    Spacer()
                    Button(action: {
                        // sharing
                    }, label: {
                        Image(systemName: "square.and.arrow.up")
                    })
                }
            }
            
            //
            HStack{
                if editMode {
                    LeftChartButtonView(chartType: $chartType, isVerticalChart: $isVerticalChart, barColors: $barColors)
                }
                
                VStack(alignment: titleAlignment){
                    Text(title)
                        .font(.headline)
                        .fontWeight(.semibold)
                        .padding()
                    if isVerticalChart {
                        switch(chartType) {
                        case .bar:
                            BarChartVerticalView(dailySales: dailySales, barColors: barColors, editMode: editMode)
                        case .line:
                            LineChartVerticalView(dailySales: dailySales, editMode: editMode)
                        case .area:
                            AreaChartVerticalView(dailySales: dailySales, editMode: editMode)
                        }
                    } else {
                        switch(chartType) {
                        case .bar:
                            BarChartHorizontalView(dailySales: dailySales, barColors: barColors, editMode: editMode)
                        case .line:
                            LineChartHorizontalView(dailySales: dailySales, editMode: editMode)
                        case .area:
                            AreaChartHorizontalView(dailySales: dailySales, editMode: editMode)
                        }
                    }
                }
                
                if editMode {
                    RightChartButtonView(chartType: $chartType, isVerticalChart: $isVerticalChart, barColors: $barColors, titleAlignment: $titleAlignment)
                }
                
                if !editMode {
                    
                }
                
                
            }
            
            
        }
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView(
            dailySales: defaultDailySales,
            min: 0.0,
            max: 700.0)
    }
}

