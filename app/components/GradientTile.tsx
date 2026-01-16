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
            {/* Gradient layer */}
            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(135deg, var(--grad-a), var(--grad-b), var(--grad-c))`,
                }}
            />

            {/* Soft glow texture */}
            <div
                className="absolute inset-0 opacity-100"
                style={{
                    background: `
            radial-gradient(circle at 20% 20%, rgba(245, 218, 167, 0.20), transparent 55%),
            radial-gradient(circle at 80% 30%, rgba(163, 72, 90, 0.22), transparent 60%)
          `,
                }}
            />
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

