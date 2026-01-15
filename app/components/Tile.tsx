export default function Tile({
    className = "",
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div
            className={[
        "relative min-w-0 overflow-hidden rounded-lg", // <-- rounding applied here
        "border border-neutral-200/60",
        className,
      ].join(" ")
}
    >
    { children }
    </div >
  );
}
