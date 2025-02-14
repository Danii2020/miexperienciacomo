'use client'

import ExperienceCard from "../components/ExperienceCard";
import Title from "../components/Typography/Title";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useUserProfile } from "@/app/context/UserProfileContext";
import { UserDisplay } from "../types/user";
import { useUserPosts } from "@/hooks/use-user-posts";

const UserProfilePage = () => {
    const { userProfile, loading:userLoading } = useUserProfile()
    const { userPosts, error, loading:postsLoading } = useUserPosts(userProfile?.id || "")

    const [userData, setUserData] = useState<UserDisplay>({
        name: userProfile?.name ?? "",
        showName: userProfile?.show_name ?? true,
        showPhoto: userProfile?.show_photo ?? true,
        imageUrl: userProfile?.image_url ?? "/default-user.webp"
    })

    useEffect(() => {
        if (userProfile) {
            setUserData({
                name: userProfile.name ?? "",
                showName: userProfile.show_name ?? true,
                showPhoto: userProfile.show_photo ?? true,
                imageUrl: userProfile.image_url ?? "/default-user.webp"
            })
        }
    }, [userProfile])

    if (userLoading || postsLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading post: {error.message}</p>;

    return (
        <main className="flex flex-col items-center justify-start">
            <div className="w-full max-w-xl mb-6">
                <Title className="mb-4">
                    Tus experiencias publicadas
                </Title>
                <span className="inline-flex items-center justify-center gap-4">
                    <Image
                        src={userData.imageUrl}
                        className="rounded-full"
                        width={40}
                        height={40}
                        alt={""}
                    />
                    <Link
                        className="text-lg font-medium hover:underline w-full"
                        href="/me"
                    >
                        {userData.showName ? userData.name : "Anónimo"}
                    </Link>
                    <Link
                        href={"/create-post"}
                        className="w-full px-8 py-2 bg-black text-white rounded-3xl font-bold text-xl text-center"
                    >
                        Crear
                    </Link>
                </span>

            </div>
            <ul className="flex flex-col gap-8 w-full max-w-xl">
                {
                    userPosts.map((post) => (
                        <li key={post.id}>
                            <Link href={`/me/posts/${post.slug}`}>
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
    )
}

export default UserProfilePage;
