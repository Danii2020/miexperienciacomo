'use client';

import { useState } from "react";
import Input from "../components/Input/Input";
import { Contact } from "../types/contact";
import Button from "../components/Button/Button";
import { showErrorToast } from "@/lib/utils";
import { saveContactData } from "../services/commonService";
import { useAuth } from "../context/AuthContext";
import confetti from "canvas-confetti";
import { ToastContainer } from "react-toastify";
import SuccessfulModal from "../components/Modals/SuccessfulModal";
import Link from "next/link";

const ContactForm = () => {
    const { supabase } = useAuth()
    const [formData, setFormData] = useState<Contact>({
        email: "",
        name: "",
        comment: "",
        privacyPolicyAccepted: false
    });
    const [isSuccessfulModalOpen, setIsSuccessfulModalOpen] = useState<boolean>(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, type } = e.target;
        const value = type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
        console.log(value)
        setFormData(prev => ({
            ...prev ,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await saveContactData(supabase, formData);
            setIsSuccessfulModalOpen(true)
            confetti({
                particleCount: 150,
                spread: 60
            })
        } catch (error) {
            showErrorToast()
            console.error('Error updating profile:', error);
        }
    }
    return (
        <>
            <ToastContainer />
            {isSuccessfulModalOpen && (
                <SuccessfulModal
                    title="¡Tu consulta ha sido enviada!"
                    content="Felicidades, tu consulta ha sido enviada con éxito, tan pronto como sea posible
                    nos pondremos en contacto contigo para poder solventarla 🎉"
                    isOpen={isSuccessfulModalOpen}
                    closeModal={() => setIsSuccessfulModalOpen(false)}
                />
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        className="text-2xl font-semibold"
                        htmlFor="email"
                    >
                        ¿Cuál es tu correo electrónico?
                    </label>
                    <Input
                        name="email"
                        placeholder="Ejemplo: example@example.com"
                        className="text-lg mt-4 font-semibold"
                        value={formData?.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-2xl font-semibold"
                        htmlFor="name"
                    >
                        ¿Cuál es tu nombre completo?
                    </label>
                    <Input
                        name="name"
                        placeholder="Ejemplo: Juan Dávalos"
                        className="text-lg mt-4 font-semibold"
                        value={formData?.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-2xl font-semibold"
                        htmlFor="comment"
                    >
                        Cuéntanos en qué te podemos ayudar
                    </label>
                    <textarea
                        name="comment"
                        placeholder="Ejemplo: Necesito ayuda para iniciar sesión..."
                        className="w-full p-4 border-[2px] border-black rounded-xl focus:outline-none font-medium mt-4 text-lg"
                        value={formData?.comment}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-4 flex items-start gap-2">
                    <input
                        type="checkbox"
                        name="privacyPolicyAccepted"
                        checked={formData.privacyPolicyAccepted}
                        onChange={handleInputChange}
                        required
                        className="mt-1 h-4 w-4 accent-black cursor-pointer"
                    />
                    <label
                        htmlFor="privacyPolicyAccepted"
                        className="text-lg cursor-pointer"
                    >
                        He leído y acepto la <Link href="/privacy" className="underline font-medium hover:text-gray-600" target="_blank" rel="noopener noreferrer">política de privacidad</Link>
                    </label>
                </div>
                <Button
                    type="submit"
                >
                    Enviar
                </Button>
            </form>
        </>

    )
}

export default ContactForm;
