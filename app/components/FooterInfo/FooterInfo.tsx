'use client';

import { saveLikes } from "@/app/services/postService";
import { createClient } from "@/lib/supabase/client"
import { Favorite } from "@mui/icons-material"
import { useEffect, useState } from "react"

type Props = {
    footerType: "card" | "postBody"
    professional_role: string
    experience_time: string
    likes: number
    postId: string
}

const FooterInfo = ({ footerType, professional_role, experience_time, likes, postId }:Props) => {
    const [numberOfLikes, setNumberOfLikes] = useState<number>(likes || 0);

    const supabase = createClient()

    useEffect(() => {
        setNumberOfLikes(likes || 0)
    }, [likes])
    
    const handleOnLikeClick = async () => {
        let updatedLikes = numberOfLikes
        const likedKey = `liked-${postId}`;
        if (localStorage.getItem(likedKey)) {
            console.log("Already liked this post.");
            updatedLikes -= 1;
            localStorage.removeItem(likedKey);
        } else {
            updatedLikes += 1;
            localStorage.setItem(likedKey, "true");
        }
        setNumberOfLikes(updatedLikes);
        const { success } = await saveLikes(supabase, updatedLikes, postId);
        if (success) {
            console.log("Likes updated!");
        }
    };

    const isCard = footerType === "card"

    return (
        <div className="mt-6 flex items-center justify-between">
            <div>
                <p className="text-base font-medium">{professional_role}</p>
                <p className={`text-sm text-gray-${isCard ? '200' : '800'}`}>{experience_time} de experiencia</p>
            </div>
            <div className="flex items-center gap-1">
                <button
                    type="button"
                    onClick={handleOnLikeClick}
                >
                    <Favorite fontSize="medium"/>
                </button>
                <span className={`text-base text-gray-${isCard ? '100' : '800'}`}>{numberOfLikes}</span>
            </div>
        </div>
    )
}

export default FooterInfo
