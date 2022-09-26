import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
}from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
function Post({id,username,userImage,img,cap}){
    return(
        <div className="bg-white my-7 border rounded-sm">
            {/* header */}
            <div>
                <div className="flex items-center p-5">
                    <img src={userImage} className="rounded-full h-12 w-12 object-contain first-letter
                    border p-1 mr-3" alt=""  
                    />
                    <p className="flex-1 font-bold">{username}</p>
                    <DotsHorizontalIcon className="h-5"/>
                </div>
            </div>
            {/* image */}
            <img src={img} className="object-cover w-full" alt=""/>
            {/* button */}
            <div className="flex justify-between px-4 pt-4">

                <div className="flex space-x-4">
                    <HeartIcon className="btn"/>
                    <ChatIcon className="btn"/>
                    <PaperAirplaneIcon className="btn"/>
                </div>
            <BookmarkIcon className="btn"/>
            </div>
            {/* caption */}
            <div>
                <p className=" p-5 truncate">
                    <span className="font-bold mr-1">
                        {username}
                    </span>
                    {cap}
                </p>
            </div>
            {/* comments */}
            {/* input box */}
            <form className="items-center flex p-4 ">
                <EmojiHappyIcon className="h-7"/>
                <input type="text" className="border-none flex-1 outline-none focus:ring-0"
                placeholder="Add a comment..."/>
                <button className="font-semibold text-blue-500">POST</button>
            </form>
        </div>
    )
}
export default Post