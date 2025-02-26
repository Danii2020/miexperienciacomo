import Title from "../Typography/Title"
import TemplateModal, { Props } from "./TemplateModal"

type SuccessfulProps = Props & {
    title: string
    content: string
}

const SuccessfulModal = ({ isOpen, closeModal, title, content }:SuccessfulProps) => {
    return (
        <TemplateModal isOpen={isOpen} closeModal={closeModal}>
            <Title>
                {title}
            </Title>
            <p className="text-base text-black text-center mb-6 px-8">
                {content}
            </p>
        </TemplateModal>
    )
}

export default SuccessfulModal;
