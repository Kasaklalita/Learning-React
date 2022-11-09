import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostItem from "./components/PostItem";

function App() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState("Текст в инпуте");

  return (
    <div className="App">
      <PostItem post={{ id: 1, title: "JS", body: "Description" }} />
    </div>
  );
}

export default App;
