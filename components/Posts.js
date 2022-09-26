import Post from "./Post"
const post =[
    {
        id:'lalal',
        username:'himacharan128',
        userImage:'https://i.ibb.co/x64jpHG/View-recent-photos.jpg',
        img:'https://i.ibb.co/x64jpHG/View-recent-photos.jpg',
        cap:'HEY HERO',
    },
    {
        id:'lalal',
        username:'himacharan128',
        userImage:'https://i.ibb.co/x64jpHG/View-recent-photos.jpg',
        img:'https://i.ibb.co/x64jpHG/View-recent-photos.jpg',
        cap:'HEY HERO',
    },
]
function Posts(){
    return(
        <div>
            {post.map(post =>(
            <Post key={post.id}
            id={post.id}
            username={post.username}
            userImage={post.userImage}
            img={post.img}
            cap={post.cap}
            />
            ))}
            <Post/>
        </div>
    )
}
export default Posts