
type BubbleInfo = {
    skills: string[];
    variant?: BubbleVariant;
}

type BubbleVariant = "glow" | "hover" | "clear"

const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300";

const variantStyles: Record<BubbleVariant, string> = {
    glow:
        "relative px-4 py-2 bg-neutral-200/5 text-white font-semibold rounded-md transition-all duration-300 border border-transparent hover:border-pink-500 cursor-pointer hover:shadow-[0_0_20px_3px_rgba(236,72,153,1)]",
    hover:
        "rounded-full border px-3 py-1 text-xs text-gray-500 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-linear ",
    clear:
        "text-white hover:bg-gray-100",
};
export default function Bubble({
    skills = [],
    variant = "glow",
}: BubbleInfo) {
    const className = `${baseStyles} ${variantStyles[variant]}`;
    return (
        <div>
            {/* Skill Bubbles */}
            <ul className="flex justify-center items-center flex-wrap gap-2">
                {skills.map((skill) => (
                    <li
                        key={skill}
                        className={className}>
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    )
}

