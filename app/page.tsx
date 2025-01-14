import ExperienceCard from "./components/ExperienceCard";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-8 w-full max-w-xl">
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </main>

    );
}
