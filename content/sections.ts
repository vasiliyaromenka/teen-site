export type Section = {
  slug: string;
  title: string;
  order: number;
};

export const sections: Section[] = [
  { slug: "intro", title: "Введение", order: 10 },
  { slug: "healthy", title: "Здоровые отношения", order: 20 },
  { slug: "redflags", title: "Red flags", order: 30 },
].sort((a, b) => a.order - b.order);

export function getSectionIndex(slug: string) {
  return sections.findIndex((s) => s.slug === slug);
}

export function getPrevNext(slug: string) {
  const idx = getSectionIndex(slug);
  if (idx === -1) return { prev: null, next: null };

  return {
    prev: idx > 0 ? sections[idx - 1] : null,
    next: idx < sections.length - 1 ? sections[idx + 1] : null,
  };
}
