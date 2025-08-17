import Link from "next/link";

type LogoProps = {
  size?: number; // icon size in px
  showText?: boolean; // show "Notes" wordmark
  className?: string; // extra classes for the wrapper
  label?: string; // accessible label override
};

export default function Logo({
  size = 32,
  showText = true,
  className = "",
  label = "Notes – Home",
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={label}
      className={`flex items-center gap-2 ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Notepad body */}
        <rect x="5" y="3" width="14" height="18" rx="2" />

        {/* Binding holes */}
        <path d="M8 3v3M12 3v3M16 3v3" />

        {/* Note lines */}
        <path d="M8.5 11h7.5M8.5 15h7.5" />

        {/* Pencil overlay (simple diagonal pencil) */}
        <path d="M13.8 20.2l4.9-4.9a1.4 1.4 0 0 0 0-2l-.1-.1a1.4 1.4 0 0 0-2 0l-4.9 4.9-.9 2.9 3-.8z" />
        <path d="M16.9 13.1l2 2" />
      </svg>

      {showText && (
        <span className="text-xl font-bold tracking-tight">Notes</span>
      )}
    </Link>
  );
}
