import BodyTextEditor from "../TextEditor/BodyTextEditor";
import Title from "../Typography/Title";
import Input from "../Input/Input";

type Props = {
    postTitle?: string;
    postContent?: string;
}

const PostForm: React.FC<Props> = ({postTitle, postContent}) => {
    return (
        <>
            <div className="text-left">
                <Title>
                    Cuéntale al mundo tu experiencia profesional
                </Title>
                <p className="font-normal text-md">
                    Publica solo contenido relacionado con tu experiencia profesional. Las publicaciones
                    fuera de este tema serán eliminadas, y la cuenta podría ser bloqueada.
                </p>
            </div>
            <div>
                <Input
                    defaultValue={postTitle}
                    placeholder="Mi experiencia como programador..."
                />
                <div className="p-4 border-[2px] border-black rounded-xl focus:outline-none mb-5">
                    <BodyTextEditor content={postContent || ""} />
                </div>
            </div>
        </>
    )
}

export default PostForm;
