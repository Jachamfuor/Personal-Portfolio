// components/GradientTile.tsx
import Tile from "./Tile";

export function GradientTile({
    title,
    subtitle,
    tag = "Highlight",
    className = "",
}: {
    title?: string;
    subtitle?: string;
    tag?: string;
    className?: string;
}) {
    return (
        <Tile className={`h-full p-4 sm:p-6 lg:p-7 ${className}`}>
            {/* Gradient layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/70 via-white/30 to-neutral-200/70" />
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.25),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.18),transparent_55%)]" />

            {/* Content */}
            <div className="relative flex h-full flex-col min-w-0">
                <div className="min-w-0">
                    {title && (
                        <p className="text-base sm:text-lg font-semibold leading-snug break-words line-clamp-2">
                            {title}
                        </p>
                    )}

                    {subtitle && (
                        <p className="text-sm mt-2 leading-relaxed tile-muted break-words line-clamp-3">
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className="mt-auto pt-6 flex items-center justify-between gap-3 min-w-0">
                    {/* Left pill can overflow — clamp it */}
                    <span className="pill max-w-[70%] truncate">
                        {tag}
                    </span>

                    {/* Arrow pill should never shrink weirdly */}
                    <span className="pill shrink-0" aria-hidden="true">
                        →
                    </span>
                </div>
            </div>
        </Tile>

    );
}

