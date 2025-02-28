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
                <button
                    className="w-full p-4 bg-[#373737] text-white rounded-xl font-bold text-xl"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="w-full p-4 bg-[#F40000] border-[2px] border-black text-white rounded-xl font-bold text-xl"
                    type="button"
                    onClick={onDelete}
                >
                    Eliminar
                </button>
            </div>
        </TemplateModal>
    )
}

export default DeleteQuestionModal;
