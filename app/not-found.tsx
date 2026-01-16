import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Страница не найдена</h1>
      <p className="text-sm opacity-70">
        Возможно, раздел ещё не добавлен или ссылка устарела.
      </p>
      <Link className="underline underline-offset-4" href="/">
        ← На главную
      </Link>
    </div>
  );
}
