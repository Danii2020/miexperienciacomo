import React from "react";
import PostContent from "./PostContent";

const Post = async ({params}:{params: Promise<{ slug: string }>}) => {
    const slug = (await params).slug

    return (
        <PostContent slug={slug}  />
        // <div className="grid items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-10">
        //     <main className="flex flex-col items-start justify-start">
        //         <div className="p-14 border-[2px] bg-white w-full border-black rounded-xl focus:outline-none mb-5">
        //             <Title>
        //                 Mi experiencia como programador
        //             </Title>
        //             <div className="prose">
        //                 <p>
        //                     Esta es mi experiencia como programador profesional durante 5 años trabajando en 3 empresas...
        //                 </p>
        //                 <p>
        //                     Esta es mi experiencia como programador profesional durante 5 años trabajando en 3 empresas...
        //                 </p>
        //                 <p>
        //                     Esta es mi experiencia como programador profesional durante 5 años trabajando en 3 empresas...
        //                 </p>
        //                 <p><br /></p>
        //                 <p><br /></p>
        //                 <p>
        //                     Esta es mi experiencia como programador profesional durante 5 años trabajando en 3 empresas...
        //                 </p>
        //                 <p>
        //                     Esta es mi experiencia como programador profesional durante 5 años trabajando en 3 empresas...
        //                 </p>
        //                 <p><br /></p>
        //                 <p><br /></p>
        //                 <p>
        //                     Esta es mi experiencia como programador profesional durante 5 años trabajando en 3 empresas...
        //                 </p>
        //                 <p>
        //                     Esta es mi experiencia como programador profesional durante 5 años trabajando en 3 empresas...
        //                 </p>
        //                 <FooterInfo footerType='postBody'/>
        //             </div>
        //         </div>
        //     </main>
        // </div>
    )
}

export default Post
