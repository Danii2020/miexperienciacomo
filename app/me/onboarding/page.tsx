import Title from "@/app/components/Typography/Title";
import Input from "@/app/components/Input/Input";
import Switch from "@/app/components/Switch/Switch";

const OnboardingPage = () => {
    return (
        <main className="flex flex-col items-start justify-start py-8">
            <Title className="mb-16">
                Cuéntanos un poco más sobre ti
            </Title>
            <form>
                <div className="mb-4">
                    <label className="text-3xl font-semibold" htmlFor="role">
                        ¿Cuál es tu rol principal?
                    </label>
                    <Input
                        placeholder="Ejemplo: Desarrollador full stack"
                        className="text-xl mt-4"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-3xl font-semibold"
                        htmlFor="experience"
                    >
                        ¿Cuánto tiempo de experiencia profesional tienes?
                    </label>
                    <Input
                        placeholder="Ejemplo: 2 años"
                        className="text-xl mt-4"
                    />
                </div>
                <div className="mb-6">
                    <label className="text-3xl font-semibold mb-3">
                        ¿Quieres mostrar tu nombre y foto de perfil?
                    </label>
                    <div className="flex flex-row items-center gap-8 mt-6">
                    <div className="flex flex-col justify-center gap-4">
                        <span className="text-2xl font-medium">Foto de perfil</span>
                        <span className="text-2xl font-medium">Nombre</span>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-7">
                        <Switch />
                        <Switch />
                    </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-1/3 bg-black text-white py-2 px-4 rounded-xl hover:bg-gray-800 transition text-xl font-bold"
                >
                    Guardar
                </button>
            </form>
        </main>
    );
};

export default OnboardingPage;
