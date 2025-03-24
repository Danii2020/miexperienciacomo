import PostsList from "./components/Posts/PostsList";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center w-full">
            <div className="w-full max-w-xl mb-6">
                <PostsList />
            </div>
        </main>

    );
}

