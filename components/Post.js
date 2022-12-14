import { async } from "@firebase/util";
import Image from "next/image"
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
}from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { db } from "../firebase";
function Post({id,username,userImage,img,cap}){
    const { data: session } = useSession(); 
    const[comment,setComment]=useState("");
    const[comments,setComments]=useState([]);
    const[likes,setLikes]=useState([]);
    const[hasliked,sethasliked]=useState(false);

    useEffect(()=> onSnapshot(query(collection(db,"posts",id,"comments"),orderBy("timestamp","desc")),
    (snapshot) => setComments(snapshot.docs)) ,[db,id]);

    useEffect(()=>onSnapshot(collection(db,"posts",id,"likes"),
    (snapshot)=>setLikes(snapshot.docs)),[db,id]);

    useEffect(()=>sethasliked(
        likes.findIndex((like)=>like.id === session?.user?.uid) !== -1),[likes]);

    const likePost=async()=>{
        if(hasliked){
            await deleteDoc(doc(db,"posts",id,"likes",session.user.uid));
        } else{
            await setDoc(doc(db,"posts",id,"likes",session.user.uid),{
                username: session.user.username,
            });
        }
    };

    const sendComment=async(e)=>{
        e.preventDefault ();
        const commentToSend=comment;
        setComment('');
        await addDoc(collection(db,"posts",id,"comments"),{
            comment:commentToSend,
            username:session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
        });
    };
    //console.log(comments);
    return(
        <div className="bg-white my-7 border rounded-sm">
            {/* header */}
            <div>
                <div className="flex items-center p-5">
                    <img src={userImage} className="rounded-lg h-12 w-12 object-contain first-letter
                    border p-1 mr-3" alt=""
                    />
                    <p className="flex-1 font-bold">{username}</p>
                    <DotsHorizontalIcon className="h-5  hover:scale-150"/>
                </div>
            </div>
            {/* image */}
            <img src={img} className="object-cover w-full" alt=""/>
            {/* button */}
            { session && (   
                <div className="flex justify-between px-4 pt-4">
                    <div className="flex space-x-4">
                        {
                            hasliked?(
                                <HeartIconFilled onClick={likePost} className="btn  hover:scale-110"/>
                            ):(
                                <HeartIcon onClick={likePost} className="btn hover:scale-110"/>
                            )
                        }
                        <ChatIcon className="btn hover:scale-110"/>
                        <PaperAirplaneIcon className="btn hover:scale-110"/>
                    </div>
                <BookmarkIcon className="btn"/>
                </div>
            )}
            {/* caption */}
            <div>
                <p className=" p-5 truncate">
                    {likes.length>0 && (
                        <p className="font-bold mb-1">{likes.length} Hearts</p>
                    )}
                    <span className="font-bold mr-1"> {username} </span>
                    {cap}
                </p>
            </div>
            {/* comments */}
            {comments.length > 0 && (
                <div
                className="ml-10 h-20 overflow-y-scroll
                scrollbar-thumb-black scrollbar-thin">
                    {comments.map((comment) => (
                    <div key={comment.id} className="flex items-center 
                    space-x-2 mb-3">
                        <img className ="h-6 rounded-lg" src={comment.data().userImage} alt=""/>
                        <p className="text-sm flex-1">
                            <span className="font-semibold">
                                {comment.data().username}
                            </span>{" "}
                            {comment.data().comment}</p>


                            <Moment fromNow className="pr-5 text-xs"xs>
                                {comment.data().timestamp?.toDate()}
                            </Moment>
                        </div>
                    ))}
                </div>
            )}
            {/* input box */}
            {session && (
                <form className="items-center flex p-4 ">
                    <EmojiHappyIcon className="h-7"/>
                    <input type="text" value={comment} onChange={e=>setComment(e.target.value)}
                    className="border-none flex-1 outline-none focus:ring-0"
                    placeholder="Add a comment..."/>
                    <button type="submit" disabled={!comment.trim()} onClick={sendComment}
                     className="font-semibold text-blue-500">POST</button>
                </form>
            )}
        </div>
    )
}
export default Post