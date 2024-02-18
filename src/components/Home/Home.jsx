'use client'
import React, { useState, useRef } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import './Home.css';
import axios from 'axios';

const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [predictedNote, setPredictedNote] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const inputRef = useRef(null);

  const handleFile = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!selectedFile) {
      alert('Please select a file.');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', selectedFile);
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/predict_note/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setPredictedNote(response.data.note);
    } catch (error) {
      console.error('Error predicting note: ', error);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const openFileExplorer = () => {
    inputRef.current.value = '';
    inputRef.current.click();
  };

  const playAudio = () => {
    if (!selectedFile) {
      alert('Please select a file.');
      return;
    }
  
    const audio = new Audio();
    audio.src = URL.createObjectURL(selectedFile);
  
    if (!isPlaying) {
      audio.play();
      setIsPlaying(true);
  
      // Change color of one note sequentially
      let currentIndex = 0;
      const notes = document.querySelectorAll('.note');
      const originalColors = Array.from(notes).map(note => note.style.color);
  
      const interval = setInterval(() => {
        // Reset previous note color
        if (currentIndex > 0) {
          notes[currentIndex - 1].style.color = originalColors[currentIndex - 1];
        }
  
        notes[currentIndex].style.color = 'red';
  
        currentIndex++;
  
        if (currentIndex >= notes.length) {
          clearInterval(interval); 
        }
      }, 1000); 
    } else {
      // Pause the audio
      audio.pause();
      setIsPlaying(false); 
    }
  };

  return (
    <div>
      <Navbar />
      <div className='fullimgWrapper'>
        <div className='image-container'>
          <div className='heading'>
            <h1>Notecraft</h1>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center h-screen'>
        <div className='content-dragdrop'>
          Files in, notes out! 🎼 
          <p>Unleash the hidden tunes by dropping your files with NoteCraft</p>
        </div>
        <div className='audio_form'>
        <form
          className={`${dragActive ? 'bg-blue-400' : 'bg-blue-100'} p-4 w-1/3 rounded-lg min-h-[10rem] text-center flex flex-col items-center justify-center`}
          onSubmit={handleSubmit}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input 
            className='hidden'
            ref={inputRef}
            type='file'
            onChange={handleFile}
            accept='audio/*'
          />
          <p>
            Drag & Drop files or{' '}
            <span
              className='font-bold text-blue-600 cursor-pointer'
              onClick={openFileExplorer}
            >
              <u>Select files</u>
            </span>{' '}
            to upload
          </p>
          {selectedFile && <p>Selected file: {selectedFile.name}</p>}
          <button className='btn' type='submit'>
            Submit
          </button>
                   
        </form>
        </div>
        {selectedFile && (
        <div className='play_audio'>
          <p>{selectedFile.name}</p>
          <button className='btn' onClick={playAudio}>Play Audio</button>
        </div>
        )}
        {predictedNote && (
          <div className='prediction'>
            <h3>Predicted notes: </h3>
            <div className="notes-container">
            {predictedNote.map((note, index) => (
            <span key={index} className="note">{note}{(index + 1) % 10 === 0 ? <br /> : <span className="note-gap">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}</span>
            ))}
    </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
