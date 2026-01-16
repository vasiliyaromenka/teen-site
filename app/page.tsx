import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Материалы</h1>
      <p className="opacity-80">
        Разделы будут добавляться по мере готовности.
      </p>

      <ul className="list-inside list-disc space-y-2">
        <li>
          <Link className="underline" href="/sections/intro">
            Введение
          </Link>
        </li>
        <li>
          <Link className="underline" href="/sections/healthy">
            Здоровые отношения
          </Link>
        </li>
        <li>
          <Link className="underline" href="/sections/redflags">
            Red flags
          </Link>
        </li>
      </ul>
    </div>
  );
}
