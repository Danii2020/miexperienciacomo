import CloseIcon from '@mui/icons-material/Close';

export type Props = {
    isOpen: boolean;
    closeModal: () => void;
    children?: React.ReactNode
}

const TemplateModal = ({ isOpen, closeModal, children }: Props) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 lg:px-0 px-2">
            <div className="bg-white rounded-lg shadow-lg max-w-2xl p-6 relative flex justify-center items-center flex-col border-[2px] border-black">
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={closeModal}
                >
                    <CloseIcon />
                </button>
                {children}
            </div>
        </div>
    )
}

export default TemplateModal;
