import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

export default function PostForm({ create }: any) {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPost({ ...post, title: e.target.value })
        }
        type="text"
        placeholder="Название поста"
      />
      <MyInput
        value={post.body}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPost({ ...post, body: e.target.value })
        }
        type="text"
        placeholder="Описание поста"
      />
      <MyButton type="submit" onClick={addNewPost}>
        Создать пост
      </MyButton>
    </form>
  );
}
