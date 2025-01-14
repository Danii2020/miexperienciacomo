import React from "react";
import PostForm from "../components/Forms/PostForm";

const CreatePost = () => {
    return (
        <main className="flex flex-col items-start justify-start py-8">
            <div className="flex flex-col gap-8 w-full max-w-4xl">
                <PostForm />
                <div>
                    <button
                        className="w-full p-4 bg-black text-white rounded-xl font-bold text-xl"
                    >
                        Publicar
                    </button>
                </div>
            </div>
        </main>

    )
}

export default CreatePost
