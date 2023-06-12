//
//  ImageExploreExample2.swift
//  Image Explore
//
//  Created by Hyunsoo Chang on 2023/06/12.
//

import SwiftUI

struct ImageExploreExample2: View {
    @State private  var scaleToFit = true;
    
    var body: some View {
        Image(ImgType.imgLightening1.rawValue)
            .resizable()
            .aspectRatio(contentMode: scaleToFit ? .fit : .fill)
            .cornerRadius(20)
            .padding()
            .onTapGesture {
                scaleToFit.toggle();
            }
    }
}

struct ImageExploreExample2_Previews: PreviewProvider {
    static var previews: some View {
        ImageExploreExample2()
    }
}
