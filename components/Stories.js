import Story from "./Story";
import { useSession } from "next-auth/react";
function Stories(){
    const { data : session }= useSession();
    return(
        <div className="flex space-x-2  p-6 bg-white rounded-sm overflow-x-scroll mt-8 border-gray-200 
        scrollbar-thin scrollbar-thumb-black">
            {session && (
                <Story img={session.user.image} username1={session.user.username}/>
            )}
            {/* Stories_array.map((Story) => (
                <Story
                    img={Story.img}
                    username1={Story.username1}
                />
            )) */}
                <Story
                    img="https://avatars.githubusercontent.com/u/82611545?v=4"
                    username1="himacharan"
                />
                <Story
                    img="https://avatars.githubusercontent.com/u/82611545?v=4"
                    username1="himacharan"
                />
        </div>
    )
} 
export default Stories