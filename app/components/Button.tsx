import Link from "next/link";

type ButtonVariant = "glow" | "hover" | "clear";
type ButtonShape = "default" | "circle";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  size?: ButtonSize;
  external?: boolean;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300";

const variantStyles: Record<ButtonVariant, string> = {
  glow:
    "bg-neutral-200/5 text-white border border-transparent hover:border-pink-500 hover:shadow-[0_0_20px_3px_rgba(236,72,153,1)]",
  hover:
    " border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-1",
  clear:
    "border text-white hover:bg-gray-100",
};

const shapeStyles: Record<ButtonShape, string> = {
  default: "rounded-md",
  circle: "rounded-full aspect-square",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  href,
  children,
  variant = "glow",
  shape = "default",
  size = "md",
  external = false,
}: ButtonProps) {
  const className = [
    baseStyles,
    variantStyles[variant],
    shapeStyles[shape],
    sizeStyles[size],
  ].join(" ");

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
