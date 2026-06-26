import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3d1a38] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Site info */}
          <div>
            <p className="text-lg font-bold mb-2">ソールラボ</p>
            <p className="text-sm text-pink-200 leading-relaxed">
              ダイエットインソールを実際に比較し、
              正直な情報をお届けするレビューサイトです。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold mb-3 text-pink-200">
              ページ一覧
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-pink-100 hover:text-white transition-colors"
                >
                  トップ
                </Link>
              </li>
              <li>
                <Link
                  href="/ranking/"
                  className="text-sm text-pink-100 hover:text-white transition-colors"
                >
                  おすすめ3選
                </Link>
              </li>
              <li>
                <Link
                  href="/pitsole/"
                  className="text-sm text-pink-100 hover:text-white transition-colors"
                >
                  ピットソール
                </Link>
              </li>
              <li>
                <Link
                  href="/runway-cure-sole/"
                  className="text-sm text-pink-100 hover:text-white transition-colors"
                >
                  ランウェイキュアソール
                </Link>
              </li>
              <li>
                <Link
                  href="/slim-up-insole/"
                  className="text-sm text-pink-100 hover:text-white transition-colors"
                >
                  スリムアップインソール
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/"
                  className="text-sm text-pink-100 hover:text-white transition-colors"
                >
                  記事一覧
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <p className="text-sm font-semibold mb-3 text-pink-200">
              テーマ別に探す
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/articles/#symptom"
                  className="text-sm text-pink-100 hover:text-white transition-colors"
                >
                  足の症状・お悩み別
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/#sports"
                  className="text-sm text-pink-100 hover:text-white transition-colors"
                >
                  スポーツ別の選び方
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/#job"
                  className="text-sm text-pink-100 hover:text-white transition-colors"
                >
                  職業・立ち仕事別
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/#buy"
                  className="text-sm text-pink-100 hover:text-white transition-colors"
                >
                  購入・販売店ガイド
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/#howto"
                  className="text-sm text-pink-100 hover:text-white transition-colors"
                >
                  使い方・基礎知識
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-pink-900/50 text-center">
          <div className="flex justify-center gap-6 mt-6">
            <Link href="/terms/" className="text-xs text-pink-300 hover:text-white transition-colors">利用規約</Link>
            <Link href="/privacy-policy/" className="text-xs text-pink-300 hover:text-white transition-colors">プライバシーポリシー</Link>
            <Link href="/content-policy/" className="text-xs text-pink-300 hover:text-white transition-colors">記事制作ポリシー</Link>
          </div>
          <p className="text-xs text-pink-300 mt-4">
            本サイトはアフィリエイト広告（PR）を利用しています。商品の「公式サイトでチェック」等のリンクは広告であり、各社の公式サイトへ移動します。
          </p>
          <p className="text-xs text-pink-300 mt-2">
            &copy; {new Date().getFullYear()} ソールラボ All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
