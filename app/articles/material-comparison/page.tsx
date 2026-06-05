import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "インソールの素材比較｜EVA・TPU・コルク・ジェルの違いと選び方",
  description:
    "インソール素材のEVA・TPU・コルク・ジェルを徹底比較。各素材の特徴、メリット・デメリット、用途別の選び方を解説。ピットソール・ランウェイキュアソール・スリムアップインソールの素材設計も紹介。",
  alternates: { canonical: "https://sole-laboratory.com/articles/material-comparison/" },
  openGraph: {
    title: "インソールの素材比較｜EVA・TPU・コルク・ジェルの違いと選び方",
    description: "インソール素材のEVA・TPU・コルク・ジェルを徹底比較。各素材の特徴と用途別の選び方を解説。",
    url: "https://sole-laboratory.com/articles/material-comparison/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "インソールの素材比較｜EVA・TPU・コルク・ジェルの違いと選び方",
  description: "インソール素材のEVA・TPU・コルク・ジェルを徹底比較。各素材の特徴と用途別の選び方を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "インソールの素材で最も一般的なのは何ですか？", acceptedAnswer: { "@type": "Answer", text: "最も一般的なインソール素材はEVA（エチレン酢酸ビニル）です。軽量で衝撃吸収性に優れ、コストも抑えられるため、市販インソールの多くに採用されています。ただし耐久性はTPUやコルクに劣り、3〜6ヶ月程度で交換が必要になります。" } },
    { "@type": "Question", name: "TPU素材のインソールのメリットは何ですか？", acceptedAnswer: { "@type": "Answer", text: "TPU（熱可塑性ポリウレタン）は形状保持力と復元力に優れた素材です。長期間使用してもアーチサポートの形状が崩れにくく、EVAの2〜3倍の耐久性があります。やや硬めの素材感で安定性が高いため、アーチサポート部に使用されることが多いです。" } },
    { "@type": "Question", name: "ジェル素材のインソールはどんな人に向いていますか？", acceptedAnswer: { "@type": "Answer", text: "ジェル（シリコン）素材は衝撃吸収に最も優れた素材であり、かかとや前足部に痛みがある方、コンクリートなど硬い路面で長時間歩く方に向いています。ただし重量があり通気性に劣るため、スポーツ用には不向きです。" } },
    { "@type": "Question", name: "コルク素材のインソールの特徴は？", acceptedAnswer: { "@type": "Answer", text: "コルクは天然素材で通気性と耐久性に優れます。使い込むほど足の形に馴染むフィッティング性が最大の特徴です。12〜24ヶ月と長寿命ですが、水に弱い点と初期のなじみ期間が必要な点がデメリットです。" } },
    { "@type": "Question", name: "複数の素材を組み合わせたインソールは効果が高いですか？", acceptedAnswer: { "@type": "Answer", text: "はい、高機能インソールの多くは複数素材を組み合わせて各素材のメリットを活かしています。例えばアーチ部にTPU、クッション部にEVA、表面にメッシュ素材という構成により、サポート力・衝撃吸収・通気性を同時に実現します。単一素材より高性能ですが、価格も上がります。" } },
  ],
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://sole-laboratory.com" },
    { "@type": "ListItem", position: 2, name: "知識・コラム", item: "https://sole-laboratory.com/articles/" },
    { "@type": "ListItem", position: 3, name: "インソールの素材比較", item: "https://sole-laboratory.com/articles/material-comparison/" },
  ],
};

export default function MaterialComparisonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "知識・コラム", href: "/articles/" }, { label: "インソールの素材比較" }]} />

      <section className="bg-gradient-to-b from-sky-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-[#0ea5e9] font-semibold mb-3">インソール 素材 比較</p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            インソールの<span className="text-[#0ea5e9]">素材比較</span>
            <br className="md:hidden" />
            EVA・TPU・コルク・ジェルの違い
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            インソールの性能は素材で決まります。主要4素材の特徴を比較し、
            <br className="hidden md:block" />
            あなたの目的に合った素材選びをサポートします。
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
          <p className="text-sm font-bold text-gray-900 mb-3">この記事の内容</p>
          <ol className="space-y-1.5 text-sm text-gray-600">
            <li><a href="#overview" className="hover:text-[#0ea5e9] transition-colors">1. インソール素材が性能を左右する理由</a></li>
            <li><a href="#eva" className="hover:text-[#0ea5e9] transition-colors">2. EVA（エチレン酢酸ビニル）の特徴</a></li>
            <li><a href="#tpu" className="hover:text-[#0ea5e9] transition-colors">3. TPU（熱可塑性ポリウレタン）の特徴</a></li>
            <li><a href="#cork" className="hover:text-[#0ea5e9] transition-colors">4. コルクの特徴</a></li>
            <li><a href="#gel" className="hover:text-[#0ea5e9] transition-colors">5. ジェル（シリコン）の特徴</a></li>
            <li><a href="#comparison" className="hover:text-[#0ea5e9] transition-colors">6. 素材別比較表と目的別おすすめ</a></li>
            <li><a href="#recommend" className="hover:text-[#0ea5e9] transition-colors">7. おすすめインソールの素材設計</a></li>
            <li><a href="#faq" className="hover:text-[#0ea5e9] transition-colors">8. よくある質問（FAQ）</a></li>
            <li><a href="#summary" className="hover:text-[#0ea5e9] transition-colors">9. まとめ</a></li>
          </ol>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <section id="overview" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">インソール素材が性能を左右する理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            インソールの機能性は使用される素材によって大きく異なります。衝撃吸収力、アーチサポートの保持力、通気性、耐久性、重量など、すべての性能指標は素材の特性に依存しています。同じ形状のインソールでも、EVAで作られたものとTPUで作られたものでは使用感が全く異なります。
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            多くの方がインソール選びで「形」や「厚さ」に注目しがちですが、実は「素材」こそが最も重要な選択基準です。素材を理解することで、自分の目的に合ったインソールを的確に選べるようになります。
          </p>
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">素材に求められる5つの性能</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            インソール素材に求められる性能は主に5つあります。第一に「衝撃吸収性」で歩行時の衝撃を緩和すること。第二に「復元力」で圧縮されても元の形に戻ること。第三に「形状保持力」で長期間アーチサポート形状を維持すること。第四に「通気性」で蒸れを防ぐこと。第五に「耐久性」で長期間使用に耐えること。しかし、すべてを完璧に満たす単一素材は存在しないため、用途に応じた素材選びが重要になります。
          </p>
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">単一素材と複合素材</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            安価なインソールは単一素材で作られることが多いですが、高機能インソールは複数の素材を組み合わせた複合構造を採用しています。例えば表面層には通気性の高いメッシュ、中間層には衝撃吸収力のあるEVA、構造層にはサポート力のあるTPUという具合です。各層の素材特性を理解することで、インソール全体の品質を判断できるようになります。
          </p>
        </section>

        <section id="eva" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">EVA（エチレン酢酸ビニル）の特徴</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            EVAは最も広く使われているインソール素材です。ランニングシューズのミッドソールにも採用されるほど信頼性が高く、コストパフォーマンスに優れています。
          </p>
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">EVAのメリット</h3>
          <ul className="text-sm md:text-base text-gray-700 space-y-2 mb-4 ml-4">
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span><span>非常に軽量（同体積のPUの約半分の重さ）</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span><span>優れた衝撃吸収性（歩行時の衝撃を30〜40%軽減）</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span><span>コストが低く手頃な価格帯の製品に採用可能</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span><span>加工性が高く、さまざまな硬度に調整可能</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span><span>水に強く手入れが簡単</span></li>
          </ul>
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">EVAのデメリット</h3>
          <ul className="text-sm md:text-base text-gray-700 space-y-2 mb-4 ml-4">
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">-</span><span>圧縮永久歪みが大きく、ヘタりやすい（寿命3〜6ヶ月）</span></li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">-</span><span>高温環境で変形しやすい（車内放置は厳禁）</span></li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">-</span><span>形状保持力が低く、アーチサポートが崩れやすい</span></li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">-</span><span>体重の重い方は特に劣化が早い</span></li>
          </ul>
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">EVAが向いている用途</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            軽さを重視するランニングやウォーキング、コストを抑えて定期的に交換したい方に最適です。また通勤程度の日常使いでも十分な性能を発揮します。ただし長期間の使用やハードな運動には向いていないため、
            <Link href="/articles/lifespan/" className="text-[#0ea5e9] hover:underline">交換時期の目安</Link>
            を守ることが重要です。
          </p>
        </section>

        <section id="tpu" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">TPU（熱可塑性ポリウレタン）の特徴</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            TPUは近年ハイエンドインソールで採用が増えている高機能素材です。形状記憶性と復元力に優れ、長期間にわたってサポート機能を維持します。ピットソールのアーチサポート部にも使用されている注目素材です。
          </p>
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">TPUのメリット</h3>
          <ul className="text-sm md:text-base text-gray-700 space-y-2 mb-4 ml-4">
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span><span>形状保持力が非常に高い（EVAの2〜3倍の耐久性）</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span><span>復元力に優れ、長期間クッション性を維持</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span><span>温度変化に強く、季節を問わず安定した性能</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span><span>アーチサポートの形状が崩れにくい</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span><span>加水分解しにくく長寿命（8〜18ヶ月）</span></li>
          </ul>
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">TPUのデメリット</h3>
          <ul className="text-sm md:text-base text-gray-700 space-y-2 mb-4 ml-4">
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">-</span><span>EVAと比べて重量がやや重い</span></li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">-</span><span>硬めの質感で、最初は違和感を感じる場合がある</span></li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">-</span><span>コストが高い（EVAの1.5〜2倍程度）</span></li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">-</span><span>単体では衝撃吸収力がEVAに劣る</span></li>
          </ul>
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">TPUが向いている用途</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            アーチサポートの長期的な維持が重要な方、膝痛や腰痛対策として継続使用する方に最適です。やや硬めの踏み心地が好みの方にも向いています。コストを考慮しても耐久性の高さで長期的にはコストパフォーマンスに優れます。
          </p>
        </section>

        <section id="cork" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">コルクの特徴</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            コルクはコルクガシの樹皮から採取される天然素材です。Birkenstockのフットベッドに代表されるように、使い込むほど足に馴染む独特のフィッティング性が魅力です。
          </p>
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">コルクのメリット</h3>
          <ul className="text-sm md:text-base text-gray-700 space-y-2 mb-4 ml-4">
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span><span>使い込むほど足の形に馴染む（カスタムフィット）</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span><span>天然の抗菌・消臭効果</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span><span>通気性に優れ蒸れにくい</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span><span>非常に高い耐久性（12〜24ヶ月）</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span><span>環境に優しいサスティナブル素材</span></li>
          </ul>
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">コルクのデメリット</h3>
          <ul className="text-sm md:text-base text-gray-700 space-y-2 mb-4 ml-4">
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">-</span><span>水に弱い（濡れると劣化が加速）</span></li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">-</span><span>馴染むまでの初期期間（1〜2週間）が必要</span></li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">-</span><span>衝撃吸収力はEVAやジェルに劣る</span></li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">-</span><span>価格が高い</span></li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">-</span><span>硬めの踏み心地で好みが分かれる</span></li>
          </ul>
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">コルクが向いている用途</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            長期間同じインソールを使い続けたい方、天然素材を好む方、足の形に完全にフィットしたインソールを求める方に最適です。サンダルやカジュアルシューズとの相性が特に良好です。
          </p>
        </section>

        <section id="gel" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ジェル（シリコン）の特徴</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            ジェル素材はシリコンをベースとした粘弾性のある素材で、衝撃吸収に最も優れた性能を持ちます。かかとパッドや前足部パッドなど、部分使用で採用されることが多い素材です。
          </p>
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">ジェルのメリット</h3>
          <ul className="text-sm md:text-base text-gray-700 space-y-2 mb-4 ml-4">
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span><span>衝撃吸収力が全素材中最高クラス</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span><span>足裏へのフィット感が高い</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span><span>洗えるため衛生的に使用可能</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span><span>かかとや前足部の痛みに即効性がある</span></li>
          </ul>
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">ジェルのデメリット</h3>
          <ul className="text-sm md:text-base text-gray-700 space-y-2 mb-4 ml-4">
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">-</span><span>重量が重い（全素材中最も重い）</span></li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">-</span><span>通気性が悪く蒸れやすい</span></li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">-</span><span>経年で硬化し衝撃吸収力が低下する</span></li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">-</span><span>アーチサポート力は低い</span></li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">-</span><span>夏場に熱を持ちやすい</span></li>
          </ul>
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">ジェルが向いている用途</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            かかとや前足部に痛みがある方、衝撃吸収を最優先したい方に最適です。コンクリートの上で長時間立つ仕事の方にも有効です。ただし全面ジェルのインソールは重く蒸れるため、部分的にジェルが配置された複合素材のインソールがおすすめです。
          </p>
        </section>

        <section id="comparison" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">素材別比較表と目的別おすすめ</h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-3 py-2 text-left font-bold">項目</th>
                  <th className="border border-gray-200 px-3 py-2 text-center font-bold">EVA</th>
                  <th className="border border-gray-200 px-3 py-2 text-center font-bold">TPU</th>
                  <th className="border border-gray-200 px-3 py-2 text-center font-bold">コルク</th>
                  <th className="border border-gray-200 px-3 py-2 text-center font-bold">ジェル</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-3 py-2">衝撃吸収</td><td className="border border-gray-200 px-3 py-2 text-center">A</td><td className="border border-gray-200 px-3 py-2 text-center">B</td><td className="border border-gray-200 px-3 py-2 text-center">C</td><td className="border border-gray-200 px-3 py-2 text-center">S</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2">形状保持力</td><td className="border border-gray-200 px-3 py-2 text-center">C</td><td className="border border-gray-200 px-3 py-2 text-center">S</td><td className="border border-gray-200 px-3 py-2 text-center">A</td><td className="border border-gray-200 px-3 py-2 text-center">C</td></tr>
                <tr><td className="border border-gray-200 px-3 py-2">耐久性</td><td className="border border-gray-200 px-3 py-2 text-center">C</td><td className="border border-gray-200 px-3 py-2 text-center">A</td><td className="border border-gray-200 px-3 py-2 text-center">S</td><td className="border border-gray-200 px-3 py-2 text-center">B</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2">軽量性</td><td className="border border-gray-200 px-3 py-2 text-center">S</td><td className="border border-gray-200 px-3 py-2 text-center">B</td><td className="border border-gray-200 px-3 py-2 text-center">B</td><td className="border border-gray-200 px-3 py-2 text-center">C</td></tr>
                <tr><td className="border border-gray-200 px-3 py-2">通気性</td><td className="border border-gray-200 px-3 py-2 text-center">B</td><td className="border border-gray-200 px-3 py-2 text-center">B</td><td className="border border-gray-200 px-3 py-2 text-center">A</td><td className="border border-gray-200 px-3 py-2 text-center">D</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2">コスト</td><td className="border border-gray-200 px-3 py-2 text-center">S</td><td className="border border-gray-200 px-3 py-2 text-center">B</td><td className="border border-gray-200 px-3 py-2 text-center">C</td><td className="border border-gray-200 px-3 py-2 text-center">B</td></tr>
                <tr><td className="border border-gray-200 px-3 py-2">寿命</td><td className="border border-gray-200 px-3 py-2 text-center">3〜6月</td><td className="border border-gray-200 px-3 py-2 text-center">8〜18月</td><td className="border border-gray-200 px-3 py-2 text-center">12〜24月</td><td className="border border-gray-200 px-3 py-2 text-center">4〜8月</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">目的別のおすすめ素材</h3>
          <div className="space-y-3 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700"><span className="font-bold">ランニング・スポーツ：</span>EVA（軽量性重視）またはEVA+TPU複合（軽量性+サポート力）</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700"><span className="font-bold">膝痛・腰痛対策：</span>TPU（形状保持力重視）またはTPU+EVA複合（サポート+衝撃吸収）</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700"><span className="font-bold">立ち仕事：</span>ジェル+EVA複合（衝撃吸収重視）またはコルク（耐久性重視）</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700"><span className="font-bold">ダイエット・姿勢改善：</span>TPU+EVA複合（サポート力+快適性のバランス）</p>
            </div>
          </div>
        </section>

        <section id="recommend" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">おすすめインソールの素材設計</h2>

          <div className="bg-white border-2 border-[#0ea5e9] rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">複合素材設計</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">ピットソール（Pitsole）</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              アーチサポート部にTPU系素材、クッション層にEVAを採用した複合素材設計です。TPUの高い形状保持力でアーチサポートを長期間維持しつつ、EVAのクッション性で歩行時の快適性を確保。世界特許技術と素材工学の融合により、高いパフォーマンスを実現しています。
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>TPU+EVAの複合設計でサポート力と快適性を両立</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>長期間アーチサポート機能を維持する高耐久設計</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>素材工学に基づく世界特許技術を採用</span></li>
            </ul>
            <Link href="/pitsole/" className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline">ピットソールの詳細レビューを見る &rarr;</Link>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">薄型高機能</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">ランウェイキュアソール（RUNWAY CURE SOLE）</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              薄型でありながら高い機能性を実現した素材設計です。限られた厚みの中で最大限のサポート力を発揮するため、高密度の素材を採用。パンプスやビジネスシューズなど、靴内空間が限られる場面でも快適に使用できます。
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>薄型でも高密度素材で十分なサポート力</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>パンプスやビジネスシューズに最適な厚み設計</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>荷重分散設計で素材の劣化を最小化</span></li>
            </ul>
            <Link href="/runway-cure-sole/" className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline">ランウェイキュアソールの詳細レビューを見る &rarr;</Link>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">バランス設計</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">スリムアップインソール（Slim Up Insole）</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              美容整体師監修のもと、適度な硬さと柔軟性のバランスを追求した素材選定です。重心移動を適切にガイドするため、部位によって素材の硬度を変えた設計が特徴。クッション性と耐久性の両立を実現しています。
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>部位別の硬度調整で重心移動をガイド</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>クッション性と耐久性のバランスが良好</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>美容整体師の知見を素材選定に反映</span></li>
            </ul>
            <Link href="/slim-up-insole/" className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline">スリムアップインソールの詳細レビューを見る &rarr;</Link>
          </div>

          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              3商品の料金・機能・口コミを一覧で比較したい方は<Link href="/ranking/" className="text-[#0ea5e9] font-bold hover:underline">おすすめランキングページ</Link>をご覧ください。
            </p>
          </div>
        </section>

        <section id="faq" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <details className="group bg-white border border-gray-200 rounded-lg"><summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">インソールの素材で最も一般的なのは何ですか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">最も一般的なインソール素材はEVAです。軽量で衝撃吸収性に優れ、コストも抑えられるため市販インソールの多くに採用されています。ただし耐久性はTPUやコルクに劣り、3〜6ヶ月程度で交換が必要になります。</div></details>
            <details className="group bg-white border border-gray-200 rounded-lg"><summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">TPU素材のインソールのメリットは何ですか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">TPUは形状保持力と復元力に優れた素材です。長期間使用してもアーチサポートの形状が崩れにくく、EVAの2〜3倍の耐久性があります。アーチサポート部に使用されることが多い高機能素材です。</div></details>
            <details className="group bg-white border border-gray-200 rounded-lg"><summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">ジェル素材のインソールはどんな人に向いていますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">ジェル素材は衝撃吸収に最も優れており、かかとや前足部に痛みがある方、コンクリートなど硬い路面で長時間歩く方に向いています。ただし重量があり通気性に劣るため、スポーツ用には不向きです。</div></details>
            <details className="group bg-white border border-gray-200 rounded-lg"><summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">コルク素材のインソールの特徴は？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">コルクは天然素材で通気性と耐久性に優れます。使い込むほど足の形に馴染むフィッティング性が最大の特徴で、12〜24ヶ月と長寿命です。水に弱い点が注意点です。</div></details>
            <details className="group bg-white border border-gray-200 rounded-lg"><summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">複数の素材を組み合わせたインソールは効果が高いですか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">はい、高機能インソールの多くは複数素材を組み合わせて各素材のメリットを活かしています。例えばアーチ部にTPU、クッション部にEVAという構成で、サポート力と衝撃吸収を同時に実現します。</div></details>
          </div>
        </section>

        <section id="summary" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">まとめ</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            インソールの素材は性能を決定づける最重要要素です。EVAは軽量でコスパが良く、TPUは形状保持力と耐久性に優れ、コルクは天然素材ならではのフィッティング性が魅力、ジェルは衝撃吸収力が最高クラスです。
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            目的や使用シーンに合わせて最適な素材を選ぶことが、インソール選びの成功の鍵です。迷った場合は、複数素材を組み合わせた複合設計のインソールを選ぶことで、バランスの良い性能が得られます。
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 mb-6">
            <p className="text-sm font-bold text-gray-900 mb-3">素材設計に優れたおすすめインソール</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><Link href="/pitsole/" className="text-[#0ea5e9] font-bold hover:underline">ピットソール</Link>：TPU+EVA複合設計。サポート力と快適性を高次元で両立。</li>
              <li><Link href="/runway-cure-sole/" className="text-[#0ea5e9] font-bold hover:underline">ランウェイキュアソール</Link>：薄型でも高密度素材で十分なサポート力を発揮。</li>
              <li><Link href="/slim-up-insole/" className="text-[#0ea5e9] font-bold hover:underline">スリムアップインソール</Link>：部位別の硬度調整で重心移動を最適化。</li>
            </ul>
          </div>
          <div className="text-center">
            <Link href="/ranking/" className="inline-block bg-[#0ea5e9] text-white font-bold text-sm md:text-base px-8 py-3 rounded-full hover:bg-sky-600 transition-colors shadow-md">3商品の詳細比較ランキングを見る</Link>
          </div>
        </section>
      </article>

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/articles/lifespan/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"><p className="text-sm font-semibold text-gray-900">インソールの寿命と交換時期</p></Link>
            <Link href="/articles/how-to-choose/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"><p className="text-sm font-semibold text-gray-900">インソールの選び方ガイド</p></Link>
            <Link href="/articles/insole-care/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"><p className="text-sm font-semibold text-gray-900">インソールのお手入れ方法</p></Link>
            <Link href="/ranking/" className="block p-4 border border-[#e8627c] rounded-xl hover:bg-[#fdf2f4] transition-colors bg-[#fdf2f4]/50"><p className="text-sm font-semibold text-[#e8627c]">おすすめダイエットインソール3選を見る</p></Link>
          </div>
        </div>
      </section>
    </>
  );
}
