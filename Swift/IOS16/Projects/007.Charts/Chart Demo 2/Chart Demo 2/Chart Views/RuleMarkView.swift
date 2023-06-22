
import SwiftUI
import Charts

struct RuleMarkView: ChartContent {
    // Chart 일부:
    let selectedDay: String
    let salesOnSelctedDay: Double
    let lineColor = Color.red
    let intMode: Bool
    var specifier: String {
        "%.\(precision)f"
    }
    var precision: Int {
        intMode ? 0 : 1
    }
    
    var body: some ChartContent {
        RuleMark(y:
                .value("Sales", salesOnSelctedDay))
        .foregroundStyle(lineColor)
        .lineStyle(StrokeStyle(lineWidth: 2, dash:[5]))
        .annotation(position: .topTrailing, spacing: 0){
            Text("\(salesOnSelctedDay, specifier: specifier)")
                .font(.headline)
                .fontWeight(.bold)
        }
    }
    
}
