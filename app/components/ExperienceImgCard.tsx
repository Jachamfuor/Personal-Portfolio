import Button from "./Button";
import CardShell from "./CardShell";

type CardInfo = {
    img: string;
    imgDscp: string;
    title: string;
    description: string;
    techs: string[];
    href: string;
}

export default function CardwImg({
    img,
    imgDscp,
    title,
    description,
    techs = [],
    href,
}: CardInfo) {
    return (
        <CardShell className="text-left flex flex-col overflow-hidden">
            <img
                src={img}
                alt={imgDscp}
                className="w-full h-48 object-cover shadow-md"
            />

            {/* CONTENT */}
            <div className="p-4 sm:p-5 lg:p-6 flex flex-col gap-4 lg:gap-5 flex-1">
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
                    <ul className="flex flex-wrap gap-2">
                        {techs.map((tech, i) => (
                            <li
                                key={`${tech}-${i}`}
                                className="rounded-full border px-3 py-1 text-xs text-gray-500"> 
                                {/*try this maybe: rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-600 */}
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

