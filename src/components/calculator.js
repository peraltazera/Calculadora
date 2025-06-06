import React, { useState } from "react"

export function Calculator(){
    const [input, setInput] = useState("")
    const [result, setResult] = useState("")

    const handleClick = (value) => {
        setInput(input + value)
    }

    const handleClear = () => {
        setInput("")
        setResult("")
    }

    return(
        <div className="grid shadow-md w-[360px] text-2xl font-bold">
            <div className="bg-[#CCD5AE] text-white min-h-[180px] grow flex flex-col justify-end items-end p-8 gap-4">
                <span className="flex w-fit justify-self-end text-xl">
                    {input}
                </span>
            <div className="flex justify-between w-full items-center text-5xl">
            <span>=</span>
            </div>
            </div>
            <div className="bg-white grow h-[480px] grid grid-cols-4">

                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#E9EDC9]" 
                onClick={handleClear}>
                    C
                </button>

                <button
                className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#E9EDC9] text-[#D4A373]"
                onClick={() => handleClick("+")}
                >
                +
                </button>

                <button
                className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]"
                onClick={() => handleClick("7")}
                >
                7
                </button>
            </div>
        </div>
    )
}