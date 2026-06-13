import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "インソールの防臭・消臭ケア【2026年】臭くなる原因と毎日できるニオイ対策",
  description:
    "インソールが臭くなる原因は雑菌と湿気。毎日の陰干し・ローテーション・靴下選び・消臭スプレーの使い方など、洗わずにできる防臭ケアの習慣と、ニオイにくいインソールの選び方を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/deodorize-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "インソールの防臭・消臭ケア｜臭くなる原因と毎日できるニオイ対策",
  description:
    "インソールが臭くなる原因は雑菌と湿気。毎日の陰干し・ローテーション・靴下選び・消臭スプレーの使い方など、洗わずにできる防臭ケアの習慣と、ニオイにくいインソールの選び方を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "インソールのニオイを取る一番の方法は何ですか？", "a": "染みついたニオイのリセットには製品の案内に沿った洗浄（または交換）が必要です。ただし日常的には「毎晩取り出して陰干し＋ローテーションで休ませる」のが最も効果的な予防策です。"}, {"q": "消臭スプレーだけでニオイ対策になりますか？", "a": "スプレーは雑菌の増殖を抑える補助にはなりますが、汗や皮脂の汚れ自体は残るため洗浄の代わりにはなりません。乾燥・ローテーションと組み合わせて使いましょう。"}, {"q": "10円玉や重曹を入れると消臭できると聞きましたが？", "a": "民間的な方法として知られますが、効果は限定的で素材との相性もあります。基本は乾燥・休息・靴下の3本柱で雑菌の繁殖条件を断つことです。確実なのは陰干しとローテーションです。"}, {"q": "何をしてもすぐ臭くなります。どうすればいいですか？", "a": "雑菌が素材の奥に定着している可能性が高く、洗浄してもダメなら交換時期です。また、足側の角質ケアや靴自体の乾燥も見直しを。皮むけやかゆみを伴う場合は水虫などの可能性があるため皮膚科に相談してください。"}, {"q": "ニオイにくいインソールはありますか？", "a": "抗菌防臭加工をうたう製品（例：スリムアップインソールは抗菌防臭加工ありと案内）はニオイにくさの面で有利です。ただし加工があっても乾燥などの日常ケアは必要です。"}];

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
    { "@type": "ListItem", position: 3, name: "防臭・消臭ケア", item: "https://sole-laboratory.com/articles/deodorize-insole/" },
  ],
};

const points = [{"t": "抗菌防臭加工の有無を確認する", "b": "製品によっては素材に抗菌防臭加工が施されています。たとえばスリムアップインソールは抗菌防臭加工ありと案内されています。加工があってもケア不要にはなりませんが、ニオイにくさの土台になります。"}, {"t": "手入れ方法が明確な製品を選ぶ", "b": "防臭ケアを続けるには、その製品の正しい手入れ方法を知っていることが前提です。手洗い可か、拭き取りのみか、公式の案内が明確な製品ならケアで迷いません。"}, {"t": "通気・速乾性とローテーションのしやすさ", "b": "毎晩乾かす運用を考えると、乾きやすい薄型・通気性のある構造は有利です。2枚目を用意しやすい価格帯かどうかも、ローテーション運用では現実的なポイントです。"}];
const related = [{"href": "/articles/washing-guide/", "label": "インソールの洗い方・お手入れガイド"}, {"href": "/articles/rotation-insole/", "label": "インソールの2足持ち・ローテーション"}, {"href": "/articles/summer-mure-insole/", "label": "夏の蒸れ対策インソール"}, {"href": "/articles/lifespan/", "label": "インソールの寿命と交換時期"}];

export default function DeodorizePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "防臭・消臭ケア" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">使い方・選び方</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">インソールの防臭・消臭ケア｜臭くなる原因と毎日できるニオイ対策</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">靴のニオイの発生源として見落とされがちなのがインソールです。足の汗をいちばん近くで受け止める消耗品だからこそ、ニオイ対策は「洗う」以前の毎日の小さな習慣で大きく差がつきます。この記事では日常の防臭ケアに絞って対策をまとめます。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">インソールのニオイの正体は、汗・皮脂を栄養に雑菌が繁殖した結果です。対策の柱は「乾かす・休ませる・持ち込まない」の3つ。毎晩取り出して陰干しし、2足ローテーションで休ませ、吸湿性のよい靴下で汗を持ち込まない。この習慣だけでニオイの進行は大きく抑えられます。消臭スプレーは補助として有効ですが洗浄の代わりにはなりません。洗い方の詳細は洗い方ガイドを参照してください。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">インソールが臭くなるメカニズム</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足は1日にコップ1杯程度の汗をかくといわれます。汗そのものはほぼ無臭ですが、靴内の高温多湿な環境で雑菌が汗や皮脂、古い角質を分解するときにニオイ物質が発生します。インソールは足裏に密着して汗を吸い込み続けるため、靴の中でも特に雑菌が繁殖しやすいパーツです。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">つまりニオイ対策の本質は「雑菌が増える条件（湿気・栄養・時間）を断つこと」です。履いたら乾かす、連続使用を避けて休ませる、靴下で汗や角質の持ち込みを減らす——地味ですが、この日常ケアの積み重ねがどんな消臭グッズより効きます。すでに染みついたニオイのリセットには洗浄が必要になるため、その場合は素材別の洗い方を解説した洗い方ガイドを参考にしてください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">防臭・消臭ケアの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">防臭・消臭ケアにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">日常の防臭ケアのしやすさ（手入れ方法の明確さ・抗菌加工の有無）にも注目して選びましょう。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">今日からできる防臭習慣5つ</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">(1)帰宅したらインソールを靴から取り出し、風通しのよい日陰で一晩乾かす。(2)同じインソール・同じ靴の連続使用を避け、2足ローテーションで丸1日休ませる。(3)綿や5本指など吸湿性のよい靴下を履き、素足での使用を避ける。(4)消臭・除菌スプレーは「乾かした後の補助」として使う（スプレーで湿らせたまま放置すると逆効果。アルコール系は素材を傷める場合があるためインソール対応品を）。(5)靴側にも乾燥剤や新聞紙を入れて湿気を残さない。インソールだけケアしても靴が湿っていればニオイは戻ります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">これらを続けてもニオイがすぐ戻る場合は、雑菌が素材の奥まで定着しているサインで、洗浄またはインソール自体の交換時期です。手入れ方法は製品ごとに異なり、ピットソールは中性洗剤での手早い手洗い＋陰干し（洗濯機厳禁）、ランウェイキュアソールは水洗い非推奨で固く絞った布での拭き取りが公式の案内です。なお、足の強いニオイに皮むけ・かゆみを伴う場合は水虫など皮膚トラブルの可能性があるため、皮膚科の受診を検討してください。</p>
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
          <p className="text-white/90 text-sm mb-5">ニオイ対策は製品選びから。抗菌防臭加工や手入れのしやすさで比較してみましょう。</p>
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
