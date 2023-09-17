
import CoreData
// This struct will be used to manage Core Data's stack

struct PersistenceController {
    // MARK: 1. Persistence Controller > sets up the model context and store co-ordinator
    static let shared = PersistenceController()
    // using NSManagerdObjectContext to create
    // Singleton > there's only one instance of PersistenceController shared across the application
    
    // MARK: 2. Persistence Container
    let container: NSPersistentContainer

    // MARK: 3. Initialization (load the persistent store)
    init(inMemory: Bool = false) {
        container = NSPersistentContainer(name: "Devote")
        if inMemory {
            container.persistentStoreDescriptions.first!.url = URL(fileURLWithPath: "/dev/null") // refering the data model (Path to the temporary storage)
        }
        container.loadPersistentStores(completionHandler: { (storeDescription, error) in // load the store (persistent or temporary)
            if let error = error as NSError? {
                fatalError("Unresolved error \(error), \(error.userInfo)")
            }
        })
        container.viewContext.automaticallyMergesChangesFromParent = true
    }
    
    
    // MARK: 4. Preview
    static var preview: PersistenceController = {
        let result = PersistenceController(inMemory: true) // switch to in memory store.
        let viewContext = result.container.viewContext
        for i in 0..<5 {
            let newItem = Item(context: viewContext) // sample data for the preview
            newItem.timestamp = Date()
            newItem.task = "Sample task No\(i)"
            newItem.completion = false
            newItem.id = UUID()
        }
        do {
            try viewContext.save() // save sample data to preview
        } catch {
            
            let nsError = error as NSError
            fatalError("Unresolved error \(nsError), \(nsError.userInfo)")
        }
        return result
    }()
}
