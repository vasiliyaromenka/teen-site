import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";

import Md from "@/components/Md";
import Toc, { extractToc } from "@/components/Toc";
import { sections, getPrevNext } from "@/content/sections";

export function generateStaticParams() {
  return sections.map((s) => ({ slug: s.slug }));
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const exists = sections.some((s) => s.slug === slug);
  if (!exists) return notFound();

  const mdPath = path.join(process.cwd(), "content", `${slug}.md`);
  if (!fs.existsSync(mdPath)) return notFound();

  const markdown = fs.readFileSync(mdPath, "utf8");
  const { prev, next } = getPrevNext(slug);
  const toc = extractToc(markdown);

  return (
    <div className="space-y-8">
      <Toc items={toc} />
      <Md markdown={markdown} />

      <div className="flex items-center justify-between gap-3 border-t pt-6 text-sm">
        {prev ? (
          <Link
            className="underline underline-offset-4"
            href={`/sections/${prev.slug}`}
          >
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}

        {next ? (
          <Link
            className="underline underline-offset-4"
            href={`/sections/${next.slug}`}
          >
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
