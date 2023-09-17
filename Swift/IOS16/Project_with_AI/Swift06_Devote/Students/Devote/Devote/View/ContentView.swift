
import SwiftUI
import CoreData

struct ContentView: View {
    // MARK: PROPERTIES
    @State var task: String = ""
    private var isButtonDisabled: Bool {
        task.isEmpty
    }
    
    @Environment(\.managedObjectContext) private var viewContext // an enviroment where we can manipulate Core Data Objects entirely in RAM (Injected)
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
            newItem.task = task
            newItem.completion = false
            newItem.id = UUID()
            
            do {
                try viewContext.save()
            } catch {
                let nsError = error as NSError
                fatalError("Unresolved error \(nsError), \(nsError.userInfo)")
            }
            
            task = ""
            hideKeyboard()
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
            ZStack {
                VStack {
                    VStack(spacing: 16){
                        TextField("New Task", text: $task)
                            .padding()
                            .background(
                                Color(UIColor.systemGray6)
                            )
                        
                        Button {
                            addItem()
                        } label: {
                            Spacer()
                            Text("SAVE")
                            Spacer()
                        }
                        .disabled(isButtonDisabled) // disabled
                        .padding()
                        .font(.headline)
                        .foregroundColor(.white)
                        .background(isButtonDisabled ? Color.gray : Color.pink)
                        .cornerRadius(10)
                        
                    } // ; VStack
                    .padding()
                    List {
                        ForEach(items) { item in
                            NavigationLink {
                                VStack(alignment: .leading) {
                                    Text(item.task ?? "")
                                        .font(.headline)
                                        .fontWeight(.bold)
                                    
                                    Text("Item at \(item.timestamp!, formatter: itemFormatter)")
                                        .font(.footnote)
                                        .foregroundColor(.gray)
                                }
                            } label: {
                                Text(item.task ?? "No Task contents")
                                    .font(.headline)
                                    .fontWeight(.bold)
                            }
                        }
                        .onDelete(perform: deleteItems)
                        
                    } // ; LIST > Contents
                    .listStyle(InsetListStyle())
                    .shadow(color: Color(red: 0, green: 0 , blue: 0, opacity: 0.3), radius: 12)
                    .padding(.vertical, 0)
                    .frame(maxWidth: 640)
                } // ; VStack
            } // ; ZStack
            .onAppear{
                UITableView.appearance().backgroundColor = UIColor.clear
            }
            .navigationTitle("Daily Task")
            .navigationBarTitleDisplayMode(.large) // navigationBarTitle is depreciated.
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    EditButton()
                }
            }
            .background(
                BackgroundImageView()
            )
            .background(
                backgroundGradient.ignoresSafeArea(.all)
            )
        } // ; NavigationView
        .navigationViewStyle(StackNavigationViewStyle())
    }
}


// MARK: PREVIEWS
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView().environment(\.managedObjectContext, PersistenceController.preview.container.viewContext)
    }
}
