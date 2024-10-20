import { Link } from "@/components/core/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-lg font-semibold">Mehdi Ben Hadj Ali</h1>
      <p className="text-fg-muted">Design Engineer</p>
      <p className="mt-10 text-sm">
        Currently making the web better at <Link>dotUI</Link>.
      </p>
      <div className="mt-10">
        <h2 className="text-sm text-fg-muted">Work</h2>
        {[
          { title: "dotUI", date: "2023 - Present" },
          { title: "Vercel", date: "2022" },
          { title: "GitHub", date: "2019 - 2021" },
        ].map((elem, index) => (
          <Link
            key={index}
            href="#"
            className="flex items-center justify-between border-b py-2"
          >
            <span>{elem.title}</span>
            <span className="text-fg-muted">{elem.date}</span>
          </Link>
        ))}
      </div>
      <div className="mt-10">
        <h2 className="text-sm text-fg-muted">Lab</h2>
        {[
          { title: "Animations on the web" },
          { title: "Feedback components" },
          { title: "Animated tabs" },
        ].map((elem, index) => (
          <Link
            key={index}
            href="#"
            className="flex items-center justify-between border-b py-2"
          >
            <span>{elem.title}</span>
          </Link>
        ))}
      </div>
      <div className="mt-10">
        <h2 className="text-sm text-fg-muted">Writing</h2>
        {[
          { title: "Designing a new dashboard" },
          { title: "Building a design system" },
          { title: "Hello world" },
        ].map((elem, index) => (
          <Link
            key={index}
            href="#"
            className="flex items-center justify-between border-b py-2"
          >
            <span>{elem.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
