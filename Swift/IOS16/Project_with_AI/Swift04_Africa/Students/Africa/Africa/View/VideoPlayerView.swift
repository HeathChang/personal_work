
import SwiftUI
import AVKit

struct VideoPlayerView: View {
    //MARK: PROPERTIES
    var videoSelected: String
    var videoTitle: String
    @State private var timeRemains: Int = 3
    @State private var timer: Timer? = nil
    
    
    
    //    The issue with the blinking view could be related to the way the playVideo function is called and how the view is updated when the video starts playing. To prevent the view from blinking every second, you can make sure that the view doesn't change during the 3-second delay before video playback starts.
    func startTimer() {
        if timer == nil {
            timer = Timer.scheduledTimer(withTimeInterval: 1, repeats: true) { _ in
                if self.timeRemains > 0 {
                    self.timeRemains -= 1
                } else {
                    self.stopTimer()
                }
            }
            
        }
    }
    
    func stopTimer() {
        timer?.invalidate()
        timer = nil
    }
    
    //MARK: BODY
    var body: some View {
        VStack {
            VideoPlayer(player: playVideo(fileName: videoSelected, fileFormat: "mp4")){
                
                Text("Starts in \(timeRemains) seconds..")
                    .font(.headline)
                    .fontWeight(.bold)
                    .opacity(timeRemains > 0 ? 1 : 0)
                
            }
            .opacity(timeRemains > 0 ? 0.7 : 1)
            .overlay (
                Image("logo")
                    .resizable()
                    .scaledToFit()
                    .frame(width: 32, height: 32)
                    .padding(.top, 6)
                    .padding(.horizontal, 8)
                , alignment: .topLeading
            )
        } // ; VSTACK
        .onAppear{
            withAnimation(.easeOut) {
                startTimer()
            }
        }
        .accentColor(.accentColor)
        .navigationBarTitle(videoTitle, displayMode:.inline)
        
        
        
    }
    
    //MARK: PREVIEWS
    struct VideoPlayerView_Previews: PreviewProvider {
        static var previews: some View {
            NavigationView {
                VideoPlayerView(videoSelected: "ostrich", videoTitle: "Ostrich")
            }
        }
    }
}
