"use client";

import { useEffect, useRef } from "react";

type AutoScrollCarouselProps = {
  children: React.ReactNode;
  interval?: number; // ms between scrolls
};

export default function AutoScrollCarousel({
  children,
  interval = 4000,
}: AutoScrollCarouselProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timer: NodeJS.Timeout;

    const start = () => {
      timer = setInterval(() => {
        if (!el) return;

        // scroll one card width
        el.scrollBy({
          left: el.clientWidth * 0.9,
          behavior: "smooth",
        });

        // loop back to start
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) {
          setTimeout(() => {
            el.scrollTo({ left: 0, behavior: "smooth" });
          }, 800);
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
  }, [interval]);

  return (
    <div
      ref={ref}
      className="
        no-scrollbar
        flex gap-4 lg:gap-6
        overflow-x-auto
        snap-x snap-mandatory
        scroll-smooth
        pb-2
      "
    >
      {children}
    </div>
  );
}