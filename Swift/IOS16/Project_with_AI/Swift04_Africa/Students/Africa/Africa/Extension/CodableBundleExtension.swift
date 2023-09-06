//
import Foundation

extension Bundle {
    //<T: Codable> >
    func decode<T: Codable>(_ file: String) -> T {
        // 1. Locate the json file >>  locates a resource (file) in a bundle >> if not, return nil
        guard let url = self.url(forResource: file, withExtension: nil) else {
            fatalError("Failed to locate \(file) in bundle.")
        }
        // 2. Create a property for the data > load data from a URL.
        guard let data = try? Data(contentsOf: url) else {
            fatalError("Failed to load \(file) from bundl .")
        }
        
        
        // 3. Create a decoder
        let decoder = JSONDecoder()
        
        // 4. Create a property for the decoded data > safely attempt to decode data from a binary format into an instance of a specified type T
        // optional binding to attempt to decode the data (which presumably contains serialized data, such as an array of CoverImage objects in JSON format) into an array of CoverImage objects.
        guard let loaded = try? decoder.decode(T.self, from: data) else {
            fatalError("Failed to decode \(file) from bundle.")
        }
        // T here is a generic type parameter, and T.self refers to the metatype of that generic type. It means "the type T itself."
        
        // 5. Return the ready-to-use data
        return loaded
    }
}
