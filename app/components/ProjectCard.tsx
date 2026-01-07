import Button from "./Button";


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
        <div className="text-center bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-linear p-5 space-y-2">
            <h3 className="font-semibold text-black">{title}</h3>
            <p className="text-sm text-black">{description}</p>

            {/* Skill Bubbles */}
            <ul className="flex justify-center items-center flex-wrap gap-2">
                {techs.map((tech) => (
                    <li
                        key={tech}
                        className="rounded-full border px-3 py-1 text-xs text-gray-500">
                        {tech}
                    </li>
                ))}
            </ul>

            <Button
                description="GitHub"
                href={href}
                variant="hover"
                external
            />
        </div>
    )
}

