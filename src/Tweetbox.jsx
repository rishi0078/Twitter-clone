import React,{useState} from 'react'
import "./Tweetbox.css"
import {Avatar,Button} from "@material-ui/core";
import db from "./firebase";

function Tweetbox() {

  const[tweetMessage, setTweetMessage]=useState("");
  const[tweetImage, setTweetImage]=useState("");  

  const sendTweet=e=>  {
      e.preventDefault();

      db.collection("posts").add({
        displayName:"Rishabh Solanki",
        userName:"Rishabh236",
        verified:true,
        text:tweetMessage,
        image:tweetImage,
        avatar:"https://pbs.twimg.com/profile_images/845522160441470976/FyjY-sGh_400x400.jpg"
        
      

      });

      setTweetMessage("");
      setTweetImage("");

  }
    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox_input">
                <Avatar src="https://pbs.twimg.com/profile_images/845522160441470976/FyjY-sGh_400x400.jpg"/>

             <input onChange={(e)=>setTweetMessage(e.target.value)}  value={tweetMessage} placeholder="What's happening?" />
             
        </div>
              <input onChange={(e)=>setTweetImage(e.target.value)} value={tweetImage} className="tweetBox_imageinput" placeholder="Enter image URl" type="Text" />

              <Button onClick={sendTweet} type="submit" className="tweetBox_button">Tweet</Button>
            
            </form>

            
        </div>

       
    )
}

export default Tweetbox
