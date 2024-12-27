const CreatePost = () => {
    return (
        <div className="grid items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-10">
            <main className="flex flex-col items-start justify-start">
                <div className="flex flex-col gap-8 w-full max-w-xl">
                    <div className="text-left">
                        <h1 className="font-bold text-4xl mb-8">
                            Cuéntale al mundo tu experiencia profesional
                        </h1>
                        <p className="font-normal text-md">
                            Publica solo contenido relacionado con tu experiencia profesional. Las publicaciones
                            fuera de este tema serán eliminadas, y la cuenta podría ser bloqueada.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CreatePost
