import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "O脚改善にインソールは効果ある？おすすめと選び方ガイド",
  description:
    "O脚の原因・タイプを解説し、インソールでO脚が改善するメカニズムを図解。ダイエットインソール3商品のO脚改善効果を比較し、選び方3ポイントと注意点をまとめた完全ガイドです。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/o-leg-insole/",
  },
  openGraph: {
    title:
      "O脚改善にインソールは効果ある？おすすめと選び方ガイド｜ソールラボ",
    description:
      "O脚の原因とインソールによる改善メカニズムを解説。ダイエットインソール3商品のO脚改善効果を比較。",
    url: "https://sole-laboratory.com/articles/o-leg-insole/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "O脚改善にインソールは効果ある？おすすめと選び方ガイド",
  description:
    "O脚の原因・タイプを解説し、インソールでO脚が改善するメカニズム・おすすめ商品・選び方をまとめたガイド。",
  author: {
    "@type": "Organization",
    name: "ソールラボ",
    url: "https://sole-laboratory.com",
  },
  publisher: {
    "@type": "Organization",
    name: "ソールラボ",
    url: "https://sole-laboratory.com",
  },
  datePublished: "2026-04-16",
  dateModified: "2026-04-16",
};

const faqs = [
  {
    question: "O脚はインソールだけで完全に治りますか？",
    answer:
      "軽度〜中等度の機能的O脚であれば、インソールの継続使用とストレッチ・筋トレの併用で大幅な改善が期待できます。ただし、骨格の変形を伴う構造的O脚はインソールだけでは改善が難しく、整形外科での診察が必要です。インソールはあくまでサポートツールであり、治療器具ではありません。",
  },
  {
    question: "O脚改善用のインソールはどれくらいで効果を感じますか？",
    answer:
      "歩行バランスの変化は1〜2週間で感じ始める方が多いです。膝の隙間の改善など見た目の変化を実感するには、毎日の使用に加えてストレッチや筋トレも併用して2〜3ヶ月の継続が目安です。歩行量が多い方ほど効果を感じやすい傾向があります。",
  },
  {
    question: "O脚改善にはどんなインソールを選べばいいですか？",
    answer:
      "O脚改善には、内側縦アーチのサポートが充実しているインソールが効果的です。また、かかと部分にヒールカップがあり踵骨を正しい位置で安定させる設計のものが望ましいです。足裏3点アーチサポート搭載のダイエットインソールは、O脚改善とダイエット効果の両方が期待できます。",
  },
  {
    question: "O脚の人がインソールなしで歩き続けるとどうなりますか？",
    answer:
      "O脚の状態で歩き続けると、膝の内側に過度な負荷がかかり、将来的に変形性膝関節症のリスクが高まります。また、足首・腰・股関節にも連鎖的な負担がかかり、慢性的な痛みの原因になる可能性があります。早めの対策が将来の健康を守ることにつながります。",
  },
  {
    question: "子どものO脚にもインソールは使えますか？",
    answer:
      "2歳頃までの乳幼児O脚は生理的なもので自然に改善されることがほとんどです。3歳以降もO脚が続く場合は小児整形外科での診察が推奨されます。学童期以降のO脚にはインソールが有効な場合がありますが、成長期の足は変化が大きいため、3〜6ヶ月ごとにサイズを見直す必要があります。",
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
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
    {
      "@type": "ListItem",
      position: 3,
      name: "O脚改善",
      item: "https://sole-laboratory.com/articles/o-leg-insole/",
    },
  ],
};

export default function OLegInsolePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <Breadcrumb
        items={[
          { label: "知識・コラム", href: "/articles/" },
          { label: "O脚改善" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#fdf2f4] to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-[#e8627c] font-medium mb-2">
            足のお悩み解決ガイド
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            O脚改善にインソールは効果ある？
            <br />
            <span className="text-[#e8627c]">おすすめと選び方</span>
            ガイド
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            「まっすぐ立っても膝がつかない」「スカートやスキニーパンツが似合わない」。O脚の悩みは見た目だけでなく、膝や腰への負担にもつながります。本記事ではO脚の原因とタイプを解説し、インソールによる改善メカニズム、ダイエットインソール3商品のO脚への効果比較、選び方のポイントをまとめました。競合サイトではO脚専用インソールのランキングが中心ですが、ここではダイエットインソールのO脚改善効果に着目して差別化しています。
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-[#fdf2f4] text-[#e8627c] px-3 py-1 rounded-full font-medium border border-[#f3e0e4]">
              O脚 改善 インソール
            </span>
            <span className="bg-[#fdf2f4] text-[#e8627c] px-3 py-1 rounded-full font-medium border border-[#f3e0e4]">
              おすすめ
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              2026年4月更新
            </span>
          </div>
        </div>
      </section>

      {/* O脚とは */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            O脚とは？原因と2つのタイプ
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              O脚（内反膝）とは、まっすぐ立ったときに両膝の間に隙間ができ、脚全体がアルファベットの「O」の字に見える状態を指します。日本人女性の約80%が何らかのO脚傾向を持つと言われるほど、非常にポピュラーな脚の悩みです。
            </p>
            <p>
              O脚には大きく分けて「構造的O脚」と「機能的O脚」の2つのタイプがあり、インソールでの改善が期待できるのは主に機能的O脚です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="card">
              <h3 className="text-base font-bold text-gray-900 mb-3">
                構造的O脚
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                骨自体の変形や関節の構造的な異常が原因のO脚です。先天的なものや、加齢による変形性膝関節症が原因の場合があります。
              </p>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs font-bold text-gray-500 mb-1">特徴</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>・骨格自体に変形がある</li>
                  <li>・力を入れても膝が寄らない</li>
                  <li>・インソールだけでは改善が難しい</li>
                  <li>・整形外科での診察が推奨される</li>
                </ul>
              </div>
            </div>

            <div className="card border-[#e8627c]">
              <h3 className="text-base font-bold text-[#e8627c] mb-3">
                機能的O脚
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                筋力バランスの崩れや歩行パターンの癖が原因のO脚です。骨自体に変形はなく、筋肉や靭帯のアンバランスによって膝が外側に開いている状態です。
              </p>
              <div className="bg-[#fdf2f4] rounded-lg p-3">
                <p className="text-xs font-bold text-[#e8627c] mb-1">特徴</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>・骨格に変形はない</li>
                  <li>・意識すれば膝を寄せられることが多い</li>
                  <li>・インソール＋ストレッチで改善が期待できる</li>
                  <li>・日本人のO脚の多くがこのタイプ</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mt-8">
            <h3 className="text-lg font-bold text-gray-900">O脚の主な原因</h3>
            <p>
              機能的O脚の原因は多岐にわたりますが、代表的なものは以下の通りです。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {[
              {
                title: "足裏アーチの崩れ（扁平足・回内足）",
                desc: "足裏のアーチが崩れると、足首が内側に倒れる「回内（オーバープロネーション）」が起きます。足首が内側に傾くと、その連鎖で膝が内旋し、結果として膝が外側に開くO脚の形になります。",
              },
              {
                title: "内転筋（内ももの筋肉）の弱化",
                desc: "太ももの内側の筋肉（内転筋群）が弱くなると、膝を内側に引き寄せる力が不足し、膝が外側に開きやすくなります。デスクワーク中心の生活で運動不足になると内転筋が衰えやすいです。",
              },
              {
                title: "歩行パターンの癖",
                desc: "足の外側に体重をかけて歩く癖（外側荷重）があると、O脚を助長します。靴底の外側ばかりが減る方は、外側荷重の癖がある可能性が高いです。",
              },
              {
                title: "骨盤の前傾・開き",
                desc: "骨盤が前傾したり外側に開いたりすると、股関節の角度が変わり、大腿骨が外旋してO脚になります。産後や姿勢の悪さが原因で骨盤のアライメントが崩れるケースも多いです。",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* インソールでO脚が改善するメカニズム */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            インソールでO脚が改善するメカニズム
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              「インソールを入れるだけでO脚が改善する」と聞くと不思議に感じるかもしれませんが、そのメカニズムは「足元から膝・骨盤へと連鎖的にアライメントを整える」という明確な理屈があります。
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                step: "STEP 1",
                title: "アーチサポートで足裏を正しい位置に",
                desc: "インソールの内側縦アーチサポートが、崩れた足裏アーチを正しい高さに持ち上げます。これにより、扁平足や回内足による足首の内側への傾きが補整されます。足裏のアーチは「建物の基礎」のようなもので、ここが正されることで上部構造の改善が始まります。",
              },
              {
                step: "STEP 2",
                title: "足首の回内を矯正",
                desc: "足裏アーチが正しい位置にサポートされると、足首が過度に内側に倒れる「回内」が矯正されます。足首が正しい角度に戻ることで、脛骨（すねの骨）のアライメントが改善され、膝への影響が変化します。",
              },
              {
                step: "STEP 3",
                title: "膝の内旋が改善し、膝が正しい位置に",
                desc: "足首から脛骨のアライメントが改善されると、膝の内旋（ねじれ）が軽減されます。膝が正しい軸で動くようになり、歩行時の膝の軌道が改善されます。これがO脚の「膝が外側に開く」という症状の改善につながります。",
              },
              {
                step: "STEP 4",
                title: "骨盤アライメントの改善",
                desc: "膝のアライメントが改善されると、股関節を介して骨盤のバランスも整いやすくなります。骨盤の前傾や開きが補整されることで、O脚の根本原因の一つである「骨盤のアライメント不良」も改善方向に向かいます。",
              },
            ].map((item) => (
              <div key={item.step} className="card">
                <div className="flex items-start gap-3">
                  <span className="bg-[#e8627c] text-white text-xs font-bold px-3 py-1 rounded-full shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mt-8">
            <p>
              このように、インソールによるO脚改善は「足裏→足首→膝→骨盤」という下から上へのキネティックチェーン（運動連鎖）を利用したアプローチです。足元の小さな変化が、全身のアライメントに波及するのです。
            </p>
            <p>
              ただし、インソールだけでO脚が完全に改善するわけではありません。内転筋やお尻の筋肉（中殿筋）のトレーニングを併用することで、より効果的な改善が期待できます。
            </p>
          </div>
        </div>
      </section>

      {/* ダイエットインソール3商品のO脚への効果比較 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            ダイエットインソール3商品のO脚改善効果を比較
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              競合サイトではO脚専用インソールのランキングが多いですが、ダイエットインソールにもO脚改善効果が期待できる製品があります。ここではダイエット効果とO脚改善効果の両方の観点から、3商品を比較します。
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                rank: "1",
                name: "ピットソール（Pitsole）",
                olegScore: "O脚改善効果：高い",
                reason:
                  "世界特許のキュボイドサポート技術により、足裏の立方骨を支点にアーチを高剛性でサポートします。内側縦アーチのサポートが特に強力で、回内足の矯正力が高いため、O脚の改善にも大きな効果が期待できます。かかと部分のヒールカップも深型で、踵骨の安定性も確保されています。",
                points: [
                  "3点アーチサポートで回内足を強力に矯正",
                  "高剛性素材で歩行中もアーチが崩れにくい",
                  "深型ヒールカップで踵骨を安定化",
                ],
                caution: "アーチサポートが強めなので、初日から長時間使用すると足裏が痛くなる場合があります。最初は2〜3時間から慣らしていきましょう。",
              },
              {
                rank: "2",
                name: "ランウェイキュアソール",
                olegScore: "O脚改善効果：中程度",
                reason:
                  "整体師監修の骨盤補整設計により、骨盤からのアプローチでO脚改善をサポートします。アーチサポートはピットソールほど強力ではありませんが、骨盤の位置を補整する設計思想がO脚の根本原因（骨盤のアライメント不良）に直接アプローチします。薄型設計のためパンプスにも使えるのが利点です。",
                points: [
                  "骨盤補整設計で根本原因にアプローチ",
                  "薄型でパンプス・ヒール靴にも対応",
                  "姿勢改善効果がO脚にもプラスに作用",
                ],
                caution: "薄型設計のためアーチサポートの強度はやや控えめです。重度のO脚には物足りなく感じる場合があります。",
              },
              {
                rank: "3",
                name: "スリムアップインソール",
                olegScore: "O脚改善効果：限定的",
                reason:
                  "傾斜設計で歩行時の筋肉を刺激する設計ですが、O脚改善に特化したアーチサポートやヒールカップの設計は限定的です。価格が手頃なため「まずインソールを試してみたい」という方には向いていますが、O脚改善を主目的とするならピットソールやランウェイキュアソールの方がおすすめです。",
                points: [
                  "傾斜設計で内側の筋肉を活性化",
                  "手頃な価格で試しやすい",
                  "基本的なアーチサポート機能あり",
                ],
                caution: "O脚改善を主目的とする場合は、上位2商品と比べるとサポート力に差があります。",
              },
            ].map((item) => (
              <div key={item.rank} className="card">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl font-bold text-[#e8627c] shrink-0">
                    {item.rank}位
                  </span>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900">
                      {item.name}
                    </h3>
                    <span className="text-sm font-medium text-[#e8627c]">
                      {item.olegScore}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {item.reason}
                </p>
                <ul className="space-y-1 mb-4">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-gray-600 flex items-start gap-2"
                    >
                      <span className="text-[#e8627c] shrink-0 mt-0.5">
                        &#10003;
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 rounded-lg p-3">
                  <p className="text-xs font-bold text-amber-700 mb-1">
                    注意点
                  </p>
                  <p className="text-sm text-amber-800">{item.caution}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/ranking/"
              className="inline-block bg-[#e8627c] hover:bg-[#d14d68] text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              ダイエットインソールランキングをもっと見る
            </Link>
          </div>
        </div>
      </section>

      {/* 選び方3ポイント */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            O脚改善インソールの選び方3ポイント
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              O脚改善を目的としたインソールを選ぶ際は、以下の3つのポイントを確認しましょう。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                num: "01",
                title: "内側縦アーチのサポート力",
                desc: "O脚改善の最重要ポイントです。内側縦アーチ（土踏まず）をしっかり支えるインソールを選びましょう。アーチ部分を指で押してみて、簡単に潰れてしまうものはサポート力が不十分です。体重をかけても形状が維持される硬度のものが理想です。",
              },
              {
                num: "02",
                title: "かかとの安定性（ヒールカップ）",
                desc: "かかとが左右にブレると、せっかくのアーチサポートも効果が半減します。深型のヒールカップがあり、踵骨をしっかり包み込むインソールを選びましょう。かかとが安定することで、足首→膝→骨盤への連鎖的なアライメント補整がスムーズになります。",
              },
              {
                num: "03",
                title: "正しいサイズ選び",
                desc: "大きすぎるインソールは靴の中でズレてアーチのサポート位置がずれます。小さすぎると足全体をカバーできません。購入後にカットして調整できるタイプを選び、自分の足サイズに正確に合わせましょう。靴に入れたときにインソールが浮いたりシワにならないか確認してください。",
              },
            ].map((item) => (
              <div key={item.num} className="card">
                <span className="text-2xl font-bold text-[#e8627c] block mb-2">
                  {item.num}
                </span>
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O脚改善のためのセルフケア */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            インソールと併用したいO脚改善セルフケア
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              インソールはO脚改善の強力なサポートツールですが、ストレッチや筋トレを併用することでさらに効果的です。以下のセルフケアを日常に取り入れましょう。
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "内転筋のトレーニング（ワイドスクワット）",
                desc: "足を肩幅より広く開き、つま先を外側に向けてスクワットします。太ももの内側（内転筋）を意識して行うことで、膝を内側に引き寄せる力が強化されます。1日10回×3セットを目安にしましょう。",
              },
              {
                title: "中殿筋のトレーニング（横向きレッグレイズ）",
                desc: "横向きに寝て、上側の脚をゆっくり上げ下げします。お尻の横の筋肉（中殿筋）が鍛えられ、骨盤の安定性が向上します。左右各15回×2セットが目安です。",
              },
              {
                title: "外側広筋のストレッチ（太もも外側）",
                desc: "太ももの外側の筋肉（外側広筋）が硬くなると膝が外側に引っ張られます。フォームローラーやテニスボールで太ももの外側をほぐすストレッチを行いましょう。",
              },
              {
                title: "足裏のアーチトレーニング（タオルギャザー）",
                desc: "床にタオルを敷き、足の指でタオルをたぐり寄せます。足裏の筋肉が鍛えられ、アーチの維持力が向上します。インソールのサポートと併せることで、自力でのアーチ保持力も育てましょう。",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O脚セルフチェック */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            あなたのO脚の程度は？セルフチェック法
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              自分のO脚がどの程度なのかを知ることは、適切な対策を選ぶ上で重要です。以下のセルフチェック方法で、ご自身のO脚の程度を確認してみましょう。
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "膝の隙間チェック（スタンディングテスト）",
                desc: "裸足でまっすぐ立ち、両足のくるぶし同士をくっつけます。この状態で両膝の間の隙間を確認します。指1本分（約2cm）以内なら軽度、指2本分（約4cm）なら中等度、指3本分（約6cm）以上なら重度のO脚の目安です。鏡の前で行うとより正確に確認できます。",
              },
              {
                title: "靴底の減り方チェック",
                desc: "普段履いている靴の底を確認しましょう。外側ばかりが減っている場合は、歩行時に外側に荷重がかかっている証拠で、O脚の傾向があります。理想的な靴底の減り方は、かかとのやや外側とつま先部分が均等に減ることです。",
              },
              {
                title: "歩行パターンチェック",
                desc: "家族や友人に後ろから歩き方を見てもらいましょう。膝が外側に開いて歩いている、つま先が外を向いている（ガニ股歩き）場合は、O脚に関連した歩行パターンの可能性があります。スマートフォンで動画を撮ってもらうとより客観的に確認できます。",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="card mt-6">
            <h3 className="text-base font-bold text-gray-900 mb-4">
              O脚の程度別おすすめ対策
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[#f3e0e4]">
                    <th className="py-2 text-left text-gray-500 font-medium">
                      程度
                    </th>
                    <th className="py-2 text-left text-gray-500 font-medium">
                      膝の隙間
                    </th>
                    <th className="py-2 text-left text-gray-500 font-medium">
                      おすすめ対策
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      degree: "軽度",
                      gap: "指1本分以内",
                      action:
                        "インソール＋ストレッチで改善が期待できる",
                    },
                    {
                      degree: "中等度",
                      gap: "指1〜2本分",
                      action:
                        "インソール＋ストレッチ＋筋トレを併用。改善が見られない場合は整形外科も検討",
                    },
                    {
                      degree: "重度",
                      gap: "指3本分以上",
                      action:
                        "まず整形外科を受診。医師の指導のもとインソール（オルソティクス含む）を検討",
                    },
                  ].map((row) => (
                    <tr
                      key={row.degree}
                      className="border-b border-gray-100"
                    >
                      <td className="py-2 text-gray-900 font-medium">
                        {row.degree}
                      </td>
                      <td className="py-2 text-gray-600">{row.gap}</td>
                      <td className="py-2 text-gray-600">{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 注意点 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            O脚改善インソールの注意点
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "重度のO脚はインソールだけでは不十分",
                desc: "膝の隙間が指3本以上開く重度のO脚や、膝に痛みがある場合は、インソールだけでの改善は期待できません。整形外科を受診し、レントゲン検査で骨格の状態を確認してもらいましょう。医療用のオーダーメイドインソール（オルソティクス）が必要な場合もあります。",
              },
              {
                title: "最初は短時間から慣らす",
                desc: "O脚の状態で長年歩いてきた筋肉や関節に、いきなり正しいアライメントを強制すると痛みが出ることがあります。最初は2〜3時間から始め、1週間かけて徐々に使用時間を延ばしていきましょう。",
              },
              {
                title: "靴との相性を確認する",
                desc: "アーチサポートの厚みがある分、靴が窮屈に感じることがあります。紐のある靴やベルクロ付きの靴であれば調整しやすいです。サイズに余裕のない靴に無理に入れると、足を圧迫して逆効果になります。",
              },
              {
                title: "左右差に注意する",
                desc: "O脚は左右で程度が異なることが多いです。片方だけ極端にO脚が強い場合は、左右で異なるアプローチが必要な場合もあります。気になる場合は専門家に相談しましょう。",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O脚の程度別インソール効果 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            O脚の程度別インソール効果の期待度
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            O脚の程度によって、インソールに期待できる効果は異なります。自分の状態を確認し、適切な対策を選びましょう。
          </p>
          <div className="space-y-3 mb-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-1">軽度O脚（膝の隙間が指2本程度）</h4>
              <p className="text-gray-700 text-sm">インソール＋ストレッチで改善が大いに期待できます。日常的な使用で徐々に脚のラインが整っていくでしょう。</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold text-yellow-800 mb-1">中度O脚（膝の隙間が指3〜4本）</h4>
              <p className="text-gray-700 text-sm">インソール＋運動療法の併用を推奨します。インソールだけでなく、筋力トレーニングやストレッチを組み合わせることが重要です。</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-1">重度O脚</h4>
              <p className="text-gray-700 text-sm">整形外科の受診を優先してください。インソールは補助的な役割にとどまり、専門的な治療が必要です。</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm bg-blue-50 p-3 rounded-lg">
            いずれの程度でも、かかとの安定感とアーチサポートの両方があるインソールを選ぶことが重要です。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="card group">
                <summary className="cursor-pointer text-base font-bold text-gray-900 list-none flex items-center justify-between gap-2">
                  <span className="flex items-start gap-2">
                    <span className="text-[#e8627c] shrink-0">Q.</span>
                    {faq.question}
                  </span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">
                    &#9662;
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed pl-6">
                  <span className="text-[#e8627c] font-bold">A.</span>{" "}
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            まとめ
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              O脚の改善にインソールは効果的なアプローチです。特に機能的O脚に対しては、足裏アーチサポートによる「足首→膝→骨盤」の連鎖的なアライメント補整が科学的にも理に適ったメカニズムです。
            </p>
            <p>
              ダイエットインソール3商品の中では、3点アーチサポートと深型ヒールカップを備えたピットソールがO脚改善にも最も適しています。ランウェイキュアソールは骨盤からのアプローチで根本原因に働きかけ、薄型でパンプスにも使える利点があります。
            </p>
            <p>
              ただし、重度のO脚は医療機関の受診が必要です。また、インソールだけでなく内転筋や中殿筋のトレーニングを併用することで、より効果的な改善が期待できます。O脚の改善は見た目の改善だけでなく、膝や腰の将来的な健康を守る投資でもあります。
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/ranking/"
              className="inline-block bg-[#e8627c] hover:bg-[#d14d68] text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              ダイエットインソールランキングを見る
            </Link>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/articles/bunion-insole/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                外反母趾にインソールは効果ある？痛みを軽減するおすすめと注意点
              </p>
            </Link>
            <Link
              href="/articles/pelvis-correction/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                インソールで骨盤矯正はできる？正しい知識と選び方
              </p>
            </Link>
            <Link
              href="/ranking/"
              className="block p-4 border border-[#e8627c] rounded-xl hover:bg-[#fdf2f4] transition-colors bg-[#fdf2f4]/50"
            >
              <p className="text-sm font-semibold text-[#e8627c]">
                おすすめダイエットインソール3選を見る →
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
