import Foundation
import AVKit


var videoPlayer: AVPlayer?

func playVideo(fileName: String, fileFormat: String) -> AVPlayer?{
    if Bundle.main.url(forResource: fileName, withExtension: fileFormat) != nil {
        videoPlayer = AVPlayer(url: Bundle.main.url(forResource: fileName, withExtension: fileFormat)!)
        DispatchQueue.main.asyncAfter(deadline: .now() + 3.0) {
            videoPlayer?.play()
        }
        return videoPlayer!
    } else {
        print("FILE NOT FOUND")
        return nil
    }
    
}
