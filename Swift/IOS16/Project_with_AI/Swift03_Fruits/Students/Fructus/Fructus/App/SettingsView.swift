
import SwiftUI

struct SettingsView: View {
    //MARK: properties
    @Environment(\.presentationMode) var presentationMode // environment of the Device
    @AppStorage("isOnboarding") var isOnboarding: Bool = false
    
    //MARK: body
    var body: some View {
        NavigationView(){
            ScrollView(.vertical, showsIndicators: false){
                VStack(spacing: 20) {
                    // MARK: SECTION-1
                    GroupBox(
                        label: SettingsLabelView(labelText: "Fruits", labelImage: "info.circle")
                    ){
                        Divider().padding(.vertical, 4)
                        HStack(alignment: .center, spacing: 20) {
                            Image("logo")
                                .resizable()
                                .scaledToFit()
                                .frame(width: 80, height: 80)
                                .cornerRadius(10)
                            Text("Most fruits are naturally low in fat, sodium, and calories. None have cholesterol. Fruits are sources of many essential nutrients, including potassium, dietary fiber, vitamins, and much more.")
                                .font(.footnote)
                        } //: HSTACK
                        
                    }
                    
                    // MARK: SECTION-2
                    GroupBox(
                        label: SettingsLabelView(labelText: "Customization", labelImage: "paintbrush")
                    ){
                        Divider().padding(.vertical, 4)
                        Text("If you wish, you can restart the application by toggle the switch in this box. That way it starts the onboarding process and you will see the welcome screen again.")
                            .padding(.vertical, 8)
                            .frame(minHeight: 60)
                        //                            .layoutPriority(1) // set highest priority to avoid truncate
                            .font(.footnote)
                            .multilineTextAlignment(.leading)
                        
                        Toggle(isOn: $isOnboarding){
                            if isOnboarding {
                                Text("Restarted".uppercased())
                                    .fontWeight(.bold)
                                    .foregroundColor(Color.green)
                            } else {
                                Text("Restart".uppercased())
                                    .fontWeight(.bold)
                                    .foregroundColor(Color.secondary)
                            }
                        }
                        // Restart 토글버튼 백그라운드
                        .padding()
                        .background(
                            Color(UIColor.tertiarySystemBackground)
                                .clipShape(RoundedRectangle(cornerRadius: 8, style: .continuous))
                        )
                        
                    }
                    // MARK: SECTION-3
                    GroupBox(
                        label: SettingsLabelView(labelText: "APPLICATION", labelImage: "apps.iphone")
                    ){
                        SettingsRowView(name: "Developer", content: "Heath Chang")
                        SettingsRowView(name: "Website", linkLabel: "SWIFT UI Class", linkDestination: "swiftuimasterclass.com")
                        SettingsRowView(name: "Compatibility", content: "iOS 14")
                        SettingsRowView(name: "Website", linkLabel: "SwiftUI Masterclass", linkDestination: "swiftuimasterclass.com")
                        SettingsRowView(name: "Twitter", linkLabel: "@RobertPetras", linkDestination: "twitter.com/robertpetras")
                        SettingsRowView(name: "SwiftUI", content: "2.0")
                        SettingsRowView(name: "Version", content: "1.1.0")
                        
                    }
                }
                .navigationBarTitle(Text("Settings"), displayMode: .large)
                .navigationBarItems(trailing: Button(action: {
                    presentationMode.wrappedValue.dismiss()
                }, label: {Image(systemName: "xmark")}))
                .padding()
            } //: SCROLL VIEW
        } // : Nevigation View
    }
}



//MARK: previews
struct SettingsUIView_Previews: PreviewProvider {
    static var previews: some View {
        SettingsView()
            .preferredColorScheme(.dark)
        
    }
}
