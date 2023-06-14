
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
            CalcButtonModel(calcButton: .subtract, color: foregroundRightButtonsColor),
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
                                // Logic
                                print("cliccked", calcButtonModel.calcButton)
                                buttonPressed(calcButton: calcButtonModel.calcButton)
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
    
    
    func appendTocurrentComputation (calcButton: CalcButton)  {
        currentComputation += calcButton.rawValue
    }
    
    /// Implements the actual computation
    func calculateResults() ->Double {
        let visibleWorkings: String = currentComputation
        var workings = visibleWorkings.replacingOccurrences(of: "%", with: "*0.01")
        // replacingOccurrences: 문자열에서 특정 문자열을 제거 / 변경하여 사용해야하는 경우, of의 값을 with로 변경, 배열 X
        workings = workings
            .replacingOccurrences(of: multiplySymbol, with: "*")
            .replacingOccurrences(of: divisionSymbol, with: "/")
        //        workings = workings.replacingOccurrences(of: divisionSymbol, with: "/")
        // if we have 35. this will be replaced by 35.0
        if(getLastChar(str: visibleWorkings) == ".") {
            workings += "0"
        }
        
        //Actual Computation
        let expr = NSExpression(format: workings) // 문자열을 받아 계산식으로 자동 변환해주는 함수
        let exprValue = expr.expressionValue(with: nil, context: nil) as! Double
        return exprValue
    }
    
    // 각기 버튼을 누른 경우, currentComputation에 추가됨
    func buttonPressed(calcButton: CalcButton){
        switch calcButton{
        case .clear:
            currentComputation = ""
            mainResult = "0"
            
        case .equal, .negative:
            print("equal/negative")
            if (!currentComputation.isEmpty){
                // 비어있지 않은 경우
                if (!lastCharacterIsOperator(str: currentComputation)){
                    let sign = calcButton == .negative ? -1.0 : 1.0
                    mainResult = formatResult(val: sign * calculateResults())
                    if (calcButton == .negative){
                        currentComputation = mainResult
                    }
                } else {
                    // 마지막이 operator이기 때문에, 아직 끝난 식이 아님.
                    print("Expression is un-done")
                }
            } else {
                print("Express is Empty")
            }
            
        case .decimal:
            print("Hello")
            if let lastOccurenceOfDecimal = currentComputation.lastIndex(of: ".") {
                if lastCharIsDigit(str: currentComputation) {
                    let startIndex = currentComputation.index(lastOccurenceOfDecimal, offsetBy: 1)
                    let endIndex = currentComputation.endIndex
                    let range = startIndex ..< endIndex
                    let rightSubstring = String(currentComputation[range])
                    
                    // Only have digits to the right "." => do not add another decimal point
                    if Int(rightSubstring) == nil && !rightSubstring.isEmpty {
                        currentComputation += "."
                    }
                }
            } else {
                if currentComputation.isEmpty {
                    currentComputation += "0."
                } else if lastCharIsDigit(str: currentComputation) {
                    currentComputation += "."
                }
            }
            
            
        case .percent:
            if lastCharIsDigit(str: currentComputation){
                if lastCharIsDigit(str: currentComputation){
                    appendTocurrentComputation(calcButton: calcButton)
                }
                
            }
            
        case .undo:
            // dropLast:
            currentComputation = String(currentComputation.dropLast())
            
        case .add, .subtract, .divide, .multiply:
            // operations
            if lastCharIsDigitOrPercent(str: currentComputation){
                appendTocurrentComputation(calcButton: calcButton)
            }
            
        default:
            // digits
            appendTocurrentComputation(calcButton: calcButton)
        }
    }
}

struct CalcsButtonsView_Previews: PreviewProvider {
    static var previews: some View {
        CalcsButtonsView(mainResult: .constant("6"),currentComputation: .constant("5+1"))
    }
}
