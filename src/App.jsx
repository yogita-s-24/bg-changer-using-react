import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("#00e600");
  return (
    <>
      <div
        className="w-full h-screen duration-200 relative"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg  py-20 text-white font-extrabold ">
          <h1 className="text-center text-4xl text-white font-extrabold p-5 rounded-2xl">Welcome to the Dynamic BG-Changer</h1>
        </div>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-lg">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#ff0066" }}
              onClick={() => setColor("#ff0066")}
            >
              Pink
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: " #800000"}}
              onClick={() => setColor(" #800000")}
            >
              Brown
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "gray" }}
              onClick={() => setColor("gray")}
            >
              Gray
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
              onClick={() => setColor("purple")}
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;