"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sections } from "@/content/sections";

export default function TopNav() {
  const pathname = usePathname();

  const items = [
    { href: "/", label: "Главная" },
    ...sections.map((s) => ({ href: `/sections/${s.slug}`, label: s.title })),
  ];

  return (
    <nav className="flex flex-wrap gap-2 text-sm">
      {items.map((i) => {
        const active = pathname === i.href;
        return (
          <Link
            key={i.href}
            href={i.href}
            className={[
              "rounded-full px-3 py-1 transition",
              "hover:bg-black/5",
              "whitespace-nowrap",
              active ? "bg-black/5 font-semibold" : "",
            ].join(" ")}
          >
            {i.label}
          </Link>
        );
      })}
    </nav>
  );
}
