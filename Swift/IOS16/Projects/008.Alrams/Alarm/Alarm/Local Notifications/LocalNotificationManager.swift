import Foundation
import NotificationCenter


// 모든 작업은 항상 메인 큐에서 수행하게 된다는 점
@MainActor // class should be run on the main actor. The main actor ensures that the class's methods are executed serially on the main thread
class LocalNoficationManager: NSObject, ObservableObject, UNUserNotificationCenterDelegate {
    
    // Creating an instance of UNUserNotificationCenter to manage local notifications
    let notificationCenter = UNUserNotificationCenter.current()
    @Published var isAuthorized = false
    
    // Store a list of notifications / alarm
    @Published var pendingAlarms: [UNNotificationRequest] = []
    
    //VM for AlarmModel
    @Published var alarmViewModels: [AlarmModel] = [] {
        didSet{
            saveItems()
        }
    }
    
    let itemKey = "Alarm List"
    
    
    func requestAuthorization() async throws{
        // requests authorization from the user to send local notifications >> 권한 요청
        // wait for the completion of the authorization request and handle any potential errors that may occur. The execution of the code will pause until the authorization request is completed or an error is thrown.
        // If the authorization request is successful, the code will continue executing after the try await statement.
        // If an error is thrown, you can handle it using do-catch or propagate it further up the call stack using throws.
        try await notificationCenter.requestAuthorization(options: [
            // try await > invoke an asynchronous operation that can potentially throw an error
            .sound, .badge, .alert
        ])
        await getCurrentSetting()
    }
    
    func getCurrentSetting() async {
        // retrieves the current notification settings and updates the isAuthorized property accordingly >> 현재 권란 문의: isAuth(bool)
        let currentSettings = await notificationCenter.notificationSettings()
        print(currentSettings.authorizationStatus)
        isAuthorized = currentSettings.authorizationStatus == .authorized
    }
    
    func openSettings() {
        //  open app's settings to allow the user to change the notification settings >> 알람 오픈
        if let url = URL(string: UIApplication.openSettingsURLString){
            if UIApplication.shared.canOpenURL(url){
                // use async or task > to make the part async
                Task{
                    print("Task 1")
                    await UIApplication.shared.open(url)
                }
            }
        }
    }
    
    
    // Save alarm vm
    func saveItems() {
        if let encodeData = try? JSONEncoder()
            .encode(alarmViewModels){
            UserDefaults
                .standard
                .set(encodeData, forKey: itemKey)
        }
    }
    override init() {
        super.init()
        // TODO: want alarm to go off when app is also active
        // Alarm VM - persistance
        guard let data = UserDefaults
            .standard
            .data(forKey: itemKey),
              let savedItems = try? JSONDecoder()
            .decode([AlarmModel].self, from: data)
        else {
            return
        }
        self.alarmViewModels = savedItems
    }
}

