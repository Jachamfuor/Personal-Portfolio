import Button from "./Button";
import CardShell from "./CardShell";

type ProjectCardInfo = {
    role: string;
    job: string;
    time: string;
    description: string;
    skills: string[];
}

export default function ExpCard({
    role,
    job,
    time,
    description,
    skills = [],
}: ProjectCardInfo) {
    return (
        <CardShell className="text-left flex flex-col h-full min-h-105">
            <div className="p-4 sm:p-5 lg:p-6 flex flex-col gap-4 lg:gap-5 flex-1">
                {/* TITLE & DESCRIPTION */}
                <div className="space-y-2">
                    <span className="inline-block w-fit rounded-full border border-gray-200 bg-gray-700/5 px-3 py-2 text-sm font-bold font-mono text-gray-600">
                        {time}
                    </span>
                    <h3 className="text-lg font-semibold  leading-snug">
                        {role}
                    </h3>
                    <h4 className="text-md font-semibold  leading-snug">
                        {job}
                    </h4>
                    <p className="text-sm  leading-relaxed line-clamp-4">
                        {description}
                    </p>
                </div>

                {/* Skill Bubbles */}
                {skills.length > 0 && (
                    <ul className="flex justify-center flex-wrap gap-2">
                        {skills.map((skill, i) => (
                            <li
                                key={`${skill}-${i}`}
                                className="rounded-full border px-3 py-1 text-xs text-gray-600">
                                {/*Try this later: rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-600 */}
                                {skill}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </CardShell>
    )
}

