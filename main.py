from fastapi import FastAPI, UploadFile, File, HTTPException
from pydantic import BaseModel
import excel
import joblib
import uvicorn
from model_predict import predict_notes_from_audio
import os
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORSMiddleware configuration
origins = [
    "http://localhost.notecraft.com",
    "https://localhost.notecraft.com",
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model and scaler
svm_model = joblib.load('modelinc1sec.joblib')
scaler = joblib.load('scaler_model.pkl')

# Define Pydantic model for prediction response
class PredictedNote(BaseModel):
    note: str

# Prediction endpoint
@app.post("/predict_note/")
def predict_note(file: UploadFile = File(...)):
    try:
        # Save uploaded file
        with open(file.filename, "wb") as f:
            f.write(file.file.read())
        
        # Predict note from audio file
        predicted_note = predict_notes_from_audio(file.filename, svm_model, scaler)

        # Remove temporary file
        os.remove(file.filename)

        return {"note": predicted_note}
    except Exception as e:
        print(f"error: {str(e)}")

# Default endpoint
@app.get("/")
def message_display():
    msg = 'Enter a post request!!'
    print(msg)
    return msg

# Feedback endpoint
@app.post("/feedback/")
def receive_feedback(data: excel.ExcelData):
    try:
        excel.append_to_excel(data)
        return {"message": "Feedback received and appended to Excel sheet successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error occurred: {str(e)}")

# Run FastAPI server
if __name__ == '__main__':
    uvicorn.run(app, port=8000, host='0.0.0.0')
