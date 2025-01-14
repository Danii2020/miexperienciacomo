import Link from "next/link";
import ExperienceCard from "../../components/ExperienceCard";
import Title from "../../components/Typography/Title";

const UserPostsPage = () => {
    return (
        <main className="flex flex-col items-center justify-start">
            <div className="w-full max-w-xl">
                <Title>
                    Tus experiencias publicadas
                </Title>
            </div>
            <div className="flex flex-col gap-8 w-full max-w-xl">
                <Link href={`/me/posts/1`}>
                    <ExperienceCard />
                </Link>

            </div>
        </main>
    )
}

export default UserPostsPage;
