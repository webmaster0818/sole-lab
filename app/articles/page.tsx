import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ダイエットインソールの知識・コラム一覧",
  description:
    "ダイエットインソールに関する知識・コラム記事一覧。脚痩せ、猫背改善、骨盤矯正、立ち仕事対策など、インソールの効果的な使い方を解説します。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/",
  },
};

const articles = [
  {
    href: "/articles/walking-diet/",
    title: "歩くだけダイエットは本当に効果ある？インソールで効率UP",
    description:
      "歩くだけダイエットの効果を科学的根拠とともに解説。正しい歩き方・時間・頻度まで。",
  },
  {
    href: "/articles/posture-correction/",
    title: "猫背を改善するインソールの選び方【姿勢矯正ガイド】",
    description:
      "猫背の原因と改善方法。姿勢矯正インソールの仕組みと選び方を解説。",
  },
  {
    href: "/articles/standing-work/",
    title: "立ち仕事で足が疲れない最強インソール3選【2026年】",
    description:
      "立ち仕事の足の疲れ対策。疲れにくいインソールの選び方を紹介。",
  },
  {
    href: "/articles/flat-feet/",
    title: "扁平足・浮き指にインソールは効果ある？おすすめ3選",
    description:
      "扁平足や浮き指の原因とインソールによる改善効果を解説。",
  },
  {
    href: "/articles/leg-slimming/",
    title: "脚痩せしたい人のインソール選び完全ガイド",
    description:
      "脚痩せ・下半身痩せにインソールが効果的な理由を徹底解説。",
  },
  {
    href: "/articles/pelvis-correction/",
    title: "骨盤矯正インソールの効果を科学的に解説",
    description:
      "骨盤の歪みと腰痛・下半身太りの関係。インソールでの改善方法を解説。",
  },
  {
    href: "/articles/how-to-choose/",
    title: "ダイエットインソールの選び方5つのポイント【失敗しない】",
    description:
      "サイズ・アーチ・靴との相性・価格・口コミの5ポイントで失敗しない選び方。",
  },
  {
    href: "/articles/insole-truth/",
    title: "ダイエットインソールは嘘？効果の科学的根拠を検証",
    description:
      "科学的根拠をもとに期待できる効果とできない効果を正直に検証。",
  },
  {
    href: "/articles/insole-care/",
    title: "インソールの正しい使い方・洗い方・寿命まとめ【長持ちさせるコツ】",
    description:
      "インソールの正しい装着方法から素材別の洗い方、交換時期の見極め方まで徹底解説。",
  },
  {
    href: "/articles/patent-technology/",
    title: "ダイエットインソールの特許技術を徹底解説【BMZ・各社の独自技術】",
    description:
      "BMZの世界特許・キュボイドバランス理論から各社の独自技術まで比較解説。",
  },
  {
    href: "/articles/diet-mechanism/",
    title: "インソールでダイエットできる仕組みを専門家視点で解説",
    description:
      "ダイエットインソールが体に作用するメカニズムを科学的根拠とともに解説。",
  },
  {
    href: "/articles/runway-not-working/",
    title: "ランウェイキュアソールは痩せない？効果の真相と正しい期待値",
    description:
      "ランウェイキュアソールの痩せない原因を分析し、効果を最大化する使い方を解説。",
  },
  {
    href: "/articles/runway-coupon/",
    title: "ランウェイキュアソールのクーポン・キャンペーン情報【2026年最新】",
    description:
      "ランウェイキュアソールを最安値で購入する方法。セット割引・ポイント活用法を解説。",
  },
  {
    href: "/articles/slimup-not-working/",
    title: "スリムアップインソールは痩せない？口コミから効果を検証",
    description:
      "スリムアップインソールの痩せない原因を分析し、正しい使い方を解説。",
  },
  {
    href: "/articles/slimup-coupon/",
    title: "スリムアップインソールの最安値・キャンペーン情報【2026年最新】",
    description:
      "スリムアップインソールを最安値で購入する方法。セット割引・購入先比較を解説。",
  },
  {
    href: "/articles/desk-work/",
    title: "デスクワークの足の疲れにインソールは効果ある？おすすめと対策",
    description:
      "デスクワーク中心の方のインソール活用法と足の疲れ・むくみ対策を解説。",
  },
  {
    href: "/articles/walking-insole/",
    title: "ウォーキング用インソールおすすめ3選｜歩きやすさと痩せ効果",
    description:
      "ウォーキングに最適なダイエットインソール3選。歩きやすさと痩せ効果を両立する選び方。",
  },
  {
    href: "/articles/mens-diet-insole/",
    title: "ダイエットインソール男性向けおすすめ3選｜メンズの選び方ガイド",
    description:
      "男性向けダイエットインソールの選び方。サイズ対応・ビジネスシューズとの相性を解説。",
  },
  {
    href: "/articles/cheap-insole/",
    title: "ダイエットインソールの安いおすすめ比較｜コスパ重視で選ぶ",
    description:
      "ダイエットインソールをコスパ重視で比較。セット割引・1足あたり価格ランキング。",
  },
];

const collectionStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "ダイエットインソールの知識・コラム一覧",
  description:
    "ダイエットインソールに関する知識・コラム記事一覧。脚痩せ、猫背改善、骨盤矯正、立ち仕事対策など、インソールの効果的な使い方を解説します。",
  url: "https://sole-laboratory.com/articles/",
  publisher: {
    "@type": "Organization",
    name: "ソールラボ",
    url: "https://sole-laboratory.com",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://sole-laboratory.com${article.href}`,
      name: article.title,
    })),
  },
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://sole-laboratory.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "知識・コラム一覧",
      item: "https://sole-laboratory.com/articles/",
    },
  ],
};

export default function ArticlesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <Breadcrumb items={[{ label: "知識・コラム一覧" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-pink-50 to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-[#e8627c] font-medium mb-2">
            Knowledge &amp; Column
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ダイエットインソールの
            <br className="md:hidden" />
            <span className="text-[#e8627c]">知識・コラム</span>
            一覧
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            脚痩せ、猫背改善、骨盤矯正、立ち仕事対策など、ダイエットインソールの効果的な使い方をテーマ別に解説しています。
          </p>
        </div>
      </section>

      {/* Article List */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid gap-4 md:gap-6">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="block border border-[#f3e0e4] rounded-xl p-5 md:p-6 hover:bg-[#fdf2f4] transition-colors group"
              >
                <h2 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-[#e8627c] transition-colors mb-2">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {article.description}
                </p>
                <span className="inline-block mt-3 text-sm text-[#e8627c] font-medium">
                  記事を読む →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            どのインソールを選べばいい？
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 max-w-2xl mx-auto">
            人気のダイエットインソール3商品を、効果・口コミ・料金など6つの基準で徹底比較。あなたにぴったりの1足が見つかります。
          </p>
          <Link
            href="/ranking/"
            className="inline-block bg-[#e8627c] hover:bg-[#d4506a] text-white font-bold py-3 px-8 rounded-full transition-colors text-sm md:text-base"
          >
            おすすめランキングを見る
          </Link>
        </div>
      </section>
    </>
  );
}
