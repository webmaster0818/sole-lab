import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "足のアーチとは？崩れる原因と対策｜インソールで矯正できる？",
  description:
    "足のアーチの役割、崩れる原因、対策を徹底解説。扁平足・ハイアーチの違い、インソールによる矯正効果、セルフチェック方法も紹介。ピットソール・ランウェイキュアソール・スリムアップインソールの比較も。",
  alternates: { canonical: "https://sole-laboratory.com/articles/foot-arch/" },
  openGraph: {
    title: "足のアーチとは？崩れる原因と対策｜インソールで矯正できる？",
    description: "足のアーチの役割、崩れる原因、対策を徹底解説。インソールによる矯正効果も紹介。",
    url: "https://sole-laboratory.com/articles/foot-arch/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "足のアーチとは？崩れる原因と対策｜インソールで矯正できる？",
  description: "足のアーチの役割、崩れる原因、対策を徹底解説。インソールによる矯正効果も紹介。",
  author: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-05-17", dateModified: "2026-05-17",
};

const faqStructuredData = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "足のアーチにはどんな種類がありますか？", acceptedAnswer: { "@type": "Answer", text: "足のアーチは3種類あります。土踏まずを形成する「内側縦アーチ」、足の外側に沿った「外側縦アーチ」、つま先の付け根に横方向に走る「横アーチ」です。この3つが連携して衝撃吸収、推進力の生成、バランスの維持を行っています。" } },
    { "@type": "Question", name: "足のアーチが崩れる主な原因は何ですか？", acceptedAnswer: { "@type": "Answer", text: "主な原因は、加齢による筋力低下、体重増加による過度な荷重、運動不足による足裏の筋力低下、合わない靴の長期使用、長時間の立ち仕事などです。遺伝的な要因も関係しますが、後天的な生活習慣が大きな要因となることが多いです。" } },
    { "@type": "Question", name: "インソールで足のアーチは矯正できますか？", acceptedAnswer: { "@type": "Answer", text: "インソールで完全にアーチを「元通り」にすることは困難ですが、適切なアーチサポートにより崩れたアーチを支え、正しい位置での荷重を促すことは可能です。特に初期段階のアーチ低下であれば、インソールと足裏のトレーニングの併用で改善が期待できます。" } },
    { "@type": "Question", name: "自分のアーチの状態をチェックする方法はありますか？", acceptedAnswer: { "@type": "Answer", text: "自宅で簡単にできるのが「ウェットテスト」です。足裏を水で濡らし、色の濃い紙や段ボールの上に足を乗せて足形を確認します。土踏まず部分がほぼ全面ついていたら扁平足気味、中央部分がほとんどついていなければハイアーチ気味です。" } },
    { "@type": "Question", name: "アーチの崩れを放置するとどうなりますか？", acceptedAnswer: { "@type": "Answer", text: "アーチの崩れを放置すると、足底筋膜炎、外反母趾、膝痛、腰痛など連鎖的にさまざまな問題が生じます。足は身体の土台であり、土台の崩れは全身のアライメントに影響します。早めの対策が重要です。" } },
  ],
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://sole-laboratory.com" },
    { "@type": "ListItem", position: 2, name: "知識・コラム", item: "https://sole-laboratory.com/articles/" },
    { "@type": "ListItem", position: 3, name: "足のアーチとは", item: "https://sole-laboratory.com/articles/foot-arch/" },
  ],
};

export default function FootArchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "知識・コラム", href: "/articles/" }, { label: "足のアーチとは？崩れる原因と対策" }]} />

      <section className="bg-gradient-to-b from-sky-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-[#0ea5e9] font-semibold mb-3">足のアーチ 崩れ 原因</p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            足の<span className="text-[#0ea5e9]">アーチ</span>とは？
            <br className="md:hidden" />
            崩れる原因と対策
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            足のアーチは全身を支える「土台」です。なぜアーチが崩れるのか、
            <br className="hidden md:block" />
            どう対策すべきか、インソールで矯正できるのかを詳しく解説します。
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
          <p className="text-sm font-bold text-gray-900 mb-3">この記事の内容</p>
          <ol className="space-y-1.5 text-sm text-gray-600">
            <li><a href="#what-is" className="hover:text-[#0ea5e9] transition-colors">1. 足のアーチとは？3つのアーチの役割</a></li>
            <li><a href="#collapse-cause" className="hover:text-[#0ea5e9] transition-colors">2. アーチが崩れる5つの原因</a></li>
            <li><a href="#self-check" className="hover:text-[#0ea5e9] transition-colors">3. 自分のアーチをセルフチェック</a></li>
            <li><a href="#risk" className="hover:text-[#0ea5e9] transition-colors">4. アーチ崩れが引き起こすトラブル</a></li>
            <li><a href="#insole-effect" className="hover:text-[#0ea5e9] transition-colors">5. インソールによるアーチ矯正の効果</a></li>
            <li><a href="#training" className="hover:text-[#0ea5e9] transition-colors">6. アーチを強化するトレーニング</a></li>
            <li><a href="#recommend" className="hover:text-[#0ea5e9] transition-colors">7. おすすめインソール3選</a></li>
            <li><a href="#faq" className="hover:text-[#0ea5e9] transition-colors">8. よくある質問（FAQ）</a></li>
            <li><a href="#summary" className="hover:text-[#0ea5e9] transition-colors">9. まとめ</a></li>
          </ol>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <section id="what-is" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">足のアーチとは？3つのアーチの役割</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足のアーチとは、足の骨格が形成するアーチ状の構造のことです。人間の足には26個の骨があり、これらが靭帯や筋肉によってアーチ状に保たれています。このアーチ構造が、歩行時の衝撃吸収、推進力の生成、バランスの維持という3つの重要な機能を担っています。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">内側縦アーチ（土踏まず）</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">最もよく知られているアーチが「土踏まず」を形成する内側縦アーチです。かかとの骨から母趾の付け根まで足の内側に沿って走り、主に衝撃吸収と推進力の生成を担います。このアーチが低下した状態が「扁平足」であり、着地時の衝撃が直接骨や関節に伝わってしまいます。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">外側縦アーチ</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足の外側に沿って走るアーチで、主にバランスの維持と歩行時の安定性に寄与します。内側縦アーチと比べると低く、あまり目立ちませんが、歩行時の体重支持において重要な役割を果たしています。このアーチが崩れると足が外側に倒れやすくなり、捻挫のリスクが高まります。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">横アーチ</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">つま先の付け根（中足骨頭）に横方向に走るアーチです。このアーチが正常に機能していると、歩行時の蹴り出し時に足指全体で地面を押し出すことができます。横アーチが崩れると「開張足」となり、外反母趾や内反小趾、タコやマメの原因になります。</p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed"><span className="font-bold text-amber-700">ポイント：</span>3つのアーチは独立して機能するのではなく、相互に連携してバネのような働きをしています。1つのアーチが崩れると、他のアーチにも負担がかかり、連鎖的に全体が崩れていきます。</p>
          </div>
        </section>

        <section id="collapse-cause" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">アーチが崩れる5つの原因</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3"><span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span><h3 className="text-base md:text-lg font-bold text-gray-900">加齢による筋力・靭帯の衰え</h3></div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">40代以降、足裏の内在筋や後脛骨筋の筋力が低下し、アーチを支える力が弱くなります。また靭帯の弾力性も失われるため、体重を支えきれずにアーチが徐々に低下していきます。特に女性は筋力低下が早い傾向があります。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3"><span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span><h3 className="text-base md:text-lg font-bold text-gray-900">体重増加による過度な荷重</h3></div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">体重が増加すると、足裏にかかる荷重も増加します。アーチ構造が設計上の許容範囲を超える荷重を受け続けると、徐々に変形していきます。BMI25以上の方は足のアーチが崩れるリスクが高いとされています。ダイエットとアーチサポートの併用が効果的です。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3"><span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span><h3 className="text-base md:text-lg font-bold text-gray-900">運動不足による足裏筋力の低下</h3></div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">現代人はクッション性の高い靴に守られて歩くことが多く、足裏の筋肉を積極的に使う機会が減っています。足裏の内在筋が衰えると、アーチを能動的に支える力が失われ、静的な構造（靭帯や骨）だけで体重を支えることになり、アーチ崩れが進行します。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3"><span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span><h3 className="text-base md:text-lg font-bold text-gray-900">合わない靴の長期使用</h3></div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">幅の狭い靴は横アーチを圧迫し、大きすぎる靴は足が靴内で前後に滑りアーチに負担をかけます。ヒールの高い靴は前足部に荷重が集中し横アーチを潰します。また、サポート力のない平坦な靴底は、アーチを支える機能がないため長時間の使用で足が疲れやすくなります。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3"><span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span><h3 className="text-base md:text-lg font-bold text-gray-900">長時間の立ち仕事・歩行</h3></div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">1日8時間以上の立ち仕事や長距離の歩行は、足裏の筋肉に大きな疲労を蓄積させます。筋疲労した状態ではアーチを維持する力が低下し、時間の経過とともにアーチが崩れていきます。特に<Link href="/articles/standing-work/" className="text-[#0ea5e9] hover:underline">立ち仕事</Link>の方はインソールでのサポートが重要です。</p>
            </div>
          </div>
        </section>

        <section id="self-check" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">自分のアーチをセルフチェック</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">自宅で簡単にできるアーチのセルフチェック方法を紹介します。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">ウェットテスト（足形チェック）</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足裏を水で濡らし、色の濃い紙や段ボールの上に片足で立って足形を取ります。土踏まず部分がほぼ全面ついていたら扁平足（ローアーチ）、中央部分の幅が足幅の半分以下なら正常、ほとんどついていなければハイアーチの可能性があります。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">靴底の減り方チェック</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">普段履いている靴の底を確認しましょう。内側が大きく減っている場合は過回内（アーチ低下）の可能性が高く、外側が大きく減っている場合はハイアーチ（過回外）の傾向があります。左右で減り方が大きく異なる場合は、骨盤の歪みも考えられます。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">片足立ちテスト</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">片足で30秒間立ってみてください。足首が内側に大きく倒れる、バランスが取りにくい場合はアーチの機能低下が疑われます。目を閉じて行うとより正確に評価できます。</p>
        </section>

        <section id="risk" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">アーチ崩れが引き起こすトラブル</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足のアーチが崩れると、足だけでなく全身にさまざまな問題が波及します。</p>

          <div className="space-y-3 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700"><span className="font-bold">足底筋膜炎：</span>アーチが崩れると足底筋膜に過度なストレスがかかり、かかと周辺に強い痛みが生じます。<Link href="/articles/plantar-fasciitis/" className="text-[#0ea5e9] hover:underline">詳しくはこちら</Link></p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700"><span className="font-bold">外反母趾：</span>横アーチの崩れにより親指の付け根が外側に張り出し、痛みや変形が生じます。<Link href="/articles/hallux-valgus-prevention/" className="text-[#0ea5e9] hover:underline">詳しくはこちら</Link></p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700"><span className="font-bold">膝痛：</span>アーチ崩れによる過回内が膝のアライメントを乱し、<Link href="/articles/knee-pain/" className="text-[#0ea5e9] hover:underline">膝痛</Link>を引き起こします。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700"><span className="font-bold">腰痛：</span>足元の不安定さが骨盤の歪みにつながり、<Link href="/articles/back-pain/" className="text-[#0ea5e9] hover:underline">腰痛</Link>の原因になります。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700"><span className="font-bold">疲れやすさ：</span>アーチの衝撃吸収機能が失われると、歩行効率が低下し、同じ距離を歩いても疲れやすくなります。</p>
            </div>
          </div>
        </section>

        <section id="insole-effect" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">インソールによるアーチ矯正の効果</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールは崩れたアーチを外部から支え、正しい位置での荷重を促す「補助具」としての役割を果たします。完全にアーチを元に戻すことは困難ですが、以下の効果が期待できます。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">アーチの物理的サポート</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">アーチサポート付きのインソールは、崩れたアーチを適切な高さで支え、足裏の正しい荷重分布を回復させます。特に3点サポート構造のインソールは、3つのアーチを同時にサポートするため、包括的な効果が得られます。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">筋肉の適切な使い方を促す</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">アーチが正しい位置にサポートされることで、足裏の筋肉が本来の使い方を取り戻します。正しい筋肉の使い方が習慣化されることで、インソールなしでも徐々にアーチを維持できるようになる可能性があります。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">さらなるアーチ崩れの予防</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">アーチサポートにより崩れた状態での荷重を防ぐため、さらなる悪化を食い止める効果があります。早い段階でインソールを導入することで、不可逆的な変形を予防できます。</p>
        </section>

        <section id="training" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">アーチを強化するトレーニング</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">インソールと併用して足裏のトレーニングを行うことで、アーチの回復効果が高まります。</p>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">ショートフットエクササイズ</h3>
              <p className="text-sm text-gray-700 leading-relaxed">足指を曲げずに、足裏の筋肉だけで土踏まずを持ち上げるトレーニングです。足を短くするイメージで行います。最初は難しいですが、続けることで足裏の内在筋が鍛えられ、アーチの自己保持力が向上します。片足10回を3セット、毎日行いましょう。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">タオルギャザー</h3>
              <p className="text-sm text-gray-700 leading-relaxed">床にタオルを広げ、足指だけでタオルを手前に引き寄せるトレーニングです。足指の屈曲筋と足裏の内在筋を同時に鍛えられます。横アーチの強化に特に効果的です。片足20回を3セット行いましょう。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">カーフレイズ（つま先立ち）</h3>
              <p className="text-sm text-gray-700 leading-relaxed">つま先立ちで上下する運動は、後脛骨筋を鍛えてアーチを支える力を強化します。段差の端に立って行うと可動域が広がり効果的です。15回を3セット、ゆっくりと行いましょう。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">裸足ウォーキング</h3>
              <p className="text-sm text-gray-700 leading-relaxed">自宅内や安全な場所で裸足で歩くことで、足裏の感覚を刺激し、内在筋を活性化させます。1日10〜15分程度から始めましょう。ただし痛みがある場合は無理をせず、インソール使用時と交互に行ってください。</p>
            </div>
          </div>
        </section>

        <section id="recommend" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">おすすめインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">アーチサポートに優れたインソールを紹介します。</p>

          <div className="bg-white border-2 border-[#0ea5e9] rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">3点アーチサポート</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">ピットソール（Pitsole）</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">世界特許の3点サポート構造により、内側縦アーチ・外側縦アーチ・横アーチの3つを同時にサポートします。3つのアーチを包括的に支えることで、足裏全体のバランスを最適化し、アーチ崩れの進行を防ぎながら正しい荷重パターンを促します。</p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>世界特許の3点サポートで3つのアーチを同時にケア</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>TPU系素材で長期間アーチサポート形状を維持</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>足裏全体のバランスを最適化し連鎖的な問題を予防</span></li>
            </ul>
            <Link href="/pitsole/" className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline">ピットソールの詳細レビューを見る &rarr;</Link>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">薄型アーチサポート</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">ランウェイキュアソール（RUNWAY CURE SOLE）</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">薄型でありながら効果的なアーチサポートを実現。パンプスやローファーなど靴内空間が限られる靴でもアーチをしっかり支えます。歩行姿勢の改善を通じて、アーチに適切な刺激を与え、足裏の筋力活性化にも寄与します。</p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>薄型設計でも効果的なアーチサポートを実現</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>歩行姿勢改善で足裏筋力の活性化を促す</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>パンプスやビジネスシューズにも対応</span></li>
            </ul>
            <Link href="/runway-cure-sole/" className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline">ランウェイキュアソールの詳細レビューを見る &rarr;</Link>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">重心改善</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">スリムアップインソール（Slim Up Insole）</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">美容整体師監修のもと、正しい重心位置を促す設計でアーチへの負担を軽減します。重心が適正な位置にあることで、アーチにかかる力が均等化され、特定部位への過度なストレスを防ぎます。</p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>正しい重心位置でアーチへの負担を均等化</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>美容整体師の知見に基づく科学的設計</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>ダイエット効果とアーチケアを同時に追求</span></li>
            </ul>
            <Link href="/slim-up-insole/" className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline">スリムアップインソールの詳細レビューを見る &rarr;</Link>
          </div>

          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">3商品の料金・機能・口コミを一覧で比較したい方は<Link href="/ranking/" className="text-[#0ea5e9] font-bold hover:underline">おすすめランキングページ</Link>をご覧ください。</p>
          </div>
        </section>

        <section id="faq" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <details className="group bg-white border border-gray-200 rounded-lg"><summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">足のアーチにはどんな種類がありますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">足のアーチは3種類あります。土踏まずを形成する「内側縦アーチ」、足の外側に沿った「外側縦アーチ」、つま先の付け根に横方向に走る「横アーチ」です。この3つが連携して衝撃吸収、推進力の生成、バランスの維持を行っています。</div></details>
            <details className="group bg-white border border-gray-200 rounded-lg"><summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">足のアーチが崩れる主な原因は何ですか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">主な原因は加齢による筋力低下、体重増加、運動不足、合わない靴の使用、長時間の立ち仕事などです。後天的な生活習慣が大きな要因となることが多いです。</div></details>
            <details className="group bg-white border border-gray-200 rounded-lg"><summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">インソールで足のアーチは矯正できますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">完全に元通りにすることは困難ですが、適切なサポートにより崩れを支え、正しい荷重を促すことは可能です。初期段階であればインソールとトレーニングの併用で改善が期待できます。</div></details>
            <details className="group bg-white border border-gray-200 rounded-lg"><summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">自分のアーチの状態をチェックする方法はありますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">「ウェットテスト」が簡単です。足裏を水で濡らし色の濃い紙の上に立ち、足形を確認します。土踏まず部分がほぼ全面ついていたら扁平足、ほとんどついていなければハイアーチの傾向です。</div></details>
            <details className="group bg-white border border-gray-200 rounded-lg"><summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">アーチの崩れを放置するとどうなりますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">足底筋膜炎、外反母趾、膝痛、腰痛など連鎖的にさまざまな問題が生じます。足は身体の土台であり、早めの対策が重要です。</div></details>
          </div>
        </section>

        <section id="summary" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">まとめ</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足のアーチは全身を支える土台であり、その崩れは足だけでなく膝、腰、姿勢にまで影響を及ぼします。加齢、体重増加、運動不足、合わない靴などの要因でアーチは崩れていきますが、早期の対策で進行を食い止めることが可能です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">インソールによるアーチサポートと、足裏のトレーニングの併用が最も効果的なアプローチです。特に3つのアーチを同時にケアできるインソールを選ぶことで、包括的な改善が期待できます。</p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 mb-6">
            <p className="text-sm font-bold text-gray-900 mb-3">アーチケアにおすすめのインソール</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><Link href="/pitsole/" className="text-[#0ea5e9] font-bold hover:underline">ピットソール</Link>：世界特許の3点サポートで3つのアーチを同時にケア。</li>
              <li><Link href="/runway-cure-sole/" className="text-[#0ea5e9] font-bold hover:underline">ランウェイキュアソール</Link>：薄型でも効果的なアーチサポート。パンプスにも対応。</li>
              <li><Link href="/slim-up-insole/" className="text-[#0ea5e9] font-bold hover:underline">スリムアップインソール</Link>：重心改善でアーチへの負担を均等化。</li>
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
            <Link href="/articles/flat-feet/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"><p className="text-sm font-semibold text-gray-900">扁平足・浮き指にインソールは効果ある？</p></Link>
            <Link href="/articles/plantar-fasciitis/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"><p className="text-sm font-semibold text-gray-900">足底筋膜炎とインソール</p></Link>
            <Link href="/articles/hallux-valgus-prevention/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"><p className="text-sm font-semibold text-gray-900">外反母趾の原因と予防法</p></Link>
            <Link href="/ranking/" className="block p-4 border border-[#e8627c] rounded-xl hover:bg-[#fdf2f4] transition-colors bg-[#fdf2f4]/50"><p className="text-sm font-semibold text-[#e8627c]">おすすめダイエットインソール3選を見る</p></Link>
          </div>
        </div>
      </section>
    </>
  );
}
