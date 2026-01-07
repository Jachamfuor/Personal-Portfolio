import Button from "./Button";


type SkillCardInfo = {
    title: string;
    skills: string[];
}

export default function ProjectCard({
    title,
    skills = [],
}: SkillCardInfo) {
    return (
        <div className="text-center bg-white/75 border border-gray-100 rounded-lg shadow-md p-5 space-y-2">
            <h3 className="font-semibold text-black">{title}</h3>

            {/* Skill Bubbles */}
            <ul className="flex justify-center items-center flex-wrap gap-2">
                {skills.map((skill) => (
                    <li
                        key={skill}
                        className="rounded-full border px-3 py-1 text-xs text-gray-500 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-linear ">
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    )
}

