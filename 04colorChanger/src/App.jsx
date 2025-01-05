// import './App.css'

import { useState } from "react"

function App() {
  const [color,setcolor] = useState('olive')

  return (
      <div className="w-screen h-screen flex justify-center relative" style={{backgroundColor:color}}>
        <div className="absolute bottom-20">
          <h1 className='m-5'>Change Background Color</h1>
          <div className='grid gap-3 grid-cols-5 bg-white p-4 rounded-full'>
            <button onClick={()=>setcolor('red')} className='bg-red-700 rounded-full'>Red</button>
            <button onClick={()=>setcolor('yellow')} className='bg-yellow-500 rounded-full'>Yellow</button>
            <button onClick={()=>setcolor('blue')} className='bg-blue-700 rounded-full'>Blue</button>
            <button onClick={()=>setcolor('green')} className='bg-green-500 rounded-full'>Green</button>
            <button onClick={()=>setcolor('purple')} className='bg-purple-500 rounded-full' >Purple</button>
          </div>
        </div>
      </div>



    // <div className='duration-500'>
    //   <h1 className='m-5'>Nitesh Yadav</h1>
    //   <div className='grid gap-3 grid-cols-5 bg-white p-4 rounded-full'>
    //     <button className='bg-red-700 rounded-full'>Red</button>
    //     <button className='bg-yellow-500 rounded-full'>Yellow</button>
    //     <button className='bg-blue-700 rounded-full'>Blue</button>
    //     <button className='bg-green-500 rounded-full'>Green</button>
    //     <button className='bg-purple-500 rounded-full' >Purple</button>
    //   </div>


    // </div>

  )
}

export default App
