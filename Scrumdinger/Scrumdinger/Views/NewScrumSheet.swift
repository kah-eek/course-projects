//
//  NewScrumSheet.swift
//  Scrumdinger
//
//  Created by Caique Meira Oliveira on 19/02/24.
//

import SwiftUI

struct NewScrumSheet: View {
    @State private var newScrum = DailyScrum.emptyScrum
    @Binding var isPresentingSheet:Bool
    @Binding var scrums: [DailyScrum]
    
    var body: some View {
        NavigationStack {
            DetailEditView(scrum: $newScrum)
                .toolbar {
                    ToolbarItem(placement: .cancellationAction) {
                        Button("Dismiss") {
                            isPresentingSheet = false
                        }
                    }
                    ToolbarItem(placement: .confirmationAction) {
                        Button("Add") {
                            scrums.append(newScrum)
                            isPresentingSheet = false
                        }
                    }
                }
        }
    }
}

#Preview {
    NewScrumSheet(
        isPresentingSheet: .constant(true),
        scrums: .constant(DailyScrum.sampleData)
    )
}
