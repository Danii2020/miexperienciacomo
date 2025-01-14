import Title from "../Typography/Title";
import GoogleIcon from '@mui/icons-material/Google';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
    isOpen: boolean;
    closeModal: () => void;
}

const SignInModal = ({ isOpen, closeModal }: Props) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-2/5 p-6 relative flex justify-center items-center flex-col border-[2px] border-black">
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={closeModal}
                >
                    <CloseIcon />
                </button>

                <Title className="text-center">
                    Gracias por querer formar parte de este proyecto
                </Title>
                <p className="text-md text-black text-center mb-6 px-8">
                    Para comenzar a publicar experiencias puedes iniciar sesión con tu
                    cuenta de Google
                </p>
                <button
                    className="bg-gray-800 text-white text-lg font-medium py-2 px-8 rounded-full w-1/3 hover:bg-gray-700"
                    onClick={() => alert("Google Sign-In clicked!")}
                >
                    <div className="flex justify-center items-center gap-8">
                        <GoogleIcon />
                        Inicia sesión
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SignInModal;

