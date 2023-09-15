//
//  TouchdownApp.swift
//  Touchdown
//
//  Created by Hyunsoo Chang on 2023/09/12.
//

import SwiftUI

@main
struct TouchdownApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(Shop()) // enviromentObject modifier allows us to create views that rely on shared data.
        }
    }
}
