import { ICONS } from "./icon-paths";

// Decorative inline icon. Sized by the surrounding font-size (1em tall), coloured by `currentColor`.
export default function Icon({ name, className }: { name: string; className?: string }) {
  const icon = ICONS[name];
  if (!icon) return null;
  return (
    <svg
      className={`icon icon-${name}${className ? ` ${className}` : ""}`}
      viewBox={`0 0 ${icon.w} 512`}
      style={{ width: `${(icon.w / 512).toFixed(3)}em` }}
      aria-hidden="true"
      focusable="false"
    >
      <path fill="currentColor" d={icon.d} />
    </svg>
  );
}
