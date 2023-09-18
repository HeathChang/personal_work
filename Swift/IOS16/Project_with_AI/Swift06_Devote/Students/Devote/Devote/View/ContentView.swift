
import SwiftUI
import CoreData

struct ContentView: View {
    // MARK: PROPERTIES
    @AppStorage("isDarkMode") private var isDarkMode: Bool = false
    @State var task: String = ""
    @State var showNewTaskItem: Bool = false
    
    
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
                // MARK: MAIN VIEW
                VStack {
                    // MARK: Header
                    HStack(spacing: 10){
                        // Title
                        Text("Devote")
                            .font(.system(.largeTitle, design: .rounded))
                            .fontWeight(.heavy)
                            .padding(.leading, 4)
                        
                        Spacer()
                        // Edit
                        EditButton().font(.system(size:16, weight: .semibold, design: .rounded))
                            .padding(.horizontal, 10).frame(minWidth: 70, minHeight: 24).background(Capsule().stroke(Color.white, lineWidth: 2))
                        
                        // Appearance
                        Button {
                            isDarkMode.toggle()
                        } label: {
                            Image(systemName: isDarkMode ? "moon.circle.fill" : "moon.circle")
                                .resizable()
                                .frame(width: 24, height: 24)
                                .font(.system(.title, design: .rounded))
                        }
                        
                    } // ; HStack
                    .padding()
                    .foregroundColor(.white)
                    Spacer(minLength: 80)
                    
                    // MARK: New Task Button
                    Button {
                        showNewTaskItem = true
                    } label: {
                        Image(systemName: "plus.circle")
                            .font(.system(size: 30, weight: .semibold, design: .rounded))
                        Text("New Task")
                            .font(.system(size: 24, weight: .semibold, design: .rounded))
                    }
                    .foregroundColor(.white)
                    .padding(.horizontal, 20)
                    .padding(.vertical, 15)
                    .background(
                        LinearGradient(gradient: Gradient(colors: [Color.pink, Color.blue]), startPoint: .leading, endPoint: .trailing)
                    )
                    .clipShape(Capsule())
                    .shadow(color: Color(red: 0, green: 0, blue: 0, opacity: 0.25), radius: 8, x: 0.0, y: 4.0)
                    
                    
                    // MARK: Contents
                    VStack{
                        Spacer()
                        if(items.count > 0){
                            List {
                                ForEach(items) { item in
                                    ListRowItemView(item: item)
                                }
                                .onDelete(perform: deleteItems)
                            } // ; LIST > Contents
                            .listStyle(DefaultListStyle())
                            .scrollContentBackground(.hidden) // hides the standard system background of the List
                            .shadow(color: Color(red: 0, green: 0 , blue: 0, opacity: 0.3), radius: 12)
                            .padding(.vertical, 0)
                            .frame(maxWidth: 640)
                        } else {
                            
//                            NoItemFound()
                            Spacer()
                        }
                    }
                } // ; VStack
                
                // MARK: New Task Item
                if showNewTaskItem {
                    BlankView()
                        .onTapGesture {
                            withAnimation {
                                showNewTaskItem = false
                            }
                        }
                    NewTaskItemView(isShowing: $showNewTaskItem)
                }
                
                
            } // ; ZStack
            .onAppear{
                UITableView.appearance().backgroundColor = UIColor.clear
            }
            .navigationTitle("Daily Task")
            .navigationBarTitleDisplayMode(.large) // navigationBarTitle is depreciated.
            .toolbar(.hidden)
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
