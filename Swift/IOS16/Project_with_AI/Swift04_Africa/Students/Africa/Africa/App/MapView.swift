import SwiftUI
import MapKit

struct MapView: View {
    // MARK: PROPERTIES
    @State private var region: MKCoordinateRegion = {
        // immediately initialized using a closure
        var mapCordinates = CLLocationCoordinate2D(latitude: 6.600286, longitude: 16.437799)
        var mapZoomLevel = MKCoordinateSpan(latitudeDelta: 70.0, longitudeDelta: 70.0)
        var mapRegion = MKCoordinateRegion(center: mapCordinates, span: mapZoomLevel)
        
        return mapRegion
    }()
    
    let locations: [NationParkLocationModel] = Bundle.main.decode("locations.json")
    
    // MARK: BODY
    var body: some View {
        VStack{
            // MARKL -1 BASIC MAP
            // Map(coordinateRegion: $region)
            // MARK -2 MAP with Annotation
            Map(coordinateRegion: $region, annotationItems: locations) { item in
                // (A) PIN: OLD STYLE > STATIC
                // MapPin(coordinate: item.location, tint: .accentColor) // deprecated in iOS 16.0:
                
                // (B) PIN: NEW STYLE > STATIC
                // MapMarker(coordinate: item.location, tint: .accentColor)
                
                // (C) Custom Basic : interactive
                // MapAnnotation(coordinate: item.location){
                //    Image("logo")
                //        .resizable()
                //        .scaledToFit()
                //        .frame(width: 32, height: 32, alignment: .center)
                
                // (D) Custom Advanced : interactive
                MapAnnotation(coordinate: item.location){
                    MapAnnotationView(location: item)
                }
            } // ; MAP
            .overlay(alignment: .top) {
                HStack(alignment: .center, spacing: 12) {
                    Image("compass")
                        .resizable()
                        .scaledToFit()
                        .frame(width: 38, height: 38, alignment: .center)
                    
                    VStack (alignment: .leading, spacing: 3){
                        HStack{
                            Text("Latitude")
                                .font(.footnote)
                                .fontWeight(.bold)
                                .foregroundColor(.accentColor)
                            Spacer()
                            Text("\(region.center.latitude)") // state로 설정해서, 위치 변경시 값도 같이 변경
                        }
                        Divider()
                        HStack{
                            Text("Longitutde")
                                .font(.footnote)
                                .fontWeight(.bold)
                                .foregroundColor(.accentColor)
                            Spacer()
                            
                            Text("\(region.center.longitude)") // state로 설정해서, 위치 변경시 값도 같이 변경
                            
                            
                        }
                    }
                } // ; HSTACK
                .padding(.vertical,12)
                .padding(.horizontal,16)
                .background(
                    Color.black
                        .cornerRadius(8)
                        .opacity(0.6)
                )
                .padding()
            } // ; OVERLAY
        }
    }
}


// MARK: PREVIEWS
struct MapView_Previews: PreviewProvider {
    static var previews: some View {
        MapView()
    }
}
