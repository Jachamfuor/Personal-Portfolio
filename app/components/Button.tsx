import Link from "next/link"

type ButtonVariant = "glow" | "hover" | "clear"

type ButtonInfo = {
    description: string;
    href: string;
    variant?: ButtonVariant;
    external?: boolean;
};

const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300";

const variantStyles: Record<ButtonVariant, string> = {
    glow:
        "relative px-4 py-2 bg-neutral-200/5 text-white font-semibold rounded-md transition-all duration-300 border border-transparent hover:border-pink-500 cursor-pointer hover:shadow-[0_0_20px_3px_rgba(236,72,153,1)]",
    hover:
        "bg-black border border-gray-100 rounded-lg shadow-md hover:shadow-2xl transform hover:translate-y-2 transition-all duration-300 ease-linear",
    clear:
        "text-white hover:bg-gray-100",
};

export default function Button({
    description,
    href,
    variant = "glow",
    external = false,
}: ButtonInfo) {
    const className = `${baseStyles} ${variantStyles[variant]}`;

    //External link
    if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {description}
      </a>
    );
  }

  // Internal link
  return (
    <Link href={href} className={className}>
      {description}
    </Link>
  );

}
