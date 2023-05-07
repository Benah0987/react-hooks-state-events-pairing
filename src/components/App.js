import video from "../data/video.js";
import React, {useState} from 'react'

function App() {
 
  //commments
  const [comments, setComment] = useState(false)

  //function to handle the change in comments
  function handleClick(){
    setComment(!comments)
  }
 
  return (
    <div className="container-fluid bg-success">
     
    </div>
  );
}

export default App;
