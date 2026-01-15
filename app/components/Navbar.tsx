// Navigation bar file
import Link from "next/link"
import ThemeToggle from "./ThemeToggle";

//Sections of Website
const links = [
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact " },
];

export default function NavBar() {
    return (
        <header className="sticky top-0 z-50 nav-glass backdrop-blur">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
                <Link href="/" className="font-semibold tracking-tight">
                    Jeffery Achamfuor
                </Link>
                <div className="flex items-center gap-4">
                    <div className="flex gap-4 text-sm ">
                        {links.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className="hover:text-black dark:hover:text-white transition-colors"
                            >
                                {l.label}
                            </Link>
                        ))}
                    </div>
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
}