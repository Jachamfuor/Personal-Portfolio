type CardShellProps = {
    children: React.ReactNode;
    className?: string;
    showDots?: boolean;
};

export default function CardShell({ children, className = "", showDots= true}: CardShellProps) {
    return (
        <div
            className={
                "card-shell rounded-lg bg-neutral-900 shadow-md transition-all duration-300 ease-linear hover:shadow-2xl hover:-translate-y-2 " +
                className
            }
        >
            {showDots && (
                <div className="flex gap-1 p-2">
                    <span className="inline-block h-3 w-3 rounded-full" style={{ background: "var(--dot-red)" }} />
                    <span className="inline-block h-3 w-3 rounded-full" style={{ background: "var(--dot-yellow)" }} />
                    <span className="inline-block h-3 w-3 rounded-full" style={{ background: "var(--dot-green)" }} />
                </div>
            )}

            {children}
        </div>
    );
}
