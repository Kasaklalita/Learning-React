import {observer} from "mobx-react-lite"
import './App.css'
import counter from "./store/counter"

const App = observer(() => {
  return (
    <div className="App">
      <div className="btns">
        {"Count = " + counter.count}
        <button className="btn" onClick={() => counter.increment()}>+</button>
        <button className="btn"  onClick={() => counter.decrement()}>-</button>
      </div>
    </div>
  )
})

export default App
