import SwiftUI
import CoreImage
import CoreImage.CIFilterBuiltins
import UIKit


struct ContourDetectionView: View {
    @State private var originalImage: UIImage? = nil
    @State private var contourImage: UIImage? = nil
    
    var body: some View {
        VStack {
            if let image = contourImage {
                Image(uiImage: image)
                    .resizable()
                    .aspectRatio(contentMode: .fit)
            } else {
                Text("Select an image")
            }
            
            Button("Select Image") {
                // Open an image picker
                let imagePicker = UIImagePickerController()
                imagePicker.delegate = context.coordinator
                imagePicker.sourceType = .photoLibrary
                UIApplication.shared.windows.first?.rootViewController?.present(imagePicker, animated: true, completion: nil)
            }
        }
        .onAppear {
            // Load a sample image on appearance
            if let image = UIImage(named: "sampleImage") {
                self.originalImage = image
                self.detectContours(image: image)
            }
        }
    }
    
    private func detectContours(image: UIImage) {
        guard let ciImage = CIImage(image: image) else { return }
        
        let contourFilter = CIFilter.contour()
        contourFilter.inputImage = ciImage
        
        if let outputImage = contourFilter.outputImage {
            let context = CIContext()
            if let cgImage = context.createCGImage(outputImage, from: outputImage.extent) {
                contourImage = UIImage(cgImage: cgImage)
            }
        }
    }
    
    private func processImage(_ image: UIImage) {
        originalImage = image
        detectContours(image: image)
    }
    
    // Coordinator for UIImagePickerControllerDelegate
    private func makeCoordinator() -> Coordinator {
        Coordinator(self)
    }
    
    class Coordinator: NSObject, UIImagePickerControllerDelegate, UINavigationControllerDelegate {
        var parent: ContourDetectionView
        
        init(_ parent: ContourDetectionView) {
            self.parent = parent
        }
        
        func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]) {
            if let selectedImage = info[.originalImage] as? UIImage {
                parent.processImage(selectedImage)
            }
            picker.dismiss(animated: true, completion: nil)
        }
        
        func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
            picker.dismiss(animated: true, completion: nil)
        }
    }
}
