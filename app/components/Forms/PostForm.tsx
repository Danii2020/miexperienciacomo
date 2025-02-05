'use client'

import BodyTextEditor from "../TextEditor/BodyTextEditor";
import Title from "../Typography/Title";
import Input from "../Input/Input";
import React from "react";
import { useAuth } from "@/app/context/AuthContext";
import { savePost } from "@/app/services/postService";
import { slugify, capitalizeLetter } from "@/lib/utils";

type Props = {
    postTitle?: string;
    postContent?: string;
}

const PostForm: React.FC<Props> = ({ postTitle, postContent }) => {
    const { user, supabase } = useAuth()

    const [title, setTitle] = React.useState(postTitle || '');
    const [content, setContent] = React.useState(postContent || "");

    const handleOnTitleChange = (e: { target: { value: string; }; }) => {
        const inputTitle = e.target.value;
        if (inputTitle.length > 0) {
            setTitle(capitalizeLetter(inputTitle))
          }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const postData = {
            title,
            content,
            slug: slugify(title, user?.id || "-")
        }
        await savePost(supabase, user?.id, postData)
        console.log("Post saved!")
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="text-left">
                <Title>
                    Cuéntale al mundo tu experiencia profesional
                </Title>
                <p className="font-normal text-md">
                    Publica solo contenido relacionado con tu experiencia profesional. Las publicaciones
                    fuera de este tema serán eliminadas, y la cuenta podría ser bloqueada.
                </p>
            </div>
            <div>
                <Input
                    defaultValue={title}
                    onChange={(e) => handleOnTitleChange(e)}
                    placeholder="Mi experiencia como programador..."
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
