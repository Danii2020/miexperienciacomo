import FooterInfo from '../components/FooterInfo/FooterInfo'
import { PostDatabase } from '../types/post';

interface Props {
    post: PostDatabase
    professional_role: string
    experience_time: string
}


const ExperienceCard = ({ post, professional_role, experience_time }:Props) => {
    return (
        <div className="bg-[#404040] rounded-2xl py-6 px-4 text-white shadow-lg max-h-96
        transition-all duration-300 ease-in-out hover:scale-105">
            <h2 className="text-3xl font-bold">{post.title}</h2>
            <p className="mt-4 text-lg text-gray-300">
                {post.summary}
            </p>
            <FooterInfo
                footerType='card'
                professional_role={professional_role}
                experience_time={experience_time}
                likes={post.likes || 0}
                postId={post.id}
            />
        </div>
    );
}

export default ExperienceCard
