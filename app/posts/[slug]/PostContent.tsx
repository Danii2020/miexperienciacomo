'use client';

import FooterInfo from "@/app/components/FooterInfo/FooterInfo";
import Title from "@/app/components/Typography/Title"
import { usePost } from "@/hooks/use-posts"

const PostContent = ({ slug }: { slug: string }) => {
    const { post } = usePost(slug)
    return (
        <div className="p-14 border-[2px] bg-white border-black rounded-xl focus:outline-none mb-5">
            <Title>
                {post?.title}
            </Title>
            <div className="prose" dangerouslySetInnerHTML={{ __html: post?.content || "" }} />
            <FooterInfo
                footerType='postBody'
                professional_role={post?.user_id.professional_role || ""}
                experience_time={post?.user_id.experience_time || ""}
                likes={post?.likes || 0}
                postId={post?.id || ""}
            />
        </div>
    )
}

export default PostContent;
