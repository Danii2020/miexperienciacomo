'use client'

import Link from "next/link";
import SignInModal from "./Modals/SignInModal";
import { useState } from "react";


const NavBar = () => {
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
    return (
        <>
            {isSignInModalOpen && <SignInModal isOpen={isSignInModalOpen} closeModal={() => setIsSignInModalOpen(false)} />}
            <aside className="fixed top-0 left-0 h-full w-[20%] border-r-2 border-black bg-primary flex flex-col justify-between py-8">
                <nav className="flex flex-col items-end space-y-10 w-full px-12">
                    <Link href="/" className="text-black font-bold text-4xl hover:underline">
                        LOGO
                    </Link>
                    <Link
                        href="/about"
                        className="text-black text-2xl font-normal text-right px-4 py-2 rounded-md transition-all duration-200
                     hover:bg-gray-500 hover:bg-opacity-10"
                    >
                        Acerca
                    </Link>
                    <Link
                        href="/me/posts"
                        className="text-black text-2xl font-normal text-right px-4 py-2 rounded-md transition-all duration-200
                     hover:bg-gray-500 hover:bg-opacity-10"
                    >
                        Perfil
                    </Link>
                    {/* <button
                        className="text-black text-2xl font-normal px-4 py-2 rounded-md transition-all duration-200
                     hover:bg-gray-500 hover:bg-opacity-10"
                        onClick={() => setIsSignInModalOpen(true)}
                    >
                        Entrar
                    </button> */}
                </nav>
            </aside>
        </>

    );
};

export default NavBar;
