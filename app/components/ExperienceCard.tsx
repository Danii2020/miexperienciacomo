import FooterInfo from '../components/FooterInfo/FooterInfo'

type Props = {
    professional_role: string
    experience_time: string
    title: string
    content: string
}


const ExperienceCard = ({title, content, professional_role, experience_time}:Props) => {
    return (
        <div className="bg-[#404040] rounded-2xl py-6 px-4 text-white shadow-lg">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="mt-4 text-lg text-gray-300">
                {content}
            </p>
            <FooterInfo
                footerType='card'
                professional_role={professional_role}
                experience_time={experience_time}
            />
        </div>
    );
}

export default ExperienceCard
