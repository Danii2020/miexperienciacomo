import PostForm from "../../../components/Forms/PostForm";

const UserPostEditPage = () => {
    return (
        <main className="flex flex-col items-start justify-start py-8">
            <div className="flex flex-col gap-8 w-full max-w-2xl">
                <PostForm
                    postTitle="Mi experiencia como programador"
                    postContent="<p>Esta es mi experiencia como programador</p>"
                />
                <div className="flex flex-row justify-center items-center gap-4">
                    <button
                        className="w-full p-4 bg-black text-white rounded-xl font-bold text-xl"
                    >
                        Editar
                    </button>
                    <button
                        className="w-full p-4 bg-[#F40000] border-[2px] border-black text-white rounded-xl font-bold text-xl"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </main>
    )
}

export default UserPostEditPage;
