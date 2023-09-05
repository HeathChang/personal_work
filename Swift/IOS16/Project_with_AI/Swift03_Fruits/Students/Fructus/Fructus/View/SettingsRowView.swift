//
//  SettingsRowView.swift
//  Fructus
//
//  Created by Hyunsoo Chang on 2023/09/05.
//

import SwiftUI

struct SettingsRowView: View {
    // MARK: - PROPERTIES
    
    var name: String
    var content: String? = nil
    var linkLabel: String? = nil
    var linkDestination: String? = nil
    
    // MARK: - BODY
    
    var body: some View {
        VStack {
            Divider().padding(.vertical, 2)
            HStack(){
                Text(name).foregroundColor(.gray)
                Spacer()
                if(content != nil){
                    Text(content!)
                } else if (linkLabel != nil && linkDestination != nil) {
                    // 외부 링크로 이동
                    Link(linkLabel!, destination: URL(string: "http://\(linkDestination!)")!) // URL must be unwrapped > !
                    Image(systemName: "arrow.up.right.square").foregroundColor(.pink)
                } else {
                    EmptyView()
                }
            }
        }
    }
}

// MARK: - PREVIEWS
struct SettingsRowView_Previews: PreviewProvider {
    static var previews: some View {
        Group {
            SettingsRowView(name: "Developer", content: "HEATH CHANG")
                .previewLayout(.fixed(width: 375, height: 60))
                .padding()
            SettingsRowView(name: "Website", linkLabel: "SWIFT UI Class", linkDestination: "swiftuimasterclass.com")
                .previewLayout(.fixed(width: 375, height: 60))
                .padding()
        }
    }
}
