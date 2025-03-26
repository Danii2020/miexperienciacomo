import Link from "next/link";
import ExperienceCard from "@/app/components/ExperienceCard";
import { PostDatabase } from "@/app/types/post";

interface ProfilePostsListProps {
    userPosts: PostDatabase[];
}

const ProfilePostsList = ({ userPosts }: ProfilePostsListProps) => {
    return (
        <ul className="flex flex-col gap-8 w-full max-w-xl">
            {userPosts.length >= 1 ? (
                userPosts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/me/posts/${post.slug}`}>
                            <ExperienceCard
                                post={post}
                            />
                        </Link>
                    </li>
                ))
            ) : (
                <p className="font-normal text-lg mb-2">
                    Aún no has publicado experiencias, qué tal si le regalas al mundo un poco de tu conocimiento 🤓
                </p>
            )}
        </ul>
    );
};

export default ProfilePostsList; 