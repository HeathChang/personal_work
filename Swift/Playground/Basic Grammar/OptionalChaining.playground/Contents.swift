import UIKit

// Optional Chaining: 옵셔널에 속해있는 nill일지도 모르는 property, method 등을 가져오거나 호출할 때 사용할 수 있는 과정

struct Developer {
    let name: String
}

struct Company{
    let name: String
    var developer: Developer?
}

var developer = Developer(name: "Heath")
var company: Company = Company(name: "Hello-World", developer: developer)
print(company.developer) // Optional(__lldb_expr_97.Developer(name: "Heath"))
print(company.developer?.name) // company.developer는 Optional 이기 때문에, optional을 벗겨야함 (! or ? 사용)>  Heath


