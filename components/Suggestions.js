const profile=[
    {
        key:"4",
        id:'user_id',
        avatar:'https://i.ibb.co/x64jpHG/View-recent-photos.jpg',
        username:'remus',
        caption:'caption....................................................!',
    },
    {
        key:"3",
        id:'user_id',
        avatar:'https://i.ibb.co/x64jpHG/View-recent-photos.jpg',
        username:'user_name',
        caption:'caption....................................................!',
    },
    {
        key:"2",
        id:'user_id',
        avatar:'https://i.ibb.co/x64jpHG/View-recent-photos.jpg',
        username:'user_name',
        caption:'caption....................................................!',
    },
    {
        key:"1",
        id:'user_id',
        avatar:'https://i.ibb.co/x64jpHG/View-recent-photos.jpg',
        username:'user_name',
        caption:'caption....................................................!',
    },
]
function Suggestions(){
    return(
        <div className="mt-4 ml-10">
            <div  key={profile.id} className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
                <button className="text-gray-600 font-semibold">See All</button>
            </div>
        {profile.map((profile)=> ( 
            <div className="flex items-center justify-between mt-3">
                <img className="w-10 h-10 border p-[2px] rounded-full" alt="" src={profile.avatar}/>
                <div className="flex-1 ml-4">
                    <h2 className="text-sm font-semibold">{profile.username}</h2>
                    <h3 className="text-xs text-gray-400">{profile.caption}</h3>
                </div>
                <button className="text-blue-400 text-sm font-bold">FOLLOW</button>
            </div>
        ))}
        </div>
        );
    }
    export default Suggestions