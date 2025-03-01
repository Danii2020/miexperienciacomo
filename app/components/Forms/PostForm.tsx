'use client'

import BodyTextEditor from "../TextEditor/BodyTextEditor";
import Title from "../Typography/Title";
import Input from "../Input/Input";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { deletePost, savePost, updatePost } from "@/app/services/postService";
import { slugify, capitalizeLetter } from "@/lib/utils";
import { PostDatabase } from "@/app/types/post";
import { useRouter } from "next/navigation";
import SuccessfulModal from "../Modals/SuccessfulModal";
import DeleteQuestionModal from "../Modals/DeleteQuestionModal";
import confetti from "canvas-confetti";

type Props = {
    post?: PostDatabase | null
    isEditForm: boolean;
}

const PostForm: React.FC<Props> = ({ post, isEditForm
}) => {
    const { user, supabase } = useAuth()

    const [title, setTitle] = useState<string>(post?.title || '');
    const [summary, setSummary] = useState<string>(post?.summary || '')
    const [content, setContent] = useState<string>(post?.content || "");

    const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
    const [isSuccessfulDeleteModalOpen, setIsSuccessfulDeleteModalOpen] = useState<boolean>(false);

    const router = useRouter()

    useEffect(() => {
        console.log(post?.summary)
        setTitle(post?.title || '');
        setContent(post?.content || '');
        setSummary(post?.summary || '');
    }, [post?.title, post?.content, post?.summary]);

    const getPostData = () => ({
        title,
        content,
        summary,
        slug: slugify(title, user?.id || "-")
    });

    const handleOnTitleChange = (e: { target: { value: string; }; }) => {
        const inputTitle = e.target.value;
        if (inputTitle.length > 0) {
            setTitle(capitalizeLetter(inputTitle))
        }
    }

    const handleOnSummaryChange = (e: { target: { value: string; }; }) => {
        const summaryText = e.target.value;
        if (summaryText.length > 0) {
            setSummary(capitalizeLetter(summaryText))
        }
    }

    const handleSubmitSave = async (e: React.FormEvent) => {
        e.preventDefault();
        await savePost(supabase, user?.id || "", getPostData())
        setIsCreateModalOpen(true)
        confetti({
            particleCount: 150,
            spread: 60
        })
        setTimeout(() => {
            router.push("/me")
        }, 2000)
    };

    const handleEdit = async () => {
        console.log(getPostData())
        await updatePost(supabase, { id: post?.id, ...getPostData() })
        setIsEditModalOpen(true)
        confetti({
            particleCount: 150,
            spread: 60
        })
        setTimeout(() => {
            router.push("/me")
        }, 2000)
    }

    const handleDelete = async () => {
        setIsDeleteModalOpen(false)
        await deletePost(supabase, post?.id || "")
        setIsSuccessfulDeleteModalOpen(true)
        confetti({
            particleCount: 150,
            spread: 60
        })
        setTimeout(() => {
            router.push("/me")
        }, 2000)
    }

    return (
        <>
            {isCreateModalOpen && (
                <SuccessfulModal
                    title="¡Has publicado una experiencia!"
                    content="Felicidades, tu experiencia se ha publicado con éxito 🎉"
                    isOpen={isCreateModalOpen}
                    closeModal={() => setIsCreateModalOpen(false)}
                />
            )}
            {isEditModalOpen && (
                <SuccessfulModal
                    title="¡Se ha actualizado tu experiencia!"
                    content="Felicidades, tu experiencia se ha actualizado con éxito 🎉"
                    isOpen={isEditModalOpen}
                    closeModal={() => setIsEditModalOpen(false)}
                />
            )}
            {isDeleteModalOpen && (
                <DeleteQuestionModal
                    title="¡Va a eliminar tu experiencia!"
                    content="¿Seguro que quieres eliminar esta experiencia? 💀"
                    isOpen={isDeleteModalOpen}
                    closeModal={() => setIsDeleteModalOpen(false)}
                    onCancel={() => setIsDeleteModalOpen(false)}
                    onDelete={handleDelete}
                />
            )}
            {isSuccessfulDeleteModalOpen && (
                <SuccessfulModal
                    title="¡Se ha eliminado tu experiencia!"
                    content="Tu experiencia se ha eliminado con éxito 🎉"
                    isOpen={isSuccessfulDeleteModalOpen}
                    closeModal={() => setIsSuccessfulDeleteModalOpen(false)}
                />
            )}
            <form onSubmit={handleSubmitSave}>
                <div className="text-left">
                    <Title>
                        Cuéntale al mundo tu experiencia profesional
                    </Title>
                    <p className="font-normal text-base mb-2">
                        Publica solo contenido relacionado con tu experiencia profesional. Las publicaciones
                        fuera de este tema serán eliminadas, y la cuenta podría ser bloqueada.
                    </p>
                </div>
                <div>
                    <Input
                        defaultValue={title}
                        onChange={(e) => handleOnTitleChange(e)}
                        placeholder="Mi experiencia como programador..."
                        className="mb-2"
                        required
                    />
                    <Input
                        defaultValue={summary}
                        onChange={(e) => handleOnSummaryChange(e)}
                        placeholder="Pequeño resumen de tu experiencia (max 90 caracteres)"
                        className="font-medium text-xl h-24"
                        maxLength={90}
                        required
                    />
                    <div className="p-4 border-[2px] border-black rounded-xl focus:outline-none mb-5">
                        <BodyTextEditor
                            content={content}
                            onUpdate={(newContent) => setContent(newContent)}
                        />
                    </div>
                </div>
                {
                    !isEditForm ? (
                        <button
                            type="submit"
                            className="w-full p-4 bg-black text-white rounded-xl font-bold text-xl z-10"
                        >
                            Publicar
                        </button>
                    ) : (
                        <div className="flex flex-row justify-center items-center gap-4">
                            <button
                                className="w-full p-4 bg-[#373737] text-white rounded-xl font-bold text-xl"
                                type="button"
                                onClick={handleEdit}
                            >
                                Editar
                            </button>
                            <button
                                className="w-full p-4 bg-[#F40000] border-[2px] border-black text-white rounded-xl font-bold text-xl"
                                type="button"
                                onClick={() => setIsDeleteModalOpen(true)}
                            >
                                Eliminar
                            </button>
                        </div>
                    )
                }
            </form>
        </>

    )
}

export default PostForm;
