'use client'

import Link from "next/link";
import Image from "next/image";
import SignInModal from "./Modals/SignInModal";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const NavBar = () => {
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
    const { user, signOut } = useAuth();

    return (
        <>
            {isSignInModalOpen && (
                <SignInModal
                    isOpen={isSignInModalOpen}
                    closeModal={() => setIsSignInModalOpen(false)}
                />
            )}
            <aside className="fixed z-10 bottom-0 left-0 right-0 h-16 border-t-2 border-black bg-primary flex flex-row items-center justify-around py-2
                                md:h-full md:w-[20%] md:border-r-2 md:border-t-0 md:flex-col md:justify-between md:py-8">
                <nav className="flex flex-row items-center justify-around w-full px-4 
                                md:flex-col md:items-end md:space-y-10 md:px-12">
                    <Link href="/" className="text-black font-bold text-2xl hover:underline md:text-4xl">
                        <Image
                            className="transition-all duration-300 ease-in-out hover:scale-105 w-12 h-12 md:w-[120px] md:h-[120px]"
                            src="/logo.svg"
                            alt="Logo"
                            width={120}
                            height={120}
                        />
                    </Link>
                    <Link
                        href="/about"
                        className="text-black text-base font-normal text-center px-2 py-1 rounded-md transition-all duration-200
                                   hover:bg-gray-500 hover:bg-opacity-10 md:text-2xl md:px-4 md:py-2"
                    >
                        Acerca
                    </Link>
                    {user ? (
                        <>
                            <Link
                                href="/me"
                                className="text-black text-base font-normal text-center px-2 py-1 rounded-md transition-all duration-200
                                           hover:bg-gray-500 hover:bg-opacity-10 md:text-2xl md:px-4 md:py-2"
                            >
                                Perfil
                            </Link>
                            <button
                                className="text-black text-base font-normal text-center px-2 py-1 rounded-md transition-all duration-200
                                           hover:bg-gray-500 hover:bg-opacity-10 md:text-2xl md:px-4 md:py-2"
                                onClick={signOut}
                            >
                                Cerrar sesión
                            </button>
                        </>
                    ) : (
                        <button
                            className="text-black text-base font-normal text-center px-2 py-1 rounded-md transition-all duration-200
                                       hover:bg-gray-500 hover:bg-opacity-10 md:text-2xl md:px-4 md:py-2"
                            onClick={() => setIsSignInModalOpen(true)}
                        >
                            Entrar
                        </button>
                    )}
                </nav>
            </aside>
        </>
    );
};

export default NavBar;
