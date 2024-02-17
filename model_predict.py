import librosa
import joblib
import numpy as np
import time 
# Load the trained SVM model and scaler
svm_model = joblib.load('modelinc1sec.joblib')
scaler = joblib.load('scaler_model.pkl')


def preprocess_audio(audio, target_length):
    # Ensure that all audio samples have the same length
    if len(audio) < target_length:
        audio = np.pad(audio, (0, target_length - len(audio)))
    elif len(audio) > target_length:
        audio = audio[:target_length]

    # Compute FFT
    fft_result = np.fft.fft(audio)
    magnitudes = np.abs(fft_result)

    return magnitudes

def predict_notes_from_audio(audio_file_path, model, scaler):
    # Load the audio file
    audio, _ = librosa.load(audio_file_path, sr=None)
    fixed_length = len(audio)  # Use the actual length of the audio

    # Split the audio into segments of fixed length
    segment_length = 44100  # 1 second at 44.1 kHz
    num_segments = int(np.ceil(len(audio) / segment_length))

    predicted_notes = []
    for i in range(num_segments):
        # Extract the segment
        start = i * segment_length
        end = min((i + 1) * segment_length, len(audio))
        segment = audio[start:end]
        
        # Preprocess the segment
        features = preprocess_audio(segment, segment_length)

        # Scale the features using the same scaler used during training
        features_scaled = scaler.transform(features.reshape(1, -1))

        # Predict the note using the SVM model
        predicted_note = model.predict(features_scaled)[0]
        predicted_notes.append(predicted_note)
    return predicted_notes

# Test with an example audio file
# audio_file_path = 'test10.wav'
# predicted_notes = predict_notes_from_audio(audio_file_path, svm_model, scaler)

# print("Predicted Notes (SVM):", predicted_notes)