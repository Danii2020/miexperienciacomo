const ExperienceCard = () => {
    return (
        <div className="bg-[#404040] rounded-2xl py-6 px-4 text-white shadow-lg">
            <h2 className="text-3xl font-bold">Mi experiencia como programador</h2>
            <p className="mt-4 text-lg text-gray-300">
                Esta es mi experiencia como programador profesional durante 5 años trabajando en 3 empresas...
            </p>
            <div className="mt-6 flex items-center justify-between">
                <div>
                    <p className="text-md font-medium">Desarrollador full stack</p>
                    <p className="text-sm text-gray-400">5 años de experiencia</p>
                </div>
                <div className="flex items-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-gray-300"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.74 0 3.41.81 4.5 2.09C11.09 5.81 12.76 5 14.5 5 16.58 5 18 6.42 18 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span className="text-sm text-gray-300">10</span>
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard
