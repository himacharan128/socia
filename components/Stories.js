import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./story";
function Stories(){
    const [suggestions,setsuggestions]=useState([]);
    // useEffect(() => {
    //     const suggestions=[...Array(20)].map(( _ ,i)=>({
    //         userId: faker.random.uuid(), 
    //         username: faker.internet.userName(),
    //         email: faker.internet.email(),
    //         avatar: faker.image.avatar(),
    //         password: faker.internet.password(),
    //         registeredAt: faker.date.past(),
    //     }));
    //     setsuggestions(suggestions);
    // }, []);

    return(
        <div className="flex space-x-2  p-6 bg-white rounded-sm overflow-x-scroll mt-8 border-gray-200 
        scrollbar-thin scrollbar-thumb-black">
            {/* {suggestions.map((profile)=>( */}
                <Story
                    img="https://avatars.githubusercontent.com/u/82611545?v=4"
                    username1="himacharan"
                />
                <Story
                    img="https://avatars.githubusercontent.com/u/82611545?v=4"
                    username1="vishwanth Barma"
                />
                <Story
                    img="https://avatars.githubusercontent.com/u/82611545?v=4"
                    username1="himacharan"
                />
                <Story
                    img="https://avatars.githubusercontent.com/u/82611545?v=4"
                    username1="himacharan"
                />
                <Story
                    img="https://avatars.githubusercontent.com/u/82611545?v=4"
                    username1="himacharan"
                />
                <Story
                    img="https://avatars.githubusercontent.com/u/82611545?v=4"
                    username1="himacharan"
                />
                <Story
                    img="https://avatars.githubusercontent.com/u/82611545?v=4"
                    username1="himacharan"
                />
                <Story
                    img="https://avatars.githubusercontent.com/u/82611545?v=4"
                    username1="himacharan"
                />
                <Story
                    img="https://avatars.githubusercontent.com/u/82611545?v=4"
                    username1="himacharan"
                />
                <Story
                    img="https://avatars.githubusercontent.com/u/82611545?v=4"
                    username1="himacharan"
                />
                <Story
                    img="https://avatars.githubusercontent.com/u/82611545?v=4"
                    username1="himacharan"
                />
                <Story
                    img="https://avatars.githubusercontent.com/u/82611545?v=4"
                    username1="himacharan"
                />
                <Story
                    img="https://avatars.githubusercontent.com/u/82611545?v=4"
                    username1="himacharan"
                />
                <Story
                    img="https://avatars.githubusercontent.com/u/82611545?v=4"
                    username1="himacharan"
                />
                <Story
                    img="https://avatars.githubusercontent.com/u/82611545?v=4"
                    username1="himacharan"
                />
                <Story
                    img="https://avatars.githubusercontent.com/u/82611545?v=4"
                    username1="himacharan"
                />
            {/* ))} */}
        </div>
    )
} 
export default Stories