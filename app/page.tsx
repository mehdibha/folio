import { Link } from "@/components/core/link";
import { List } from "@/components/list";

const projects = [
  {
    title: "dotUI",
    hint: "creator, maintainer",
    description:
      "Collection of accessible, mobile-friendly, modern components.",
    href: "https://dotui.org",
  },
  {
    title: "Notionfolio",
    hint: "creator",
    description: "SaaS to create blogs with Notion.",
    href: "https://notionfol.io",
  },
  {
    title: "Palettify",
    hint: "creator",
    description: "Platform to create and share color themes.",
    href: "https://palettify.co",
  },
  {
    title: "Vapi",
    hint: "creator",
    description: "Marketplace for vape related products.",
    href: "https://vapi.tn",
  },
];
const lab = [{ title: "Animations on the web", href: "/lab/animated" }];
const writing = [
  {
    title: "Why i chose React Aria over Radix UI?",
    href: "/writing/why-i-chose-react-aria",
  },
  {
    title: "Copy and paste is the new way to build",
    href: "/writing/copy-and-paste-is-the-new-way-to-build",
  },
];

export default function Home() {
  return (
    <div>
      <h1 className="text-lg font-semibold">Mehdi Ben Hadj Ali</h1>
      <p className="text-fg-muted">Design Engineer</p>
      <p className="mt-10 text-sm">
        Currently making the web better at{" "}
        <Link href="https://dotui.org" target="_blank">
          dotUI
        </Link>
        .<br />I like building accessible, polished, and modern user interfaces.
      </p>
      <h2 className="mb-2 mt-10 text-sm text-fg-muted">Projects</h2>
      <List items={projects} />
      <h2 className="mt-10 text-sm text-fg-muted">Lab</h2>
      <List items={lab} />
      <h2 className="mt-10 text-sm text-fg-muted">Writing</h2>
      <List items={writing} />
    </div>
  );
}
