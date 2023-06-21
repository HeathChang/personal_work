import SwiftUI
import Charts

struct ContentView1: View {
    @State var isLegendVisible: Bool = false
    let min = 0.0
    let max = 500.0
    var body: some View {
        VStack {
            Text("Welcome to Charts")
                .font(.largeTitle)
            
            Chart {
                BarMark(x: .value("Day", "Mon"),
                        y: .value("Sale", 100))
                // bar에 대한 설명
                .annotation(position: .top, alignment: .center){
                    Image(systemName: "figure.walk.circle.fill")
                        .foregroundColor(.blueViolet)
                        .font(.title)
                        .fontWeight(.bold)
                }
                // 하단 값 설명, bar 색상도 auto 변함
                .foregroundStyle(by: .value("Day", "Sun"))
            }
            .chartYScale(domain: min...max)
            .chartXAxis{AxisMarks(position: .bottom)}
            .chartYAxis{
                AxisMarks(position: .leading)
            }
            // foregroundStyle 값 설명 control
            .chartLegend(isLegendVisible ? .visible : .hidden)
            //            .chartLegend(position: .automatic, alignment: .center, spacing: 100)
            .padding()
            
            Button(action: {
                withAnimation{
                    isLegendVisible.toggle()
                }
            }, label: {
                Image(systemName: isLegendVisible ? "eye" : "eye.slash")
                    .foregroundColor(isLegendVisible ? .none : .gray)
            })
        }
        .padding()
    }
}
enum ChartType {
    case bar, line, area
}
struct ContentView2: View{
    let dailySale: [DailySalesType]
    let min: Double
    let max: Double
    let barColors: [Color]
    let xAxisMarkPosition: AxisMarkPosition = .bottom
    let yAxisMarkPosition: AxisMarkPosition = .leading
    
    @State private var chartType: ChartType = .bar
    @State private var isVerticalChart = true
    var body: some View {
        VStack{
            Text("Chart Demo 3")
                .font(.largeTitle)
                .fontWeight(.semibold)
            Chart{
                ForEach(dailySale) { item in
                    
                    //                    BarMark(x: .value("Day", item.day),
                    //                    LineMark(x: .value("Day", item.day),
                    //                    AreaMark(x: .value("Day", item.day),
                    switch(chartType){
                    case .bar:
                        BarMark(x: .value("Day", item.day),
                                y: .value("hiees1", item.sales))
                        .foregroundStyle(by: .value("Day", item.day))
                    case .line:
                        LineMark(x: .value("Day", item.day),
                                 y: .value("hiees1", item.sales))
                        
                    case .area:
                        AreaMark(x: .value("Day", item.day),
                                 y: .value("hiees1", item.sales))
                        
                    }
                    
                    
                    
                }
                
            }
            Spacer()
            // Chart Buttons
            HStack(spacing: 90){
                Button(action: {
                    withAnimation{
                        chartType = .bar
                    }
                }, label: {Text("BAR")})
                Button(action: {
                    withAnimation{
                        chartType = .line
                    }
                }, label: {Text("Line")})
                Button(action: {
                    withAnimation{
                        chartType = .area
                        isVerticalChart.toggle()
                    }
                }, label: {Image(systemName: "chart.bar.fill").rotationEffect(.degrees(isVerticalChart ? 0: 90))})
            }.padding()
        }.padding()
    }
}



struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        //        ContentView1()
                ContentView2(dailySale: defaultDailySales,
                             min: 0.0,
                             max: 700.0,
                             barColors: defaultBarColors)
        
        
    }
}
