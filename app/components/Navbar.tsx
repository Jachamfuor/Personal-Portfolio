// Navigation bar file
import Link from "next/link"

//Sections of Website
const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact "},
];

export default function NavBar(){
    return (
        <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
                <Link href="/" className="font-semibold tracking-tight">
                    Jeffery Achamfuor
                </Link>

                <div className="flex gap-4 text-sm text-gray-700">
                    {links.map((l) => (
                        <Link 
                        key={l.href}
                        href={l.href}
                        className="hover:text-black transition-colors"
                        >
                            {l.label}
                            </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}