//
//  ContentView.swift
//  Devote
//
//  Created by Hyunsoo Chang on 2023/09/15.
//

import SwiftUI
import CoreData

struct ContentView: View {
    // MARK: PROPERTIES
    @Environment(\.managedObjectContext) private var viewContext // an enviroment where we can manipulate Core Data Objects entirely in RAM
    // NOTE : Environment OBJ is mainly used to observe changes, while Enviroment is used for passing values.
    

    // Used to fetch data from Core Data > load core data results that match the specific criteria we specify.
    // > bind those results directly to user interface elements.
    // > 1.Entity is what we want to query.
    // > 2.Sort descriptor determines the order in which results are returned.
    // > 3.Predicate, we can filter the data.
    // > 4.Animation is used for any changes to the fetched result.
    @FetchRequest(
        sortDescriptors: [NSSortDescriptor(keyPath: \Item.timestamp, ascending: true)],
        animation: .default)
    private var items: FetchedResults<Item>

    
    // MARK: FUNCTIONS
    private func addItem() {
        withAnimation {
            let newItem = Item(context: viewContext)
            newItem.timestamp = Date()
            
            do {
                try viewContext.save()
            } catch {
                let nsError = error as NSError
                fatalError("Unresolved error \(nsError), \(nsError.userInfo)")
            }
        }
    }
    private func deleteItems(offsets: IndexSet) {
        withAnimation {
            offsets.map { items[$0] }.forEach(viewContext.delete)
            
            do {
                try viewContext.save()
            } catch {
                let nsError = error as NSError
                fatalError("Unresolved error \(nsError), \(nsError.userInfo)")
            }
        }
    }
    
    
    // MARK: BODY
    var body: some View {
        NavigationView {
            List {
                ForEach(items) { item in
                    NavigationLink {
                        Text("Item at \(item.timestamp!, formatter: itemFormatter)")
                    } label: {
                        Text(item.timestamp!, formatter: itemFormatter)
                    }
                }
                .onDelete(perform: deleteItems)
            } // ; LIST
            .toolbar {
                ToolbarItem(placement: .navigationBarLeading) {
                    EditButton()
                }
                ToolbarItem {
                    Button(action: addItem) {
                        Label("Add Item", systemImage: "plus")
                    }
                }
            } // ; toolbar
            Text("Select an item")
        } // ; NavigationView
    }
}


// MARK: PREVIEWS
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView().environment(\.managedObjectContext, PersistenceController.preview.container.viewContext)
    }
}
