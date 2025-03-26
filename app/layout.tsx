import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { AuthProvider } from "./context/AuthContext";
import { UserProfileProvider } from "./context/UserProfileContext";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Mi experiencia como",
    description: "Mi experiencia como es una plataforma enfocada en compartir experiencias profesionales que sirvan de aprendizaje para todos aquellos que estan iniciando su carrera.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${openSans.variable} antialiased`}
            >
                <AuthProvider >
                    <UserProfileProvider >
                        <div className="flex flex-row justify-center items-center">
                            <NavBar />
                            <div className="flex flex-1 flex-col justify-center items-center p-4
                            gap-16 px-4 lg:px-0 pb-20 w-full md:max-w-md lg:max-w-3xl">
                                {children}
                            </div>
                        </div>
                    </UserProfileProvider>
                </ AuthProvider>
            </body>
        </html>
    );
}
