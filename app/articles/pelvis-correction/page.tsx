import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "骨盤矯正インソールの効果を科学的に解説｜ソールラボ",
  description:
    "骨盤の歪みは腰痛・冷え・下半身太りの原因に。骨盤矯正インソールの効果・仕組み・選び方を科学的根拠とともに徹底解説。おすすめ3選や日常でできる骨盤ケア習慣まで網羅した完全ガイド。",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "骨盤矯正インソールの効果を科学的に解説",
  description:
    "骨盤の歪みの原因とインソールによる矯正メカニズムを科学的に解説。選び方・おすすめ商品・効果を高める習慣まで網羅。",
  author: {
    "@type": "Organization",
    name: "ソールラボ",
    url: "https://sole-lab.com",
  },
  publisher: {
    "@type": "Organization",
    name: "ソールラボ",
    url: "https://sole-lab.com",
  },
  datePublished: "2026-04-08",
  dateModified: "2026-04-08",
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
        text: "個人差がありますが、歩行時の安定感は1〜2週間で実感する方が多いです。骨盤まわりの変化を感じるには2〜3ヶ月の継続使用が目安です。毎日の使用とストレッチの併用が効果を早めます。",
      },
    },
    {
      "@type": "Question",
      name: "インソールだけで骨盤の歪みは治りますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "インソール単体で完全に骨盤の歪みを治すことは難しいですが、足元のバランスを整えることで骨盤が正しい位置に戻りやすくなります。ストレッチや筋トレと併用することで、より高い矯正効果が期待できます。",
      },
    },
    {
      "@type": "Question",
      name: "骨盤矯正インソールは男性でも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、男女問わず使用できます。骨盤の歪みは性別に関係なく起こります。ピットソールはXS〜Lサイズ（21〜27.5cm）の男女兼用設計で、ビジネスシューズにも対応しています。",
      },
    },
    {
      "@type": "Question",
      name: "骨盤矯正ベルトとインソールはどちらが効果的ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "骨盤矯正ベルトは装着中のみ骨盤を固定するのに対し、インソールは足元から自然に骨盤の位置を整えます。ベルトは筋力低下を招く恐れがありますが、インソールは体幹筋肉を活性化させるため、長期的な改善にはインソールが適しています。",
      },
    },
    {
      "@type": "Question",
      name: "産後の骨盤矯正にもインソールは有効ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "産後の骨盤ケアにもインソールは有効です。出産で緩んだ骨盤周りの靭帯が戻る産後6ヶ月までの期間は、特にインソールによる足元からのサポートが効果的です。ただし、産後1ヶ月は安静が優先なので、医師に相談のうえ使用を開始してください。",
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
      <nav
        aria-label="パンくずリスト"
        className="max-w-4xl mx-auto px-4 py-3 text-xs text-gray-500"
      >
        <ol className="flex items-center gap-1">
          <li>
            <Link href="/" className="hover:text-[#0ea5e9] transition-colors">
              ホーム
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-900 font-medium">
            骨盤矯正インソールの効果を科学的に解説
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-[#0ea5e9] font-semibold mb-3">
            骨盤矯正ガイド
          </p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            骨盤矯正
            <br className="md:hidden" />
            <span className="text-[#0ea5e9]">インソール</span>の効果を
            <br className="md:hidden" />
            科学的に解説
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            腰痛・冷え・下半身太り……その不調、骨盤の歪みが原因かもしれません。
            <br className="hidden md:block" />
            骨盤矯正インソールの仕組みから選び方、効果を高める習慣まで徹底解説します。
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
          <p className="text-sm font-bold text-gray-900 mb-3">この記事の内容</p>
          <ol className="space-y-1.5 text-sm text-gray-600">
            <li>
              <a href="#what-is" className="hover:text-[#0ea5e9] transition-colors">
                1. 骨盤の歪みとは？
              </a>
            </li>
            <li>
              <a href="#cause" className="hover:text-[#0ea5e9] transition-colors">
                2. 骨盤が歪む原因
              </a>
            </li>
            <li>
              <a href="#mechanism" className="hover:text-[#0ea5e9] transition-colors">
                3. インソールで骨盤矯正できる仕組み
              </a>
            </li>
            <li>
              <a href="#how-to-choose" className="hover:text-[#0ea5e9] transition-colors">
                4. 骨盤矯正インソールの選び方
              </a>
            </li>
            <li>
              <a href="#recommend" className="hover:text-[#0ea5e9] transition-colors">
                5. おすすめ骨盤矯正インソール3選
              </a>
            </li>
            <li>
              <a href="#habits" className="hover:text-[#0ea5e9] transition-colors">
                6. 骨盤矯正の効果を高める習慣
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#0ea5e9] transition-colors">
                7. よくある質問（FAQ）
              </a>
            </li>
            <li>
              <a href="#summary" className="hover:text-[#0ea5e9] transition-colors">
                8. まとめ
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* 骨盤の歪みとは？ */}
      <section id="what-is" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#0ea5e9]">
          骨盤の歪みとは？
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
          骨盤は、左右の寛骨（かんこつ）・仙骨・尾骨で構成される身体の中心的な骨格構造です。上半身と下半身をつなぐ「要（かなめ）」の役割を果たしており、骨盤が正しい位置にあることで背骨や股関節が本来の機能を発揮できます。
        </p>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
          「骨盤の歪み」とは、骨盤が<strong>前傾・後傾・左右の傾き・回旋</strong>のいずれかの方向にずれている状態を指します。骨盤自体が変形するわけではなく、周囲の筋肉や靭帯のバランスが崩れることで骨盤の位置が本来のニュートラルポジションからずれてしまうのです。
        </p>

        <div className="bg-sky-50 border border-sky-200 rounded-xl p-5 md:p-6 mb-6">
          <p className="text-sm font-bold text-gray-900 mb-3">骨盤の歪みの主なタイプ</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[#0ea5e9] font-bold mt-0.5">1.</span>
              <span><strong>前傾タイプ</strong> -- 反り腰になり、お腹がぽっこり出やすい。腰痛の原因になりやすい</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0ea5e9] font-bold mt-0.5">2.</span>
              <span><strong>後傾タイプ</strong> -- 猫背・フラットバックになり、お尻が垂れやすい。肩こりを招きやすい</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0ea5e9] font-bold mt-0.5">3.</span>
              <span><strong>左右傾斜タイプ</strong> -- 片側に重心が偏り、脚長差や腰の片側痛を引き起こす</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0ea5e9] font-bold mt-0.5">4.</span>
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
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#0ea5e9]">
          骨盤が歪む原因
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
          骨盤の歪みは一つの原因で起こるわけではなく、日常生活のさまざまな習慣が積み重なって生じます。まずは自分に当てはまる原因を把握し、根本的な改善につなげましょう。
        </p>

        <div className="space-y-4 mb-6">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#0ea5e9] mr-2">1</span>足裏アーチの崩れ
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              身体の土台である足裏のアーチが崩れると、膝が内側に倒れ（ニーイン）、股関節の位置が変わり、骨盤が連動して歪みます。扁平足や開張足の方は骨盤が歪みやすい傾向にあります。人間の身体は「足裏→膝→骨盤→背骨」と下から積み上げる構造のため、土台の崩れが全体に波及するのです。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#0ea5e9] mr-2">2</span>座り姿勢のクセ
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              脚を組む、片方のお尻に重心を乗せる、浅く座って背もたれに寄りかかるなどの座り方は、骨盤の左右差や前後の傾きを助長します。デスクワーカーは1日8時間以上座っていることも多く、骨盤への影響は非常に大きくなります。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#0ea5e9] mr-2">3</span>筋力バランスの偏り
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              骨盤周りのインナーマッスル（腸腰筋・骨盤底筋群・腹横筋など）の筋力が低下すると、骨盤を正しい位置に保つ力が弱まります。特に運動不足の方や加齢により筋力が低下している方は、骨盤が不安定になりやすくなります。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#0ea5e9] mr-2">4</span>出産による変化
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              妊娠・出産では「リラキシン」というホルモンの影響で骨盤周りの靭帯が緩みます。産後にケアせず放置すると、骨盤が開いたまま固定されてしまうことがあります。産後の骨盤ケアは早めに始めることが重要です。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#0ea5e9] mr-2">5</span>片側重心・カバンの持ち方
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

      {/* インソールで骨盤矯正できる仕組み */}
      <section id="mechanism" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#0ea5e9]">
          インソールで骨盤矯正できる仕組み
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
          骨盤矯正インソールは、足裏から骨盤の位置を整える科学的なアプローチです。「靴の中に入れるだけで本当に効果があるの？」と疑問に思う方もいるかもしれません。そのメカニズムを3つのステップで解説します。
        </p>

        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-[#0ea5e9] font-bold text-lg">1</span>
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-2">足裏アーチの再構築</h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              内側縦アーチ（土踏まず）・外側縦アーチ・横アーチの3つを補整し、足裏本来のアーチ形状を取り戻します。特に立方骨（キュボイド）周辺のサポートが重心の安定に直結します。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-[#0ea5e9] font-bold text-lg">2</span>
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-2">下肢アライメントの改善</h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              足裏が安定すると膝の内側への倒れ込み（ニーイン）が改善され、股関節が正しい角度に戻ります。下肢のアライメント（骨の配列）が整うことで、骨盤が自然とニュートラルポジションに導かれます。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-[#0ea5e9] font-bold text-lg">3</span>
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-2">骨盤周囲筋の活性化</h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              正しい足裏バランスで立つ・歩くことで、骨盤を支えるインナーマッスル（腸腰筋・骨盤底筋群・中殿筋など）が自然と活性化。筋力で骨盤を正しい位置に維持できるようになります。
            </p>
          </div>
        </div>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
          骨盤矯正ベルトやガードルは外部から骨盤を固定する「受動的」なアプローチですが、インソールは筋肉を活性化させて骨盤を安定させる「能動的」なアプローチです。ベルトは外すと元に戻りやすいのに対し、インソールは使い続けることで筋力がつき、根本的な改善が期待できます。
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
          <p className="text-sm font-bold text-gray-900 mb-2">科学的な裏付け</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            足裏のアーチサポートが骨盤の傾斜角度に影響を与えることは、スポーツ医学やリハビリテーション分野の研究で報告されています。特に<strong>足裏の立方骨を適切にサポートする設計</strong>は、骨盤の前傾・後傾を改善し、体幹の安定性を高めることが示されています。特許技術を持つ製品は、この点に科学的な根拠があります。
          </p>
        </div>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          使い始めの1〜2週間は足裏に軽い違和感を覚えることがあります。これは今まで使われていなかった筋肉が目覚めている証拠です。最初は1日2〜3時間の使用から始め、徐々に時間を延ばしていくのがおすすめです。
        </p>
      </section>

      {/* 骨盤矯正インソールの選び方 */}
      <section id="how-to-choose" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#0ea5e9]">
          骨盤矯正インソールの選び方
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
          「骨盤矯正」を謳うインソールは多数ありますが、効果に差があるのも事実です。以下の5つのポイントを基準に、本当に骨盤矯正効果が期待できる製品を選びましょう。
        </p>

        <div className="space-y-4 mb-6">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#0ea5e9] mr-2">1</span>3点アーチサポート構造
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              骨盤矯正に最も重要なのが、内側縦アーチ・外側縦アーチ・横アーチの3つを同時にサポートする構造です。1つのアーチだけをサポートしても効果は限定的。3点を適切に支えることで足裏全体のバランスが整い、骨盤への矯正力が生まれます。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#0ea5e9] mr-2">2</span>ヒールカップの深さ
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              かかとは身体の重心の起点です。深いヒールカップでかかとを包み込むことで足全体の安定性が増し、骨盤矯正効果が高まります。平らなインソールではかかとが横ブレを起こし、アーチサポートの効果も半減してしまいます。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#0ea5e9] mr-2">3</span>特許技術・科学的根拠
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              骨盤矯正効果を裏付ける特許技術や臨床データがあるかは重要な判断基準です。特許は第三者機関が技術の新規性・有用性を認めた証拠であり、「なんとなく効きそう」な製品との差が明確に出るポイントです。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#0ea5e9] mr-2">4</span>素材の硬さと耐久性
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              骨盤矯正インソールは、ある程度の硬さが必要です。柔らかすぎるクッション素材ではアーチを支える力が不足します。高反発素材や特殊樹脂を使用し、長期間使ってもアーチサポート力が持続する製品を選びましょう。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#0ea5e9] mr-2">5</span>サイズ展開の豊富さ
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              骨盤矯正インソールは足にフィットして初めて効果を発揮します。サイズが合わないと重心がずれ、逆効果になることも。XS〜Lなど細かいサイズ展開がある製品ほど、自分の足に合ったものを選べます。
            </p>
          </div>
        </div>
      </section>

      {/* おすすめ骨盤矯正インソール3選 */}
      <section id="recommend" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#0ea5e9]">
          おすすめ骨盤矯正インソール3選
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
          当サイトで取り扱っている3商品を、骨盤矯正の観点から比較・解説します。いずれも足裏アーチを整える設計で骨盤矯正効果が期待できますが、技術的な裏付けや設計思想に違いがあります。
        </p>

        {/* ピットソール */}
        <div className="border-2 border-[#0ea5e9] rounded-xl p-5 md:p-6 mb-6 relative">
          <span className="absolute -top-3 left-4 bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">
            骨盤矯正おすすめ No.1
          </span>
          <h3 className="font-bold text-gray-900 text-base md:text-lg mt-2 mb-3">
            ピットソール（Pitsole）
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                BMZ社の<strong>世界特許技術</strong>を搭載した高機能インソール。足裏の立方骨（キュボイド）を的確にサポートすることで、骨格レベルから骨盤の位置を矯正します。累計200万足の販売実績が効果の証明です。
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>-- 世界特許取得のアーチサポート技術</li>
                <li>-- サイズ展開：XS〜L（21〜27.5cm）男女兼用</li>
                <li>-- 骨盤矯正・体幹安定に高い効果</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">骨盤矯正おすすめ度</p>
              <p className="text-[#0ea5e9] font-bold text-lg mb-2">★★★★★</p>
              <p className="text-xs text-gray-500 mb-1">特許技術</p>
              <p className="text-sm font-medium text-gray-900 mb-2">世界特許あり（BMZ社）</p>
              <p className="text-xs text-gray-500 mb-1">価格（税込）</p>
              <p className="text-sm font-medium text-gray-900">1足あたり 6,578円〜</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/pitsole"
              className="inline-block bg-[#0ea5e9] text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-sky-600 transition-colors"
            >
              ピットソールの詳細を見る
            </Link>
            <Link
              href="/pitsole/price"
              className="inline-block border border-[#0ea5e9] text-[#0ea5e9] text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-sky-50 transition-colors"
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
                <strong>3点アーチサポート</strong>で足裏全体のバランスを整え、骨盤を正しい位置に導く設計。美姿勢にフォーカスした商品コンセプトで、骨盤から美しいボディラインを目指す女性に人気です。
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>-- 3点アーチサポート構造</li>
                <li>-- サイズ展開：M・L（22.5〜25cm）</li>
                <li>-- 美姿勢・美ボディラインに特化</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">骨盤矯正おすすめ度</p>
              <p className="text-[#0ea5e9] font-bold text-lg mb-2">★★★★☆</p>
              <p className="text-xs text-gray-500 mb-1">特許技術</p>
              <p className="text-sm font-medium text-gray-900 mb-2">なし（独自設計）</p>
              <p className="text-xs text-gray-500 mb-1">価格（税込）</p>
              <p className="text-sm font-medium text-gray-900">1足あたり 4,950円〜</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/runway-cure-sole"
              className="inline-block bg-[#0ea5e9] text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-sky-600 transition-colors"
            >
              ランウェイキュアソールの詳細を見る
            </Link>
            <Link
              href="/runway-cure-sole/price"
              className="inline-block border border-[#0ea5e9] text-[#0ea5e9] text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-sky-50 transition-colors"
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
              <p className="text-xs text-gray-500 mb-1">骨盤矯正おすすめ度</p>
              <p className="text-[#0ea5e9] font-bold text-lg mb-2">★★★★☆</p>
              <p className="text-xs text-gray-500 mb-1">特許技術</p>
              <p className="text-sm font-medium text-gray-900 mb-2">なし（美容整体師監修）</p>
              <p className="text-xs text-gray-500 mb-1">価格（税込）</p>
              <p className="text-sm font-medium text-gray-900">1足あたり 2,178円〜</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/slim-up-insole"
              className="inline-block bg-[#0ea5e9] text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-sky-600 transition-colors"
            >
              スリムアップインソールの詳細を見る
            </Link>
            <Link
              href="/slim-up-insole/price"
              className="inline-block border border-[#0ea5e9] text-[#0ea5e9] text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-sky-50 transition-colors"
            >
              料金プランを確認
            </Link>
          </div>
        </div>

        <div className="bg-sky-50 border border-sky-200 rounded-xl p-5 text-center">
          <p className="text-sm text-gray-700 mb-3">
            3商品の詳しい比較は総合ランキングをご覧ください
          </p>
          <Link
            href="/ranking"
            className="inline-block bg-[#0ea5e9] text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-sky-600 transition-colors"
          >
            ダイエットインソールおすすめランキングを見る
          </Link>
        </div>
      </section>

      {/* 骨盤矯正の効果を高める習慣 */}
      <section id="habits" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#0ea5e9]">
          骨盤矯正の効果を高める習慣
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
          インソールによる足元からの骨盤矯正に加えて、日常生活に以下の習慣を取り入れることで効果を大幅にアップできます。取り入れやすいものから始めてみてください。
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              骨盤まわりのストレッチ
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              骨盤周囲の筋肉（腸腰筋・梨状筋・大殿筋）の柔軟性を高めるストレッチを毎日行いましょう。寝る前に仰向けで片膝を胸に引き寄せるストレッチを左右30秒ずつ行うだけでも、骨盤まわりの筋肉がほぐれます。インソールで整えた骨盤の位置を筋肉の柔軟性でキープするイメージです。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              体幹・骨盤底筋トレーニング
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              骨盤を正しい位置にキープするための筋力を養いましょう。ヒップリフト（仰向けでお尻を持ち上げる）を15回3セット、プランク30〜60秒を毎日続けるだけで骨盤の安定性が大きく改善します。特に骨盤底筋群のトレーニングは、骨盤を下から支える力を強化するため非常に効果的です。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              座り方の改善
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              椅子に座るときは、坐骨（お尻の骨）を左右均等に座面に当て、骨盤を立てることを意識しましょう。脚を組むクセがある方は意識的にやめることが大切です。30分に1回は立ち上がって骨盤をリセットすると、歪みの蓄積を防げます。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              正しい歩き方の実践
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              骨盤矯正インソールを入れた靴で歩く際は、かかとから着地して足指で蹴り出す意識を持ちましょう。歩幅をやや広めにし、骨盤から足を前に出すイメージで歩くと、骨盤周りの筋肉が効率よく使われます。1日20〜30分のウォーキングで十分です。
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
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#0ea5e9]">
          よくある質問（FAQ）
        </h2>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              Q. 骨盤矯正インソールはどのくらいで効果を感じますか？
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              A. 個人差がありますが、歩行時の安定感や腰の軽さは1〜2週間で実感する方が多いです。骨盤まわりのシルエット変化を感じるには2〜3ヶ月の継続使用が目安です。最初の1週間は1日2〜3時間から始め、徐々に使用時間を延ばしていくのがおすすめです。ストレッチや筋トレとの併用で効果が早まります。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              Q. インソールだけで骨盤の歪みは治りますか？
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              A. インソール単体で完全に骨盤の歪みを治すことは難しいですが、足元のバランスを整えることで骨盤が正しい位置に戻りやすくなります。骨盤矯正の「土台づくり」としてインソールは非常に有効です。ストレッチや筋トレと併用することで、より高い矯正効果が期待できます。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              Q. 骨盤矯正インソールは男性でも使えますか？
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              A. はい、男女問わず使用できます。骨盤の歪みは性別に関係なく起こり、特にデスクワーク中心の男性は骨盤の後傾が起きやすい傾向があります。ピットソールはXS〜Lサイズ（21〜27.5cm）の男女兼用設計で、ビジネスシューズやスニーカーなど幅広い靴に対応しています。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              Q. 骨盤矯正ベルトとインソールはどちらが効果的ですか？
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              A. アプローチが異なります。骨盤矯正ベルトは装着中のみ骨盤を外部から固定する「受動的」な矯正です。一方、インソールは足元から自然に骨盤の位置を整え、体幹筋肉を活性化させる「能動的」な矯正です。長期的な骨盤改善にはインソールの方が適しており、ベルトとの併用も効果的です。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              Q. 産後の骨盤矯正にもインソールは有効ですか？
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              A. 産後の骨盤ケアにもインソールは有効です。出産で緩んだ骨盤周りの靭帯が戻る産後6ヶ月までの期間は、特にインソールによる足元からのサポートが効果的です。赤ちゃんの抱っこで崩れがちな姿勢もインソールが支えてくれます。ただし、産後1ヶ月は安静が優先ですので、医師に相談のうえ使用を開始してください。
            </p>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section id="summary" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#0ea5e9]">
          まとめ
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
          骨盤の歪みは腰痛・冷え・下半身太りなど、さまざまな不調の根本原因となります。この記事では、骨盤の歪みの原因から骨盤矯正インソールの仕組み・選び方・おすすめ商品・効果を高める習慣までを科学的根拠とともに詳しく解説してきました。
        </p>

        <div className="bg-sky-50 border border-sky-200 rounded-xl p-5 md:p-6 mb-6">
          <p className="text-sm font-bold text-gray-900 mb-3">この記事のポイント</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[#0ea5e9] font-bold shrink-0">--</span>
              <span>骨盤の歪みは前傾・後傾・左右傾斜・回旋の4タイプに分類される</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0ea5e9] font-bold shrink-0">--</span>
              <span>足裏アーチの崩れが骨盤の歪みの大きな原因となっている</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0ea5e9] font-bold shrink-0">--</span>
              <span>インソールは足元から骨盤を「能動的」に矯正する科学的アプローチ</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0ea5e9] font-bold shrink-0">--</span>
              <span>選ぶ際は3点アーチサポート・ヒールカップ・特許技術を重視</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0ea5e9] font-bold shrink-0">--</span>
              <span>ストレッチや筋トレとの併用で骨盤矯正効果が大幅にアップ</span>
            </li>
          </ul>
        </div>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
          骨盤の歪みは放置すると加齢とともに悪化し、慢性的な腰痛や体型の崩れにつながります。しかし、足元からのアプローチは日常の靴にインソールを入れるだけで始められるため、特別な時間を確保する必要がありません。
        </p>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
          まずは足元から骨盤を整えてみませんか？インソールを使った骨盤矯正は、毎日の通勤や散歩が「骨盤ケアの時間」に変わる、最も手軽で継続しやすい方法です。正しい骨盤の位置を取り戻すことで、腰痛の軽減・姿勢の改善・スッキリしたボディラインなど、想像以上の変化を実感できるでしょう。
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/ranking"
            className="inline-block bg-[#0ea5e9] text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-sky-600 transition-colors text-center"
          >
            インソールおすすめランキングを見る
          </Link>
          <Link
            href="/pitsole"
            className="inline-block border border-[#0ea5e9] text-[#0ea5e9] text-sm font-bold px-6 py-3 rounded-lg hover:bg-sky-50 transition-colors text-center"
          >
            ピットソールの詳細を見る
          </Link>
        </div>
      </section>
    </>
  );
}
