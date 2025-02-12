'use client';

import PostForm from "@/app/components/Forms/PostForm"
import { usePost } from "@/hooks/use-posts"

const EditPostForm = ({slug}:{slug:string}) => {
    const { post } = usePost(slug);
    return (
        <main className="flex flex-col items-start justify-start py-8">
            <div className="flex flex-col gap-8 w-full max-w-2xl">
                <PostForm
                    post={post}
                    isEditForm={true}
                />
            </div>
        </main>
    )
}

export default EditPostForm;
