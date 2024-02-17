import joblib
import librosa
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
import os


fixed_length = 44100
fft = librosa.feature.mfcc

audio_samples = []
musical_notes = []
folder_path = '../../88-piano_new'

def parse_note_from_filename(filename):
    parts = filename.split('_')

    if len(parts) > 0:
        return parts[0]
    else:
        return 'unknown'
    
def preprocess_audio(audio_file_path, target_length=fixed_length):
    audio, sr = librosa.load(audio_file_path, sr=None)

    # Ensure that all audio samples have the same length
    if len(audio) < target_length:
        audio = np.pad(audio, (0, target_length - len(audio)))
    elif len(audio) > target_length:
        audio = audio[:target_length]


    fft_result = np.fft.fft(audio)
    magnitudes = np.abs(fft_result)

    return magnitudes

for filename in os.listdir(folder_path):
    if filename.endswith('.wav'):
        file_path = os.path.join(folder_path, filename)

        features = preprocess_audio(file_path)

        note = parse_note_from_filename(filename)

        audio_samples.append(features)
        musical_notes.append(note)

X = np.array(audio_samples)
y = np.array(musical_notes)


X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scale the features using StandardScaler
scaler = StandardScaler()

# Fit on training data and transform both training and test data
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

svm_model = joblib.load('modelinc1sec.joblib')

def predict_note_svm(audio_file_path, model, scaler):
    audio, _ = librosa.load(audio_file_path, sr=None)
    features = preprocess_audio(audio_file_path)

    # Scale the features using the same scaler used during training
    features_scaled = scaler.transform(features.reshape(1, -1))

    # Predict the note using the SVM model
    predicted_note = model.predict(features_scaled)[0]

    return predicted_note


audio_file_path = '../../88-piano_new/F_4.wav'
predicted_note_svm = predict_note_svm(audio_file_path, svm_model, scaler)
print(f"Predicted Note (SVM): {predicted_note_svm}")


