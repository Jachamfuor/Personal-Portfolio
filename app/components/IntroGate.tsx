"use client";

import { useEffect, useState } from "react";
import MatrixIntro from "./MatrixIntro";

export default function IntroGate({ children }: { children: React.ReactNode }) {
    const [showIntro, setShowIntro] = useState(() => {
        // This runs on the client for a client component.
        if (typeof window === "undefined") return false;
        return localStorage.getItem("hasSeenIntro") !== "true";
    });

    const handleDone = () => {
        localStorage.setItem("hasSeenIntro", "true");
        setShowIntro(false);
    };

    return (
        <>
            {children}

            {showIntro && (
                <div className="fixed inset-0 z-[9999]">
                    <MatrixIntro onAnimationComplete={handleDone} />
                </div>
            )}
        </>
    );
}
