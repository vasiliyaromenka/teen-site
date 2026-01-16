import Link from "next/link";
import { sections } from "@/content/sections";

export default function Home() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Материалы</h1>
        <p className="mt-2 text-sm opacity-70">
          Разделы будут добавляться по мере готовности.
        </p>
      </div>

      <ul className="space-y-2">
        {sections.map((s) => (
          <li key={s.slug} className="flex items-center gap-2">
            <Link
              className="underline underline-offset-4"
              href={`/sections/${s.slug}`}
            >
              {s.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
