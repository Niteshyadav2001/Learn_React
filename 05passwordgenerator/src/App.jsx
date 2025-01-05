import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('');


  const passwordRef = useRef(null)


  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }


  const generatePassword = useCallback(() => {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += '1234567890'
    if(charAllowed) str += "!@#$%^&*()_+"

    for(let i = 1;i < length;i++){
      const index = Math.floor(Math.random() * str.length +1)
      pass+=str.charAt(index)
    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed])


  useEffect(() =>{
    generatePassword()
  },[length,numberAllowed,charAllowed])


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'></h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder="Password"
        ref={passwordRef}
        readOnly
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>

      <div>
        <input 
        type="range"
        min={6}
        max={50}
        value={length}
        className="cursor-pointer"
        onChange={(e) => setLength(e.target.value)}
        name=""
        id=""
        />
        
        <label htmlFor="length"> Length: {length} </label>
 

        {/* for numbers */}

        <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        onChange={() =>{
          setNumberAllowed((prev) => !prev)
        }}
        name=""
        id=""
        />
        <label htmlFor="numbers"> Numbers </label>


        {/* for characters */}
        <input 
        type="checkbox"
        defaultChecked={charAllowed}
        onChange={() =>{
          setCharAllowed((prev) => !prev)
        }}
        name=""
        id=""
        />
        <label htmlFor="characters"> Characters </label>
      </div>



    </div>
  )
}

export default App
