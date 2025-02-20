import Link from "next/link";
import Title from "../components/Typography/Title";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const AboutPage = () => {
    return (
        <div className="p-14 border-[2px] bg-white border-black rounded-xl focus:outline-none mb-5 w-2/3">
            <Title >
                Tu experiencia, el motor del aprendizaje
            </Title>
            <div className="mb-4">
                <p className="font-normal text-lg mb-2">
                    En <b>miexperienciacomo</b> creemos en el poder de compartir conocimientos.
                </p>
                <p className="font-normal text-lg mb-2">
                    Nuestra plataforma está diseñada para que profesionales de todas las áreas compartan sus historias, lecciones y aprendizajes.
                    Si estás comenzando tu camino, aquí encontrarás una fuente inagotable de sabiduría de quienes ya han recorrido el tuyo.
                </p>
                <p className="font-normal text-lg mb-2">
                    ¡Únete a nuestra comunidad y empieza a aprender hoy!
                </p>
            </div>
            <button
                className="
                    flex flex-row justify-between items-center w-full p-4 mb-6
                    bg-[#373737] text-white rounded-xl font-bold text-xl
                    transition-all duration-300 ease-in-out
                    hover:bg-[#CFC8C8] hover:text-[#373737] hover:border-[1px] hover:border-[#373737] hover:scale-105
                "
                type="button"
            >
                Comparte experiencias
                <ArrowForwardIcon fontSize="large" className="fill-current" />
            </button>

            <Link
                href="/"
                className="
                    flex flex-row justify-between items-center w-full p-4
                    bg-[#373737] text-white rounded-xl font-bold text-xl
                    transition-all duration-300 ease-in-out
                    hover:bg-[#CFC8C8] hover:text-[#373737] hover:border-[1px] hover:border-[#373737] hover:scale-105
                "
                type="button"
            >
                Explora experiencias
                <ArrowForwardIcon fontSize="large" className="fill-current" />
            </Link>
            <footer className="flex flex-row justify-around items-center mt-6 text-center">
                <Link
                    href="/terms"
                >
                    <small className="text-sm hover:underline">Términos</small>
                </Link>
                <Link

                    href="/privacy"
                >
                    <small className="text-sm hover:underline">Privacidad</small>
                </Link>
                <Link
                    href="/contact"
                >
                    <small className="text-sm hover:underline">Contacto</small>
                </Link>
            </footer>
        </div>
    )
}

export default AboutPage;
