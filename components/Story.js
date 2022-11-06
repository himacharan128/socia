function Story({img,username1}){
    return(
        <div>
            <img className="h-14 w-14 rounded-lg p-[1.5px] border-black border-2
            object-contain cursor-pointer hover:scale-150 transition transform duration-200 ease-out" 
            src={img} alt/>
            <p className="text-xs w-14 text-center truncate">{username1}</p>
        </div>
    )
}export default Story