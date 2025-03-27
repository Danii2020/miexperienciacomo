'use client'

import Title from "../Typography/Title";
import GoogleIcon from '@mui/icons-material/Google';
import LoopIcon from '@mui/icons-material/Loop';
import TemplateModal, { Props } from "./TemplateModal";
import { createClient } from "@/lib/supabase/client"
import { useSearchParams } from "next/navigation"
import { useState } from "react";
import Button from "../Button/Button";
import Link from "next/link";

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
            <Button
                onClick={signInWithGoogle}
                disabled={isGoogleLoading}
                isLoading={isGoogleLoading}
                icon={<GoogleIcon />}
                loadingIcon={<LoopIcon className="mr-2 size-4 animate-spin" />}
            >
                Inicia sesión
            </Button>
            <small className="mt-4">
                Al iniciar sesión estás aceptando los {" "}
                <Link className="text-sm text-center font-semibold hover:underline" href="/terms" target="blank">
                    Términos y Condiciones.
                </Link>
            </small>
        </TemplateModal>


    );
};

export default SignInModal;

