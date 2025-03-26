import FooterInfo from '../components/FooterInfo/FooterInfo'
import { PostDatabase } from '../types/post';

interface Props {
    post: PostDatabase
}


const ExperienceCard = ({ post }:Props) => {
    return (
        <div className="bg-[#404040] rounded-2xl py-6 px-4 text-white shadow-lg max-h-96
        transition-all duration-300 ease-in-out hover:scale-105">
            <h2 className="text-3xl font-bold">{post.title}</h2>
            <p className="mt-4 text-lg text-gray-300">
                {post.summary}
            </p>
            <FooterInfo
                footerType='card'
                userData={post.user_id}
                likes={post.likes || 0}
                postId={post.id}
            />
        </div>
    );
}

export default ExperienceCard
