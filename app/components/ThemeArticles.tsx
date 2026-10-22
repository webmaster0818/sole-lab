import Link from "next/link";
import { themeGroups } from "../lib/themeGroups";

// 同じテーマの記事どうしを相互に張る（一覧からしか張られていない記事の孤立を解消）
export default function ThemeArticles({ current }: { current: string }) {
  const group = themeGroups.find((g) => g.items.some((i) => i.href === current));
  if (!group) return null;
  const others = group.items.filter((i) => i.href !== current);
  return (
    <section className="pb-12 md:pb-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-900 mb-6">{group.name}</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {others.map((i) => (
            <li key={i.href}>
              <Link href={i.href} className="block p-4 border border-[#e8ded6] rounded-xl hover:bg-[#faf7f3] transition-colors text-sm font-semibold text-gray-900">
                {i.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
