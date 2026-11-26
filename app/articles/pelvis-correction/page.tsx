import type { Metadata } from "next";
import VerificationNote from "../../components/VerificationNote";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import MedicalDisclaimer from "../../components/MedicalDisclaimer";

export const metadata: Metadata = {
  title:
    "骨盤矯正インソールの考え方と選び方｜効果の出典の有無も確認｜ソールラボ",
  description:
    "骨盤矯正をうたうインソールの考え方と選び方を整理。3商品の公式情報と、効果を示す出典が確認できていない点、日常でできる骨盤ケアの習慣をまとめました。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/pelvis-correction/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline:
    "骨盤矯正インソールの考え方と選び方",
  description:
    "骨盤の歪みの原因、インソールの考え方と選び方、3商品の公式情報、日常の習慣を整理。",
  author: { "@type": "Organization", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: {
    "@type": "Organization",
    name: "ソールラボ",
    url: "https://sole-laboratory.com",
  },
  datePublished: "2026-04-08",
  dateModified: "2026-11-26",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "骨盤矯正インソールはどのくらいで効果を感じますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "感じ方や期間を示す公的なデータは見当たらず、当サイトも商品を使用していないため、期間の目安はお示しできません。メーカーの公式情報で確認できるのは、各商品の設計（アーチサポートの構造）やサイズまでです。",
      },
    },
    {
      "@type": "Question",
      name: "インソールだけで骨盤の歪みは治りますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "インソールで骨盤の歪みが治ることを示す出典は確認できていません。痛みや違和感が続く場合は、整形外科などの医療機関に相談してください。",
      },
    },
    {
      "@type": "Question",
      name: "骨盤矯正インソールは男性でも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、男女問わず使用できます。骨盤の歪みは性別に関係なく起こります。ピットソールはXS〜Lサイズ（21.0〜27.5cm）で、ビジネスシューズにも対応しています。",
      },
    },
    {
      "@type": "Question",
      name: "骨盤矯正ベルトとインソールはどちらが効果的ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "骨盤ベルトは骨盤まわりに巻いて使う製品、インソールは靴の中に敷いて使う製品で、使い方が異なります。どちらが効果的かを比べた出典は確認できていないため、当サイトでは優劣を付けていません。",
      },
    },
    {
      "@type": "Question",
      name: "産後の骨盤矯正にもインソールは有効ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "産後の骨盤ケアにインソールが有効であることを示す出典は確認できていません。産後の体の状態には個人差があるため、使い始める前に医師に相談してください。",
      },
    },
  ],
};

export default function PelvisCorrectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "知識・コラム", href: "/articles/" }, { label: "骨盤矯正インソール" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#faf7f3] to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-[#8a6a4f] font-semibold mb-3">
            骨盤矯正ガイド
          </p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            骨盤矯正
            <br className="md:hidden" />
            <span className="text-[#8a6a4f]">インソール</span>の
            <br className="md:hidden" />
            考え方と選び方
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            腰痛・冷え・下半身太り……その不調、骨盤の歪みが原因かもしれません。
            <br className="hidden md:block" />
            インソールの考え方と選び方、日常の習慣を整理します（効果を示す出典は確認できていません）。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <MedicalDisclaimer />
      </div>

      {/* Table of Contents */}
      <div className="max-w-3xl mx-auto px-4">
        <VerificationNote />
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-6">
        <div className="bg-[#faf7f3] border border-[#e8ded6] rounded-xl p-5">
          <p className="text-sm font-bold text-gray-900 mb-3">インソールでの対策に進む</p>
          <div className="space-y-2">
          <a href="/articles/flat-feet/" className="block bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-[#6f543c] hover:bg-[#faf7f3] transition-colors">扁平足とインソール対策</a>
          <a href="/articles/how-to-choose/" className="block bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-[#6f543c] hover:bg-[#faf7f3] transition-colors">失敗しないインソールの選び方</a>
          <a href="/diagnosis/" className="block bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-[#6f543c] hover:bg-[#faf7f3] transition-colors">30秒診断で自分に合うインソールを探す</a>
          </div>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
          <p className="text-sm font-bold text-gray-900 mb-3">この記事の内容</p>
          <ol className="space-y-1.5 text-sm text-gray-600">
            <li>
              <a href="#what-is" className="hover:text-[#8a6a4f] transition-colors">
                1. 骨盤の歪みとは？
              </a>
            </li>
            <li>
              <a href="#cause" className="hover:text-[#8a6a4f] transition-colors">
                2. 骨盤が歪む原因
              </a>
            </li>
            <li>
              <a href="#mechanism" className="hover:text-[#8a6a4f] transition-colors">
                3. インソールと骨盤の関係の考え方
              </a>
            </li>
            <li>
              <a href="#how-to-choose" className="hover:text-[#8a6a4f] transition-colors">
                4. 骨盤矯正インソールの選び方
              </a>
            </li>
            <li>
              <a href="#recommend" className="hover:text-[#8a6a4f] transition-colors">
                5. おすすめ骨盤矯正インソール3選
              </a>
            </li>
            <li>
              <a href="#habits" className="hover:text-[#8a6a4f] transition-colors">
                6. 日常でできる骨盤ケアの習慣
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#8a6a4f] transition-colors">
                7. よくある質問（FAQ）
              </a>
            </li>
            <li>
              <a href="#summary" className="hover:text-[#8a6a4f] transition-colors">
                8. まとめ
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* 骨盤の歪みとは？ */}
      <section id="what-is" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#8a6a4f]">
          骨盤の歪みとは？
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
          骨盤は、左右の寛骨（かんこつ）・仙骨・尾骨で構成される身体の中心的な骨格構造です。上半身と下半身をつなぐ「要（かなめ）」の役割を果たしており、骨盤が正しい位置にあることで背骨や股関節が本来の機能を発揮できます。
        </p>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
          「骨盤の歪み」とは、骨盤が<strong>前傾・後傾・左右の傾き・回旋</strong>のいずれかの方向にずれている状態を指します。骨盤自体が変形するわけではなく、周囲の筋肉や靭帯のバランスが崩れることで骨盤の位置が本来のニュートラルポジションからずれてしまうのです。
        </p>

        <div className="bg-[#faf7f3] border border-[#e8ded6] rounded-xl p-5 md:p-6 mb-6">
          <p className="text-sm font-bold text-gray-900 mb-3">骨盤の歪みの主なタイプ</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[#8a6a4f] font-bold mt-0.5">1.</span>
              <span><strong>前傾タイプ</strong> -- 反り腰になり、お腹がぽっこり出やすい。腰痛の原因になりやすい</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8a6a4f] font-bold mt-0.5">2.</span>
              <span><strong>後傾タイプ</strong> -- 猫背・フラットバックになり、お尻が垂れやすい。肩こりを招きやすい</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8a6a4f] font-bold mt-0.5">3.</span>
              <span><strong>左右傾斜タイプ</strong> -- 片側に重心が偏り、脚長差や腰の片側痛を引き起こす</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8a6a4f] font-bold mt-0.5">4.</span>
              <span><strong>回旋タイプ</strong> -- 骨盤がねじれた状態で、歩行時のバランス悪化や膝の痛みにつながる</span>
            </li>
          </ul>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
          <p className="text-sm font-bold text-gray-900 mb-2">骨盤の歪みが身体に与える影響</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            骨盤が歪むと、腰痛・肩こり・冷え性・便秘・下半身太りなど多くの不調につながります。骨盤は内臓を支える器の役割も果たしているため、歪みによって内臓が下垂するとぽっこりお腹や消化機能の低下を招きます。さらに血管やリンパ管が圧迫されることで血行不良が生じ、むくみや冷えの原因にもなります。
          </p>
        </div>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          厚生労働省の国民生活基礎調査によると、腰痛は日本人が訴える症状の第1位です。その多くに骨盤の歪みが関与しているとされており、骨盤矯正は健康維持の基本ともいえるアプローチです。
        </p>
      </section>

      {/* 骨盤が歪む原因 */}
      <section id="cause" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#8a6a4f]">
          骨盤が歪む原因
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
          骨盤の歪みは一つの原因で起こるわけではなく、日常生活のさまざまな習慣が積み重なって生じます。まずは自分に当てはまる原因を把握し、根本的な改善につなげてください。
        </p>

        <div className="space-y-4 mb-6">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#8a6a4f] mr-2">1</span>足裏アーチの崩れ
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              身体の土台である足裏のアーチが崩れると、膝が内側に倒れ（ニーイン）、股関節の位置が変わり、骨盤が連動して歪みます。扁平足や開張足の方は骨盤が歪みやすい傾向にあります。人間の身体は「足裏→膝→骨盤→背骨」と下から積み上げる構造のため、土台の崩れが全体に波及するのです。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#8a6a4f] mr-2">2</span>座り姿勢のクセ
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              脚を組む、片方のお尻に重心を乗せる、浅く座って背もたれに寄りかかるなどの座り方は、骨盤の左右差や前後の傾きを助長します。デスクワーカーは1日8時間以上座っていることも多く、骨盤への影響は非常に大きくなります。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#8a6a4f] mr-2">3</span>筋力バランスの偏り
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              骨盤周りのインナーマッスル（腸腰筋・骨盤底筋群・腹横筋など）の筋力が低下すると、骨盤を正しい位置に保つ力が弱まります。特に運動不足の方や加齢により筋力が低下している方は、骨盤が不安定になりやすくなります。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#8a6a4f] mr-2">4</span>出産による変化
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              妊娠・出産では「リラキシン」というホルモンの影響で骨盤周りの靭帯が緩みます。産後にケアせず放置すると、骨盤が開いたまま固定されてしまうことがあります。産後の骨盤ケアは早めに始めることが重要です。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#8a6a4f] mr-2">5</span>片側重心・カバンの持ち方
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              いつも同じ肩にバッグをかける、片足に重心を乗せて立つなどの習慣は、左右の筋バランスを崩し骨盤の傾きを引き起こします。日常の何気ないクセが長期間にわたり骨盤を歪ませていきます。
            </p>
          </div>
        </div>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          注目すべきは、上記の原因の多くが<strong>足元のバランスと密接に関連している</strong>点です。足裏アーチの崩れが起点となり骨盤の歪みにつながるケースが非常に多いため、足元からアプローチする骨盤矯正インソールが効果的なのです。
        </p>
      </section>

      {/* インソールと骨盤の関係の考え方 */}
      <section id="mechanism" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#8a6a4f]">
          インソールと骨盤の関係の考え方
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
          骨盤矯正をうたうインソールは、足裏のアーチを支えて立ち方・歩き方を整えることを目的とした商品です。骨盤そのものの位置が変わることを示す研究の出典は当サイトでは確認できていないため、ここでは一般的な考え方として3つの視点を整理します。
        </p>

        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className="w-10 h-10 bg-[#f3ece4] rounded-lg flex items-center justify-center mb-3">
              <span className="text-[#8a6a4f] font-bold text-lg">1</span>
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-2">足裏アーチの再構築</h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              内側縦アーチ（土踏まず）・外側縦アーチ・横アーチを支える形状の商品が多く、足裏の接地を安定させることを目的としています。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className="w-10 h-10 bg-[#f3ece4] rounded-lg flex items-center justify-center mb-3">
              <span className="text-[#8a6a4f] font-bold text-lg">2</span>
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-2">膝・股関節の並びへの目配り</h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              足裏を支えることで、膝や股関節を含む下肢のアライメント（骨の配列）にも目を向ける、という考え方です。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className="w-10 h-10 bg-[#f3ece4] rounded-lg flex items-center justify-center mb-3">
              <span className="text-[#8a6a4f] font-bold text-lg">3</span>
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-2">立ち方・歩き方や運動との組み合わせ</h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              骨盤を支えるインナーマッスル（腸腰筋・骨盤底筋群・中殿筋など）を使うのは、日々の立ち方・歩き方や運動です。インソールはその補助として使うものと考えてください。
            </p>
          </div>
        </div>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
          骨盤ベルトやガードルは骨盤まわりに着けて使う製品、インソールは靴の中に敷いて足裏を支える製品で、使い方が異なります。
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
          <p className="text-sm font-bold text-gray-900 mb-2">研究の出典について</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            なお、インソールで骨盤の傾きが変わることを示す研究について、当サイトでは出典を確認できていません。この節の内容は一般的な考え方の説明で、効果を保証するものではありません。
          </p>
        </div>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          使い始めに違和感がある場合は、短い時間から試し、痛みが続くときは使用を中止してください。
        </p>
      </section>

      {/* 骨盤矯正インソールの選び方 */}
      <section id="how-to-choose" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#8a6a4f]">
          骨盤矯正インソールの選び方
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
          「骨盤矯正」をうたうインソールは多数あります。比べるときは、以下の5つのポイントを公式の商品説明で確認してください。
        </p>

        <div className="space-y-4 mb-6">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#8a6a4f] mr-2">1</span>3点アーチサポート構造
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              骨盤矯正に最も重要なのが、内側縦アーチ・外側縦アーチ・横アーチの3つを同時にサポートする構造です。どのアーチを支える設計かは商品ごとに異なるため、公式の商品説明で確認してください。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#8a6a4f] mr-2">2</span>ヒールカップの深さ
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              かかとは身体の重心の起点です。かかとを包む形状（ヒールカップ）があるかどうかも、商品を比べるときの確認項目の一つです。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#8a6a4f] mr-2">3</span>特許の記載
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              特許の有無と特許番号を公式サイトに記載しているかも、確認項目の一つです。ただし特許は技術の新規性などが認められたもので、効果を保証するものではありません。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#8a6a4f] mr-2">4</span>素材の硬さと耐久性
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              骨盤矯正インソールは、ある程度の硬さが必要です。柔らかすぎるクッション素材ではアーチを支える力が不足します。高反発素材や特殊樹脂を使用し、長期間使ってもアーチサポート力が持続する製品を選ぶことをおすすめします。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#8a6a4f] mr-2">5</span>サイズ展開の豊富さ
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              骨盤矯正インソールは足にフィットして初めて効果を発揮します。サイズが合わないと重心がずれ、逆効果になることも。XS〜Lなど細かいサイズ展開がある製品ほど、自分の足に合ったものを選べます。
            </p>
          </div>
        </div>
      </section>

      {/* おすすめ骨盤矯正インソール3選 */}
      <section id="recommend" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#8a6a4f]">
          おすすめ骨盤矯正インソール3選
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
          当サイトで取り扱っている3商品を、骨盤矯正の観点から比較・解説します。内容は各商品の公式サイトで確認できた範囲です。骨盤への効果を示す出典は、いずれの商品についても確認できていません。
        </p>

        {/* ピットソール */}
        <div className="border-2 border-[#8a6a4f] rounded-xl p-5 md:p-6 mb-6 relative">
          <span className="absolute -top-3 left-4 bg-[#8a6a4f] text-white text-xs font-bold px-3 py-1 rounded-full">
            骨盤矯正おすすめ No.1
          </span>
          <h3 className="font-bold text-gray-900 text-base md:text-lg mt-2 mb-3">
            ピットソール（Pitsole）
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                BMZ社の<strong>世界特許技術</strong>を搭載した高機能インソール。累計販売数は200万足（2025年4月時点・販売元グループのプレスリリース）です。
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>-- 世界特許取得のアーチサポート技術</li>
                <li>-- サイズ展開：XS〜L（21.0〜27.5cm）</li>
                <li>-- 3点アーチサポートで立ち方・歩き方を安定させる設計</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">特許技術</p>
              <p className="text-sm font-medium text-gray-900 mb-2">世界特許あり（BMZ社）</p>
              <p className="text-xs text-gray-500 mb-1">価格（税込）</p>
              <p className="text-sm font-medium text-gray-900">1足あたり 6,578円〜</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/pitsole"
              className="inline-block bg-[#8a6a4f] text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[#8a6a4f] transition-colors"
            >
              ピットソールの詳細を見る
            </Link>
            <Link
              href="/pitsole/price"
              className="inline-block border border-[#8a6a4f] text-[#8a6a4f] text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[#faf7f3] transition-colors"
            >
              料金プランを確認
            </Link>
          </div>
        </div>

        {/* ランウェイキュアソール */}
        <div className="border border-gray-200 rounded-xl p-5 md:p-6 mb-6">
          <h3 className="font-bold text-gray-900 text-base md:text-lg mb-3">
            ランウェイキュアソール（RunwayCureSole）
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                <strong>3点アーチサポート</strong>で足裏全体のバランスを整え、立ち方・歩き方を安定させる設計。美姿勢にフォーカスした商品コンセプトで、骨盤から美しいボディラインを目指す女性に人気です。
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>-- 3点アーチサポート構造</li>
                <li>-- サイズ展開：M・L（22.5〜25cm）</li>
                <li>-- 美姿勢・美ボディラインに特化</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">特許技術</p>
              <p className="text-sm font-medium text-gray-900 mb-2">なし（独自設計）</p>
              <p className="text-xs text-gray-500 mb-1">価格（税込）</p>
              <p className="text-sm font-medium text-gray-900">1足あたり 4,950円〜</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/runway-cure-sole"
              className="inline-block bg-[#8a6a4f] text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[#8a6a4f] transition-colors"
            >
              ランウェイキュアソールの詳細を見る
            </Link>
            <Link
              href="/runway-cure-sole/price"
              className="inline-block border border-[#8a6a4f] text-[#8a6a4f] text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[#faf7f3] transition-colors"
            >
              料金プランを確認
            </Link>
          </div>
        </div>

        {/* スリムアップインソール */}
        <div className="border border-gray-200 rounded-xl p-5 md:p-6 mb-6">
          <h3 className="font-bold text-gray-900 text-base md:text-lg mb-3">
            スリムアップインソール（SlimUpInsole）
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                <strong>美容整体師監修</strong>の骨盤矯正インソール。整体の知見を活かし、足裏から骨盤・背骨のラインを総合的に整える設計です。手頃な価格で骨盤矯正を始めたい方におすすめです。
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>-- 美容整体師監修の骨盤矯正設計</li>
                <li>-- 男女兼用の幅広いサイズ対応</li>
                <li>-- コストパフォーマンスが高い</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">特許技術</p>
              <p className="text-sm font-medium text-gray-900 mb-2">なし（美容整体師監修）</p>
              <p className="text-xs text-gray-500 mb-1">価格（税込）</p>
              <p className="text-sm font-medium text-gray-900">単品6,980円（公式通販・セット販売の記載なし、2026年11月2日確認）</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/slim-up-insole"
              className="inline-block bg-[#8a6a4f] text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[#8a6a4f] transition-colors"
            >
              スリムアップインソールの詳細を見る
            </Link>
            <Link
              href="/slim-up-insole/price"
              className="inline-block border border-[#8a6a4f] text-[#8a6a4f] text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[#faf7f3] transition-colors"
            >
              料金プランを確認
            </Link>
          </div>
        </div>

        <div className="bg-[#faf7f3] border border-[#e8ded6] rounded-xl p-5 text-center">
          <p className="text-sm text-gray-700 mb-3">
            3商品の詳しい比較は総合ランキングをご覧ください
          </p>
          <Link
            href="/ranking"
            className="inline-block bg-[#8a6a4f] text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-[#8a6a4f] transition-colors"
          >
            ダイエットインソールおすすめランキングを見る
          </Link>
        </div>
      </section>

      {/* 骨盤矯正の効果を高める習慣 */}
      <section id="habits" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#8a6a4f]">
          日常でできる骨盤ケアの習慣
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
          インソールとは別に、日常生活で意識しやすい習慣をまとめました。取り入れやすいものから始めてみてください。
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              骨盤まわりのストレッチ
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              骨盤周囲の筋肉（腸腰筋・梨状筋・大殿筋）の柔軟性を高めるストレッチを毎日行ってください。寝る前に仰向けで片膝を胸に引き寄せるストレッチを左右30秒ずつ行うだけでも、骨盤まわりの筋肉がほぐれます。インソールで整えた骨盤の位置を筋肉の柔軟性でキープするイメージです。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              体幹・骨盤底筋トレーニング
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              骨盤を正しい位置にキープするための筋力を養ってください。ヒップリフト（仰向けでお尻を持ち上げる）やプランクなどが一般的です。持病や痛みがある場合は、医師や専門家に相談のうえ行ってください。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              座り方の改善
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              椅子に座るときは、坐骨（お尻の骨）を左右均等に座面に当て、骨盤を立てることを意識してください。脚を組むクセがある方は意識的にやめることが大切です。30分に1回は立ち上がって骨盤をリセットすると、歪みの蓄積を防げます。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              正しい歩き方の実践
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              骨盤矯正インソールを入れた靴で歩く際は、かかとから着地して足指で蹴り出す意識を持ってください。歩幅をやや広めにし、骨盤から足を前に出すイメージで歩くと、骨盤周りの筋肉が効率よく使われます。1日20〜30分のウォーキングで十分です。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              左右均等を意識した生活
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              バッグは左右交互に持つ、立つときは両足に均等に体重をかける、寝るときは仰向けを基本にするなど、日常動作での左右差をなくしていくことが重要です。小さな意識の積み重ねが骨盤の左右バランス改善につながります。
            </p>
          </div>
        </div>
      </section>

      {/* よくある質問（FAQ） */}
      <section id="faq" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#8a6a4f]">
          よくある質問（FAQ）
        </h2>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              Q. 骨盤矯正インソールはどのくらいで効果を感じますか？
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              A. 感じ方や期間を示す公的なデータは見当たらず、当サイトも商品を使用していないため、期間の目安はお示しできません。メーカーの公式情報で確認できるのは、各商品の設計（アーチサポートの構造）やサイズまでです。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              Q. インソールだけで骨盤の歪みは治りますか？
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              A. インソールで骨盤の歪みが治ることを示す出典は確認できていません。痛みや違和感が続く場合は、整形外科などの医療機関に相談してください。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              Q. 骨盤矯正インソールは男性でも使えますか？
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              A. はい、男女問わず使用できます。骨盤の歪みは性別に関係なく起こり、特にデスクワーク中心の男性は骨盤の後傾が起きやすい傾向があります。ピットソールはXS〜Lサイズ（21.0〜27.5cm）で、ビジネスシューズやスニーカーなど幅広い靴に対応しています。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              Q. 骨盤矯正ベルトとインソールはどちらが効果的ですか？
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              A. 骨盤ベルトは骨盤まわりに巻いて使う製品、インソールは靴の中に敷いて使う製品で、使い方が異なります。どちらが効果的かを比べた出典は確認できていないため、当サイトでは優劣を付けていません。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              Q. 産後の骨盤矯正にもインソールは有効ですか？
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              A. 産後の骨盤ケアにインソールが有効であることを示す出典は確認できていません。産後の体の状態には個人差があるため、使い始める前に医師に相談してください。
            </p>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section id="summary" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#8a6a4f]">
          まとめ
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
          骨盤の歪みは腰痛・冷え・下半身太りなど、さまざまな不調の根本原因となります。この記事では、骨盤の歪みの原因から骨盤矯正インソールの考え方・選び方・商品の公式情報・日常の習慣までを整理しました。効果を示す出典は確認できていない点にご注意ください。
        </p>

        <div className="bg-[#faf7f3] border border-[#e8ded6] rounded-xl p-5 md:p-6 mb-6">
          <p className="text-sm font-bold text-gray-900 mb-3">この記事のポイント</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[#8a6a4f] font-bold shrink-0">--</span>
              <span>骨盤の歪みは前傾・後傾・左右傾斜・回旋の4タイプに分類される</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8a6a4f] font-bold shrink-0">--</span>
              <span>足裏アーチの崩れが骨盤の歪みの大きな原因となっている</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8a6a4f] font-bold shrink-0">--</span>
              <span>インソールで骨盤の歪みが治ることを示す出典は確認できていない</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8a6a4f] font-bold shrink-0">--</span>
              <span>選ぶ際は3点アーチサポート・ヒールカップ・特許技術を重視</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8a6a4f] font-bold shrink-0">--</span>
              <span>痛みや違和感が続くときは医療機関に相談する</span>
            </li>
          </ul>
        </div>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
          インソールは日常の靴に入れるだけで使えるため、特別な時間を確保する必要はありません。
        </p>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
          選ぶ際は、各商品の公式サイトでサイズ・設計・返品条件を確認してください。
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/ranking"
            className="inline-block bg-[#8a6a4f] text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-[#8a6a4f] transition-colors text-center"
          >
            インソールおすすめランキングを見る
          </Link>
          <Link
            href="/pitsole"
            className="inline-block border border-[#8a6a4f] text-[#8a6a4f] text-sm font-bold px-6 py-3 rounded-lg hover:bg-[#faf7f3] transition-colors text-center"
          >
            ピットソールの詳細を見る
          </Link>
        </div>
      </section>
      {/* 関連記事 */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/articles/posture-correction/" className="block p-4 border border-[#e8ded6] rounded-xl hover:bg-[#faf7f3] transition-colors">
              <p className="text-sm font-semibold text-gray-900">猫背を改善するインソールの選び方【姿勢矯正ガイド】</p>
            </Link>
            <Link href="/articles/leg-slimming/" className="block p-4 border border-[#e8ded6] rounded-xl hover:bg-[#faf7f3] transition-colors">
              <p className="text-sm font-semibold text-gray-900">脚痩せしたい人のインソール選びガイド</p>
            </Link>
            <Link href="/articles/flat-feet/" className="block p-4 border border-[#e8ded6] rounded-xl hover:bg-[#faf7f3] transition-colors">
              <p className="text-sm font-semibold text-gray-900">扁平足・浮き指にインソールは効果ある？おすすめ3選</p>
            </Link>
            <Link href="/ranking/" className="block p-4 border border-[#8a6a4f] rounded-xl hover:bg-[#faf7f3] transition-colors bg-[#faf7f3]/50">
              <p className="text-sm font-semibold text-[#8a6a4f]">おすすめダイエットインソール3選を見る →</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
