import Image from "next/image";
import Link from "next/link";
import Title from "../Typography/Title";
import CustomLink from "../CustomLink/CustomLink";

interface ProfileHeaderProps {
    userData: {
        imageUrl: string;
        showName: boolean;
        name: string;
    };
}

const ProfileHeader = ({ userData }: ProfileHeaderProps) => {
    return (
        <div className="w-full max-w-xl mb-6">
            <Title className="mb-4">
                Tus experiencias publicadas
            </Title>
            <span className="inline-flex items-center justify-center gap-4 w-full">
                <Image
                    src={userData.imageUrl}
                    className="rounded-full"
                    width={40}
                    height={40}
                    alt="Profile picture"
                />
                <Link
                    className="text-lg font-medium hover:underline w-full"
                    href="/me/settings"
                >
                    {userData.showName ? userData.name : "Anónimo"}
                </Link>
                <CustomLink href="/create-post">
                    Crear
                </CustomLink>
            </span>
        </div>
    );
};

export default ProfileHeader;