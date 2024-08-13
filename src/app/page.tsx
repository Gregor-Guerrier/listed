import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-800 flex min-h-screen flex-row items-center justify-between">
      <div className="w-96 h-screen flex flex-col items-center p-4 ml-2 space-y-3">
        <div className="h-auto w-full">
          <p className="text-slate-400 text-6xl text-center">Listed</p>
        </div>
        <div className="auto h-12 w-full shadow-md shadow-slate-950 rounded-lg flex p-2 text-slate-400 transition ease-out duration-300 border-slate-400 scale-100 hover:scale-105 hover:ease-out hover:bg-slate-400 hover:border-slate-800 hover:text-slate-800">
          <div className="flex h-full w-full items-center align-middle border-r-2 border-inherit text-inherit">
            <p className=" self-center justify-self-center font-bold text-inherit">Listed - List</p>
          </div>
          <div className="flex aspect-square h-full items-center align-middle mx-2"></div>
          <div className="flex aspect-square h-full items-center align-middle"></div>
        </div>
        <div className="auto h-12 w-full rounded-lg flex p-2 border-4 border-slate-400 border-dashed items-center text-slate-400 hover:text-slate-200 hover:border-slate-200 transition hover:ease-in ease-out">
          <p className="text-slate-400 text-center font-bold w-full text-2xl">+</p>
        </div>
      </div>

      <div className="flex flex-col w-full h-screen p-8">
        <div className="w-full h-fit flex flex-col-reverse border-b-2 border-slate-400 mr-10">
          <p className="text-slate-400 w-full text-4xl">Listed - List</p>
        </div>
        <div className="w-full h-16 flex flex-row py-4 space-x-4">
          <div className="w-auto h-full flex shadow-md shadow-slate-950 rounded-full items-center text-slate-400 hover:text-slate-800 hover:scale-105 scale-100 ease-out hover:ease-in transition hover:bg-slate-400">
            <p className="text-center text-md text-inherit w-full font-bold px-6">Grid</p>
          </div>
          <div className="w-auto h-full flex shadow-md shadow-slate-950 rounded-full items-center text-slate-400 hover:text-slate-800 hover:scale-105 scale-100 ease-out hover:ease-in transition hover:bg-slate-400">
            <p className="text-center text-md text-inherit w-full font-bold px-6">Calendar</p>
          </div>
        </div>
      </div>
    </main>
  );
}
