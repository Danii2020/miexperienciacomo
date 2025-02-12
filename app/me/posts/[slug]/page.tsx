import EditPostForm from "./EditPostForm"


const UserPostEditPage = async ({params}:{params: Promise<{ slug: string }>}) => {
    const slug = (await params).slug
    return (
       <EditPostForm slug={slug} />
    )
}

export default UserPostEditPage;
