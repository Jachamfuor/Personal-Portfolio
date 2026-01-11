import Button from "./Button";
import CardShell from "./CardShell";

type ProjectCardInfo = {
    title: string;
    description: string;
    techs: string[];
    href: string;
}

export default function ProjectCard({
    title,
    description,
    techs = [],
    href,
}: ProjectCardInfo) {
    return (
        <CardShell className="text-center flex flex-col gap-5 h-full">
            <div className="p-4 sm:p-5 lg:p-6 flex flex-col gap-4 lg:gap-5 flex-1">
                {/* TITLE & DESCRIPTION */}
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold leading-snug">
                        {title}
                    </h3>
                    <p className="text-sm leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Skill Bubbles */}
                {techs.length > 0 && (
                    <ul className="flex justify-center flex-wrap gap-2">
                        {techs.map((tech, i) => (
                            <li
                                key={`${tech}-${i}`}
                                className="rounded-full border px-3 py-1 text-xs text-gray-600">
                                {/*Try this later: rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-600 */}
                                {tech}
                            </li>
                        ))}
                    </ul>
                )}

                {/* BUTTON */}
                <div className="mt-auto pt-2">
                    <Button
                        
                        href={href}
                        variant="hover"
                        external
                    >GitHub</Button>
                </div>
            </div>
        </CardShell>
    )
}

