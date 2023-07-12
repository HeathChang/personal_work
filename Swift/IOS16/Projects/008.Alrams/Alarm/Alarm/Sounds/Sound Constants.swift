
import Foundation



// CaseIterable: run through the enum so we can run through a list
enum Sounds: String, CaseIterable, Codable {
    // Ringtone Sounds
    case wake_up = "Sound Wake up.aiff"
    case lagrima = "Lagrima.aiff"
    case christmas_bells = "christmas_bells.mp3"
    case mr_grinch_ravens = "mr_grinch_ravens.mp3"
    case my_baby = "my_baby.mp3"
    case peanuts_ringtone = "peanuts_ringtone.mp3"
    case tennessee_whiskey = "tennessee_whiskey.mp3"
    case turkey_time = "turkey_time.mp3"
    case wasted_on_u = "wasted_on_u.mp3"
    case welcome_to_my_house = "welcome_to_my_house.mp3"
    
    // Nature Sounds
    case bird_forest = "bird forest.mp3"
    case bird_voices = "bird voices.mp3"
    case forest_birds_sweden = "forest birds sweden.mp3"
    case forest_with_cuckoo_birds = "forest with cuckoo birds.mp3"
    case night_ambience = "night ambience.mp3"
    case owl_hooting = "owl hooting.mp3"
    case screeching_owl = "screeching owl.mp3"
    case soft_rain_ambient = "soft rain ambient.mp3"
    case the_beat_of_nature = "the beat of nature.mp3"
    case waterfall = "waterfall.mp3"
    
    // func formatSoundName() -> String {
    //    return String(describing: self)
        // \.self: used when you need to reference the type itself as a value, when passing the type as a parameter or accessing static members. eg)  SomeClass.self refers to SomeClass. => Refer to type itself
        // self: used within an instance method or property to access or refer to the properties, methods, or other members of the current instance. eg) self.method()  => Refer to current Instance
    //        .replacingOccurrences(of: "_", with: " ")
    //        .capitalized
        
    // }
    
}


let ringToneSoundsList: [Sounds] = [
    .wake_up,
    .lagrima,
    .christmas_bells,
    .mr_grinch_ravens,
    .my_baby,
    .peanuts_ringtone,
    .tennessee_whiskey,
    .turkey_time,
    .wasted_on_u,
    .welcome_to_my_house
]

let natureSoundsList: [Sounds] = [
    .bird_forest,
    .bird_voices,
    .forest_birds_sweden,
    .forest_with_cuckoo_birds,
    .night_ambience,
    .owl_hooting,
    .screeching_owl,
    .soft_rain_ambient,
    .the_beat_of_nature,
    .waterfall
]

extension String {
    var formatSoundName: String {
        var result = String(describing: self)
            .replacingOccurrences(of: "_", with: " ")
            .capitalized
        
        let periodIndex = result.firstIndex(of: ".")
        
        if let periodIndex: Index = periodIndex {
            // removeSubrange > removes a range of elements from a collection.
            //  takes a parameter (periodIndex...), which represents a range starting from periodIndex to the end of the collection.
            
            result.removeSubrange(periodIndex...) // from the period Index onwards
        }
        
        return result
    }
}
