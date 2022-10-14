import { useSession } from "next-auth/react";
import Miniprofile from "./Miniprofile"
import Posts from "./Posts"
import Stories from "./Stories"
import Suggestions from "./Suggestions"

function Feed(){
    const { data : session }= useSession();
    return(
    <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${ !session &&"!grid-cols-1 !max-w-6xl" }`}
        >
            {/* section LEFT*/}
            <section className="col-span-2">
                <Stories/>
                <Posts/>
            </section>
            {/* section RIGHT*/}
            {session && (
                <section className="hidden xl:inline-grid md:col-span-1">
                <div className="fixed top-20" >
                {/* MINI-PROFILE */}
                <Miniprofile/>
                {/* SUGGESTIONS  */}
                <Suggestions/>
                </div>
            </section>
            )}
        </main>
    )
}
export default Feed

