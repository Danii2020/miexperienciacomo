'use client';

import { useEffect, useState } from "react";
import ExperienceCard from "./components/ExperienceCard";
import { getPosts } from "./services/postService";
import { createClient } from "@/lib/supabase/client";
import { PostDatabase } from "./types/post";
import Link from "next/link";
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
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, [supabase]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading post: {error.message}</p>;

    return (
        <main className="flex flex-col items-center justify-center lg:w-1/2 w-full">
            <ul className="flex flex-col gap-8 w-full">
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
        </main>

    );
}

