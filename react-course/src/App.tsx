import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);

  const createPost = (newPost: any) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post: any) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length !== 0 ? (
        <PostList posts={posts} title="Список постов" remove={removePost} />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не были найдены</h1>
      )}
    </div>
  );
}

export default App;
