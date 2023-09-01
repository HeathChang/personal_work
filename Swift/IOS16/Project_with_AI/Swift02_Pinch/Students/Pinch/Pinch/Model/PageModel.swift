import Foundation

struct Page: Identifiable { // Swift Protocol: a protocol defines a blueprint of methods, properties, and other requirements that uit a particular task or piece of functionality
    let id: Int
    let imageName: String
}


extension Page{
    var thumbnailName: String {
        return "thumb-" + imageName
    }
}
