'use client';

import { useEffect, useState } from "react";
import ExperienceCard from "../ExperienceCard";
import { getPosts } from "@/app/services/postService";
import { createClient } from "@/lib/supabase/client";
import { PostDatabase } from "@/app/types/post";
import Link from "next/link";
import { showErrorToast } from "@/lib/utils";
import { ToastContainer } from "react-toastify";

const PostsList = () => {
    const [posts, setPosts] = useState<PostDatabase[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const supabase = createClient()

    useEffect(() => {
        async function fetchPosts() {
            try {
                const data = await getPosts(supabase);
                setPosts(data as unknown as PostDatabase[]);
            } catch (err) {
                setError(err as Error);
                showErrorToast()
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, [supabase]);

    if (loading) return <p>Loading...</p>;
    if (error) {
        return (
            <>
                <ToastContainer />
                <p>Error loading post: {error.message}</p>
            </>
        )
    }

    return (
        <ul className="flex flex-col gap-8">
            {
                posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.slug}`}>
                            <ExperienceCard
                                post={post}
                                experience_time={post.user_id.experience_time}
                                professional_role={post.user_id.professional_role}
                                userName={post.user_id.name}
                            />
                        </Link>

                    </li>
                ))
            }
        </ul>

    );
}

export default PostsList;


