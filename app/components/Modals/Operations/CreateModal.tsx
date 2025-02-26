import SuccessfulModal from "../SuccessfulModal"
import { Props } from "../TemplateModal"

const CreateModal = ({ isOpen, closeModal }:Props) => {
    return (
        <SuccessfulModal
            title="¡Has publicado una experiencia!"
            content="Felicidades, tu experiencia se ha publicado con éxito 🎉"
            isOpen={isOpen}
            closeModal={closeModal}
        />
    )
}

export default CreateModal;
