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
import CreateModal from "../Modals/Operations/CreateModal";
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

    const router = useRouter()

    useEffect(() => {
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
            particleCount:150,
            spread:60
        })
        setTimeout(() => {
            router.push("/me")
        }, 2000)
    };

    const handleEdit = async () => {
        console.log(post?.id)
        await updatePost(supabase, { id: post?.id, ...getPostData() })
        console.log("Post updated!")
    }

    const handleDelete = async () => {
        await deletePost(supabase, post?.id || "")
        console.log("Post deleted!")
        router.push("/me")
    }

    return (
        <>
            {isCreateModalOpen && (
                <CreateModal
                    isOpen={isCreateModalOpen}
                    closeModal={() => setIsCreateModalOpen(false)}
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
                                onClick={handleDelete}
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
