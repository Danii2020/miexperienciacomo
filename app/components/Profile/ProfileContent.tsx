'use client'

import { useState, useEffect } from "react";
import { useUserProfile } from "@/app/context/UserProfileContext";
import { UserDisplay } from "@/app/types/user";
import { useUserPosts } from "@/hooks/use-user-posts";
import ProfileHeader from "./ProfileHeader";
import ProfilePostsList from "./ProfilePostsList";

const ProfileContent = () => {
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
            <>
              <ProfileHeader userData={userData} />
              <ProfilePostsList userPosts={userPosts} />
            </>
    )
}

export default ProfileContent;

