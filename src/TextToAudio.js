import { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";


  function TextToAudio(){

      const [value,setValue] = useState("")

      const {speak}= useSpeechSynthesis();

      return(
         <div className="text-to-audio-container">
            <h2>Text To Speech Converter</h2>
           <textarea className="text-area"  rows="10" cols="40" value={value} onChange={(e)=> setValue(e.target.value)}>
            
           </textarea> 
           
           <div className="btn-group">
           <button onClick={()=> speak({text : value})} className="speech-btn">Speech</button>
           <button onClick={()=>setValue("")} className="clear-btn">Clear</button>
           </div>
        </div>
      )
  }

  export default TextToAudio;