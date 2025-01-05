import { useState } from 'react'
import "./App.css"

function App() {
  // hme jo bhi function vagara banane h sab yahi banane h for sure

  // use state variable ka use karna sikhna h

  const [count,setCount] = useState(15)

  const addValue = () => {
    setCount((prevCount) => prevCount+1)
  }

  const subtractValue = () => {
    setCount((prevCount) => prevCount-1)
  }



  return (
    <>
      <h2>This is first ever project of Nitesh {count} </h2>
      <button onClick={addValue}>Increase Value {count}</button> <b/>
      <button onClick={subtractValue}>Decrease value {count} </button>
      <p>The value of our count is: {count}</p>
      {"      "}
      <p>Tepaa chal gya besttt</p>
    </>
  )
}

export default App
