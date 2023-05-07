import video from "../data/video.js";
import React, {useState} from 'react'

function App() {
 
  //commments
  const [seeComments, setSeeComment] = useState(false)

  //function to handle the change in comments
  function handleClick(){
    setComment(!seeComments)
  }
 
  return (
    <div className="container-fluid bg-success">
      {/*where i will display the video*/}
      <ShowVid video = {video} 
              toggle = {handleClick} 
              seeComments = {seeComments} 
       />

       <Comment toggleHide = {seeComments}
               comments= {video.comments}
        />       
    </div>
  );
}

export default App;
