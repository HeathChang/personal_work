
import SwiftUI
import Charts

struct BarChartVerticalView: View {
    let dailySales: [DailySalesType]
    let barColors: [Color]
    let innerProxyColor: Color = Color.black.opacity(0.2)
    @State var isDragging: Bool = false
    @Binding var selectedDay: String
    let editMode: Bool = false
    var body: some View {
        Chart {
            ForEach(dailySales) { item in
                BarMark(
                    x: .value("Day", item.day),
                    y: .value("Sales", item.sales))
                .foregroundStyle(by: .value("Day", item.day))
            }
            RuleMarkView(selectedDay: "Tues", salesOnSelctedDay: 123.445, intMode: false)
        }
        .chartForegroundStyleScale(range: barColors)
        .chartOverlay { ChartProxy in
            GeometryReader { innerChartProxy in
                Rectangle()
                    .fill(innerProxyColor)
                    .contentShape(Rectangle())
                    .gesture(DragGesture
                        .onChanged{ value in
                            if editMode {
                                isDragging = true
                                let location = value.location
                                let(newDay, sales) = innerChartProxy.value(at:location))
                            }
                        }
                        .onEnded{ value in
                            
                        }
                    )
            }
        }
    }
}


struct BarChartVerticalView_Previews: PreviewProvider {
    static var previews: some View {
        BarChartVerticalView(dailySales: defaultDailySales,
                             barColors: defaultBarColors,
                             editMode: true
        )
    }
}
