'use client';

import FooterInfo from "@/app/components/FooterInfo/FooterInfo";
import Title from "@/app/components/Typography/Title"
import DOMPurify from "dompurify";
import { usePost } from "@/hooks/use-posts"
import PaperContainer from "@/app/components/Container/PaperContainer";

const PostContent = ({ slug }: { slug: string }) => {
    const { post } = usePost(slug)
    const sanitizedContent = DOMPurify.sanitize(post?.content || "", {
        ADD_TAGS: ["iframe"],
        ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling']
    });

    return (
        <PaperContainer>
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
        </PaperContainer>
    )
}

export default PostContent;
