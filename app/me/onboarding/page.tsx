import OnboardingForm from "@/app/components/Forms/OnboardingForm";
import Title from "@/app/components/Typography/Title";

const OnboardingPage = () => {
    return (
        <main className="flex flex-col items-start justify-start py-8">
            <Title className="mb-16">
                Cuéntanos un poco más sobre ti
            </Title>
            <OnboardingForm />
        </main>
    );
};

export default OnboardingPage;
