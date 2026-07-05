import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import OfficialCTA from "../../components/OfficialCTA";

export const metadata: Metadata = {
  title: "ダイエットインソールは市販でどこで売ってる？【2026年】3製品の最安値・販売店比較",
  description:
    "ダイエットインソールはどこで買える？ピットソール・ランウェイキュアソール・スリムアップインソール3製品の販売チャネル（公式/Amazon・楽天/ドンキ/ドラッグストア）と単品・セット最安値・返金保証を横断比較。市販店と通販の違いも解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/where-to-buy-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ダイエットインソールは市販でどこで売ってる？販売店まとめと選び方",
  description:
    "ダイエットインソールはどこで買える？ドラッグストア・ドンキ・ニトリ・無印・ワークマン・東急ハンズなど市販の販売店と、通販との違いを比較して解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-07-05",
};

const faqs = [{"q": "ダイエットインソールはドラッグストアで売っていますか？", "a": "汎用的なアーチサポート・クッションのインソールは購入できます。ただし特許技術採用の本格的なダイエットインソールは公式通販やAmazon・楽天が中心です。"}, {"q": "市販品と通販品はどちらが良いですか？", "a": "疲れ軽減目的なら市販の汎用品でも十分です。本格的なダイエット目的や返金保証を求めるなら、専用設計の製品を正規通販で買うのがおすすめです。"}, {"q": "実店舗で本格的なダイエットインソールは買えますか？", "a": "取り扱いは限られます。ピットソールなどは公式通販やAmazon・楽天が中心で、正規品保証や返金保証を受けやすいのもネットのメリットです。"}];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://sole-laboratory.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://sole-laboratory.com/articles/" },
    { "@type": "ListItem", position: 3, name: "市販はどこで売ってる", item: "https://sole-laboratory.com/articles/where-to-buy-insole/" },
  ],
};

const points = [{"t": "すぐ欲しいなら実店舗", "b": "ドラッグストア・ドンキ・ニトリ・ハンズなどで汎用インソールが手に入ります。実物を確認して選べます。"}, {"t": "本格派は公式・正規通販", "b": "特許技術採用のダイエットインソールは公式通販やAmazon・楽天が中心。返金保証や正規品保証を確認しましょう。"}, {"t": "目的で選ぶ", "b": "疲れ軽減なら市販の汎用品でも十分。本格的なダイエット目的なら専用設計の製品が向いています。"}];
const related = [{"href": "/articles/workman-insole/", "label": "ワークマンのインソール"}, {"href": "/articles/drugstore-insole/", "label": "ドラッグストアのインソール"}, {"href": "/articles/ec-buy-insole/", "label": "Amazon・楽天での購入"}, {"href": "/articles/cheap-insole/", "label": "コスパの良いインソール"}];

export default function WhereToBuyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "市販はどこで売ってる" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">購入ガイド</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ダイエットインソールは市販でどこで売ってる？販売店まとめと選び方</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">ダイエットインソールを今すぐ買いたいけれど、どこで売っているの？——本記事では、ドラッグストアやドンキ、ニトリ、無印などの市販店と、ネット通販それぞれの取り扱いと違いを整理します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">一般的なインソールはドラッグストア・ドンキ・ニトリ・東急ハンズなどで購入できますが、特許技術を採用した本格的なダイエットインソール（ピットソール等）は公式通販やAmazon・楽天での取り扱いが中心です。目的に合わせて選びましょう。</p>
        </div>

        <section id="hikaku" className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">主要3製品の最安値・販売店 横断比較</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">当サイトで検証している本格派ダイエットインソール3製品（<Link href="/pitsole/" className="text-[#e8627c] underline">ピットソール</Link>／<Link href="/runway-cure-sole/" className="text-[#e8627c] underline">ランウェイキュアソール</Link>／<Link href="/slim-up-insole/" className="text-[#e8627c] underline">スリムアップインソール</Link>）について、「どこで買えるか（販売チャネル）」と「いくらで買えるか（単品・セット最安値・返金保証）」を各製品ページの公式確認値をもとに一覧にまとめました。</p>

          {/* 表A：販売チャネル別の取扱可否 */}
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">表A：3製品 × 販売チャネルの取扱可否</h3>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border border-gray-200 rounded-xl">
              <thead>
                <tr className="bg-[#f0f9ff] text-gray-900">
                  <th className="p-3 text-left border-b border-gray-200">製品</th>
                  <th className="p-3 text-center border-b border-gray-200">公式サイト</th>
                  <th className="p-3 text-center border-b border-gray-200">Amazon・楽天</th>
                  <th className="p-3 text-center border-b border-gray-200">ドンキ</th>
                  <th className="p-3 text-center border-b border-gray-200">ドラッグストア・薬局</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="p-3 border-b border-gray-200 font-medium"><Link href="/pitsole/" className="text-[#e8627c] underline">ピットソール</Link></td>
                  <td className="p-3 border-b border-gray-200 text-center text-[#0ea5e9] font-bold">◎</td>
                  <td className="p-3 border-b border-gray-200 text-center text-[#0ea5e9] font-bold">◎<span className="block text-[10px] text-gray-500 font-normal">公式出品</span></td>
                  <td className="p-3 border-b border-gray-200 text-center text-gray-400">×</td>
                  <td className="p-3 border-b border-gray-200 text-center text-gray-400">×</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-200 font-medium"><Link href="/runway-cure-sole/" className="text-[#e8627c] underline">ランウェイキュアソール</Link></td>
                  <td className="p-3 border-b border-gray-200 text-center text-[#0ea5e9] font-bold">◎</td>
                  <td className="p-3 border-b border-gray-200 text-center text-amber-500 font-bold">△<span className="block text-[10px] text-gray-500 font-normal">時期により変動</span></td>
                  <td className="p-3 border-b border-gray-200 text-center text-gray-400">×</td>
                  <td className="p-3 border-b border-gray-200 text-center text-gray-400">×</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium"><Link href="/slim-up-insole/" className="text-[#e8627c] underline">スリムアップインソール</Link></td>
                  <td className="p-3 text-center text-[#0ea5e9] font-bold">◎</td>
                  <td className="p-3 text-center text-[#0ea5e9] font-bold">◎<span className="block text-[10px] text-gray-500 font-normal">Yahoo!も可</span></td>
                  <td className="p-3 text-center text-gray-400">×</td>
                  <td className="p-3 text-center text-gray-400">×</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-2">◎=取扱あり／△=時期により変動／×=取扱は確認されていません。いずれの製品も<strong>ドンキ・ドラッグストア・薬局などの実店舗での取扱は確認されておらず、購入は公式サイトが中心</strong>です。Amazon・楽天は非正規出品のリスクがあるため、販売元（公式店舗）の表記をご確認ください。</p>
          <p className="text-xs text-gray-500 mb-8">出典: 各製品ページの公式確認情報（<Link href="/pitsole/" className="underline">ピットソール</Link>=2026年4月／<Link href="/runway-cure-sole/" className="underline">ランウェイ</Link>・<Link href="/slim-up-insole/" className="underline">スリムアップ</Link>=2026年6月12日参照）。</p>

          {/* 表B：価格・セット最安値・返金保証 */}
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">表B：3製品 × 単品価格・セット最安値（1足あたり）・返金保証</h3>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border border-gray-200 rounded-xl">
              <thead>
                <tr className="bg-[#f0f9ff] text-gray-900">
                  <th className="p-3 text-left border-b border-gray-200">製品</th>
                  <th className="p-3 text-left border-b border-gray-200">単品（税込）</th>
                  <th className="p-3 text-left border-b border-gray-200">セット最安値（1足あたり）</th>
                  <th className="p-3 text-left border-b border-gray-200">返金保証</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="p-3 border-b border-gray-200 font-medium"><Link href="/pitsole/" className="text-[#e8627c] underline">ピットソール</Link></td>
                  <td className="p-3 border-b border-gray-200">6,578円</td>
                  <td className="p-3 border-b border-gray-200"><span className="font-bold text-[#0ea5e9]">4,026円</span><span className="block text-[10px] text-gray-500">6足24,156円（2足12,364円/4足18,120円）</span></td>
                  <td className="p-3 border-b border-gray-200">公式で要確認<span className="block text-[10px] text-gray-500">未使用・未開封のサイズ交換は可（7日以内）</span></td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-200 font-medium"><Link href="/runway-cure-sole/" className="text-[#e8627c] underline">ランウェイキュアソール</Link></td>
                  <td className="p-3 border-b border-gray-200">6,980円</td>
                  <td className="p-3 border-b border-gray-200"><span className="font-bold text-[#0ea5e9]">約5,987円</span><span className="block text-[10px] text-gray-500">2足11,980円/3足17,960円</span></td>
                  <td className="p-3 border-b border-gray-200">90日間の全額返金保証<span className="block text-[10px] text-gray-500">実感がない場合（公式サイト）</span></td>
                </tr>
                <tr>
                  <td className="p-3 font-medium"><Link href="/slim-up-insole/" className="text-[#e8627c] underline">スリムアップインソール</Link></td>
                  <td className="p-3">6,980円</td>
                  <td className="p-3"><span className="font-bold text-[#0ea5e9]">4,480円</span><span className="block text-[10px] text-gray-500">3足17,920円（+1足プレゼント）</span></td>
                  <td className="p-3">公式で要確認<span className="block text-[10px] text-gray-500">未開封品の返品可（条件は公式）</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-2">※価格・セット構成・返金条件は各製品の<strong>公式サイト・公式EC店舗で確認した値</strong>です（ピットソール=2026年7月／ランウェイ・スリムアップ=2026年6月12日参照）。1足あたりはセット最安プランを税込価格から算出。返金保証の有無・条件は製品ごとに異なり、記載のない項目は「公式で要確認」としています。</p>
          <p className="text-xs text-gray-500 mb-6">※価格・キャンペーン・保証条件は変更される場合があるため、購入前に必ず各公式サイトで最新の内容をご確認ください。効果には個人差があり、履くだけで痩せることを保証するものではありません。</p>

          <div className="bg-[#f0f9ff] border border-[#e0f2fe] rounded-xl p-5 mb-6">
            <p className="text-sm font-bold text-gray-900 mb-2">このページ（横断比較）と各製品ページ（詳細）の使い分け</p>
            <p className="text-sm text-gray-700 leading-relaxed">このページは3製品の販売店・価格をまとめて見比べるための<strong>横断比較ハブ</strong>です。価格の内訳やセットの条件、口コミ・サイズ選び・返金の詳しい手順など、各製品の詳細は個別ページでご確認ください。</p>
            <div className="grid sm:grid-cols-3 gap-2 mt-4">
              <Link href="/pitsole/" className="block text-center text-sm font-medium text-[#e8627c] border border-[#f3e0e4] rounded-lg px-3 py-2 hover:bg-[#fdf2f4] transition-colors">ピットソールの詳細 →</Link>
              <Link href="/runway-cure-sole/" className="block text-center text-sm font-medium text-[#e8627c] border border-[#f3e0e4] rounded-lg px-3 py-2 hover:bg-[#fdf2f4] transition-colors">ランウェイの詳細 →</Link>
              <Link href="/slim-up-insole/" className="block text-center text-sm font-medium text-[#e8627c] border border-[#f3e0e4] rounded-lg px-3 py-2 hover:bg-[#fdf2f4] transition-colors">スリムアップの詳細 →</Link>
            </div>
          </div>

          <div className="text-center my-6">
            <OfficialCTA product="pitsole" />
          </div>
          <p className="text-xs text-gray-400 text-center">※上記は各製品の公式サイトへのリンク（アフィリエイト・PR）を含みます。当サイトはアフィリエイト広告（PR）を利用しています。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">市販店とネット通販の違い</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ドラッグストアやホームセンター、ドンキ、ニトリ、無印良品、東急ハンズなどの実店舗では、汎用的なクッションインソールやアーチサポートのインソールが手に入ります。すぐ買える・実物を確認できるのがメリットです。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">一方、特許技術や独自設計を採用した本格的なダイエットインソール（ピットソールなど）は、実店舗での取り扱いが限られ、公式通販やAmazon・楽天が中心です。返金保証や正規品保証を受けたい場合は、公式・正規販売店での購入が安心です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">市販はどこで売ってるの選び方3つのポイント</h2>
          {points.map((p, i) => (
            <div key={p.t} className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 mb-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">{p.t}</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">{p.b}</p>
            </div>
          ))}
        </section>

        <section id="recommend" className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">市販はどこで売ってるにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">本格的なダイエットインソールは公式・正規通販での購入が安心です。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-xl">
              <thead>
                <tr className="bg-[#f0f9ff] text-gray-900">
                  <th className="p-3 text-left border-b border-gray-200">商品</th>
                  <th className="p-3 text-left border-b border-gray-200">評価</th>
                  <th className="p-3 text-left border-b border-gray-200">特徴</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr><td className="p-3 border-b border-gray-200 font-medium"><Link href="/pitsole/" className="text-[#e8627c] underline">ピットソール</Link></td><td className="p-3 border-b border-gray-200">★3.8</td><td className="p-3 border-b border-gray-200">特許取得のアーチサポート。累計200万足の実績で安定感。</td></tr>
                <tr><td className="p-3 border-b border-gray-200 font-medium"><Link href="/runway-cure-sole/" className="text-[#e8627c] underline">ランウェイキュアソール</Link></td><td className="p-3 border-b border-gray-200">★3.6</td><td className="p-3 border-b border-gray-200">3点アーチ設計で姿勢サポート。薄型で靴を選びにくい。</td></tr>
                <tr><td className="p-3 font-medium"><Link href="/slim-up-insole/" className="text-[#e8627c] underline">スリムアップインソール</Link></td><td className="p-3">★3.5</td><td className="p-3">クッション性重視。コスパよく初めての方に。</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">※評価はユーザーの口コミ傾向をもとにした編集部独自の目安です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">購入時に確認したいこと</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">市販品はサイズや厚みを実物で確認できる反面、種類が限られます。ネット通販は種類が豊富で口コミも参考にできますが、正規品か・返金保証があるかを必ず確認しましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">フリマアプリや非正規の格安品は、偽物や保証対象外のリスクがあります。本格的な製品は公式・正規販売店での購入をおすすめします。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="border border-gray-200 rounded-xl p-4 group">
                <summary className="font-bold text-gray-900 text-sm cursor-pointer list-none flex justify-between items-center">{f.q}<span className="text-[#0ea5e9] group-open:rotate-45 transition-transform">＋</span></summary>
                <p className="text-sm text-gray-700 leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="bg-[#e8627c] rounded-xl p-6 md:p-8 text-center mb-12">
          <p className="text-white font-bold text-lg mb-2">自分に合うインソールを見つけよう</p>
          <p className="text-white/90 text-sm mb-5">目的に合うダイエットインソールを、正規の販売店で比較して選びましょう。</p>
          <Link href="/ranking/" className="inline-block bg-white text-[#e8627c] font-bold px-6 py-3 rounded-lg hover:bg-[#fdf2f4] transition-colors">おすすめインソールランキングを見る</Link>
        </div>

        <section className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">関連記事</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {related.map((r) => (
              <Link key={r.href} href={r.href} className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
                <p className="text-sm font-bold text-gray-900">{r.label}</p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
