'use client';

import { saveLikes } from "@/app/services/postService";
import { createClient } from "@/lib/supabase/client";
import { Favorite } from "@mui/icons-material";
import { useEffect, useState } from "react";

interface Props {
    footerType: "card" | "postBody";
    professional_role: string;
    experience_time: string;
    likes: number;
    postId: string;
    userName: string | undefined;
};

const FooterInfo = ({ footerType, professional_role, experience_time, userName, likes, postId }: Props) => {
    const [numberOfLikes, setNumberOfLikes] = useState<number>(likes || 0);
    const [liked, setLiked] = useState<boolean>(false);
    const supabase = createClient();

    // On mount, check if user already liked the post (using localStorage)
    useEffect(() => {
        setNumberOfLikes(likes || 0);
        const likedKey = `liked-${postId}`;
        if (localStorage.getItem(likedKey)) {
            setLiked(true);
        }
    }, [likes, postId]);

    const handleOnLikeClick = async () => {
        let updatedLikes = numberOfLikes;
        const likedKey = `liked-${postId}`;
        if (localStorage.getItem(likedKey)) {
            console.log("Already liked this post.");
            updatedLikes -= 1;
            localStorage.removeItem(likedKey);
            setLiked(false);
        } else {
            updatedLikes += 1;
            localStorage.setItem(likedKey, "true");
            setLiked(true);
        }
        setNumberOfLikes(updatedLikes);
        const { success } = await saveLikes(supabase, updatedLikes, postId);
        if (success) {
            console.log("Likes updated!");
        }
    };

    const isCard = footerType === "card";

    return (
        <div className="mt-6 flex items-center justify-between">
            <div>
            <p className="text-sm font-normal">{userName || "Anónimo"}</p>
                <p className="text-base font-medium">{professional_role}</p>
                <p className={`text-sm ${isCard ? "text-gray-200" : "text-gray-800"}`}>{experience_time} de experiencia</p>
            </div>
            <div className="flex items-center gap-1">
                <button
                    type="button"
                    onClick={handleOnLikeClick}
                    className={`p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-gray-100 hover:scale-110 active:scale-95 focus:outline-none ${liked ? "text-red-500" : ""}`}
                >
                    <Favorite fontSize="medium" />
                </button>

                <span className={`text-base text-gray-${isCard ? '100' : '800'}`}>{numberOfLikes}</span>
            </div>
        </div>
    );
};

export default FooterInfo;
