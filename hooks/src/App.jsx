import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Hover from "./components/Hover";
import useInput from "./hooks/useInput";

function App() {
  const username = useInput("");
  const password = useInput("");

  return (
    <div className="App">
      <Hover />
    </div>
  );
}

export default App;
