//
//  Chart_Demo_2App.swift
//  Chart Demo 2
//
//  Created by Hyunsoo Chang on 2023/06/21.
//

import SwiftUI

@main
struct Chart_Demo_2App: App {
    var body: some Scene {
        WindowGroup {
            ContentView(
                dailySales: defaultDailySales,
                min: 0.0,
                max: 700.0
            )        }
    }
}
