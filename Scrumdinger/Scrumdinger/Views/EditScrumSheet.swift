//
//  EditScrumSheet.swift
//  Scrumdinger
//
//  Created by Caique Meira Oliveira on 19/02/24.
//

import SwiftUI

struct EditScrumSheet: View {
    @Binding var isPresentingSheet:Bool
    @Binding var scrum: DailyScrum
    
    var body: some View {
        NavigationStack {
            DetailEditView(scrum: $scrum)
                .navigationTitle(scrum.title)
                .toolbar() {
                    ToolbarItem(placement: .cancellationAction) {
                        Button("Cancel") {
                            isPresentingSheet = false
                        }
                    }
                    ToolbarItem(placement: .confirmationAction) {
                        Button("Done") {
                            isPresentingSheet = false
                        }
                    }
                }
        }
    }
}

#Preview {
    EditScrumSheet(
        isPresentingSheet: .constant(true),
        scrum: .constant(DailyScrum.emptyScrum)
    )
}
