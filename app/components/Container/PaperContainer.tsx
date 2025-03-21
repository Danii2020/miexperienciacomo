import React from "react";

const PaperContainer = ({ children }: { children:React.ReactNode }) => {
    return (
        <main className="lg:p-14 p-9 border-[2px] bg-white border-black rounded-xl focus:outline-none mb-5 w-full h-fit">
            {children}
        </main>
    )
}

export default PaperContainer;
