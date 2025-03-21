import DeleteAccountButton from "@/app/components/Button/DeleteAccountButton";
import PaperContainer from "@/app/components/Container/PaperContainer";
import OnboardingForm from "@/app/components/Forms/OnboardingForm";
import Title from "@/app/components/Typography/Title";

const ProfileSettingsPage = () => {
    return (
        <>
            <PaperContainer>
                <Title>
                    Configura tu perfil
                </Title>
                <OnboardingForm />
                <div className="w-full border-[1px] border-black my-6" />
                <DeleteAccountButton />
            </PaperContainer>
        </>
    )
}

export default ProfileSettingsPage;
