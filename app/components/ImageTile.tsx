import Image from "next/image";
import Tile from "./Tile";

export function ImageTile({
  src,
  alt,
  label = "Highlight",
  className = "",
  priority = false,
}: {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Tile className={className}>
        <div className="absolute inset-0 tile-surface bg-neutral-100" />
      {src ? (
        <Image
          src={src}
          alt={alt ?? label}
          fill
          priority={priority}
          className="object-contain sm:object-cover p-4 sm:p-0"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      ) : (
        <div className="tile-gradient" />
      )}

      <div className="tile-overlay" />

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between ">
        <span className="pill">{label}</span>
        <span className="pill" aria-hidden="true">→</span>
      </div>
    </Tile>
  );
}
