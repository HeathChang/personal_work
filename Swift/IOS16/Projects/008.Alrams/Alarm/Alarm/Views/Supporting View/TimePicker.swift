import SwiftUI

struct TimePicker: View {
    @Binding var time: Date
    let scale: CGFloat
    
    var body: some View {
        DatePicker("Label is Hidden", // label that appears above the date picker
                   selection: $time,
                   displayedComponents: .hourAndMinute)
            .scaleEffect(scale)
            .labelsHidden()
    }
}

struct TimePicker_Previews: PreviewProvider {
    static var previews: some View {
        TimePicker(time: .constant(Date()), scale: 1.3)
    }
}
