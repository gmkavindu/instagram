import Post from "@/components/Post";

const posts = [
    {
        id: "123",
        username: "kavindu", 
        userImg: "https://links.papareact.com/3ke",
        img: "https://links.papareact.com/3ke",
        caption: "Hello I am Kavindu Mihiran"
    },

    {
        id: "123",
        username: "kavindu", 
        userImg: "https://links.papareact.com/3ke",
        img: "https://links.papareact.com/3ke",
        caption: "Hello I am Kavindu Mihiran"
    },

];

function Posts() {
    return (
        <div>
            {posts.map((post) => (
                <Post
                  key={post.id}
                  id={post.id}
                  username={post.username}
                  userImg={post.userImg}
                  img={post.img}
                  caption={post.caption}
                />  
            ))}
           
        </div>

    )
    
}

export default Posts