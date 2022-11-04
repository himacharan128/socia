import { useEffect, useState } from "react"
import { collection, onSnapshot, orderBy, query, doc, setDoc ,getDocs} from "@firebase/firestore";
import Post from "./Post"
import { db } from "../firebase";
function Posts(){
    const [posts, setPosts]=useState([]);
    const get_posts = async() => {
        const docRef = collection(db, "posts");
        const q = query(docRef, orderBy("timeStamp","desc"));
        const querySnapshot = await getDocs(q);
        setPosts(querySnapshot.docs);
    }
    
    useEffect(() => {
        get_posts();
    }, [])

   // console.log(Posts);
    return(
        <div>
         {
            posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImage={post.data().profileImg}
                    img={post.data().image}
                    cap={post.data().caption}
                />
            ))
         }
        </div>
    );
}
export default Posts;

