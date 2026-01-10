"use client";

import { useEffect, useLayoutEffect, useState, useRef } from "react";

function randomBinaryLine(len: number) {
    let s = "";
    for (let i = 0; i < len; i++) s += Math.random() > 0.5 ? "1" : "0";
    return s;
}

export default function IntroOverlay({ onDone }: { onDone: () => void }) {
    const [done, setDone] = useState(false);
    const lineRef = useRef<HTMLSpanElement | null>(null);
    const rightRef = useRef<HTMLSpanElement | null>(null);

    useLayoutEffect(() => {
        const updateShift = () => {
            if (!lineRef.current || !rightRef.current) return;

            const rightWidth = rightRef.current.getBoundingClientRect().width;

            // shift JA by half the removed right-side width so it re-centers on any screen
            const host = lineRef.current.closest(".wordmark") as HTMLElement | null;
            host?.style.setProperty("--ja-shift", `${rightWidth / 2}px`);
        };

        updateShift();
        requestAnimationFrame(updateShift);
        window.addEventListener("resize", updateShift);
        return () => window.removeEventListener("resize", updateShift);
    }, []);


    // Generate columns once so it does not change every render
    type Col = { left: number; duration: number; delay: number };

    const [cols, setCols] = useState<Col[]>([]);

    useEffect(() => {
        const N = 70;

        const newCols = Array.from({ length: N }).map((_, i) => {
            const base = ((i + 0.5) / N) * 100;
            const jitter = (Math.random() - 0.5) * 1.5;
            const left = Math.min(99, Math.max(1, base + jitter));

            const duration = 10 + (i % 7) * 2; // 10..22
            const delay = (i % 8) * 0.6;

            return { left, duration, delay };
        });

        setCols(newCols);
    }, []);

    useEffect(() => {
        // Lock scroll during intro
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        // Total time: last stage appears at ~3.0s, fadeout begins at 4.1s, completes at ~4.65s
        const totalMs = 11000;

        const t = window.setTimeout(() => {
            setDone(true);
            onDone();
            document.body.style.overflow = prev || "";
        }, totalMs);

        return () => {
            window.clearTimeout(t);
            document.body.style.overflow = prev || "";
        };
    }, [onDone]);

    if (done) return null;
    return (
        <div className="fixed inset-0 z-[100] bg-black text-white">
            {/* Fade out at end */}
            <div className="absolute inset-0 intro-fadeout">
                {/* Binary background */}
                <div className="binary-bg">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
                    {cols.length > 0 &&
                        cols.map((c, idx) => (
                            <div
                                key={idx}
                                className="binary-col"
                                style={{
                                    left: `${c.left}%`,
                                    animationDuration: `${c.duration}s`,
                                    animationDelay: `${c.delay}s`,
                                }}
                            />
                        ))}
                    <div className="absolute inset-0 backdrop-blur-[1px]" />
                </div>

                {/* Foreground text */}
                <div className="relative h-full w-full flex items-center justify-center px-6">
                    <div className="intro-wordmark">
                        <div className="wordmark">
                            {/* Phase A: "JAchamfuor" as "JA" + "chamfuor" */}
                            <div className="wm-ja">
                                <span ref={lineRef} className="wm-ja-line">
                                    <span className="wm-ja-left">JA</span>
                                    <span ref={rightRef} className="wm-ja-right">chamfuor</span>
                                </span>
                            </div>

                            {/* Phase B: Full name comes from "JA" */}
                            <div className="wm-full">
                                <span className="full-split">
                                    <span className="full-letter full-j">
                                        <span className="j-face">J</span>
                                        <span className="j-back">Jeffery</span>
                                    </span>

                                    {/* A -> Achamfuor */}
                                    <span className="full-letter full-a">
                                        <span className="a-front">A</span>
                                        <span className="a-long">Achamfuor</span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
