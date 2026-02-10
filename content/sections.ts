export type Section = {
  slug: string;
  title: string;
  order: number;
};

export const sections: Section[] = [
  { slug: "1_intro", title: "Введение", order: 10 },
  { slug: "2_healthy", title: "Здоровые отношения", order: 20 },
  { slug: "3_abuse_is", title: "Abuse is", order: 30 },
  { slug: "4_red_flags", title: "Красные флаги", order: 40 },
  { slug: "5_manipulations", title: "Манипуляции", order: 50 },
  { slug: "6_repeats", title: "Ну вот опять...", order: 60 },
  { slug: "7_save_yourself", title: "Сохрани себя", order: 70 },
  { slug: "8_choose_right_ppl", title: "Кого впускать", order: 80 },
  { slug: "9_consent", title: "Согласие", order: 90 },
  { slug: "10_wrap", title: "Запомни", order: 100 },
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
