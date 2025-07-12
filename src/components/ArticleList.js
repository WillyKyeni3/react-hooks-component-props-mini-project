import React from "react";
import Article from "./Article";

function ArticleList ( { posts }) {
    return (
    //an array of Article components 
    // (one component for each of the posts passed down as props to ArticleList)
    //make sure to assign a unique key attribute to each Article
    <main>
        {posts.map((post) => (
            <Article 
            key={post.id} 
            title={post.title} 
            date={post.date} 
            minutes={post.minutes}
            preview={post.preview}
             />
        ))}

    </main>
    );
}

export default ArticleList;