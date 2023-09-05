//
//  Created by Robert Petras
//  SwiftUI Masterclass ♥ Better Apps. Less Code.
//  https://swiftuimasterclass.com 
//

import SwiftUI

struct OLDSettingsRowView: View {
  // MARK: - PROPERTIES
  
  var oldname: String
  var oldcontent: String? = nil
  var oldlinkLabel: String? = nil
  var oldlinkDestination: String? = nil

  // MARK: - BODY

  var body: some View {
    VStack {
      Divider().padding(.vertical, 4)
      
      HStack {
        Text(oldname).foregroundColor(Color.gray)
        Spacer()
        if (oldcontent != nil) {
          Text(oldcontent!)
        } else if (oldlinkLabel != nil && oldlinkDestination != nil) {
          Link(oldlinkLabel!, destination: URL(string: "https://\(oldlinkDestination!)")!)
          Image(systemName: "arrow.up.right.square").foregroundColor(.pink)
        }
        else {
          EmptyView()
        }
      }
    }
  }
}

// MARK: - PREVIEW

struct OLDSettingsRowView_Previews: PreviewProvider {
  static var previews: some View {
    Group {
      OLDSettingsRowView(oldname: "Developer", oldcontent: "John / Jane")
        .previewLayout(.fixed(width: 375, height: 60))
        .padding()
      OLDSettingsRowView(oldname: "Website", oldlinkLabel: "SwiftUI Masterclass", oldlinkDestination: "swiftuimasterclass.com")
        .preferredColorScheme(.dark)
        .previewLayout(.fixed(width: 375, height: 60))
        .padding()
    }
  }
}
