import logo from './logo.svg';
import './App.css';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from 'react';


function AudioToText() {

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  let longPress;

  function doSomething (){
      longPress = setTimeout(

          function(){

            SpeechRecognition.startListening({ continuous: true })
            
          }

      ,0)
  }

  function clearFunction(){
   
    SpeechRecognition.stopListening()
    clearTimeout(longPress)
 
  }



  return (
    <div className="audio-to-text-container">
      <h2>Speech To Text Converter</h2>  
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <div >
      <i class="bi bi-mic"></i>
      <button className={listening ? "mic-btn" : "mute-btn"} 
      onMouseDown={doSomething} 
      onMouseUp={clearFunction} 
      onMouseLeave={clearFunction}>Start</button>
     
      <button className="clear-btn" onClick={resetTranscript}>Reset</button>
      </div>
      <p className='text'>{ listening == false ? transcript : null}</p>
     
    </div>
  );
}

export default AudioToText;