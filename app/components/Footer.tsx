import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0c4a6e] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Site info */}
          <div>
            <p className="text-lg font-bold mb-2">ソールラボ</p>
            <p className="text-sm text-sky-200 leading-relaxed">
              ダイエットインソールを実際に比較し、
              正直な情報をお届けするレビューサイトです。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold mb-3 text-sky-200">
              ページ一覧
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-sky-100 hover:text-white transition-colors"
                >
                  トップ
                </Link>
              </li>
              <li>
                <Link
                  href="/ranking/"
                  className="text-sm text-sky-100 hover:text-white transition-colors"
                >
                  おすすめ3選
                </Link>
              </li>
              <li>
                <Link
                  href="/pitsole/"
                  className="text-sm text-sky-100 hover:text-white transition-colors"
                >
                  ピットソール
                </Link>
              </li>
              <li>
                <Link
                  href="/runway-cure-sole/"
                  className="text-sm text-sky-100 hover:text-white transition-colors"
                >
                  ランウェイキュアソール
                </Link>
              </li>
              <li>
                <Link
                  href="/slimup-insole/"
                  className="text-sm text-sky-100 hover:text-white transition-colors"
                >
                  スリムアップインソール
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <p className="text-sm font-semibold mb-3 text-sky-200">
              カテゴリー
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ranking/"
                  className="text-sm text-sky-100 hover:text-white transition-colors"
                >
                  ランキング・比較
                </Link>
              </li>
              <li>
                <span className="text-sm text-sky-100">口コミ・評判</span>
              </li>
              <li>
                <span className="text-sm text-sky-100">効果・使い方</span>
              </li>
              <li>
                <span className="text-sm text-sky-100">料金・最安値情報</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-sky-800 text-center">
          <p className="text-xs text-sky-300">
            &copy; {new Date().getFullYear()} ソールラボ All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
