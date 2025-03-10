'use client';

import FooterInfo from "@/app/components/FooterInfo/FooterInfo";
import Title from "@/app/components/Typography/Title"
import DOMPurify from "dompurify";
import { usePost } from "@/hooks/use-posts"

const PostContent = ({ slug }: { slug: string }) => {
    const { post } = usePost(slug)
    const sanitizedContent = DOMPurify.sanitize(post?.content || "");
    return (
        <div className="lg:p-14 py-9 px-6 border-[2px] bg-white border-black rounded-xl focus:outline-none mb-5 w-full max-w-3xl h-fit">
            <Title>
                {post?.title}
            </Title>
            <div className="prose" dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
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
