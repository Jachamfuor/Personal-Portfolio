type CardShellProps = {
    children: React.ReactNode;
    className?: string;
};

export default function CardShell({ children, className = "" }: CardShellProps) {
    return (
        <div
            className={
                "rounded-lg border border-gray-100 bg-white shadow-md transition-all duration-300 ease-linear hover:shadow-2xl hover:-translate-y-2 " +
                className
            }
        >
            {children}
        </div>
    );
}