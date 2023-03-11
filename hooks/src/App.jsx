import { useState } from "react";
import reactLogo from "./assets/react.svg";
import useInput from "./hooks/useInput";

function App() {
  const username = useInput("");
  const password = useInput("");

  return (
    <div className="App">
      <input type="text" placeholder="username" {...username} />
      <input type="text" placeholder="password" {...password} />
      <button onClick={() => console.log(username.value, password.value)}>
        Click
      </button>
    </div>
  );
}

export default App;
