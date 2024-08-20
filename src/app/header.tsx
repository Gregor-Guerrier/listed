'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
    const router = useRouter()
    const {data : session} = useSession()
    const [active, setActive] = useState(false)
    
    return (
        <div className="bg-orange-400 drop-shadow-xl shadow-stone-800 h-16 w-full sticky top-0 z-40 flex justify-between py-2.5 px-8 border-b-4 border-orange-300">
                    <div className="space-x-4 h-full">
                        <button className="rounded-full aspect-square h-full bg-orange-200">
                        </button>
                        <button className="rounded-full aspect-square h-full bg-orange-200">
                        </button>
                    </div>
                    {session ? (
                        <div className="h-full relative">
                            <button className="h-full w-48 scale-100 hover:scale-105 transition ease-in hover:ease-out hover:bg-orange-200 rounded-lg flex items-center" onClick={() => setActive(!active)}>
                                <div className="aspect-square h-full p-1">
                                    <Image
                                        className="rounded-lg"
                                        src="/gregor.jfif"
                                        width={100}
                                        height={100}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <p className="p-4 text-orange-100">{session.user?.name}</p>
                            </button>
                            { active ? (
                                <div className="flex flex-col space-y-2 right-0 left-0 absolute bg-orange-50 top-14 z-nav mt-1 rounded-[13px] p-4 focus:outline-none shadow-level4 dark:shadow-dark-level4 bg-overlay-3 dark:bg-dark-overlay-3 max-h-[calc(100vh-100px)] overflow-y-auto left-0 opacity-100 translate-y-0">
                            <button className="w-full h-8 transition ease-out scale-100 hover:bg-orange-200 hover:scale-105 hover-ease-in rounded-md flex flex-row items-center">
                        <div className="h-full aspect-square mx-2 flex flex-row items-center justify-items-center">
                            <svg fill="#a8a29e" width="100%" height="60%" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" className="stroke-stone-100">
                                <path d="M833.935 1063.327c28.913 170.315 64.038 348.198 83.464 384.79 27.557 51.84 92.047 71.944 144 44.387 51.84-27.558 71.717-92.273 44.16-144.113-19.426-36.593-146.937-165.46-271.624-285.064Zm-43.821-196.405c61.553 56.923 370.899 344.81 415.285 428.612 56.696 106.842 15.811 239.887-91.144 296.697-32.64 17.28-67.765 25.411-102.325 25.411-78.72 0-154.955-42.353-194.371-116.555-44.386-83.802-109.102-501.346-121.638-584.245-3.501-23.717 8.245-47.21 29.365-58.277 21.346-11.294 47.096-8.02 64.828 8.357ZM960.045 281.99c529.355 0 960 430.757 960 960 0 77.139-8.922 153.148-26.654 225.882l-10.39 43.144h-524.386v-112.942h434.258c9.487-50.71 14.231-103.115 14.231-156.084 0-467.125-380.047-847.06-847.059-847.06-467.125 0-847.059 379.935-847.059 847.06 0 52.97 4.744 105.374 14.118 156.084h487.454v112.942H36.977l-10.39-43.144C8.966 1395.137.044 1319.128.044 1241.99c0-529.243 430.645-960 960-960Zm542.547 390.686 79.85 79.85-112.716 112.715-79.85-79.85 112.716-112.715Zm-1085.184 0L530.123 785.39l-79.85 79.85L337.56 752.524l79.849-79.85Zm599.063-201.363v159.473H903.529V471.312h112.942Z" fill-rule="evenodd" />
                            </svg>
                        </div>
                        <p className="text-left text-stone-400">Profile</p>
                    </button>
                                <button className="w-full h-8 transition ease-out scale-100 hover:bg-orange-200 hover:scale-105 hover-ease-in rounded-md flex flex-row items-center" onClick={() => {
                                    signOut()
                                    router.push("/")
                                }}>
                        <div className="h-full aspect-square mx-2 flex flex-row items-center justify-items-center">
                            <svg fill="#a8a29e" width="100%" height="60%" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" className="stroke-stone-100">
                                <path d="M833.935 1063.327c28.913 170.315 64.038 348.198 83.464 384.79 27.557 51.84 92.047 71.944 144 44.387 51.84-27.558 71.717-92.273 44.16-144.113-19.426-36.593-146.937-165.46-271.624-285.064Zm-43.821-196.405c61.553 56.923 370.899 344.81 415.285 428.612 56.696 106.842 15.811 239.887-91.144 296.697-32.64 17.28-67.765 25.411-102.325 25.411-78.72 0-154.955-42.353-194.371-116.555-44.386-83.802-109.102-501.346-121.638-584.245-3.501-23.717 8.245-47.21 29.365-58.277 21.346-11.294 47.096-8.02 64.828 8.357ZM960.045 281.99c529.355 0 960 430.757 960 960 0 77.139-8.922 153.148-26.654 225.882l-10.39 43.144h-524.386v-112.942h434.258c9.487-50.71 14.231-103.115 14.231-156.084 0-467.125-380.047-847.06-847.059-847.06-467.125 0-847.059 379.935-847.059 847.06 0 52.97 4.744 105.374 14.118 156.084h487.454v112.942H36.977l-10.39-43.144C8.966 1395.137.044 1319.128.044 1241.99c0-529.243 430.645-960 960-960Zm542.547 390.686 79.85 79.85-112.716 112.715-79.85-79.85 112.716-112.715Zm-1085.184 0L530.123 785.39l-79.85 79.85L337.56 752.524l79.849-79.85Zm599.063-201.363v159.473H903.529V471.312h112.942Z" fill-rule="evenodd" />
                            </svg>
                        </div>
                        <p className="text-left text-stone-400">Sign Out</p>
                    </button>
                            </div>
                            ) :
                            (
                                <div></div>
                            )

                            }
                            
                        </div>
                    ) : (
                        <div className="flex space-x-2 items-center w-48">
                            <Link className="text-stone-800 font-bold"href={"/login"}>Login</Link>
                            <p className="text-orange-100"> or </p>
                            <Link className="text-stone-800 font-bold" href={"/signup"}>Sign Up</Link>
                        </div>
                    )}
                    
            </div>
    )
}