#### NAME : AFRICA
#### PURPOSE OF APP : shows various photos/videos of animals living in Africa and provides descriptions of the characteristics of the animals in each picture. 

#### FEATURES USED : 
#### 1) JSON with Swift
#### 2) Grid Layouts 
#### 3) MapKit Integration
#### 4) Video Player
#### 5) Launch Screen
#### 6) CONCEPT > Extension
#### 7) CONCEPT > Generics
#### 8) Prototype
#### 9) iMessage Sticker Pack
#### 10) Pseudocode
#### 11) Bundle and Extension

#### NOTE DURING THE COURSE (WIL) : 

#### 1)  tabItem > 하단 메뉴
````      
.tabItem {
Image(systemName: "play.rectangle")
Text("Locations")
}
````      

#### 2)  tabViewStyle을 통한 swiper 기능
````      
.tabViewStyle(PageTabViewStyle())
````      

#### 3)  Extension  & Bundle
Extension > helps in adding more functionality to an existing Class, Structure, Enum or Protocol Type

Bundle > represent apps, frameworks, executable codes or related resources such as images, sounds, videos etc 


#### 4)  guard > control flow statement in Swift that is used to check a condition. If the condition evaluates to true, the code inside the guard block continues executing normally. If the condition evaluates to false, the code inside the else block is executed.

````      
guard let url = self.url(forResource: file, withExtension: nil) else {
fatalError("Failed to locate \(file) in bundle.")

1. The forResource parameter is used to specify the name of the resource, and the withExtension parameter is used to specify the file extension. 
2. If the method call returns a non-nil value (i.e., it successfully locates the resource), then the unwrapped URL is assigned to the constant url. If the method call returns nil (i.e., it fails to locate the resource), the else block is executed.

}
````      
#### 5) .listRowInsets() >  modifier that you can apply to a List view to customize the spacing and layout of rows within the list
````      
List{
CoverImageView()
.frame(height: 300)
.listRowInsets(EdgeInsets(top: 0, leading: 0, bottom: 0, trailing: 0))
}// : LIST
````      
#### 6)  scaledToFit and scaledToFill
1.  scaledToFit > scales the image to fit within the available frame while preserving the image's aspect ratio.
2.  scaledToFill >scales the image to completely fill the available frame, even if it means cropping or clipping part of the image to do so.
    
#### 7)  Generics 
> Generics allow us to write code that is capable of working with a variety of different types to make. 
````      

````      
#### 8)  NavigationView > NavigationLink & navigationBarTitle
````      
        NavigationView {
            List{
                CoverImageView()
                    .frame(height: 300)
                    .listRowInsets(EdgeInsets(top: 0, leading: 0, bottom: 0, trailing: 0))
                ForEach(animals){animal in
                    NavigationLink(destination: // 이동하는 위치 AnimalDetailView(animal: animal), label: {
                        AnimalListItemView(animal: animal)
                    })
                    
                }
            }// : LIST
            .navigationBarTitle("Africa", displayMode: .large)
        }// : NAVIGATION
````      
#### 9)  Computed 
>  
```` 
in define >      
struct VideoModel: Codable, Identifiable {
    let id: String
    let name: String
    let headline: String
    
    // Computed Property
    var thumbnail: String {
        "video-\(id)"
    }
}
///
in use > 
Image("video-\(video.id)") // > Without use of Computed Property
Image(video.thumbnail) // > use of Computed Property
````      
#### 10)  hapticImpact > enhance UX by interact
````      
    let hapticImpact = UIImpactFeedbackGenerator(.medium)

````      
#### 11)  .listStyle() > determines the appearance and layout of the list.

InsetGroupedListStyle() > a list style where the list's content is displayed with a group-style inset, similar to the grouped style used in tables. The list items appear indented, and there is visual separation between different groups of items.
````      
    .listStyle(InsetGroupedListStyle())
````



   
#### 10)  
````      

````      
#### 10)  
````      

````      
#### 10)  
````      

````      
#### 10)  
````      

````      
#### 10)  
````      

````      
#### 10)  
````      

````      
#### 10)  
````      

````      
#### 10)  
````      

````      
#### 10)  
````      

````      
#### 10)  
````      

````      
#### 10)  
````      

````      
#### 10)  
````      

````      
#### 10)  
````      

````      
