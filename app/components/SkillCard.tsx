import CardShell from "./CardShell";
import type { LucideIcon } from "lucide-react";

type SkillCardInfo = {
    title: string;
    skills: string[];
    icon?: LucideIcon;
}

export default function SkillCard({
    title,
    skills = [],
    icon: Icon
}: SkillCardInfo) {
    return (
        <CardShell className="text-center bg-white/75 flex flex-col h-full">
            <div className="p-4 sm:p-5 lg:p-6 flex flex-col gap-4 lg:gap-5 flex-1">
                {/* TITLE */}
                <div className="flex items-center justify-center gap-2">
                    {Icon && <Icon className="h-5 w-5 text-gray-700" aria-hidden="true" />}
                    <h3 className="text-lg font-semibold leading-snug">
                        {title}
                    </h3>
                </div>

                {/* Skill Bubbles */}
                <ul className="flex justify-center flex-wrap gap-2">
                    {skills.map((skill, i) => (
                        <li
                            key={`${skill}-${i}`}
                            className="rounded-full border px-3 py-1 text-xs text-gray-500 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-linear ">
                            {/* try this maybe: rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-600 transition-shadow duration-200 hover:shadow-md */}
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </CardShell>
    )
}

