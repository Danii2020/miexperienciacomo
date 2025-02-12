import React from "react";
import PostContent from "./PostContent";

const Post = async ({params}:{params: Promise<{ slug: string }>}) => {
    const slug = (await params).slug
    return (
        <PostContent slug={slug}  />
    )
}

export default Post
