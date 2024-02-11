//
//  ScrumdingerApp.swift
//  Scrumdinger
//
//  Created by Caique Meira Oliveira on 09/02/24.
//

import SwiftUI

@main
struct ScrumdingerApp: App {
    var body: some Scene {
        WindowGroup {
            ScrumsView(scrums: DailyScrum.sampleData)
        }
    }
}
