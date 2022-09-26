import Miniprofile from "./Miniprofile"
import Posts from "./Posts"
import Stories from "./Stories"
import Suggestions from "./Suggestions"

function Feed(){
    return(
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
            {/* section LEFT*/}
            <section className="col-span-2">
                <Stories/>
                <Posts/>
            </section>
            {/* section RIGHT*/}
            <section className="hidden xl:inline-grid md:col-span-1">
                <div className="fixed top-20" >
                {/* MINI-PROFILE */}
                <Miniprofile/>
                {/* SUGGESTIONS  */}
                <Suggestions/>
                </div>
            </section>
        </main>
    )
}
export default Feed