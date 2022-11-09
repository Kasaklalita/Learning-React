import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

function App() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState("Текст в инпуте");

  return (
    <div className="App">
      <ClassCounter />
    </div>
  );
}

export default App;
