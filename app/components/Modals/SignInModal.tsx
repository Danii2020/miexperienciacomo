'use client'

import Title from "../Typography/Title";
import GoogleIcon from '@mui/icons-material/Google';
import LoopIcon from '@mui/icons-material/Loop';
import TemplateModal, { Props } from "./TemplateModal";
import { createClient } from "@/lib/supabase/client"
import { useSearchParams } from "next/navigation"
import { useState } from "react";

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
                    redirectTo: `${window.location.origin}/auth/callback${next ? `?next=${encodeURIComponent(next)}` : ""
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
        <TemplateModal isOpen={isOpen} closeModal={closeModal}>
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
        </TemplateModal>


    );
};

export default SignInModal;

