const profile=[
    
    {
        key:"2",
        id:'user_id',
        avatar:'https://i.ibb.co/C1w1c7T/images-5.jpg',
        username:'Amar ',
        caption:'The best things come from living outside of your comfort zone',
    },
    {
        key:"1",
        id:'user_id',
        avatar:'https://i.ibb.co/Z2KK3D5/images.jpg',
        username:'Nikhil',
        caption:'Success is in my veins',
    },
    {
        key:"3",
        id:'user_id',
        avatar:'https://i.ibb.co/7bXTzht/images-3.jpg',
        username:'Natasha',
        caption:'Selfie Sunday',
    },
    {
        key:"1",
        id:'user_id',
        avatar:'https://i.ibb.co/6JczDp5/images-2.jpg',
        username:'james',
        caption:'What should I put here?',
    },
    {
        key:"4",
        id:'user_id',
        avatar:'https://i.ibb.co/0fn0202/images-7.jpg',
        username:'remus',
        caption:'Just me',
    },
    {
        key:"1",
        id:'user_id',
        avatar:'https://i.ibb.co/9g88NsH/images-1.jpg',
        username:'joe',
        caption:'Scratch here ▒▒▒▒▒▒▒▒▒▒ to unveil my secret bio',
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
                <img className="w-10 h-10 border p-[2px] rounded-lg" alt="" src={profile.avatar}/>
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