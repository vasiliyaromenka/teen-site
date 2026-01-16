"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { sections } from "@/content/sections";

export default function TopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const items = useMemo(
    () => [
      { href: "/", label: "Главная" },
      ...sections.map((s) => ({ href: `/sections/${s.slug}`, label: s.title })),
    ],
    []
  );

  // Закрывать меню при смене маршрута
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Закрывать по Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const linkClass = (href: string) => {
    const active = pathname === href;
    return [
      "block rounded-lg px-3 py-2 transition",
      "hover:bg-black/5",
      active ? "bg-black/5 font-semibold" : "",
    ].join(" ");
  };

  return (
    <div className="relative">
      {/* Desktop menu */}
      <nav className="hidden md:flex flex-wrap gap-2 text-sm">
        {items.map((i) => (
          <Link key={i.href} href={i.href} className={linkClass(i.href)}>
            {i.label}
          </Link>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <div className="md:hidden">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border px-3 py-2 text-sm hover:bg-black/5"
          aria-label="Открыть меню"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/* icon */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="ml-2">Меню</span>
        </button>

        {/* Backdrop (tap to close) */}
        {open && (
          <button
            aria-label="Закрыть меню"
            className="fixed inset-0 z-40 cursor-default bg-black/10"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Dropdown panel */}
        <div
          className={[
            "absolute right-0 z-50 mt-2 w-64 overflow-hidden rounded-xl border bg-white shadow-lg",
            open ? "block" : "hidden",
          ].join(" ")}
        >
          <div className="p-2">
            {items.map((i) => (
              <Link key={i.href} href={i.href} className={linkClass(i.href)}>
                {i.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
