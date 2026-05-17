import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "インソールと膝痛の関係｜歩行姿勢の改善で膝への負担を軽減",
  description:
    "インソールで膝痛を軽減する方法を徹底解説。膝への負担が生じるメカニズム、歩行姿勢の改善効果、インソール選びのポイントを紹介。ピットソール・ランウェイキュアソール・スリムアップインソールの比較も。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/knee-pain/",
  },
  openGraph: {
    title: "インソールと膝痛の関係｜歩行姿勢の改善で膝への負担を軽減",
    description:
      "インソールで膝痛を軽減する方法を徹底解説。歩行姿勢の改善で膝への負担を軽減するメカニズムを紹介。",
    url: "https://sole-laboratory.com/articles/knee-pain/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "インソールと膝痛の関係｜歩行姿勢の改善で膝への負担を軽減",
  description:
    "インソールで膝痛を軽減する方法を徹底解説。歩行姿勢の改善で膝への負担を軽減するメカニズムを紹介。",
  author: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "インソールで膝の痛みは軽減できますか？",
      acceptedAnswer: { "@type": "Answer", text: "足のアライメント異常（過回内や過回外）が原因で膝に過度な負担がかかっている場合、インソールによるアーチサポートと歩行姿勢の改善で膝痛を軽減できる可能性があります。ただし半月板損傷や靭帯損傷などの器質的な疾患がある場合は、まず医療機関での治療が必要です。" },
    },
    {
      "@type": "Question",
      name: "膝痛に効くインソールの選び方は？",
      acceptedAnswer: { "@type": "Answer", text: "膝痛改善には、内側縦アーチのサポートが充実し、かかとの安定性が高いインソールを選びましょう。膝が内側に入る（ニーイン）タイプの方は、内側アーチを高めに支えるモデルが効果的です。O脚気味の方は外側のサポートも重要です。衝撃吸収素材がかかとに配置されていることも重要なポイントです。" },
    },
    {
      "@type": "Question",
      name: "膝痛がある場合、インソールはどのくらいの期間使えば効果を感じますか？",
      acceptedAnswer: { "@type": "Answer", text: "個人差がありますが、2〜6週間程度で変化を実感される方が多いです。最初の1週間は新しい荷重パターンに身体が適応する期間で、一時的に膝周りに軽い張りを感じることもあります。3ヶ月以上使用しても改善が見られない場合は、整形外科の受診をおすすめします。" },
    },
    {
      "@type": "Question",
      name: "ランニング中の膝痛にインソールは有効ですか？",
      acceptedAnswer: { "@type": "Answer", text: "ランニング中の膝痛、特に膝蓋骨周辺の痛み（ランナーズニー）にインソールは有効です。ランニング時は体重の2〜3倍の衝撃が膝にかかるため、インソールの衝撃吸収機能と足のアライメント矯正効果が膝への負担を大幅に軽減します。" },
    },
    {
      "@type": "Question",
      name: "変形性膝関節症にもインソールは使えますか？",
      acceptedAnswer: { "@type": "Answer", text: "変形性膝関節症の初期〜中期段階では、インソールによる荷重分散が症状の軽減に役立つ場合があります。ただし必ず主治医に相談のうえ使用してください。外側ウェッジインソールなど特殊な形状が処方されることもあるため、自己判断での選択は避けましょう。" },
    },
  ],
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://sole-laboratory.com" },
    { "@type": "ListItem", position: 2, name: "知識・コラム", item: "https://sole-laboratory.com/articles/" },
    { "@type": "ListItem", position: 3, name: "インソールと膝痛の関係", item: "https://sole-laboratory.com/articles/knee-pain/" },
  ],
};

export default function KneePainPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "知識・コラム", href: "/articles/" }, { label: "インソールと膝痛の関係" }]} />

      <section className="bg-gradient-to-b from-sky-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-[#0ea5e9] font-semibold mb-3">インソール 膝痛 軽減</p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            インソールと<span className="text-[#0ea5e9]">膝痛</span>の関係
            <br className="md:hidden" />
            歩行姿勢の改善で膝への負担を軽減
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            膝の痛みは足元のアライメント異常が原因であることも。
            <br className="hidden md:block" />
            インソールで足元を整え、膝への負担を根本から軽減する方法を解説します。
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
          <p className="text-sm font-bold text-gray-900 mb-3">この記事の内容</p>
          <ol className="space-y-1.5 text-sm text-gray-600">
            <li><a href="#cause" className="hover:text-[#0ea5e9] transition-colors">1. 膝痛と足のアライメントの関係</a></li>
            <li><a href="#knee-types" className="hover:text-[#0ea5e9] transition-colors">2. インソールが効果的な膝痛のタイプ</a></li>
            <li><a href="#how-insole-helps" className="hover:text-[#0ea5e9] transition-colors">3. インソールが膝痛を軽減する仕組み</a></li>
            <li><a href="#choose" className="hover:text-[#0ea5e9] transition-colors">4. 膝痛対策のインソール選び4つのポイント</a></li>
            <li><a href="#exercise" className="hover:text-[#0ea5e9] transition-colors">5. インソールと併用したい膝痛対策エクササイズ</a></li>
            <li><a href="#recommend" className="hover:text-[#0ea5e9] transition-colors">6. おすすめインソール3選</a></li>
            <li><a href="#faq" className="hover:text-[#0ea5e9] transition-colors">7. よくある質問（FAQ）</a></li>
            <li><a href="#summary" className="hover:text-[#0ea5e9] transition-colors">8. まとめ</a></li>
          </ol>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <section id="cause" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">膝痛と足のアライメントの関係</h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            膝は人体の中で最も大きな関節であり、歩行や階段昇降、しゃがみ動作など日常のあらゆる動きで負荷を受けます。膝関節は足首と股関節の間に位置しているため、足元のアライメント（骨格の配列）が崩れると、直接的に膝への負担が増加します。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">過回内（オーバープロネーション）と膝痛</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            足裏のアーチが崩れ、足首が内側に倒れ込む「過回内」は、膝痛の最も一般的な原因の一つです。足首が内側に倒れると、脛骨（すねの骨）が内旋し、膝関節に捻じれのストレスが加わります。この繰り返しにより、膝の内側の軟骨や靭帯に過度な負担がかかり、痛みが生じます。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">ニーイン（膝の内側への倒れ込み）</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            過回内が起こると、連鎖的に膝が内側に入る「ニーイン」が発生します。歩行のたびに膝が内側に倒れ込むと、膝蓋骨（膝のお皿）の軌道が乱れ、膝蓋骨の裏側と大腿骨の間で異常な摩擦が起こります。これが膝蓋大腿関節症候群（ランナーズニー）の原因となります。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">O脚・X脚と膝への荷重偏り</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            O脚の場合は膝の内側に、X脚の場合は膝の外側に荷重が集中します。この荷重の偏りが長年続くと、特定の関節面の軟骨が摩耗し、変形性膝関節症へと進行するリスクがあります。足元のアライメントを整えることで、膝への荷重分布を均等化し、軟骨の偏摩耗を予防できます。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">衝撃吸収不足による軟骨ダメージ</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            歩行時には体重の1.5倍、ランニング時には2〜3倍、階段下りでは3〜4倍の力が膝関節にかかります。足裏のクッション機能が不十分だと、これらの衝撃が緩和されずに膝の軟骨に直接伝わります。長期間にわたる衝撃の蓄積は、軟骨の変性と膝痛の原因になります。
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-amber-700">ポイント：</span>
              膝は足と腰の間に位置する「中継地点」であり、上下両方の影響を受けます。足元の問題を改善することが、膝痛の根本的な解決につながるケースが多いです。
            </p>
          </div>
        </section>

        <section id="knee-types" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">インソールが効果的な膝痛のタイプ</h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            以下のような膝痛には、インソールによる改善効果が特に期待できます。
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">膝蓋大腿関節症候群（ランナーズニー）</h3>
              <p className="text-sm text-gray-700 leading-relaxed">膝のお皿周辺の痛みで、特に階段昇降や長時間の座位後に悪化します。足のアライメント矯正により膝蓋骨の軌道が正常化し、症状の改善が期待できます。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">腸脛靭帯炎（ランナーズニー外側型）</h3>
              <p className="text-sm text-gray-700 leading-relaxed">膝の外側に痛みが出るタイプです。O脚や過回外（アンダープロネーション）が原因であることが多く、足のアライメントを正しく整えることで腸脛靭帯への摩擦を軽減できます。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">鵞足炎</h3>
              <p className="text-sm text-gray-700 leading-relaxed">膝の内側下方に痛みが出る症状です。過回内やニーインにより、鵞足（膝内側の腱が集まる部分）に過度なストレスがかかることで生じます。アーチサポートで過回内を防ぐことが有効です。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">初期の変形性膝関節症</h3>
              <p className="text-sm text-gray-700 leading-relaxed">膝の軟骨が少しずつ摩耗して痛みが出る症状です。初期段階であれば、インソールによる荷重分散で軟骨への負担を軽減し、進行を遅らせる効果が期待できます。医師と相談のうえ使用してください。</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-red-700">注意：</span>
              前十字靭帯損傷、半月板損傷、骨折など外傷性の膝痛は、インソールだけでは対応できません。急性の膝痛、腫れ、ロッキング（膝が曲がらなくなる）などの症状がある場合は速やかに整形外科を受診してください。
            </p>
          </div>
        </section>

        <section id="how-insole-helps" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">インソールが膝痛を軽減する仕組み</h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            インソールは以下の3つのメカニズムで膝への負担を軽減します。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">アライメント矯正による力の最適化</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            アーチサポートにより足首の過回内を防止し、脛骨の内旋を抑制します。これにより膝関節が正しい軸で動くようになり、関節面全体で均等に荷重を分散できます。膝蓋骨のトラッキングも改善され、お皿の裏側の異常摩擦が軽減されます。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">衝撃吸収による軟骨保護</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            かかと部分に配置された衝撃吸収素材が、着地時のピーク荷重を20〜30%程度軽減します。この衝撃吸収効果により、膝の軟骨や半月板にかかるストレスが大幅に減少し、関節の摩耗を防ぎます。特に硬い路面での歩行やランニング時に効果を発揮します。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">歩行パターンの最適化</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            足元が安定することで、かかと着地からつま先離地までの重心移動がスムーズになります。不自然な代償動作（膝を突っ張る、足を引きずるなど）がなくなることで、膝関節への不均等な負荷が解消されます。正しい歩行パターンが習慣化することで、長期的な膝の健康維持につながります。
          </p>
        </section>

        <section id="choose" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">膝痛対策のインソール選び4つのポイント</h2>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">内側縦アーチのサポート力</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">膝痛の多くは過回内が原因であるため、内側縦アーチを適切な高さで支えるインソールが効果的です。ただし高すぎるアーチサポートは逆に足裏に痛みを生じさせるため、自分の足のアーチ高に合ったものを選ぶことが重要です。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">かかとの安定性（ヒールカップ）</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">深めのヒールカップがかかとを包み込むことで、着地時の左右のブレを抑制します。かかとが安定することで、膝への捻じれストレスが大幅に軽減されます。フラットなインソールではこの効果が得られないため、ヒールカップの有無は必ず確認しましょう。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">衝撃吸収素材の品質</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">かかとと前足部に高品質な衝撃吸収素材（EVA、ジェル、高密度フォーム等）が配置されているものを選びましょう。安価なインソールは薄い素材しか使われていないため、十分な衝撃吸収効果が得られません。膝痛が目的であれば、かかと部分の衝撃吸収を特に重視してください。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">耐久性と形状保持力</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                膝痛対策は長期間の使用が前提となるため、素材の耐久性は重要です。TPU系のアーチサポートは長期間にわたって形状を維持するため、継続的な効果が期待できます。
                <Link href="/articles/lifespan/" className="text-[#0ea5e9] hover:underline">インソールの寿命と交換時期</Link>
                も参考にしてください。
              </p>
            </div>
          </div>
        </section>

        <section id="exercise" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">インソールと併用したい膝痛対策エクササイズ</h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            インソールの効果を最大化するために、膝周りの筋力強化とストレッチを併用しましょう。
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">大腿四頭筋の強化（座位での膝伸展）</h3>
              <p className="text-sm text-gray-700 leading-relaxed">椅子に座った状態で膝をゆっくり伸ばし、5秒間キープして戻します。大腿四頭筋を鍛えることで膝関節の安定性が向上し、インソールとの相乗効果で膝への負担がさらに軽減されます。片足10回を3セット、毎日行いましょう。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">ハムストリングスのストレッチ</h3>
              <p className="text-sm text-gray-700 leading-relaxed">太もも裏の筋肉が硬いと、膝が完全に伸びきらず、歩行時に膝への負担が増加します。床に座って片足を伸ばし、つま先に向かって前屈するストレッチを30秒間行い、左右交互に3セット実施しましょう。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">臀筋（お尻）の強化</h3>
              <p className="text-sm text-gray-700 leading-relaxed">臀筋が弱いと歩行時に骨盤が落ち込み、膝が内側に入りやすくなります。横向きに寝て上側の脚を上げるヒップアブダクションや、ブリッジエクササイズで臀筋を鍛えましょう。膝のアライメント安定に直結するトレーニングです。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">ふくらはぎのストレッチ</h3>
              <p className="text-sm text-gray-700 leading-relaxed">ふくらはぎが硬いと足首の背屈可動域が制限され、歩行時に膝で代償する動きが生じます。壁に手をついてふくらはぎを伸ばすストレッチを30秒キープ、左右3セットずつ行いましょう。足首の柔軟性改善は膝痛予防の基本です。</p>
            </div>
          </div>
        </section>

        <section id="recommend" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">おすすめインソール3選</h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">膝痛軽減に適した機能を備えたインソールを紹介します。</p>

          <div className="bg-white border-2 border-[#0ea5e9] rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">膝への負担軽減に</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">ピットソール（Pitsole）</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              世界特許の3点サポート構造が足のアライメントを正しく整え、膝への不均等な荷重を解消します。内側縦アーチ、外側縦アーチ、横アーチの3点を適切に支えることで、膝関節が正しい軸で動くようサポート。歩行時の膝へのストレスを根本から軽減します。
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>3点サポートで足のアライメントを正しく矯正</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>膝関節への不均等荷重を解消</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>TPU系素材で長期間のアーチサポート機能を維持</span></li>
            </ul>
            <Link href="/pitsole/" className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline">ピットソールの詳細レビューを見る &rarr;</Link>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">歩行姿勢から改善</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">ランウェイキュアソール（RUNWAY CURE SOLE）</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              歩行姿勢の改善に特化した設計で、膝が内側に入るニーインを防止します。骨盤周りの筋肉を正しく使えるようサポートし、股関節から膝にかけてのアライメントを最適化。薄型設計のため、さまざまな靴に対応可能です。
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>歩行姿勢改善でニーインを防止</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>骨盤〜膝のアライメントを最適化</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>薄型設計でさまざまな靴に対応</span></li>
            </ul>
            <Link href="/runway-cure-sole/" className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline">ランウェイキュアソールの詳細レビューを見る &rarr;</Link>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">重心改善で膝を守る</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">スリムアップインソール（Slim Up Insole）</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              美容整体師監修のもと設計された正しい重心移動を促すインソールです。膝に過度な負担がかからないよう、かかとから母趾球へのスムーズな重心移動をサポートします。歩行時の膝へのストレスを軽減しながら、ダイエット効果も期待できます。
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>正しい重心移動で膝への負担を最小化</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>美容整体師監修の科学的設計</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>膝痛軽減とダイエット効果を両立</span></li>
            </ul>
            <Link href="/slim-up-insole/" className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline">スリムアップインソールの詳細レビューを見る &rarr;</Link>
          </div>

          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              3商品の料金・機能・口コミを一覧で比較したい方は
              <Link href="/ranking/" className="text-[#0ea5e9] font-bold hover:underline">おすすめランキングページ</Link>
              をご覧ください。
            </p>
          </div>
        </section>

        <section id="faq" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">インソールで膝の痛みは軽減できますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">足のアライメント異常が原因で膝に過度な負担がかかっている場合、インソールによる改善が期待できます。ただし半月板損傷や靭帯損傷などの器質的な疾患がある場合は、まず医療機関での治療が必要です。</div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">膝痛に効くインソールの選び方は？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">内側縦アーチのサポートが充実し、かかとの安定性が高いインソールを選びましょう。膝が内側に入るタイプの方は内側アーチを高めに支えるモデルが効果的です。衝撃吸収素材がかかとに配置されていることも重要です。</div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">膝痛がある場合、インソールはどのくらいの期間使えば効果を感じますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">2〜6週間程度で変化を実感される方が多いです。最初の1週間は適応期間として軽い張りを感じることもあります。3ヶ月以上使用しても改善が見られない場合は整形外科の受診をおすすめします。</div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">ランニング中の膝痛にインソールは有効ですか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">ランニング中の膝痛、特にランナーズニーにインソールは有効です。体重の2〜3倍の衝撃が膝にかかるランニング時に、衝撃吸収機能とアライメント矯正効果が膝への負担を大幅に軽減します。</div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">変形性膝関節症にもインソールは使えますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">初期〜中期段階では、インソールによる荷重分散が症状の軽減に役立つ場合があります。ただし必ず主治医に相談のうえ使用してください。外側ウェッジインソールなど特殊な形状が処方されることもあります。</div>
            </details>
          </div>
        </section>

        <section id="summary" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">まとめ</h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            膝痛の多くは足のアライメント異常（過回内、ニーイン）や衝撃吸収不足が根本原因です。インソールで足元のアライメントを正しく整え、衝撃を吸収することで、膝への負担を大幅に軽減できます。
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            大腿四頭筋や臀筋の強化、ストレッチとの併用で効果はさらに高まります。膝の痛みを感じたら早めにインソールを導入し、進行を予防することが重要です。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 mb-6">
            <p className="text-sm font-bold text-gray-900 mb-3">膝痛対策におすすめのインソール</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><Link href="/pitsole/" className="text-[#0ea5e9] font-bold hover:underline">ピットソール</Link>：3点サポートでアライメントを矯正。膝への不均等荷重を解消。</li>
              <li><Link href="/runway-cure-sole/" className="text-[#0ea5e9] font-bold hover:underline">ランウェイキュアソール</Link>：歩行姿勢改善でニーインを防止。薄型で使いやすい。</li>
              <li><Link href="/slim-up-insole/" className="text-[#0ea5e9] font-bold hover:underline">スリムアップインソール</Link>：正しい重心移動で膝への負担を最小化。</li>
            </ul>
          </div>

          <div className="text-center">
            <Link href="/ranking/" className="inline-block bg-[#0ea5e9] text-white font-bold text-sm md:text-base px-8 py-3 rounded-full hover:bg-sky-600 transition-colors shadow-md">
              3商品の詳細比較ランキングを見る
            </Link>
          </div>
        </section>
      </article>

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/articles/back-pain/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">インソールと腰痛の関係</p>
            </Link>
            <Link href="/articles/foot-arch/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">足のアーチとは？崩れる原因と対策</p>
            </Link>
            <Link href="/articles/running-insole/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">ランニング用インソールおすすめ</p>
            </Link>
            <Link href="/ranking/" className="block p-4 border border-[#e8627c] rounded-xl hover:bg-[#fdf2f4] transition-colors bg-[#fdf2f4]/50">
              <p className="text-sm font-semibold text-[#e8627c]">おすすめダイエットインソール3選を見る</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
