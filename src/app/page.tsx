'use client'

import { useState } from "react";
import Image from "next/image";
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";

export default function Home() {
    const { data: session } = useSession();
    
    return (
        <div className="w-full h-full p-8 grid grid-cols-4 grid-rows-2 gap-4">
            { session ? (
                <button className="rounded-lg bg-orange-50 shadow-lg ease-out transition scale-100 hover:scale-105 hover:ease-in hover:border-2 border-orange-400">
                    <div className="w-full flex p-8">
                        <div className="aspect-square w-full bg-orange-500 rounded-lg relative">
                            <div className="absolute aspect-square bottom-0 left-0 h-2/5 rounded-lg bg-stone-200/0 grid items-center">
                                <Image
                                    src="/hms-logo.png"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit px-8 pb-4 flex flex-col">
                        <div className="flex pb-2">
                            <div>
                                <p className="text-xl text-stone-600 text-left">Burgertown Retro</p>
                                <p className="text-md text-orange-200 text-left">High Moon Studios</p>
                            </div>
                        </div>
                        <p className="text-sm text-orange-100 text-center">July 2021 - August 2021</p>
                    </div>
                </button>
                ) : (
                    <button className="rounded-lg bg-orange-50 shadow-lg ease-out transition scale-100 hover:scale-105 hover:ease-in hover:border-2 border-orange-400">
                        <div className="w-full flex p-8">
                            <div className="aspect-square w-full bg-orange-500 rounded-lg relative">
                                <div className="absolute aspect-square bottom-0 left-0 h-2/5 rounded-lg bg-stone-200/0 grid items-center">
                                    <Image
                                        src="/hms-logo.png"
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-fit px-8 pb-4 flex flex-col">
                            <div className="flex pb-2">
                                <div>
                                    <p className="text-xl text-stone-600 text-left">Sign In</p>
                                    <p className="text-md text-orange-200 text-left">High Moon Studios</p>
                                </div>
                            </div>
                            <p className="text-sm text-orange-100 text-center">July 2021 - August 2021</p>
                        </div>
                    </button>
                )
            }
            
        </div>
    )
}

