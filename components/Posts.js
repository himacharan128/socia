import { useEffect, useState } from "react"
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import Post from "./Post"
import { db } from "../firebase";
function Posts(){
    const [Posts, setPosts]=useState([]);
    useEffect(
        ()=> 
        onSnapshot(
            query(collection(db, "posts")/*, orderBy("timestamp","desc")*/),
            (snapshot) =>{
             setPosts(snapshot.docs);
             // console.log(snapshot.docs);
            }
        ),
        [db]
    );
   // console.log(Posts);
    return(
        <div>
         {Posts.map((post) =>(
            <Post
            key={post.id}
            id={post.id}
            username={post.data().username}
            userImage={post.data().profileImg}
            img={post.data().image}
            cap={post.data().caption}
            />
            ))} 
        </div>
    );
}
export default Posts;