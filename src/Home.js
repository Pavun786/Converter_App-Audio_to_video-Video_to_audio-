import { useNavigate } from "react-router-dom";



  function Home(){

    const navigate = useNavigate()

      return(
        <div className="sub-childs">

           <button className="btns" onClick={()=>navigate("/audio-convert")}>Audio-to-Text</button> 

           <button className="btns" onClick={()=>navigate("/text-convert")}>Text-to-Audio</button> 

        </div>
      )
  }
  export default Home;