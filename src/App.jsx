import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('red');

  function handleClick(e) {
    setColor(e.target.textContent);
  }

  return (
    <>
      <div className={`w-full h-screen`} style={{ backgroundColor: color }} id='divBox'>
        <h1 className='flex justify-center items-center text-white text-8xl font-mono font-bold pt-52'>Hello World!!</h1>
        <div className='bg-slate-950 rounded-xl mx-14 px-3 py-1 text-white fixed bottom-3 left-0 right-0' id='navbar'>
          <ul className='flex justify-evenly text-black my-2 '>
            <li className='p1 list-none cursor-pointer px-10 py-3 hover:bg-slate-800 hover:font-mono rounded-xl' style={{background:'red'}} onClick={handleClick}>red</li>
            <li className='p2 list-none cursor-pointer px-10 py-3 hover:bg-slate-800 hover:font-mono rounded-xl' style={{background:'blue'}} onClick={handleClick}>blue</li>
            <li className='p3 list-none cursor-pointer px-10 py-3 hover:bg-slate-800 hover:font-mono rounded-xl' style={{background:'yellow'}} onClick={handleClick}>yellow</li>
            <li className='p4 list-none cursor-pointer px-10 py-3 hover:bg-slate-800 hover:font-mono rounded-xl' style={{background:'green'}} onClick={handleClick}>green</li>
            <li className='p5 list-none cursor-pointer px-10 py-3 hover:bg-slate-800 hover:font-mono rounded-xl' style={{background:'orange'}} onClick={handleClick}>orange</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
