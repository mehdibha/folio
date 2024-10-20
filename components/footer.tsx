import Link from "next/link";

const links = [
  { label: "GitHub", href: "https://github.com/mehdibha" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mehdibha/" },
  { label: "X", href: "https://x.com/mehdibha_" },
  { label: "Cal", href: "https://cal.com/mehdibha" },
];
export const Footer = () => {
  return (
    <div className="flex items-center justify-between border-t py-6">
      <p>Mehdi BHA</p>
      <div className="flex items-center gap-2 text-sm text-fg-muted">
        {links.map((link) => (
          <Link key={link.label} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
