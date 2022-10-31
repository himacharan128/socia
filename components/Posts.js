import { useEffect, useState } from "react"
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import Post from "./Post"
import { db } from "../firebase";
function Posts(){
    const [Posts, setPosts]=useState([]);
    useEffect(
        ()=> 
        onSnapshot(
            query(collection(db, "posts"),orderBy("timestamp","desc")),
            (snapshot) =>{
             setPosts(snapshot.docs);
            }
        ),
        [db]
    );
    return(
        <div>
            {Posts.map((post) =>(
            <Post
            key={post.id}
            id={post.id}
            username={post.data().username}
            userImage={post.data().profileImg}
            img={post.data().img}
            cap={post.data().caption}
            />
            ))}
        </div>
    );
}
export default Posts;