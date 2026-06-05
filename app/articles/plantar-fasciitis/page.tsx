import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import MedicalDisclaimer from "../../components/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "足底筋膜炎とインソール｜痛みを軽減する選び方ガイド",
  description: "足底筋膜炎とインソールの関係を徹底解説。足底筋膜炎の原因、インソールによる痛み軽減の仕組み、選び方のポイント、セルフケア方法まで紹介。ピットソール・ランウェイキュアソール・スリムアップインソールの比較も。",
  alternates: { canonical: "https://sole-laboratory.com/articles/plantar-fasciitis/" },
  openGraph: { title: "足底筋膜炎とインソール｜痛みを軽減する選び方ガイド", description: "足底筋膜炎とインソールの関係を徹底解説。痛みを軽減するインソールの選び方ガイド。", url: "https://sole-laboratory.com/articles/plantar-fasciitis/", type: "article" },
};

const structuredData = { "@context": "https://schema.org", "@type": "Article", image: "https://sole-laboratory.com/og-image.png", headline: "足底筋膜炎とインソール｜痛みを軽減する選び方ガイド", description: "足底筋膜炎とインソールの関係を徹底解説。痛みを軽減するインソールの選び方ガイド。", author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" }, publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" }, datePublished: "2026-05-17", dateModified: "2026-05-17" };

const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "足底筋膜炎にインソールは効果がありますか？", acceptedAnswer: { "@type": "Answer", text: "はい、適切なインソールは足底筋膜炎の痛み軽減に効果的です。アーチサポートにより足底筋膜への過度な牽引力を軽減し、クッション性のある素材がかかとへの衝撃を吸収します。ただし重症の場合はインソールだけでなく医療機関での治療が必要です。" } },
  { "@type": "Question", name: "足底筋膜炎用のインソールはどんな特徴がありますか？", acceptedAnswer: { "@type": "Answer", text: "足底筋膜炎用のインソールに求められる特徴は、適度な硬さの内側縦アーチサポート、かかと部分の厚いクッション材、深めのヒールカップによるかかとの安定化、足底筋膜の伸張を抑えるやや硬めの中足部です。柔らかすぎるインソールは逆効果になることもあります。" } },
  { "@type": "Question", name: "足底筋膜炎の朝一歩目の痛みにインソールは効きますか？", acceptedAnswer: { "@type": "Answer", text: "朝一歩目の痛み（ファーストステップペイン）は足底筋膜炎の代表的な症状です。インソールは就寝中に短縮した足底筋膜への急激なストレスを緩和する効果があります。起床後すぐにインソール入りの室内履きを使用することで、朝の痛みを軽減できます。" } },
  { "@type": "Question", name: "足底筋膜炎はどのくらいで治りますか？", acceptedAnswer: { "@type": "Answer", text: "足底筋膜炎の回復期間は個人差が大きく、軽度であれば2〜4週間、中等度で2〜3ヶ月、重度の場合は6ヶ月以上かかることもあります。インソールの使用、ストレッチ、生活習慣の改善を組み合わせることで回復を早めることができます。" } },
  { "@type": "Question", name: "足底筋膜炎の予防方法はありますか？", acceptedAnswer: { "@type": "Answer", text: "予防にはアーチサポート付きインソールの使用、ふくらはぎと足底のストレッチ、適切な体重管理、クッション性のある靴の着用、急激な運動量の増加を避けることが効果的です。立ち仕事の方は特に日頃からのケアが重要です。" } },
] };

const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "ホーム", item: "https://sole-laboratory.com" },
  { "@type": "ListItem", position: 2, name: "知識・コラム", item: "https://sole-laboratory.com/articles/" },
  { "@type": "ListItem", position: 3, name: "足底筋膜炎とインソール", item: "https://sole-laboratory.com/articles/plantar-fasciitis/" },
] };

export default function PlantarFasciitisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "知識・コラム", href: "/articles/" }, { label: "足底筋膜炎とインソール" }]} />

      <section className="bg-gradient-to-b from-sky-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-[#0ea5e9] font-semibold mb-3">足底筋膜炎 インソール</p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            <span className="text-[#0ea5e9]">足底筋膜炎</span>とインソール
            <br className="md:hidden" />
            痛みを軽減する選び方ガイド
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            朝起きた瞬間のかかとの激痛。足底筋膜炎は正しいケアで改善できます。
            <br className="hidden md:block" />
            インソールによる痛み軽減の仕組みと選び方を詳しく解説します。
          </p>
        </div>
      </section>

      {/* AI Overviews 結論ボックス */}
      <div className="max-w-4xl mx-auto px-4 mt-4">
        <div className="bg-sky-50 border-l-4 border-[#0ea5e9] p-4 rounded-r-lg text-sm text-gray-700">
          <p className="font-bold text-gray-900 mb-1">この記事の結論</p>
          <p>足底筋膜炎にインソールは効果的です。アーチサポートで足裏の負荷を分散し、かかとへの衝撃を吸収することで痛みを軽減できます。ただし、症状が改善しない場合は整形外科を受診してください。</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <MedicalDisclaimer />
      </div>

      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
          <p className="text-sm font-bold text-gray-900 mb-3">この記事の内容</p>
          <ol className="space-y-1.5 text-sm text-gray-600">
            <li><a href="#what-is" className="hover:text-[#0ea5e9] transition-colors">1. 足底筋膜炎とは？症状と原因</a></li>
            <li><a href="#mechanism" className="hover:text-[#0ea5e9] transition-colors">2. インソールが足底筋膜炎に効く仕組み</a></li>
            <li><a href="#choose" className="hover:text-[#0ea5e9] transition-colors">3. 足底筋膜炎向けインソールの選び方</a></li>
            <li><a href="#usage" className="hover:text-[#0ea5e9] transition-colors">4. インソールの正しい使い方と注意点</a></li>
            <li><a href="#self-care" className="hover:text-[#0ea5e9] transition-colors">5. インソールと併用したいセルフケア</a></li>
            <li><a href="#recommend" className="hover:text-[#0ea5e9] transition-colors">6. おすすめインソール3選</a></li>
            <li><a href="#faq" className="hover:text-[#0ea5e9] transition-colors">7. よくある質問（FAQ）</a></li>
            <li><a href="#summary" className="hover:text-[#0ea5e9] transition-colors">8. まとめ</a></li>
          </ol>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <section id="what-is" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">足底筋膜炎とは？症状と原因</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足底筋膜炎は、かかとの骨から足指の付け根まで足裏に張っている「足底筋膜」という厚い帯状の組織に炎症や微小な断裂が生じる症状です。成人の足の痛みの中で最も多い原因の一つで、特に40〜60代に多く発症します。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">典型的な症状</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">最も特徴的な症状は「朝起きて一歩目を踏み出したときの鋭い痛み」です。就寝中に足底筋膜が収縮した状態で固まり、起床時に急に伸ばされることで強い痛みが発生します。また長時間座った後に立ち上がったときや、長時間歩いた後にも痛みが出ます。痛みの場所はかかとの内側底面が最も多く、土踏まず全体に広がることもあります。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">発症の主な原因</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足底筋膜炎の原因は複合的です。足のアーチ（特に内側縦アーチ）の崩れにより足底筋膜に過度な牽引力がかかること、体重増加による足底への荷重増加、硬い路面での長時間の立ち仕事や歩行、急激な運動量の増加（特にランニング）、ふくらはぎやアキレス腱の硬さ、加齢による足底脂肪パッドの薄化などが主な原因です。<Link href="/articles/foot-arch/" className="text-[#0ea5e9] hover:underline">足のアーチの崩れ</Link>は特に大きな要因です。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">なりやすい人の特徴</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">以下のような方は足底筋膜炎のリスクが高いです。扁平足またはハイアーチの方、BMI30以上の方、長時間の立ち仕事（接客業、工場勤務、教職など）の方、ランニングやジョギングを始めたばかりの方、ふくらはぎが硬い方、クッション性のない靴を常用している方。</p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed"><span className="font-bold text-red-700">注意：</span>痛みが2週間以上続く場合や、歩行が困難なほどの痛みがある場合は、整形外科を受診してください。足底筋膜炎以外の疾患（踵骨骨折、絞扼性神経障害など）の可能性もあります。</p>
          </div>
        </section>

        <section id="mechanism" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">インソールが足底筋膜炎に効く仕組み</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">インソールは以下のメカニズムで足底筋膜炎の症状を軽減します。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">アーチサポートによる牽引力の軽減</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足底筋膜炎の痛みの主原因は、アーチが低下した状態で足底筋膜が過度に引き伸ばされることです。内側縦アーチをサポートするインソールは、アーチを適切な高さで支えることで足底筋膜への牽引力を軽減し、炎症部位へのストレスを減少させます。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">かかとへの衝撃吸収</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足底筋膜炎では、かかとの付着部に最も強い痛みが出ます。かかと部分に厚いクッション素材が配置されたインソールは、着地時の衝撃を吸収し、痛みの発生点であるかかとの付着部への負荷を直接軽減します。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">荷重分散による負担の均等化</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールは足裏全体で均等に体重を支えるよう設計されています。かかとに集中していた荷重が足裏全体に分散されることで、足底筋膜の付着部への集中的なストレスが緩和されます。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">ヒールカップによるかかとの安定化</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">深めのヒールカップはかかとの脂肪パッドを集めて厚くする効果があります。加齢で薄くなったかかとの脂肪パッドを補い、天然のクッション機能を補強します。またかかとの左右のブレを防止し、安定した着地を実現します。</p>
        </section>

        <section id="choose" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">足底筋膜炎向けインソールの選び方</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3"><span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span><h3 className="text-base md:text-lg font-bold text-gray-900">適度な硬さのアーチサポート</h3></div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">足底筋膜炎には、やや硬めのアーチサポートが効果的です。柔らかすぎるとアーチが沈み込んで足底筋膜の牽引を防げません。逆に硬すぎると足裏に痛みが出る場合があります。手で押してやや抵抗を感じる程度の硬さが理想的です。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3"><span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span><h3 className="text-base md:text-lg font-bold text-gray-900">かかと部分の十分なクッション</h3></div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">かかとは痛みの中心部です。かかと部分に厚みのある衝撃吸収素材（EVA、ジェル、高密度フォームなど）が配置されていることが必須条件です。かかとへの衝撃を最低20%以上軽減できる素材が理想的です。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3"><span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span><h3 className="text-base md:text-lg font-bold text-gray-900">深めのヒールカップ</h3></div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">かかとを包み込むように設計された深いヒールカップは、かかとの脂肪パッドを集めて天然のクッション効果を高めます。またかかとを安定させることで、着地時のブレを防ぎ、足底筋膜への不均等なストレスを予防します。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3"><span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span><h3 className="text-base md:text-lg font-bold text-gray-900">フルレングス（全長）タイプ</h3></div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">足底筋膜はかかとから足指の付け根まで伸びているため、足裏全体をカバーするフルレングスタイプのインソールが効果的です。ハーフインソール（かかとだけ）では足底筋膜全体へのサポートが不十分になります。</p>
            </div>
          </div>
        </section>

        <section id="usage" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">インソールの正しい使い方と注意点</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4"><h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">最初は短時間から始める</h3><p className="text-sm text-gray-700 leading-relaxed">足底筋膜炎の痛みがある状態で急にインソールを終日使用すると、かえって症状が悪化することがあります。最初は1〜2時間から始め、3〜5日かけて徐々に使用時間を延ばしていきましょう。</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-4"><h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">室内履きにもインソールを入れる</h3><p className="text-sm text-gray-700 leading-relaxed">自宅でのフローリング上の素足歩行は足底筋膜炎を悪化させます。室内用スリッパやサンダルにもインソールを入れるか、アーチサポート付きの室内履きを使用しましょう。特に朝起きてすぐの歩行時にサポートがあると、ファーストステップペインの軽減に効果的です。</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-4"><h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">靴の選び方も見直す</h3><p className="text-sm text-gray-700 leading-relaxed">いくら良いインソールを入れても、靴自体に問題があると効果が半減します。靴底が薄くクッション性のない靴、履き古してソールがすり減った靴は避けましょう。インソールの効果を最大限に発揮するには、ある程度クッション性のあるスニーカータイプの靴がおすすめです。</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-4"><h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">痛みが増す場合は使用を中止する</h3><p className="text-sm text-gray-700 leading-relaxed">インソール使用後に痛みが以前より強くなった場合は、アーチサポートの高さや硬さが合っていない可能性があります。一旦使用を中止し、別のインソールを試すか、医療機関でオーダーメイドインソールの作製を相談してください。</p></div>
          </div>
        </section>

        <section id="self-care" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">インソールと併用したいセルフケア</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">インソールだけでなく、以下のセルフケアを組み合わせることで回復を早められます。</p>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4"><h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">足底筋膜ストレッチ</h3><p className="text-sm text-gray-700 leading-relaxed">椅子に座った状態で痛い方の足を反対側の膝の上に乗せ、手で足指を反らせて土踏まずが伸びるのを感じましょう。30秒キープを5回、朝・昼・夜の3回行います。特に朝起きる前にベッドの中で行うと、ファーストステップペインの予防に効果的です。</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-4"><h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">ふくらはぎのストレッチ</h3><p className="text-sm text-gray-700 leading-relaxed">ふくらはぎ（腓腹筋とヒラメ筋）の硬さは足底筋膜炎の大きな要因です。壁に手をつき、伸ばしたい方の足を後ろに引いてふくらはぎを伸ばします。膝を伸ばした状態で30秒、膝を軽く曲げた状態で30秒、それぞれ3セット行いましょう。</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-4"><h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">ゴルフボールマッサージ</h3><p className="text-sm text-gray-700 leading-relaxed">ゴルフボールを足裏の下に置き、前後に転がしてセルフマッサージを行います。足底筋膜の血流を改善し、硬くなった組織をほぐす効果があります。痛みを感じない程度の圧で、片足2〜3分ずつ行いましょう。冷凍したペットボトルを使うとアイシング効果も得られます。</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-4"><h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">体重管理</h3><p className="text-sm text-gray-700 leading-relaxed">体重が増加すると足底筋膜への負荷が直接的に増加します。1kg体重が減ると足底にかかる荷重は歩行時に1.5kg、ランニング時に3kg軽減されます。適正体重の維持は足底筋膜炎の予防と治療の両面で重要です。</p></div>
          </div>
        </section>

        <section id="recommend" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">おすすめインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">足底筋膜炎のケアに適したインソールを紹介します。</p>

          <div className="bg-white border-2 border-[#0ea5e9] rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">足底筋膜炎ケアに</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">ピットソール（Pitsole）</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">世界特許の3点サポート構造が内側縦アーチを適切に支え、足底筋膜への過度な牽引力を軽減します。足底筋膜炎の根本原因であるアーチの崩れを包括的にケアし、痛みの軽減と再発予防の両方に貢献。耐久性の高い素材で長期間のケアに適しています。</p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>3点サポートで足底筋膜への牽引力を効果的に軽減</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>アーチ崩れの根本原因にアプローチ</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>高耐久素材で長期間の継続ケアが可能</span></li>
            </ul>
            <Link href="/pitsole/" className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline">ピットソールの詳細レビューを見る &rarr;</Link>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">姿勢改善でケア</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">ランウェイキュアソール（RUNWAY CURE SOLE）</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">歩行姿勢の改善により足裏への荷重パターンを最適化し、足底筋膜の特定部位に集中するストレスを分散します。薄型設計のため、仕事用の靴にも入れやすく、日中のケアに最適です。</p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>歩行姿勢改善で足底への荷重パターンを最適化</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>薄型で仕事用の靴にも対応</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>日中の長時間使用でも快適</span></li>
            </ul>
            <Link href="/runway-cure-sole/" className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline">ランウェイキュアソールの詳細レビューを見る &rarr;</Link>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">重心改善</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">スリムアップインソール（Slim Up Insole）</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">美容整体師監修の正しい重心移動により、かかとへの荷重集中を防ぎ、足底筋膜の付着部へのストレスを軽減します。体重管理（ダイエット）効果も期待でき、足底筋膜炎の原因の一つである体重増加対策にもなります。</p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>重心改善でかかと付着部へのストレスを軽減</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>ダイエット効果で体重管理にも貢献</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>足底筋膜炎の複合的な原因にアプローチ</span></li>
            </ul>
            <Link href="/slim-up-insole/" className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline">スリムアップインソールの詳細レビューを見る &rarr;</Link>
          </div>

          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4"><p className="text-sm text-gray-700 leading-relaxed">3商品の料金・機能・口コミを一覧で比較したい方は<Link href="/ranking/" className="text-[#0ea5e9] font-bold hover:underline">おすすめランキングページ</Link>をご覧ください。</p></div>
        </section>

        <section id="faq" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <details className="group bg-white border border-gray-200 rounded-lg"><summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">足底筋膜炎にインソールは効果がありますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">はい、適切なインソールは足底筋膜炎の痛み軽減に効果的です。アーチサポートにより足底筋膜への牽引力を軽減し、クッション素材がかかとへの衝撃を吸収します。重症の場合は医療機関での治療も必要です。</div></details>
            <details className="group bg-white border border-gray-200 rounded-lg"><summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">足底筋膜炎用のインソールはどんな特徴がありますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">適度な硬さのアーチサポート、かかと部分の厚いクッション材、深めのヒールカップ、やや硬めの中足部が特徴です。柔らかすぎるインソールは逆効果になることもあります。</div></details>
            <details className="group bg-white border border-gray-200 rounded-lg"><summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">足底筋膜炎の朝一歩目の痛みにインソールは効きますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">起床後すぐにインソール入りの室内履きを使用することで、朝一歩目の痛みを軽減できます。就寝中に短縮した足底筋膜への急激なストレスを緩和する効果があります。</div></details>
            <details className="group bg-white border border-gray-200 rounded-lg"><summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">足底筋膜炎はどのくらいで治りますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">軽度で2〜4週間、中等度で2〜3ヶ月、重度では6ヶ月以上かかることもあります。インソール、ストレッチ、生活習慣の改善を組み合わせると回復を早められます。</div></details>
            <details className="group bg-white border border-gray-200 rounded-lg"><summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">足底筋膜炎の予防方法はありますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">アーチサポート付きインソールの使用、ふくらはぎと足底のストレッチ、適切な体重管理、クッション性のある靴の着用、急激な運動量の増加を避けることが効果的です。</div></details>
          </div>
        </section>

        <section id="summary" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">まとめ</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足底筋膜炎は適切なケアで改善できる症状です。インソールによるアーチサポートと衝撃吸収は、痛みの軽減と再発予防の両方に効果的です。ストレッチや体重管理と組み合わせることで、回復をさらに早めることができます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">痛みを我慢して放置すると慢性化し、治療期間が長引きます。早めのインソール導入とセルフケアの開始で、快適な歩行を取り戻しましょう。</p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 mb-6">
            <p className="text-sm font-bold text-gray-900 mb-3">足底筋膜炎ケアにおすすめのインソール</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><Link href="/pitsole/" className="text-[#0ea5e9] font-bold hover:underline">ピットソール</Link>：3点サポートでアーチ崩れの根本原因にアプローチ。</li>
              <li><Link href="/runway-cure-sole/" className="text-[#0ea5e9] font-bold hover:underline">ランウェイキュアソール</Link>：歩行姿勢改善で足底への荷重を最適化。薄型で仕事用にも。</li>
              <li><Link href="/slim-up-insole/" className="text-[#0ea5e9] font-bold hover:underline">スリムアップインソール</Link>：重心改善とダイエット効果で複合的にケア。</li>
            </ul>
          </div>
          <div className="text-center"><Link href="/ranking/" className="inline-block bg-[#0ea5e9] text-white font-bold text-sm md:text-base px-8 py-3 rounded-full hover:bg-sky-600 transition-colors shadow-md">3商品の詳細比較ランキングを見る</Link></div>
        </section>
      </article>

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/articles/foot-arch/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"><p className="text-sm font-semibold text-gray-900">足のアーチとは？崩れる原因と対策</p></Link>
            <Link href="/articles/standing-work/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"><p className="text-sm font-semibold text-gray-900">立ち仕事のインソール対策</p></Link>
            <Link href="/articles/running-insole/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"><p className="text-sm font-semibold text-gray-900">ランニング用インソールおすすめ</p></Link>
            <Link href="/ranking/" className="block p-4 border border-[#e8627c] rounded-xl hover:bg-[#fdf2f4] transition-colors bg-[#fdf2f4]/50"><p className="text-sm font-semibold text-[#e8627c]">おすすめダイエットインソール3選を見る</p></Link>
          </div>
        </div>
      </section>
    </>
  );
}
