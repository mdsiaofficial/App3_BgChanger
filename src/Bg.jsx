import React, { useState, useEffect } from 'react'

function Bg() {
  const [bg, setBg] = useState("white");
  let red = "red";
  let green = "green";
  let blue = "blue";
  let olive = "olive";
  let yellow = "yellow";
  let gray = "gray";

  useEffect(() => {
    document.body.style.backgroundColor = bg;
  }, [bg]);

  const clrChange = (e) => {
    setBg(e.target.value);
  }

  return (
    <div className={` w-ful h-screen duration-200`}
      
    >
      {/* <input type="color" onChange={(e) => clrChange(e)} /> */}
      <h1 className={`text-center text-3xl md:text-4xl font-extrabold text-[crimson] `}>
        Background Color Changer
      </h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">
          <button
            onClick={() => setBg(green)}
            className={`px-4 py-1 rounded-xl text-white shadow-2xl`}
            style={{ backgroundColor: green }}
          >
            {green}
          </button>

          <button
            onClick={() => setBg(red)}
            className={`px-4 py-1 rounded-xl text-white shadow-2xl`}
            style={{ backgroundColor: red }}
          >
            {red}
          </button>

          <button
            onClick={() => setBg(yellow)}
            className={`px-4 py-1 rounded-xl text-black shadow-2xl`}
            style={{ backgroundColor: yellow }}
          >
            {yellow}
          </button>

          <button
            onClick={() => setBg(gray)}
            className={`px-4 py-1 rounded-xl text-white shadow-2xl`}
            style={{ backgroundColor: gray }}
          >
            {gray}
          </button>

          <button
            onClick={() => setBg(blue)}
            className={`px-4 py-1 rounded-xl text-white shadow-2xl`}
            style={{ backgroundColor: blue }}
          >
            {blue}
          </button>

          <button
            onClick={() => setBg(olive)}
            className={`px-4 py-1 rounded-xl text-white shadow-2xl`}
            style={{ backgroundColor: olive }}
          >
            {olive}
          </button>
        </div>

      </div>
    </div>
  )
}

export default Bg
