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
                    img="https://i.ibb.co/zssMQM4/pojaaa.jpg"
                    username1="Pooja"
                />
                <Story
                    img="https://i.ibb.co/wN9h9w8/ANNAYYA.jpg"
                    username1="Tharun"
                />
                <Story
                    img="https://i.ibb.co/1sKz7Zn/Bhasuri.jpg"
                    username1="Bhasuri"
                />
                <Story
                    img="https://i.ibb.co/R4C1mFP/barma.jpg"
                    username1="Barma"
                />
                <Story
                    img="https://i.ibb.co/sqLJycM/veda.jpg"
                    username1="Veda"
                />
                <Story
                    img="https://i.ibb.co/TrQrrQg/Annayya-20180127-192629.jpg"
                    username1="Pranith"
                />
                <Story
                    img="https://i.ibb.co/d6kxdgv/Sreeja.jpg"
                    username1="Sreeja"
                />
                <Story
                    img="https://i.ibb.co/6y0Gmsp/Charan.jpg"
                    username1="Charan"
                />
                <Story
                    img="https://i.ibb.co/pyG4Wph/shiva.jpg"
                    username1="Shiva"
                />
                <Story
                    img="https://i.ibb.co/PQ93zg8/shiva-Kiran.png"
                    username1="sKran"
                />
                <Story
                    img="https://i.ibb.co/jTjmNbj/vaishu.png"
                    username1="alias Vaishu"
                />
                <Story
                    img="https://i.ibb.co/RB9cWxX/RT.png"
                    username1="RishiTEj"
                />
                <Story
                    img="https://i.ibb.co/P1LMcpS/Screenshot-2023-05-30-at-9-09-49-PM.png"
                    username1="Snigdha"
                />
                <Story
                    img="https://i.ibb.co/fD85Xvf/Rishi.jpg"
                    username1="RishPish"
                />
                <Story
                img="https://i.ibb.co/7yZkJZD/pratham.jpg"
                username1="Pratham"
                />
                <Story
                    img="https://i.ibb.co/Sy5sdRN/yahshu.jpg"
                    username1="Yahshu!"
                />
                <Story
                    img="https://i.ibb.co/QFk1jvq/Shantan.jpg"
                    username1="Shantan"
                />
                <Story
                    img="https://i.ibb.co/cLQYWrN/dhanush.png"
                    username1="Dhanush"
                />
                

        </div>
    )
} 
export default Stories