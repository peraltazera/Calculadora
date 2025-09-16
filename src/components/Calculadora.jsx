import { useState } from "react";
import { evaluate } from "mathjs";

export default function Calculadora () {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value)
  }

  const handleClear = () => {
    setInput("")
    setResult("")
  }

  const handleDelete

  return (
    <div className="grid shadow-md w-[360px] text-2xl font-bold">
      <div className="bg-[#3b3b3b] text-white min-h-[180px] grow flex flex-col justify-end items-end p-8 gap-4">
        <span className="flex w-fit justify-self-end text-xl">{input}</span>
        <div className="flex justify-between w-full items-center text-5xl">
          <span>=</span>
          <span className="flex h-fit">{result}</span>
        </div>
      </div>
      <div className="bg-white grow h-[480px] grid grid-cols-4">
        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#55c9ff] bg-[#3b3b3b]"
          onClick={() => handleClear()}
        >
          C
        </button>
        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#55c9ff] bg-[#3b3b3b] text-[#D4A373]"
          onClick={() => handleClick("+")}
        >
          +
        </button>

        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#55c9ff] bg-[#3b3b3b] text-[#D4A373]"
          onClick={() => handleClick("-")}
        >
          -
        </button>

        <div className="justify-center items-center bg-[#696969]" />

        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#55c9ff]"
          onClick={() => handleClick("7")}
        >
          7
        </button>
        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#55c9ff]"
          onClick={() => handleClick("8")}
        >
          8
        </button>
        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#55c9ff]"
          onClick={() => handleClick("9")}
        >
          9
        </button>

        <div className="justify-center items-center bg-[#696969]" />

        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#55c9ff]"
          onClick={() => handleClick("4")}
        >
          4
        </button>
        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#55c9ff]"
          onClick={() => handleClick("5")}
        >
          5
        </button>
        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#55c9ff]"
          onClick={() => handleClick("6")}
        >
          6
        </button>

        <div className="justify-center items-center bg-[#696969]" />

        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#55c9ff]"
          onClick={() => handleClick("1")}
        >
          1
        </button>
        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#55c9ff]"
          onClick={() => handleClick("2")}
        >
          2
        </button>
        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#55c9ff]"
          onClick={() => handleClick("3")}
        >
          3
        </button>

        <div className="justify-center items-center bg-[#696969]" />

        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#55c9ff]"
          onClick={() => handleClick(".")}
        >
          .
        </button>
        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#55c9ff]"
          onClick={() => handleClick("0")}
        >
          0
        </button>
        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#55c9ff] text-sm"
          onClick={() => {return}}
        >
          DEL
        </button>
        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#55c9ff] bg-[#3b3b3b]"
          onClick={() => {return}}
        >
          =
        </button>
      </div>
    </div>
  );
}
