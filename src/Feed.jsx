import React,{useState,useEffect} from 'react'
import "./Feed.css"
import Tweetbox from "./Tweetbox"
import Post from "./Post";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [post,setPosts]=useState([]);

  useEffect(() => {
     db.collection('posts').onSnapshot(snapshot=>(
         setPosts(snapshot.docs.map(doc=>doc.data()))
     ))
  }, [])

    return (
        <div className="feed">
        <div className="feed_header">
             <h2>Home</h2>
        
        </div>
        <Tweetbox />
        
        <FlipMove>
        
        {post.map(post1=>(
            <Post 
            key={post1.text}
            displayName={post1.displayName}
            userName={post1.userName}
            verified={post1.verified}
            text={post1.text}
            avatar={post1.avatar}
            image={post1.image}
 
            />
        ))}
        
        </FlipMove>
           
        
        

        </div>
    )
}

export default Feed
