//
//  CalcsButtonsView.swift
//  Calculator
//
//  Created by Hyunsoo Chang on 2023/06/13.
//

import SwiftUI


struct CalcButtonModel: Identifiable {
    let id: UUID = UUID();
    let calcButton: CalcButton;
    var color: Color = foregroundDigitsColor
}

struct RowOfCalcButtonsModel: Identifiable {
    let id: UUID = UUID();
    let row: [CalcButtonModel]
}

struct CalcsButtonsView: View {
    @Binding var mainResult: String;
    @Binding var currentComputation: String;
    
    let buttonData: [RowOfCalcButtonsModel] = [
        
        RowOfCalcButtonsModel(row: [
            CalcButtonModel(calcButton: .clear, color: foregroundTopButtonsColor),
            CalcButtonModel(calcButton: .negative, color: foregroundTopButtonsColor),
            CalcButtonModel(calcButton: .percent, color: foregroundTopButtonsColor),
            CalcButtonModel(calcButton: .divide, color: foregroundRightButtonsColor),
        ]),
        RowOfCalcButtonsModel(row: [
            CalcButtonModel(calcButton: .seven),
            CalcButtonModel(calcButton: .eight),
            CalcButtonModel(calcButton: .nine),
            CalcButtonModel(calcButton: .multiply, color: foregroundRightButtonsColor),
        ]),
        RowOfCalcButtonsModel(row: [
            CalcButtonModel(calcButton: .four),
            CalcButtonModel(calcButton: .five),
            CalcButtonModel(calcButton: .six),
            CalcButtonModel(calcButton: .divide, color: foregroundRightButtonsColor),
        ]),
        RowOfCalcButtonsModel(row: [
            CalcButtonModel(calcButton: .one),
            CalcButtonModel(calcButton: .two),
            CalcButtonModel(calcButton: .three),
            CalcButtonModel(calcButton: .add, color: foregroundRightButtonsColor),
        ]),
        RowOfCalcButtonsModel(row: [
            CalcButtonModel(calcButton: .undo),
            CalcButtonModel(calcButton: .zero),
            CalcButtonModel(calcButton: .decimal),
            CalcButtonModel(calcButton: .equal, color: foregroundRightButtonsColor),
        ]),
    ]
    
    var body: some View {
        VStack {
            Grid(){
                ForEach(buttonData){ rowOfCalcButtonModel in
                    GridRow{
                        ForEach(rowOfCalcButtonModel.row) {
                            calcButtonModel in Button {
                                print("cliccked")
                            } label: {
                                ButtonView(
                                    calcButton: calcButtonModel.calcButton,
                                    fgColor: calcButtonModel.color,
                                    bgColor: buttonBackgroundColor)
                            }
                        }
                    }
                }
            }
            .padding()
            .background(secondaryBackgroundColor.cornerRadius(20))
        }
    }
}

struct CalcsButtonsView_Previews: PreviewProvider {
    static var previews: some View {
        CalcsButtonsView(mainResult: .constant("6"),currentComputation: .constant("5+1"))
    }
}
