
import SwiftUI

struct SoundMenuView: View {
    @Binding var alarmSound: Sounds
    var body: some View {
        Form {
            Section(header: Text("Ringtone Sounds")) {
                ForEach(ringToneSoundsList, id: \.self){ sound in
                    Button(action: {
                        // change current sound
                        alarmSound = sound
                        playSound(sound: sound.rawValue)
                    }, label: {
                        HStack {
                            Image(systemName:  "checkmark" )
                                .foregroundColor(purple)
                                .fontWeight(.semibold)
                                .opacity(alarmSound == sound ? 1.0 : 0.0)
                            Text(sound.rawValue.formatSoundName)
                                .foregroundColor(black)
                                .fontWeight(.semibold)
                        }
                    })
                }
            }
            Section(header: Text("Sounds of Nature")) {
                ForEach(natureSoundsList, id: \.self){ sound in
                    Text("Hello, World!")
                }
            }
        }
    }
}

struct SoundMenuView_Previews: PreviewProvider {
    static var previews: some View {
        SoundMenuView(alarmSound: .constant(AlarmModel.DefaultAlaram().sound))
    }
}
