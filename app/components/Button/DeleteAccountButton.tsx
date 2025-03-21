'use client';

import { useState } from "react";
import DeleteQuestionModal from "../Modals/DeleteQuestionModal";
import { deleteUserAccount } from "@/app/services/userService";
import { useAuth } from "@/app/context/AuthContext";
import { showErrorToast } from "@/lib/utils";
import confetti from "canvas-confetti";
import { ToastContainer } from "react-toastify";
import SuccessfulModal from "../Modals/SuccessfulModal";
import { useRouter } from "next/navigation";

const DeleteAccountButton = () => {
    const { user, supabase, signOut } = useAuth()
    const [showDeleteAccountModal, setShowDeleteAccountModa] = useState<boolean>(false);
    const [isSuccessfulDeleteModalOpen, setIsSuccessfulDeleteModalOpen] = useState<boolean>(false);

    const router = useRouter()

    const handleDelete = async () => {
        try {
            const { success } = await deleteUserAccount(supabase, user?.id || "")
            if (success) {
                setIsSuccessfulDeleteModalOpen(true)
                confetti({
                    particleCount: 150,
                    spread: 60
                })
                setTimeout(() => {
                    router.push("/")
                }, 2000)
                await signOut()
            }
        } catch (error) {
            showErrorToast()
            console.log(error)
        }
    }

    return (
        <>
         <ToastContainer />
            {showDeleteAccountModal && (
                    <DeleteQuestionModal
                        title="¡Va a eliminar tu cuenta!"
                        content="¿Seguro que quieres eliminar tu cuenta y todas tus experiencias? 💀"
                        isOpen={showDeleteAccountModal}
                        closeModal={() => setShowDeleteAccountModa(false)}
                        onCancel={() => setShowDeleteAccountModa(false)}
                        onDelete={handleDelete}
                    />
                )
            }
            {isSuccessfulDeleteModalOpen && (
                <SuccessfulModal
                    title="¡Se ha eliminado tu cuenta!"
                    content="Tu cuenta se ha eliminado con éxito 🎉"
                    isOpen={isSuccessfulDeleteModalOpen}
                    closeModal={() => setIsSuccessfulDeleteModalOpen(false)}
                />
            )}
            <button
                className="flex flex-col gap-1 w-full"
                onClick={() => setShowDeleteAccountModa(true)}
            >
                <span className="text-red-500 font-normal text-md hover:underline">
                    Eliminar cuenta
                </span>
                <small className="text-gray-900">
                    Elimina tu cuenta y todas tus experiencias de forma permanente
                </small>
            </button>
        </>
    )
}

export default DeleteAccountButton;
