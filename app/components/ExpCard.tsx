import CardShell from "./CardShell";

type ExpCardProps = {
  role: string;
  job?: string;
  time: string;
  description: string;
  skills?: string[];
};

export default function ExpCard({
  role,
  job,
  time,
  description,
  skills = [],
}: ExpCardProps) {
  const MAX_SKILLS = 6;
  const shown = skills.slice(0, MAX_SKILLS);
  const extra = skills.length - shown.length;

  return (
    <CardShell className="text-left flex flex-col h-full min-w-0 overflow-hidden">
      <div className="p-4 sm:p-5 lg:p-6 flex flex-col gap-4 lg:gap-5 flex-1 min-w-0">
        <div className="space-y-2 min-w-0">
          {/* TIME */}
          <span className="inline-block w-fit max-w-full truncate rounded-full border border-gray-200 bg-gray-700/5 px-3 py-2 text-sm font-bold font-mono text-gray-600">
            {time}
          </span>

          {/* ROLE */}
          <h3 className="text-lg font-semibold leading-snug break-words line-clamp-2">
            {role}
          </h3>

          {/* JOB */}
          {job && (
            <h4 className="text-md font-semibold leading-snug break-words line-clamp-2">
              {job}
            </h4>
          )}

          {/* DESCRIPTION */}
          <p className="text-sm leading-relaxed break-words line-clamp-4">
            {description}
          </p>
        </div>

        {/* SKILLS */}
        {shown.length > 0 && (
          <ul className="flex justify-center flex-wrap gap-2 mt-auto min-w-0">
            {shown.map((skill, i) => (
              <li
                key={`${skill}-${i}`}
                className="rounded-full border px-3 py-1 text-xs text-gray-600 max-w-full truncate"
                title={skill}
              >
                {skill}
              </li>
            ))}

            {/* "+N" bubble if there are more */}
            {extra > 0 && (
              <li className="rounded-full border px-3 py-1 text-xs text-gray-600 shrink-0">
                +{extra}
              </li>
            )}
          </ul>
        )}
      </div>
    </CardShell>
  );
}
