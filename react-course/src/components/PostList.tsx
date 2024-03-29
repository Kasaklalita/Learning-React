import React from "react";
import PostItem from "./PostItem";

export default function PostList({ posts, title, remove }: any) {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Посты не были найдены</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post: any, index: number) => (
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
}
