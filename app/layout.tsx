import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi experiencia como",
  description: "Mi experiencia como",
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
        <NavBar/>
        <div className="grid items-center justify-items-center min-h-screen p-2 gap-16">
            {children}
        </div>
      </body>
    </html>
  );
}
