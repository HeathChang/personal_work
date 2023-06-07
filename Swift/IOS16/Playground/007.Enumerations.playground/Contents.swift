import UIKit

print("=======================")
func printXY(x: Double, y: Double)  {
    print("( \(x), \(y) )")
}

print("=======================")
// since signature of the function (aka. params) are different, able to make same-NAME function.
func printXY(point:CGPoint) {
    
    let x = point.x;
    let y = point.y;
    print("( \(x), \(y) )")
    
}

print("=======================")
enum Direction {
    case north, south, east, west
}

var x = 0.0
var y = 0.0

let delta = 5.0
var direction1 = Direction.east;
var direction2:Direction = .north; // Direction.north 와 동일
var directions: [Direction] = [.north,.east,.south,.west];

print("=======================")
// switch
printXY( x: x, y:y )
switch(direction1){
case .east:
    x += delta;
case .west:
    x -= delta;
case .north:
    y -= delta;
case .south:
    y += delta;
}


print("=======================")
func updatePosition(direction: Direction, point: CGPoint) -> CGPoint {
    var x = point.x;
    var y = point.y;
    let delta = 5.0
    
    switch(direction1){
    case .east:
        x += delta;
    case .west:
        x -= delta;
    case .north:
        y -= delta;
    case .south:
        y += delta;
    }
    return CGPoint(x: x, y: y)
}

var thePoint: CGPoint = CGPoint(x: 0, y: 0);
printXY(point: thePoint);

for direction in directions {
    thePoint = updatePosition(direction: direction, point: thePoint)
    printXY(point: thePoint);
}

print("=======================")

// Named Cases.
enum photoNames: String, CaseIterable {
case dog1 = "poxel-puppy-chevanon1.png";
case dog2 = "poxel-puppy-chevanon2.png";
case dog3 = "poxel-puppy-chevanon3.png";
}

// Use of allCases to use for loop with a custom type.
// why: for loop relies on being able to iterate over a sequence of values. 
for photo in photoNames.allCases{
    // Note::
    print("The File name for \(photo) is \(photo.rawValue)" )

}
