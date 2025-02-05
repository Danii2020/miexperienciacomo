import Title from "@/app/components/Typography/Title"
import { useAuth } from "@/app/context/AuthContext"
import { getPost } from "@/app/services/postService"

const PostContent = async (slug:string) => {
    const { supabase } = useAuth()
    const { data } = await getPost(supabase, slug)

    return (
        <div className="p-14 border-[2px] bg-white w-full border-black rounded-xl focus:outline-none mb-5">
                    <Title>
                        {data.title}
                    </Title>
                    <div className="prose">
                        <p>
                            Esta es mi experiencia como programador profesional durante 5 años trabajando en 3 empresas...
                        </p>
                        <p>
                            Esta es mi experiencia como programador profesional durante 5 años trabajando en 3 empresas...
                        </p>
                        <p>
                            Esta es mi experiencia como programador profesional durante 5 años trabajando en 3 empresas...
                        </p>
                        <p><br /></p>
                        <p><br /></p>
                        <p>
                            Esta es mi experiencia como programador profesional durante 5 años trabajando en 3 empresas...
                        </p>
                        <p>
                            Esta es mi experiencia como programador profesional durante 5 años trabajando en 3 empresas...
                        </p>
                        <p><br /></p>
                        <p><br /></p>
                        <p>
                            Esta es mi experiencia como programador profesional durante 5 años trabajando en 3 empresas...
                        </p>
                        <p>
                            Esta es mi experiencia como programador profesional durante 5 años trabajando en 3 empresas...
                        </p>
                        <FooterInfo footerType='postBody'/>
                    </div>
                </div>
    )
}