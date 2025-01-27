'use client'

import ExperienceCard from "../components/ExperienceCard";
import Title from "../components/Typography/Title";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useUserProfile } from "@/app/context/UserProfileContext";
import { UserDisplay } from "../types/user";

const UserProfilePage = () => {
    const { userProfile } = useUserProfile()
    const [userData, setUserData] = useState<UserDisplay>({
        name: userProfile?.name ?? "",
        showName: userProfile?.show_name ?? true,
        showPhoto: userProfile?.show_photo ?? true,
    })

    useEffect(() => {
        if (userProfile) {
            setUserData({
                name: userProfile.name ?? "",
                showName: userProfile.show_name ?? true,
                showPhoto: userProfile.show_photo ?? true,
            })
        }
    }, [userProfile])

    return (
        <main className="flex flex-col items-center justify-start">
            <div className="w-full max-w-xl mb-6">
                <Title className="mb-4">
                    Tus experiencias publicadas
                </Title>
                <span className="inline-flex items-center justify-center gap-4">
                    <Image
                        src="https://placehold.co/40"
                        className="rounded-full"
                        width={40}
                        height={40}
                        alt={""}
                    />
                    <Link
                        className="text-lg font-medium hover:underline"
                        href="/me"
                    >
                        {userData.showName ? userData.name : "Anónimo"}
                    </Link>
                </span>
  
            </div>
            <div className="flex flex-col gap-8 w-full max-w-xl">
                <Link href={`/me/posts/1`}>
                    <ExperienceCard />
                </Link>

            </div>
        </main>
    )
}

export default UserProfilePage;
