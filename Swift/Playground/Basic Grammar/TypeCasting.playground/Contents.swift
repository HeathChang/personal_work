import UIKit
// 타입 캐스팅: 인스턴스의 타입을 확인하거나 어떤 class의 인스턴스를 super class / sub class 로 취급하는 방법
// is / as 사용

//is 연산자는 런타임에 expression 이 특정 type 으로 캐스팅 되는지 체크해줍니다. 가능하면 true 불가능하면 _false_를 return 합니다.
// as 연산자는 컴파일 단계에서 캐스팅이 실행됩니다. 그러므로 언제나 특정 type 으로 캐스팅이 성공할 때만 사용이 가능합니다. 업캐스팅(Upcasting) 혹은 브릿징(Bridging) 에 사용됩니다.
// as? 연산자는 런타임에 캐스팅하여 특정 type 의 옵셔널을 반환합니다. 성공하면 옵셔널 값을 반환하고 실패하면 nil 을 반환합니다.
// as! 연산자는 런타임에 특정 type 으로 강제 캐스팅합니다. 캐스팅에 실패할 경우 런타임 에러가 발생할 수 있습니다.



class MediaItem {
    var name: String
    init(name: String) {
        self.name = name
    }
}

class Movie: MediaItem {
    var director: String
    init(name: String, director: String) {
        self.director = director
        super.init(name: name)
    }
}


class Song: MediaItem {
    var artist: String
    init(name: String, artist: String) {
        self.artist = artist
        super.init(name: name)
    }
}

let library = [
    Movie(name: "Casablanca", director: "Michael Curtiz"),
    Song(name: "Blue Suede Shoes", artist: "Elvis Presley"),
    Movie(name: "Citizen Kane", director: "Orson Welles"),
    Song(name: "The One And Only", artist: "Chesney Hawkes"),
    Song(name: "Never Gonna Give You Up", artist: "Rick Astley")
]

var movieCount = 0
var songCount = 0

// is > Checking Type > to check whether an instance is of a certain subclass type. (Type만 체크)
for item in library {
    if item is Movie {
        movieCount += 1
    } else if item is Song {
        songCount += 1
    }
}
print("Media library contains \(movieCount) movies and \(songCount) songs")
// Prints "Media library contains 2 movies and 3 songs"

// Down-Casting > class type may actually refer to an instance of a subclass (Type 체크후, 해당되는  하위 클래스 사용 가능)
for item in library {
    if let movie = item as? Movie {
        print("Movie: \(movie.name), dir. \(movie.director)")
    } else if let song = item as? Song {
        print("Song: \(song.name), by \(song.artist)")
    }
}

// Movie: Casablanca, dir. Michael Curtiz
// Song: Blue Suede Shoes, by Elvis Presley
// Movie: Citizen Kane, dir. Orson Welles
// Song: The One And Only, by Chesney Hawkes
// Song: Never Gonna Give You Up, by Rick Astley
