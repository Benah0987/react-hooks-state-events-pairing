import React, {useState} from 'react'

function ShowVid({video, toggle, seeComments}) {

    //taking details for the video prop
    const {embedUrl, title, views, createdAt, upvotes, downvotes} = video

    //setting state for counting votes
    //the initial state is the current value of count
    const [UpCount, setUpCount] = useState(upvotes)
    const [DownCount, setDownCount] = useState(downvotes)

    function handleUp() {
        //the setUpCount adds one to initial state to 
        setUpCount(UpCount + 1)
    }
    function handleDown(){
        //add 1 to the initial state of downvote
        setDownCount(DownCount +1)
    }
    function handleClick(){
        toggle(seeComments)
    }

    return (
        <div >
            {/*the video itself*/}
            <iframe
            width="919"
            height="525"
            src={video.embedUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
        />
        <h1> {title}</h1>
        <p>{views} Views | {createdAt}</p>
        <button onClick = {handleUp}> {UpCount} 👍</button>
        <button onClick = {handleDown}> {DownCount} 👎</button>
        <br />
        <button onClick ={handleClick}> Hide Comments</button>

        </div>
    )



    
}
export default ShowVid