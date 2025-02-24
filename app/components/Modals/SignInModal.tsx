'use client'

import Title from "../Typography/Title";
import GoogleIcon from '@mui/icons-material/Google';
import CloseIcon from '@mui/icons-material/Close';
import LoopIcon from '@mui/icons-material/Loop';
import { createClient } from "@/lib/supabase/client"
import { useSearchParams } from "next/navigation"
import { useState } from "react";

type Props = {
    isOpen: boolean;
    closeModal: () => void;
}

const SignInModal = ({ isOpen, closeModal }: Props) => {
    const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false)
    const supabase = createClient()

    const searchParams = useSearchParams()

    const next = searchParams.get("next")

    async function signInWithGoogle() {
      setIsGoogleLoading(true)
      try {
        const { error } = await supabase.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo: `${window.location.origin}/auth/callback${
              next ? `?next=${encodeURIComponent(next)}` : ""
            }`,
          },
        })
        if (error) {
          throw error
        }
      } catch (error) {
        console.log("Please try again.", error)
        setIsGoogleLoading(false)
      }
    }
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 lg:px-0 px-2">
            <div className="bg-white rounded-lg shadow-lg max-w-2xl p-6 relative flex justify-center items-center flex-col border-[2px] border-black">
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={closeModal}
                >
                    <CloseIcon />
                </button>

                <Title className="text-center">
                    Gracias por querer formar parte de este proyecto
                </Title>
                <p className="text-base text-black text-center mb-6 px-8">
                    Para comenzar a publicar experiencias puedes iniciar sesión con tu
                    cuenta de Google
                </p>
                <button
                    className="bg-[#373737] text-white text-lg font-medium py-4 px-8 rounded-full w-full hover:bg-black
                    transition-all duration-300 ease-in-out hover:scale-105"
                    onClick={signInWithGoogle}
                    disabled={isGoogleLoading}
                >
                    <div className="flex justify-center items-center gap-8">
                        {isGoogleLoading ? <LoopIcon className="mr-2 size-4 animate-spin" /> : <GoogleIcon />}
                        Inicia sesión
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SignInModal;

