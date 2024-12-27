import Link from "next/link";

const NavBar = () => {
    return (
        <aside className="fixed top-0 left-0 h-full w-[20%] border-r-2 border-black bg-primary flex flex-col items-center justify-between py-8">
            <nav className="flex flex-col items-end space-y-10 w-full px-12">
                <Link href="/" className="text-black font-bold text-4xl hover:underline">
                    LOGO
                </Link>
                <a
                    href="/about"
                    className="text-black text-2xl font-normal text-right px-4 py-2 rounded-md transition-all duration-200
                     hover:bg-gray-500 hover:bg-opacity-10"
                >
                    About
                </a>
                <a
                    href="/signin"
                    className="text-black text-2xl font-normal px-4 py-2 rounded-md transition-all duration-200
                     hover:bg-gray-500 hover:bg-opacity-10"
                >
                    Sign In
                </a>
            </nav>
        </aside>
    );
};

export default NavBar;
