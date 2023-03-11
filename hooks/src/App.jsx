import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Hover from "./components/Hover";
import List from "./components/List";
import useInput from "./hooks/useInput";

function App() {
  return (
    <div className="App">
      {/* <Hover /> */}
      <List />
    </div>
  );
}

export default App;
