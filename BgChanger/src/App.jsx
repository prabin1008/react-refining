import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState("gray");


  return (
    <>
      <div className="w-full h-screen duration-100"
        style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 mx-11">
          <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white p-4 rounded-xl">
            <button
              onClick={() => setColor("red")}
              className='outline-none px-4 py-3 rounded-xl text-white text-3xl'
              style={{ backgroundColor: "red" }}
            >red</button>

            <button
              onClick={() => setColor("green")}
              className='outline-none px-4 py-3 rounded-xl text-white text-3xl'
              style={{ backgroundColor: "green" }}
            >green</button>

            <button
              onClick={() => setColor("blue")}
              className='outline-none px-4 py-3 rounded-xl text-white text-3xl'
              style={{ backgroundColor: "blue" }}
            >blue</button>

            <button
              onClick={() => setColor("yellow")}
              className='outline-none px-4 py-3 rounded-xl text-black text-3xl'
              style={{ backgroundColor: "yellow" }}
            >yellow</button>


            <button
              onClick={() => setColor("black")}
              className='outline-none px-4 py-3 rounded-xl text-white text-3xl'
              style={{ backgroundColor: "black" }}
            >black</button>

            <button
              onClick={() => setColor("purple")}
              className='outline-none px-4 py-3 rounded-xl text-white text-3xl'
              style={{ backgroundColor: "purple" }}
            > purple</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;