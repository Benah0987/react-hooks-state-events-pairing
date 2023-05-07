import video from "../data/video.js";
import React, {useState} from 'react'
import ShowVid from "./ShowVid.js";
import Comments from "./Comments.js";

function App() {
 
  //commments
  const [seeComments, setSeeComment] = useState(false)

  //function to handle the change in comments
  //initializing the comments 
  function handleClick(){
    setSeeComment(!seeComments)
  }
 
  return (
    <div className="container-fluid mx-auto d-flex p-2 bg-success">
      {/*where i will display the video*/}
      <ShowVid video = {video} 
              toggle = {handleClick} 
              seeComments = {seeComments} 
       />

       <Comments toggleHide = {seeComments}
               comments= {video.comments}
        />       
    </div>
  );
}

export default App;
