'use client'

import BodyTextEditor from "../TextEditor/BodyTextEditor";
import Title from "../Typography/Title";
import Input from "../Input/Input";
import React, { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { savePost } from "@/app/services/postService";
import { slugify, capitalizeLetter } from "@/lib/utils";

type Props = {
    postTitle?: string;
    postContent?: string;
    postSummary?: string
}

const PostForm: React.FC<Props> = ({ postTitle, postContent, postSummary }) => {
    const { user, supabase } = useAuth()

    const [title, setTitle] = useState(postTitle || '');
    const [summary, setSummary] = useState(postSummary || '')
    const [content, setContent] = useState(postContent || "");

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const postData = {
            title,
            content,
            summary,
            slug: slugify(title, user?.id || "-")
        }
        await savePost(supabase, user?.id || "", postData)
        console.log("Post saved!")
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="text-left">
                <Title>
                    Cuéntale al mundo tu experiencia profesional
                </Title>
                <p className="font-normal text-md mb-2">
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
            <button
                type="submit"
                className="w-full p-4 bg-black text-white rounded-xl font-bold text-xl"
            >
                Publicar
            </button>
        </form>
    )
}

export default PostForm;
