"use client";

import { useEffect, useRef, useState } from "react";

type CarouselRowProps = {
    title?: string;
    children: React.ReactNode;
    autoScroll?: boolean;
    interval?: number;
};

export default function CarouselRow({
    title,
    children,
    autoScroll = false,
    interval = 4500,
}: CarouselRowProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [canLeft, setCanLeft] = useState(false);
    const [canRight, setCanRight] = useState(true);

    const updateButtons = () => {
        const el = ref.current;
        if (!el) return;
        const maxLeft = el.scrollWidth - el.clientWidth;
        setCanLeft(el.scrollLeft > 2);
        setCanRight(el.scrollLeft < maxLeft - 2);
    };

    const scrollByOne = (dir: "left" | "right") => {
        const el = ref.current;
        if (!el) return;

        // Scroll by ~one card + gap (tuned for your fixed slide widths)
        const amount = Math.round(el.clientWidth * 0.9) * (dir === "right" ? 1 : -1);

        el.scrollBy({ left: amount, behavior: "smooth" });
    };

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        updateButtons();

        const onScroll = () => updateButtons();
        const onResize = () => updateButtons();

        el.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize);

        return () => {
            el.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    // Optional auto-scroll (pauses on hover/touch)
    useEffect(() => {
        if (!autoScroll) return;
        const el = ref.current;
        if (!el) return;

        let timer: NodeJS.Timeout;

        const start = () => {
            timer = setInterval(() => {
                const maxLeft = el.scrollWidth - el.clientWidth;

                if (el.scrollLeft >= maxLeft - 5) {
                    el.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    scrollByOne("right");
                }
            }, interval);
        };

        const stop = () => clearInterval(timer);

        start();
        el.addEventListener("mouseenter", stop);
        el.addEventListener("mouseleave", start);
        el.addEventListener("touchstart", stop);
        el.addEventListener("touchend", start);

        return () => {
            stop();
            el.removeEventListener("mouseenter", stop);
            el.removeEventListener("mouseleave", start);
            el.removeEventListener("touchstart", stop);
            el.removeEventListener("touchend", start);
        };
    }, [autoScroll, interval]);

    return (
        <div className="space-y-3">
            {title && <header className="text-2xl font-semibold">{title}</header>}

            <div className="relative">
                {/* Left Arrow */}
                <button
                    type="button"
                    onClick={() => scrollByOne("left")}
                    disabled={!canLeft}
                    aria-label="Scroll left"
                    className={[
                        "absolute left-0 top-1/2 -translate-y-1/2 z-10",
                        "rounded-full border bg-black/90 px-3 py-2 shadow-sm",
                        "transition-opacity opacity-0 lg:opacity-70 lg:hover:opacity-100",
                        canLeft ? "opacity-100" : "opacity-0 pointer-events-none",
                    ].join(" ")}
                >
                    ←
                </button>

                {/* Right Arrow */}
                <button
                    type="button"
                    onClick={() => scrollByOne("right")}
                    disabled={!canRight}
                    aria-label="Scroll right"
                    className={[
                        "absolute right-0 top-1/2 -translate-y-1/2 z-10",
                        "rounded-full border bg-black/90 px-3 py-2 shadow-sm",
                        "transition-opacity opacity-0 lg:opacity-70 lg:hover:opacity-100",
                        canRight ? "opacity-100" : "opacity-0 pointer-events-none",
                    ].join(" ")}
                >
                    →
                </button>

                {/* Track */}
                <div
                    ref={ref}
                    className="
            no-scrollbar
            flex gap-4 lg:gap-6
            overflow-x-auto 
            snap-x snap-mandatory
            scroll-smooth
            flex-1
            pt-4 sm:pt-5 lg:pt-6 pb-6
          "
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
