import { useState } from "react"


function App() {

  const [color,setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-300"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg px-3 py-2 rounded-full bg-white">
          <button onClick={() => setColor("red")} className="bg-red-600 rounded-full outline-none px-3 py-2 text-white">
            Red
          </button>
          <button onClick={() => setColor("blue")} className="bg-blue-600 rounded-full outline-none px-3 py-2 text-white">
            Blue
          </button>
          <button onClick={() => setColor("yellow")} className="bg-yellow-600 rounded-full outline-none px-3 py-2 text-white">
            yellow
          </button>
          <button onClick={() => setColor("black")} className="bg-black rounded-full outline-none px-3 py-2 text-white">
            Black
          </button>
          <button onClick={() => setColor("green")} className="bg-green-600 rounded-full outline-none px-3 py-2 text-white">
            Green
          </button>

        </div>
      </div>
    </div>
  )
}

export default App
