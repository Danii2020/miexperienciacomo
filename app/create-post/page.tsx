import React from "react";
import PostForm from "../components/Forms/PostForm";

const CreatePost = () => {
    return (
        <main className="flex flex-col items-start justify-start md:py-8 py-2">
            <div className="flex flex-col gap-8 w-full max-w-3xl">
                <PostForm isEditForm={false} />
            </div>
        </main>

    )
}

export default CreatePost
