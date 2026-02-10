import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/TopNav";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Teen Site",
  description: "Materials",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-white text-black">
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3">
            <div className="font-semibold tracking-tight">Teen Site</div>
            <TopNav />
          </div>
        </header>

        <main className="mx-auto max-w-3xl px-4 py-10">
          {children}
        </main>

        <footer className="border-t">
          <div className="mx-auto max-w-3xl space-y-2 px-4 py-6 text-xs opacity-60">
            <div>© {new Date().getFullYear()}</div>
            <div>
              Мы используем анонимную аналитику без cookies, чтобы понимать,
              какие материалы полезны.
            </div>
          </div>
        </footer>

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}