import FooterInfo from '../components/FooterInfo/FooterInfo'

const ExperienceCard = () => {
    return (
        <div className="bg-[#404040] rounded-2xl py-6 px-4 text-white shadow-lg">
            <h2 className="text-3xl font-bold">Mi experiencia como programador</h2>
            <p className="mt-4 text-lg text-gray-300">
                Esta es mi experiencia como programador profesional durante 5 años trabajando en 3 empresas...
            </p>
            <FooterInfo footerType='card'/>
        </div>
    );
}

export default ExperienceCard
