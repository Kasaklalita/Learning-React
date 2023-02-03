import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "Python", body: "asdfsadf" },
    { id: 3, title: "aaa", body: "111" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost: any) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post: any) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort: string) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr />
      <div>
        <MyInput placeholder="Поиск">
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка по"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>

      {posts.length !== 0 ? (
        <PostList posts={posts} title="Список постов" remove={removePost} />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не были найдены</h1>
      )}
    </div>
  );
}

export default App;
