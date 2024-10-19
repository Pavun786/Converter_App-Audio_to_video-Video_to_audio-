import logo from './logo.svg';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from 'react';
import AudioToText from './AudioToText';
import { Route, Routes } from 'react-router-dom';
import TextToAudio from './TextToAudio';
import Home from './Home';


function App() {

     return (
    <div className="App">
       <Home/>
    <Routes>
      <Route path='/audio-convert' element={<AudioToText/>}/>
      <Route path='/text-convert' element={<TextToAudio/>}/>
    </Routes>
   
    </div>
  );
}

export default App;