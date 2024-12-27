import ExperienceCard from "./components/ExperienceCard";

export default function Home() {
    return (
        <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-10">
            <main className="flex flex-col items-center justify-center">
                <div className="flex flex-col gap-8 w-full max-w-xl">
                    <ExperienceCard />
                    <ExperienceCard />
                    <ExperienceCard />
                    <ExperienceCard />
                </div>
            </main>
        </div>

    );
}
