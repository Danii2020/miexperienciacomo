'use client';

import { useEffect, useState } from "react";
import ExperienceCard from "./components/ExperienceCard";
import { getPosts } from "./services/postService";
import { createClient } from "@/lib/supabase/client";
import { PostDatabase } from "./types/post";
import Link from "next/link";
import { showErrorToast } from "@/lib/utils";
import { ToastContainer } from "react-toastify";

export default function Home() {
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
        <main className="flex flex-col items-center justify-center w-full">
            <div className="w-full max-w-xl mb-6">
                <ul className="flex flex-col gap-8">
                    {
                        posts.map((post) => (
                            <li key={post.id}>
                                <Link href={`/posts/${post.slug}`}>
                                    <ExperienceCard
                                        post={post}
                                        experience_time={post.user_id.experience_time}
                                        professional_role={post.user_id.professional_role}
                                    />
                                </Link>

                            </li>
                        ))
                    }
                </ul>
            </div>
        </main>

    );
}

