import Button from "../Button/Button"
import Title from "../Typography/Title"
import TemplateModal from "./TemplateModal"
import { Props } from "./TemplateModal"

type DeleteProps = Props & {
    title: string
    content: string
    onCancel: () => void
    onDelete: () => void
}


const DeleteQuestionModal = ({ isOpen, closeModal, title, content, onCancel, onDelete }: DeleteProps) => {
    return (
        <TemplateModal isOpen={isOpen} closeModal={closeModal} >
            <Title className="text-center mt-4">
                {title}
            </Title>
            <p className="text-base text-black text-center mb-6 px-8">
                {content}
            </p>
            <div className="flex flex-row justify-center items-center gap-6">
                <Button
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </Button>
                <Button
                    className="bg-[#F40000] border-[2px] border-black"
                    type="button"
                    onClick={onDelete}
                >
                    Eliminar
                </Button>
            </div>
        </TemplateModal>
    )
}

export default DeleteQuestionModal;
