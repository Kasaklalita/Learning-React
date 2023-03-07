import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {AuthService} from "./AuthService"

function App() {
  const [count, setCount] = useState(0)
  
  useEffect(() =>  {
    const fetchData = async () => {
      const auth = new AuthService();
      const response = await auth.login('Kasaklalita', 'secret')
      console.log(response)
    }
    fetchData();
    
  }, [])
  return (
    <div className="App">

    </div>
  )
}

export default App
