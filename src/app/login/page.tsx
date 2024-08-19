'use client'

import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { redirect, useRouter } from 'next/navigation'
import Link from "next/link";

export default function Login() {
    const { data: session } = useSession();
    
    return (
        <div className="h-full">
        { session ? (
            redirect("/")
        ) : (
            <div className="flex h-full z-50 content-center justify-center items-center">
            <div className="bg-stone-800 rounded-lg shadow-lg flex flex-col justify-center p-8 space-y-8">
                <div className="self-center w-5/6 h-full inline content-center shadow-lg mx-8">
                    <p className="text-4xl object-center text-center text-stone-500">CSPipeline</p>
                    
                </div>
                <div className="space-y-4 flex flex-col">
                    <input placeholder="Username" className="w-80 border-stone-500 h-12 border-2 text-stone-400 bg-stone-800 rounded-sm p-4 transition ease-out focus:ease-in focus:outline-none focus:ring focus:ring-orange-400" />
                    <input placeholder="Password" type="password" className="border-stone-500 h-12 border-2 text-stone-400 bg-stone-800 rounded-sm p-4 transition ease-out focus:ease-in focus:outline-none focus:ring focus:ring-orange-400" />
                    <button className="h-12 bg-orange-400 rounded-sm transition ease-out hover:ease-in hover:bg-orange-200 duration-100 text-stone-200">
                        Sign In
                    </button>
                    <div className="flex justify-between">
                        <Link className="text-stone-500" href={"/"}>Forgot Password?</Link>
                        <Link className="text-right text-stone-500" href={"/"}>Sign Up</Link>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <button className="rounded-full bg-stone-500 aspect-square h-10" onClick={() => signIn("google")}></button>
                </div>
            </div>
        </div>
        )}
        </div>
    )
}

