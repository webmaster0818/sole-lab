import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import MedicalDisclaimer from "../../components/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "外反母趾の原因と予防法｜インソール以外の対策も紹介",
  description: "外反母趾の原因と予防法を徹底解説。靴選びのポイント、インソールによるケア、足指トレーニング、日常生活での注意点を紹介。ピットソール・ランウェイキュアソール・スリムアップインソールの比較も。",
  alternates: { canonical: "https://sole-laboratory.com/articles/hallux-valgus-prevention/" },
  openGraph: { title: "外反母趾の原因と予防法｜インソール以外の対策も紹介", description: "外反母趾の原因と予防法を徹底解説。靴選びのポイント、インソールによるケア、足指トレーニングを紹介。", url: "https://sole-laboratory.com/articles/hallux-valgus-prevention/", type: "article" },
};

const structuredData = { "@context": "https://schema.org", "@type": "Article", image: "https://sole-laboratory.com/og-image.png", headline: "外反母趾の原因と予防法｜インソール以外の対策も紹介", description: "外反母趾の原因と予防法を徹底解説。靴選びのポイント、インソールによるケア、足指トレーニングを紹介。", author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" }, publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" }, datePublished: "2026-05-17", dateModified: "2026-05-17" };

const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "外反母趾はなぜ女性に多いのですか？", acceptedAnswer: { "@type": "Answer", text: "女性に多い主な理由は、ヒールやパンプスなど先の細い靴の着用頻度が高いこと、女性ホルモンの影響で靭帯が柔らかく伸びやすいこと、男性に比べて筋力が弱く足のアーチを維持しにくいことの3点です。ただし近年は男性の外反母趾も増加傾向にあります。" } },
  { "@type": "Question", name: "外反母趾はインソールで治りますか？", acceptedAnswer: { "@type": "Answer", text: "インソールで外反母趾を「完治」させることは困難ですが、進行を遅らせる、痛みを軽減する、さらなる悪化を予防するといった効果は期待できます。特に横アーチのサポートにより、中足骨の開きを抑制し、母趾への圧力を分散させることが重要です。" } },
  { "@type": "Question", name: "外反母趾の初期症状はどのようなものですか？", acceptedAnswer: { "@type": "Answer", text: "初期症状としては、親指の付け根が少し外側に膨らんでいる、長時間歩くと親指の付け根が痛む、靴の内側が親指の付け根に当たって赤くなる、足の幅が以前より広がった気がする、などが挙げられます。角度が15度以上になると外反母趾と診断されます。" } },
  { "@type": "Question", name: "外反母趾を予防するための靴選びのポイントは？", acceptedAnswer: { "@type": "Answer", text: "つま先に1〜1.5cmの余裕がある靴を選ぶ、幅広タイプで足指が自由に動ける空間を確保する、ヒールは3cm以下に抑える、紐やベルトで足の甲をしっかり固定できるものを選ぶ、の4点が重要です。先の尖ったポインテッドトゥは避けましょう。" } },
  { "@type": "Question", name: "外反母趾の進行を止めるにはどうすればよいですか？", acceptedAnswer: { "@type": "Answer", text: "進行を止めるには、横アーチをサポートするインソールの使用、足指のグーパー体操やタオルギャザーなどの足指トレーニング、適切な靴選び、足指セパレーターの使用の4点を組み合わせることが効果的です。すでに痛みが強い場合は整形外科の受診をおすすめします。" } },
] };

const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "ホーム", item: "https://sole-laboratory.com" },
  { "@type": "ListItem", position: 2, name: "知識・コラム", item: "https://sole-laboratory.com/articles/" },
  { "@type": "ListItem", position: 3, name: "外反母趾の原因と予防法", item: "https://sole-laboratory.com/articles/hallux-valgus-prevention/" },
] };

export default function HalluxValgusPreventionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "知識・コラム", href: "/articles/" }, { label: "外反母趾の原因と予防法" }]} />

      <section className="bg-gradient-to-b from-sky-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-[#0ea5e9] font-semibold mb-3">外反母趾 予防 対策</p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">外反母趾の原因と<span className="text-[#0ea5e9]">予防法</span><br className="md:hidden" />インソール以外の対策も紹介</h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">外反母趾は進行性の症状です。原因を理解し、早めの予防対策を行いましょう。<br className="hidden md:block" />インソール、足指トレーニング、靴選びの3本柱で総合的にケアする方法を解説します。</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <MedicalDisclaimer />
      </div>

      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
          <p className="text-sm font-bold text-gray-900 mb-3">この記事の内容</p>
          <ol className="space-y-1.5 text-sm text-gray-600">
            <li><a href="#cause" className="hover:text-[#0ea5e9] transition-colors">1. 外反母趾とは？原因とメカニズム</a></li>
            <li><a href="#shoes" className="hover:text-[#0ea5e9] transition-colors">2. 外反母趾を予防する靴選び</a></li>
            <li><a href="#insole" className="hover:text-[#0ea5e9] transition-colors">3. インソールによる外反母趾ケア</a></li>
            <li><a href="#training" className="hover:text-[#0ea5e9] transition-colors">4. 足指トレーニングで予防する</a></li>
            <li><a href="#daily" className="hover:text-[#0ea5e9] transition-colors">5. 日常生活での予防ポイント</a></li>
            <li><a href="#recommend" className="hover:text-[#0ea5e9] transition-colors">6. おすすめインソール3選</a></li>
            <li><a href="#faq" className="hover:text-[#0ea5e9] transition-colors">7. よくある質問（FAQ）</a></li>
            <li><a href="#summary" className="hover:text-[#0ea5e9] transition-colors">8. まとめ</a></li>
          </ol>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <section id="cause" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">外反母趾とは？原因とメカニズム</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">外反母趾とは、足の親指（母趾）が小指側に曲がり、親指の付け根の関節が外側に突出する症状です。母趾の外反角度が15度以上で外反母趾と診断され、20度以上で中等度、40度以上で重度とされます。日本人女性の約30%に何らかの外反母趾の症状があるとされています。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">横アーチの崩れが根本原因</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">外反母趾の根本的な原因は、足の横アーチの崩れ（開張足）です。横アーチが崩れると中足骨が扇状に広がり（開張足）、これに引っ張られる形で母趾が内側に曲がっていきます。横アーチの崩れは、足裏の筋力低下、体重増加、合わない靴の着用などによって進行します。<Link href="/articles/foot-arch/" className="text-[#0ea5e9] hover:underline">足のアーチについて</Link>はこちらで詳しく解説しています。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">合わない靴による圧迫</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">先の細い靴やヒールの高い靴は、足指を不自然な位置に強制し、母趾を外側に押し続けます。特にポインテッドトゥのパンプスは、つま先が狭い空間に押し込められるため、外反母趾のリスクを大幅に高めます。ヒールが高いと体重が前足部に集中し、横アーチへの負荷もさらに増加します。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">遺伝的要因</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">外反母趾には遺伝的な要因も関係しています。足の形（エジプト型で母趾が長い方）、関節の柔軟性、靭帯の強度などは遺伝の影響を受けます。親や祖父母に外反母趾がある方は、予防的なケアを早めに始めることをおすすめします。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">筋力低下と加齢</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">足裏の筋力、特に母趾外転筋の筋力が低下すると、母趾を正しい位置に保持する力が弱くなります。40代以降は筋力低下と靭帯の弛緩が加速するため、外反母趾が進行しやすくなります。足指を積極的に使う習慣がない現代人は、若い世代でも足裏の筋力不足に陥りやすいです。</p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed"><span className="font-bold text-amber-700">ポイント：</span>外反母趾は「靴が原因」と思われがちですが、実際は横アーチの崩れ（開張足）が根本原因です。靴はあくまで進行を加速させる要因であり、予防には足の構造自体をケアすることが重要です。</p>
          </div>
        </section>

        <section id="shoes" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">外反母趾を予防する靴選び</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">適切な靴選びは外反母趾予防の基本です。以下のポイントを押さえましょう。</p>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4"><h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">つま先に十分な空間を確保する</h3><p className="text-sm text-gray-700 leading-relaxed">靴のつま先部分（トゥボックス）は足指が自由に動ける広さが必要です。靴を履いた状態でつま先が1〜1.5cm余裕があり、足指を上下に動かせることを確認してください。ラウンドトゥやスクエアトゥの靴が外反母趾予防に適しています。</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-4"><h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">ヒールは3cm以下に</h3><p className="text-sm text-gray-700 leading-relaxed">ヒールが高いほど体重が前足部に集中し、横アーチへの負担と母趾への圧迫が増加します。日常使いの靴はヒール3cm以下が理想的です。どうしてもヒールを履く必要がある場合は、使用時間を短くし、移動時はフラットシューズに履き替えましょう。</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-4"><h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">足の甲をしっかり固定できる靴を選ぶ</h3><p className="text-sm text-gray-700 leading-relaxed">紐靴やベルト付きの靴で足の甲をしっかり固定することで、靴内での足の前滑りを防ぎ、つま先への圧迫を軽減できます。スリッポンタイプは足が前に滑りやすいため、外反母趾予防の観点からはあまり推奨されません。</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-4"><h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">インソールを入れ替えられる靴を選ぶ</h3><p className="text-sm text-gray-700 leading-relaxed">純正の中敷きを取り外して、横アーチサポート付きのインソールに入れ替えられる靴が理想的です。靴とインソールの組み合わせで、外反母趾予防の効果をさらに高めることができます。</p></div>
          </div>
        </section>

        <section id="insole" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">インソールによる外反母趾ケア</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールは外反母趾の予防と進行抑制に効果的なアイテムです。特に横アーチのサポート機能が重要です。</p>
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">横アーチサポートで開張足を防ぐ</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">中足骨パッド（メタタルサルパッド）が配置されたインソールは、崩れた横アーチを下から支え、中足骨の扇状の広がりを抑制します。これにより母趾への引っ張り力が軽減され、外反の進行を遅らせる効果が期待できます。</p>
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">3点サポートで全体のバランスを改善</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">横アーチだけでなく、内側縦アーチと外側縦アーチも含めた3点サポートにより、足裏全体の荷重バランスを改善します。特定の部位に荷重が集中することを防ぎ、外反母趾だけでなく足全体のトラブルを包括的に予防できます。</p>
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">前足部への荷重分散</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">母趾球に集中していた荷重を足裏全体に分散させることで、母趾の付け根関節へのストレスを軽減します。これにより痛みの軽減と炎症の抑制が期待できます。</p>
        </section>

        <section id="training" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">足指トレーニングで予防する</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">足指の筋力を鍛えることで、外反母趾の予防と改善に効果があります。毎日続けることが重要です。</p>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4"><h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">足指グーパー体操</h3><p className="text-sm text-gray-700 leading-relaxed">足指を大きく開いて（パー）5秒キープ、強く握って（グー）5秒キープを繰り返します。足指の筋力強化と可動域の維持に効果的です。20回を3セット、毎日行いましょう。入浴後の温まった状態で行うとより効果的です。</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-4"><h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">母趾外転トレーニング</h3><p className="text-sm text-gray-700 leading-relaxed">親指だけを他の4本の指から離すように外側に広げるトレーニングです。母趾外転筋を直接鍛え、母趾を正しい位置に保持する力を強化します。最初は難しいですが、毎日続けることで徐々にできるようになります。</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-4"><h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">タオルギャザー</h3><p className="text-sm text-gray-700 leading-relaxed">床に広げたタオルを足指だけで手前に引き寄せます。横アーチを形成する筋肉（骨間筋、虫様筋）を効果的に鍛えられます。片足20回を3セット行いましょう。</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-4"><h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">ビー玉つかみ</h3><p className="text-sm text-gray-700 leading-relaxed">足指でビー玉やタオルをつかんで別の場所に移すトレーニングです。足指の巧緻性と筋力を同時に鍛えられます。遊び感覚で行えるため、テレビを見ながらなど気軽に取り組めます。</p></div>
          </div>
        </section>

        <section id="daily" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">日常生活での予防ポイント</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足指トレーニングや靴選び以外にも、日常生活で外反母趾を予防するポイントがあります。</p>
          <div className="space-y-3">
            <div className="bg-white border border-gray-200 rounded-lg p-4"><p className="text-sm text-gray-700"><span className="font-bold">足指セパレーターの活用：</span>就寝時や自宅でのリラックス時に足指セパレーターを使用し、母趾を正しい位置に保持する習慣をつけましょう。</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-4"><p className="text-sm text-gray-700"><span className="font-bold">裸足の時間を増やす：</span>自宅では裸足で過ごし、足指を自由に動かす時間を確保しましょう。スリッパより裸足のほうが足裏の筋肉を使います。</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-4"><p className="text-sm text-gray-700"><span className="font-bold">体重管理：</span>体重が増えると前足部への荷重が増加し、横アーチの崩れを加速させます。適正体重の維持は外反母趾予防にも重要です。</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-4"><p className="text-sm text-gray-700"><span className="font-bold">五本指ソックスの活用：</span>五本指ソックスは足指を1本ずつ独立させ、母趾が他の指に押されるのを防ぎます。外反母趾予防の観点から日常的に活用しましょう。</p></div>
          </div>
        </section>

        <section id="recommend" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">おすすめインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">外反母趾予防に適したインソールを紹介します。</p>

          <div className="bg-white border-2 border-[#0ea5e9] rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">横アーチもサポート</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">ピットソール（Pitsole）</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">世界特許の3点サポート構造が横アーチを含む3つのアーチを同時にサポート。開張足の進行を抑制し、母趾への圧力を分散することで外反母趾の予防に貢献します。足裏全体のバランスを整える包括的なアプローチが特徴です。</p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>横アーチを含む3点サポートで開張足を抑制</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>母趾への荷重集中を分散し外反を予防</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>足裏全体のバランスを包括的に改善</span></li>
            </ul>
            <Link href="/pitsole/" className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline">ピットソールの詳細レビューを見る &rarr;</Link>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">パンプスにも対応</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">ランウェイキュアソール（RUNWAY CURE SOLE）</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">薄型設計でパンプスにも使えるランウェイキュアソールは、ヒールを履く機会が多い女性の外反母趾予防に最適です。姿勢改善効果により前足部への荷重集中を軽減し、母趾への圧迫を和らげます。</p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>薄型でパンプスやヒールにも対応</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>姿勢改善で前足部への荷重集中を軽減</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>女性の外反母趾予防に特に効果的</span></li>
            </ul>
            <Link href="/runway-cure-sole/" className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline">ランウェイキュアソールの詳細レビューを見る &rarr;</Link>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">重心改善</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">スリムアップインソール（Slim Up Insole）</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">正しい重心移動を促すことで、母趾球への過度な荷重集中を防ぎます。重心が適正な位置にあることで、歩行時の蹴り出しが母趾だけに頼らない自然なパターンになり、外反母趾の予防につながります。</p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>重心改善で母趾球への過度な荷重を防止</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>自然な蹴り出しパターンで母趾への負担を軽減</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>ダイエット効果と外反母趾予防を同時に実現</span></li>
            </ul>
            <Link href="/slim-up-insole/" className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline">スリムアップインソールの詳細レビューを見る &rarr;</Link>
          </div>

          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4"><p className="text-sm text-gray-700 leading-relaxed">3商品の料金・機能・口コミを一覧で比較したい方は<Link href="/ranking/" className="text-[#0ea5e9] font-bold hover:underline">おすすめランキングページ</Link>をご覧ください。</p></div>
        </section>

        <section id="faq" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <details className="group bg-white border border-gray-200 rounded-lg"><summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">外反母趾はなぜ女性に多いのですか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">ヒールやパンプスの着用頻度が高いこと、女性ホルモンの影響で靭帯が柔らかいこと、筋力が弱くアーチを維持しにくいことの3点が主な理由です。</div></details>
            <details className="group bg-white border border-gray-200 rounded-lg"><summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">外反母趾はインソールで治りますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">完治は困難ですが、進行を遅らせる、痛みを軽減する、さらなる悪化を予防するといった効果は期待できます。横アーチのサポートが特に重要です。</div></details>
            <details className="group bg-white border border-gray-200 rounded-lg"><summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">外反母趾の初期症状はどのようなものですか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">親指の付け根が少し外側に膨らんでいる、長時間歩くと痛む、靴が当たって赤くなる、足幅が広がった気がする、などが初期症状です。角度15度以上で外反母趾と診断されます。</div></details>
            <details className="group bg-white border border-gray-200 rounded-lg"><summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">外反母趾を予防するための靴選びのポイントは？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">つま先に1〜1.5cmの余裕、幅広タイプ、ヒール3cm以下、紐やベルトで甲を固定できるものが重要です。ポインテッドトゥは避けましょう。</div></details>
            <details className="group bg-white border border-gray-200 rounded-lg"><summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">外反母趾の進行を止めるにはどうすればよいですか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">横アーチサポートのインソール、足指トレーニング、適切な靴選び、足指セパレーターの4点を組み合わせることが効果的です。痛みが強い場合は整形外科を受診してください。</div></details>
          </div>
        </section>

        <section id="summary" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">まとめ</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">外反母趾は横アーチの崩れ（開張足）を根本原因とする進行性の症状です。合わない靴、筋力低下、遺伝的要因が複合して発症・進行します。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">予防には「適切な靴選び」「横アーチサポート付きインソール」「足指トレーニング」「日常生活での注意」の4本柱で総合的にケアすることが重要です。早期の対策で進行を食い止めましょう。</p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 mb-6">
            <p className="text-sm font-bold text-gray-900 mb-3">外反母趾予防におすすめのインソール</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><Link href="/pitsole/" className="text-[#0ea5e9] font-bold hover:underline">ピットソール</Link>：3点サポートで横アーチを含む全アーチをケア。</li>
              <li><Link href="/runway-cure-sole/" className="text-[#0ea5e9] font-bold hover:underline">ランウェイキュアソール</Link>：薄型でパンプスにも対応。女性の外反母趾予防に最適。</li>
              <li><Link href="/slim-up-insole/" className="text-[#0ea5e9] font-bold hover:underline">スリムアップインソール</Link>：重心改善で母趾への過度な負担を防止。</li>
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
            <Link href="/articles/plantar-fasciitis/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"><p className="text-sm font-semibold text-gray-900">足底筋膜炎とインソール</p></Link>
            <Link href="/articles/pumps-insole/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"><p className="text-sm font-semibold text-gray-900">パンプス用インソールおすすめ</p></Link>
            <Link href="/ranking/" className="block p-4 border border-[#e8627c] rounded-xl hover:bg-[#fdf2f4] transition-colors bg-[#fdf2f4]/50"><p className="text-sm font-semibold text-[#e8627c]">おすすめダイエットインソール3選を見る</p></Link>
          </div>
        </div>
      </section>
    </>
  );
}
