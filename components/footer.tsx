import { Link } from "@/components/core/link";

const links = [
  { label: "GitHub", href: "https://github.com/mehdibha" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mehdibha/" },
  { label: "X", href: "https://x.com/mehdibha_" },
  { label: "Cal", href: "https://cal.com/mehdibha" },
];
export const Footer = () => {
  return (
    <div className="flex flex-col gap-2 border-t py-6 text-sm text-fg-muted">
      <div className="flex items-center gap-3 text-sm text-fg-muted">
        <div>Find me on:</div>
        {links.map((link) => (
          <Link
            variant="quiet"
            key={link.label}
            href={link.href}
            target="_blank"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div>Or mail me at hello@mehdibha.com</div>
    </div>
  );
};
