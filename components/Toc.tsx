import GithubSlugger from "github-slugger";

export type TocItem = { id: string; text: string; level: number };

export function extractToc(markdown: string): TocItem[] {
  const slugger = new GithubSlugger();
  const items: TocItem[] = [];

  const lines = markdown.split("\n");
  for (const line of lines) {
    const m = /^(#{2,3})\s+(.*)$/.exec(line.trim());
    if (!m) continue;
    const level = m[1].length; // 2 or 3
    const text = m[2].trim();
    const id = slugger.slug(text);
    items.push({ id, text, level });
  }
  return items;
}

export default function Toc({ items }: { items: TocItem[] }) {
  if (!items.length) return null;

  return (
    <aside className="rounded-xl border bg-black/[0.02] p-4 text-sm">
      <div className="font-semibold">Оглавление</div>
      <ul className="mt-2 space-y-1">
        {items.map((it) => (
          <li key={it.id} className={it.level === 3 ? "pl-4" : ""}>
            <a className="underline underline-offset-4" href={`#${it.id}`}>
              {it.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
