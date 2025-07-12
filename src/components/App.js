import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About 
      image={blogData.image} 
      about={blogData.about} />
      {/* Add ArticleList component here */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}
// make a Header component as a child of App



export default App;
