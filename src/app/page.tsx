'use client'

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState(0)
  const [availableLists, setAvailableLists] = useState([0])
  let listItems = []
  for(let i = 0; i < availableLists.length; i++){
    let hoveredColor = i != selected ? "neutral-800" : "orange-500"
    let standardColor = i != selected ? "neutral-400" : "orange-500"
    let backgroundColor = i != selected ? "" : "bg-neutral-700"
    listItems.push(
        <button className={`auto h-12 w-full shadow-md shadow-neutral-950 rounded-lg flex p-2 text-${standardColor} ${backgroundColor} transition ease-out duration-300 border-${standardColor} scale-100 hover:scale-105 hover:ease-out hover:bg-neutral-400 hover:border-${hoveredColor} hover:text-${hoveredColor}`} onClick={() => setSelected(i)}>
          <div className="flex h-full w-full items-center align-middle border-r-2 border-inherit text-inherit">
            <p className="self-center justify-self-center font-bold text-inherit">Listed - List</p>
          </div>
          <button className="flex h-full px-2 items-center content-center align-middle" onClick={() => setAvailableLists(availableLists.filter((x, j) => j != i))}>
            <Image src="/trash.svg" alt="Delete Button" width="32" height="32" style={{}}/>
          </button>
        </button>
    )
  }
  return (
    <main className="bg-neutral-800 flex min-h-screen flex-row items-center justify-between">
      <div className="w-96 h-screen flex flex-col items-center p-4 ml-2 space-y-3">
        <div className="h-auto w-full">
          <p className="text-neutral-400 text-6xl text-center">Listed</p>
        </div>
        <div className="w-full flex flex-row">
          <button className="flex aspect-square w-1/4 items-center align-middle border-b-2 border-neutral-400"></button>
          <button className="flex aspect-square w-1/4 items-center align-middle border-b-2 border-neutral-400"></button>
          <button className="flex aspect-square w-1/4 items-center align-middle border-b-2 border-neutral-400"></button>
          <button className="flex aspect-square w-1/4 items-center align-middle border-b-2 border-neutral-400"></button>
        </div>
        {listItems}
        <button className="auto h-12 w-full rounded-lg flex p-2 border-4 border-neutral-400 border-dashed items-center text-neutral-400 hover:text-neutral-200 hover:border-neutral-200 transition hover:ease-in ease-out" onClick={()=>{
          setAvailableLists([...availableLists, 0])
        }}>
          <p className="text-neutral-400 text-center font-bold w-full text-2xl">+</p>
        </button>
      </div>

      <div className="flex flex-col w-screen h-screen p-8">
        <div className="w-full h-fit flex flex-col-reverse border-b-2 border-neutral-400">
          <p className="text-neutral-400 w-full text-4xl">Listed - List</p>
        </div>
        <div className="w-full h-16 flex flex-row py-4 space-x-4">
          <div className="w-auto h-full flex shadow-md shadow-neutral-950 rounded-full items-center text-neutral-400 hover:text-neutral-800 hover:scale-105 scale-100 ease-out hover:ease-in transition hover:bg-neutral-400">
            <p className="text-center text-md text-inherit w-full font-bold px-6">Grid</p>
          </div>
          <div className="w-auto h-full flex shadow-md shadow-neutral-950 rounded-full items-center text-neutral-400 hover:text-neutral-800 hover:scale-105 scale-100 ease-out hover:ease-in transition hover:bg-neutral-400">
            <p className="text-center text-md text-inherit w-full font-bold px-6">Calendar</p>
          </div>
        </div>
      </div>

      <div className="w-96 h-screen flex flex-col items-center p-4 mr-2 space-y-3">

      </div>
    </main>
  );
}

