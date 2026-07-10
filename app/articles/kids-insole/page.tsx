import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "子供用インソールおすすめ5選｜成長期の足をサポートする選び方",
  description:
    "子供用インソールのおすすめ5選を紹介。成長期の足のアーチ形成・偏平足対策・運動時の衝撃吸収に最適なインソールの選び方を解説。ピットソール・ランウェイキュアソール・スリムアップインソールの子供への活用法も。",
  alternates: { canonical: "https://sole-laboratory.com/articles/kids-insole/" },
  openGraph: {
    title: "子供用インソールおすすめ5選｜成長期の足をサポートする選び方",
    description: "子供用インソールのおすすめ5選を紹介。成長期の足のアーチ形成をサポートする選び方を解説。",
    url: "https://sole-laboratory.com/articles/kids-insole/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "子供用インソールおすすめ5選｜成長期の足をサポートする選び方",
  description: "子供用インソールのおすすめ5選を紹介。成長期の足のアーチ形成をサポートする選び方を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-05-17",
  dateModified: "2026-07-10",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "子供にインソールを使わせるのは何歳からが良いですか？", acceptedAnswer: { "@type": "Answer", text: "一般的に6歳頃から足のアーチが形成され始めるため、6〜7歳以降でのインソール使用が適切です。ただし、足の発達には個人差があるため、お子さんが足の痛みを訴えたり、歩き方に気になる点があれば、年齢に関わらず小児整形外科に相談の上、インソールの導入を検討してください。" } },
    { "@type": "Question", name: "子供の偏平足はインソールで治りますか？", acceptedAnswer: { "@type": "Answer", text: "子供の偏平足の多くは成長とともに自然に改善します（生理的扁平足）。インソールはアーチの形成をサポートし、正しい足の発達を促す役割を果たします。ただし、インソールだけで「治す」というよりは、正しい発達をサポートするツールとして位置づけてください。" } },
    { "@type": "Question", name: "成長が早い子供のインソールはどのくらいで買い替えますか？", acceptedAnswer: { "@type": "Answer", text: "子供の足は半年で0.5〜1cm程度成長するため、3〜6ヶ月ごとにサイズの見直しが必要です。カットタイプのインソールであれば多少の成長には対応できますが、靴自体を買い替えるタイミングでインソールも新調するのが目安です。" } },
    { "@type": "Question", name: "運動靴にインソールを入れても子供のパフォーマンスに影響はありませんか？", acceptedAnswer: { "@type": "Answer", text: "適切なインソールは子供のパフォーマンスを向上させる可能性があります。足裏の安定性が高まることで、走る・跳ぶ・方向転換などの動作が安定し、怪我のリスクも軽減されます。ただし、厚すぎるインソールは靴内が窮屈になるため、薄型〜中厚のものを選んでください。" } },
    { "@type": "Question", name: "大人用のインソールを子供にカットして使っても大丈夫ですか？", acceptedAnswer: { "@type": "Answer", text: "XSサイズ（21cm〜）に対応している大人用インソールであれば、カットして子供に使用可能です。ただし、子供の足は大人と骨格が異なるため、アーチの位置が合わない場合があります。可能であれば子供用に設計されたインソールか、子供サイズに対応した製品を選ぶことをおすすめします。" } },
    { "@type": "Question", name: "スポーツをしている子供のかかとや膝の痛みにインソールは効果がありますか？", acceptedAnswer: { "@type": "Answer", text: "衝撃吸収性のあるインソールは、運動時の足への負担をやわらげる補助にはなり得ます。ただし、成長期のかかとや膝の痛みには骨の成長部分への負担が関係する場合があるとされており、インソールは治療ではありません。強い痛み・続く痛み・腫れがある場合は、練習を無理に続けさせず小児整形外科を受診してください。" } },
    { "@type": "Question", name: "子供のインソールのサイズ確認はいつ行えば良いですか？", acceptedAnswer: { "@type": "Answer", text: "学期の変わり目や靴を買い替えるタイミングなど、3ヶ月に1回程度を目安に習慣化するのがおすすめです。つま先の余裕・かかとの位置・インソール表面のへたりやすり減り・左右差をチェックし、合わなくなっていたらカット調整や買い替えを行いましょう。" } },
  ],
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://sole-laboratory.com" },
    { "@type": "ListItem", position: 2, name: "知識・コラム", item: "https://sole-laboratory.com/articles/" },
    { "@type": "ListItem", position: 3, name: "子供用インソールおすすめ", item: "https://sole-laboratory.com/articles/kids-insole/" },
  ],
};

export default function KidsInsolePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "知識・コラム", href: "/articles/" }, { label: "子供用インソールおすすめ" }]} />

      <section className="bg-gradient-to-b from-sky-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-[#0ea5e9] font-semibold mb-3">2026年最新版</p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            子供用インソール
            <br className="md:hidden" />
            おすすめ<span className="text-[#0ea5e9]">5選</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            成長期の足のアーチ形成をサポートし、偏平足対策や運動時の足の保護に最適な
            <br className="hidden md:block" />
            子供用インソールの選び方を解説します。
          </p>
        </div>
      </section>

      {/* 結論先出し（直答） */}
      <div className="max-w-4xl mx-auto px-4 mt-4">
        <div className="bg-sky-50 border-l-4 border-[#0ea5e9] p-4 rounded-r-lg text-sm text-gray-700">
          <p className="font-bold text-gray-900 mb-1">結論：子供用インソールの選び方</p>
          <p>子供用インソールは<strong>成長に合わせたサイズ</strong>（足は半年で0.5〜1cm伸びるため3〜6か月ごとに見直し・カット調整できるものが便利）、<strong>柔らかめのアーチサポート</strong>（偏平足対策。硬すぎは筋肉の発達を妨げるため成長段階に合わせる）、<strong>衝撃吸収性・通気性や抗菌性</strong>、<strong>靴とのフィット感</strong>で選ぶのが基本です。導入の目安は足のアーチが形成される6歳頃以降。足の痛みや歩き方・変形が気になる場合は自己判断せず、<strong>小児整形外科など専門医に相談</strong>してください。</p>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
          <p className="text-sm font-bold text-gray-900 mb-3">この記事の内容</p>
          <ol className="space-y-1.5 text-sm text-gray-600">
            <li><a href="#why" className="hover:text-[#0ea5e9] transition-colors">1. 子供にインソールが必要な理由</a></li>
            <li><a href="#development" className="hover:text-[#0ea5e9] transition-colors">2. 子供の足の発達とインソールの関係</a></li>
            <li><a href="#how-to-choose" className="hover:text-[#0ea5e9] transition-colors">3. 子供用インソールの選び方</a></li>
            <li><a href="#recommend" className="hover:text-[#0ea5e9] transition-colors">4. 子供用インソールおすすめ5選</a></li>
            <li><a href="#usage" className="hover:text-[#0ea5e9] transition-colors">5. 使い方と注意点</a></li>
            <li><a href="#sports" className="hover:text-[#0ea5e9] transition-colors">6. スポーツをする成長期の子供の注意点</a></li>
            <li><a href="#replacement" className="hover:text-[#0ea5e9] transition-colors">7. 買い替えサイクルとサイズ確認の習慣化</a></li>
            <li><a href="#faq" className="hover:text-[#0ea5e9] transition-colors">8. よくある質問（FAQ）</a></li>
            <li><a href="#summary" className="hover:text-[#0ea5e9] transition-colors">9. まとめ</a></li>
          </ol>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <section id="why" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">子供にインソールが必要な理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">子供の足は大人と異なり、骨格や筋肉が発達途上にあります。この大切な成長期に足をサポートすることで、将来的な足のトラブルを予防し、正しい体の発達を促すことができます。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">成長期のアーチ形成をサポート</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">子供の足裏のアーチは6〜12歳にかけて徐々に形成されます。この時期に適切なサポートがないと、アーチが十分に発達せず、大人になってからの扁平足や足の疲れやすさにつながることがあります。インソールで適度なアーチサポートを与えることで、正しいアーチの形成を促進できます。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">運動時の衝撃から足を守る</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">子供は走り回ることが多く、足への衝撃が大きいにも関わらず、子供用の靴は軽量化のためクッション性が低いものが多くあります。衝撃吸収機能のあるインソールを入れることで、成長中の骨や関節を過度な衝撃から保護できます。特にスポーツをしているお子さんには重要です。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">正しい歩き方と姿勢の基礎づくり</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">子供の歩き方のクセは、大人になっても残ります。内股歩き、外股歩き、すり足などの歩行パターンは、足元の不安定さが原因であることが多いです。インソールで足元を安定させることで、正しい歩き方の基礎が身につき、良い姿勢が自然と習慣化されます。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">靴のフィット感向上</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">子供の靴は「すぐに大きくなるから」と大きめのサイズを購入するケースが多いですが、大きすぎる靴は足の不安定さやつまずきの原因になります。インソールでフィット感を調整することで、成長に合わせたサイズでも安定した歩行が可能になります。</p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-amber-700">ポイント：</span>
              子供用インソールは「アーチ形成サポート」「衝撃吸収」「歩き方改善」「フィット感向上」の4つの面で、成長期の足の健全な発達をサポートします。
            </p>
          </div>
        </section>

        <section id="development" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">子供の足の発達とインソールの関係</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">年齢による足の発達段階とインソールの必要性について解説します。</p>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">3〜5歳：アーチ未発達期</h3>
              <p className="text-sm text-gray-700 leading-relaxed">この年齢では足裏の脂肪が厚く、アーチが見えない「生理的扁平足」の状態が正常です。基本的にインソールは不要ですが、歩き方に著しい異常がある場合は小児整形外科に相談しましょう。この時期は裸足で遊ぶことが足の発達に最も良い刺激になります。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">6〜9歳：アーチ形成期</h3>
              <p className="text-sm text-gray-700 leading-relaxed">この時期にアーチが徐々に形成されます。偏平足が残っている場合や、足の疲れを訴える場合は、緩やかなアーチサポートのインソールの導入を検討しましょう。ただし、過度なサポートは足の筋肉の発達を妨げる可能性があるため、柔らかめのアーチサポートが適切です。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">10〜12歳：アーチ完成期</h3>
              <p className="text-sm text-gray-700 leading-relaxed">足のアーチがほぼ完成に近づく時期です。スポーツ活動が活発になり、足への負荷も増えるため、衝撃吸収とアーチサポートを兼ね備えたインソールが効果的です。この時期のインソール選びは大人用に近い基準で問題ありません。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">13歳以降：成長期後半</h3>
              <p className="text-sm text-gray-700 leading-relaxed">足の骨格がほぼ大人と同じレベルまで発達します。この時期からは大人用インソールの小さめサイズ（XSやS）を使用できるようになります。スポーツの種類に合わせた専門性の高いインソールを選ぶことで、パフォーマンスの向上と怪我の予防が期待できます。</p>
            </div>
          </div>
        </section>

        <section id="how-to-choose" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">子供用インソールの選び方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">子供用インソールを選ぶ際に注意すべきポイントを解説します。</p>

          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 mb-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <h3 className="text-base md:text-lg font-bold text-gray-900">適度なアーチサポート</h3>
            </div>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">子供用インソールのアーチサポートは「硬すぎず、柔らかすぎず」が重要です。硬すぎるサポートは足の筋肉の発達を妨げ、柔らかすぎると効果がありません。成長段階に合った適度なサポート力のインソールを選びましょう。迷った場合は小児整形外科で相談するのがベストです。</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 mb-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <h3 className="text-base md:text-lg font-bold text-gray-900">衝撃吸収性能</h3>
            </div>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">子供は活動量が多く、走る・跳ぶ・着地する動作が頻繁です。成長中の骨や関節を守るために、衝撃吸収性能は重要な選定基準です。特にスポーツをしているお子さんには、かかとと前足部にクッション素材が配置されたインソールを選びましょう。</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 mb-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <h3 className="text-base md:text-lg font-bold text-gray-900">通気性と抗菌機能</h3>
            </div>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">子供は代謝が活発で汗をかきやすいため、通気性と抗菌機能は必須です。蒸れた状態が続くと水虫やニオイの原因になります。メッシュ素材や抗菌加工が施されたインソールを選び、使用後は靴から取り出して乾かす習慣をつけましょう。</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <h3 className="text-base md:text-lg font-bold text-gray-900">サイズ調整のしやすさ</h3>
            </div>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">子供の足は成長が早いため、カットしてサイズ調整できるインソールが経済的です。成長に合わせて少しずつカットし直すことで、1つのインソールを長く使い続けることができます。カットラインが印刷された製品であれば、保護者が簡単にサイズ調整できます。</p>
          </div>
        </section>

        <section id="recommend" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">子供用インソールおすすめ5選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">成長期の子供の足をサポートするインソールを5つ厳選しました。</p>

          <div className="bg-white border-2 border-[#0ea5e9] rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">おすすめ 1</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">ピットソール（Pitsole）XSサイズ</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">XSサイズ（21〜22.5cm対応）があり、小学校高学年〜中学生のお子さんに使用可能です。世界特許の3点サポート構造で、成長期の足裏アーチを的確にサポートします。カットラインが印刷されているため、成長に合わせてサイズ調整も簡単。保護者が安心して選べる信頼の実績があります。</p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>世界特許の3点サポートで成長期の足をサポート</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>XSサイズ（21cm〜）で小学生高学年から使用可能</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>カットライン付きで成長に合わせた調整が簡単</span></li>
            </ul>
            <Link href="/pitsole/" className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline">ピットソールの詳細レビューを見る &rarr;</Link>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">おすすめ 2</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">スリムアップインソール（Slim Up Insole）</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">美容整体師監修の正しい重心移動を促す設計が、子供の歩き方改善に効果的です。男女兼用で幅広いサイズに対応しており、成長が早いお子さんにも長く使いやすい設計です。正しい歩き方の基礎を身につけるために、日常的な使用をおすすめします。</p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>正しい重心移動で子供の歩き方を改善</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>男女兼用で幅広いサイズに対応</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>美容整体師監修で正しい発達をサポート</span></li>
            </ul>
            <Link href="/slim-up-insole/" className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline">スリムアップインソールの詳細レビューを見る &rarr;</Link>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">おすすめ 3</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">ランウェイキュアソール（RUNWAY CURE SOLE）Mサイズ</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">Mサイズ（22.5〜23.5cm）が小学校高学年〜中学生の女の子に対応しています。美姿勢サポート機能で、成長期の姿勢改善を助けます。薄型設計のため、学校の上履きや通学靴にも入れやすいのが特徴です。</p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>美姿勢サポートで成長期の姿勢改善</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>薄型で上履きや通学靴にも対応</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>Mサイズが小学生高学年〜中学生の女子に対応</span></li>
            </ul>
            <Link href="/runway-cure-sole/" className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline">ランウェイキュアソールの詳細レビューを見る &rarr;</Link>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">おすすめ 4</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">Superfeet（スーパーフィート） ジュニア</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">子供用に設計された専用モデルで、成長期の足に合わせた緩やかなアーチサポートが特徴です。16cm〜24cmまでのサイズ展開があり、幼児期から中学生まで幅広く対応します。耐久性に優れ、活発な子供の使用にも長く耐えます。</p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>子供専用設計で成長段階に適したサポート</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>16cm〜の幅広いサイズ展開</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>耐久性に優れ活発な子供の使用に対応</span></li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">おすすめ 5</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">SIDAS（シダス） ジュニアプレー</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">フランスのインソール専門メーカーが開発した子供用スポーツモデルです。軽量で衝撃吸収性に優れ、走る・跳ぶなどの活発な動きをサポートします。サッカーや野球など、スポーツをしているお子さんに特におすすめです。</p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>子供用スポーツ専用設計</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>軽量で動きを妨げない</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>衝撃吸収性に優れ成長中の足を保護</span></li>
            </ul>
          </div>

          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              3商品の料金・機能・口コミを一覧で比較したい方は
              <Link href="/ranking/" className="text-[#0ea5e9] font-bold hover:underline">おすすめランキングページ</Link>をご覧ください。
            </p>
          </div>
        </section>

        <section id="usage" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">使い方と注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">子供にインソールを使わせる際の注意点をまとめました。</p>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">短時間から始めて徐々に慣らす</h3>
              <p className="text-sm text-gray-700 leading-relaxed">子供にインソールを初めて使わせる場合、最初は1〜2時間から始め、徐々に使用時間を延ばしましょう。いきなり1日中使わせると足に違和感を感じたり、痛みを訴える場合があります。1〜2週間かけて慣らしていくのが理想的です。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">定期的にサイズを確認する</h3>
              <p className="text-sm text-gray-700 leading-relaxed">子供の足は成長が早いため、3ヶ月に1回はインソールのサイズが合っているか確認しましょう。つま先部分にインソールが届いていない、かかとがはみ出しているなどの場合はサイズが合っていません。靴を買い替えるタイミングでインソールもサイズの見直しを行ってください。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">裸足で遊ぶ時間も確保する</h3>
              <p className="text-sm text-gray-700 leading-relaxed">インソールに頼りすぎず、裸足で遊ぶ時間も大切にしましょう。裸足で芝生や砂場を歩くことは、足裏の感覚を鍛え、筋肉の発達を促す最良のトレーニングです。インソールは外出時のサポートとして位置づけ、家の中では裸足で過ごす習慣を維持してください。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">痛みが続く場合は専門医に相談</h3>
              <p className="text-sm text-gray-700 leading-relaxed">インソールを使い始めて1〜2週間経っても足の痛みや違和感が続く場合は、使用を中止して小児整形外科に相談しましょう。足の構造に問題がある場合は、市販のインソールではなくオーダーメイドのインソール（医療用装具）が必要な場合もあります。</p>
            </div>
          </div>
        </section>

        <section id="sports" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">スポーツをする成長期の子供の注意点（一般論）</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">サッカー・野球・バスケットボール・陸上など、走る量やジャンプの多いスポーツを続けている成長期の子供は、大人よりも足への負担のかかり方に注意が必要です。成長期には骨がまだ発達の途中にあり、かかとや膝の骨の成長部分に運動による負担が集中しやすいことが一般に知られています。「かかとが痛い」「膝の下が痛い」と繰り返し訴える場合は、単なる疲れと決めつけないことが大切です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールにできるのは、着地の衝撃をやわらげ、足元を安定させて負担を減らす「補助」です。衝撃吸収性とかかとの安定性（ヒールカップ）のあるタイプを、練習用のシューズにも通学靴にも入れておくと、1日を通した足への負担軽減につながります。一方で、インソールは痛みの治療ではないため、痛みを我慢しながら練習を続けるための道具にしないでください。かかとの痛みに対する一般的な考え方は<Link href="/articles/heel-pain-insole/" className="text-[#0ea5e9] font-bold hover:underline">かかとが痛い時のインソール</Link>も参考になります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-amber-700">受診の目安：</span>
              足の変形（強い偏平足・つま先や、かかとの向きの異常など）が気になる、強い痛みや腫れがある、痛みが数日以上続く・繰り返す、痛みで歩き方が変わっている——このような場合は、インソールで様子を見るのではなく、まず小児整形外科を受診してください。成長期の痛みは早めに専門医が確認することが大切です。
            </p>
          </div>
        </section>

        <section id="replacement" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">買い替えサイクルとサイズ確認の習慣化</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">子供の足は半年で0.5〜1cm程度伸びるため、インソールも「一度買ったら終わり」ではなく、定期的な見直しが前提になります。おすすめは、<strong>学期の変わり目・靴の買い替え時・シーズンの節目</strong>など、思い出しやすいタイミングとセットにして3ヶ月に1回程度のチェックを習慣化することです。以下のポイントを親子で確認しましょう。</p>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            <li><span className="font-bold">つま先の余裕：</span>インソールの上に足を乗せたとき、指先がインソールの先端からはみ出していないか</li>
            <li><span className="font-bold">かかとの位置：</span>かかとがヒールカップの中央に収まっているか、後ろにはみ出していないか</li>
            <li><span className="font-bold">へたり・すり減り：</span>表面の指の跡が深く残る、クッションがつぶれて薄くなった、特定の場所だけすり減っている</li>
            <li><span className="font-bold">左右差：</span>片方だけ極端にすり減っていないか（歩き方の偏りのサインのこともあります）</li>
          </ul>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">サイズが合わなくなっていたら、カット式なら切り直して調整し、カットの余地がなければ買い替えます。靴を新調するタイミングでインソールも一緒に見直すと、フィットのずれを防げます。カットの手順は<Link href="/articles/size-adjustment/" className="text-[#0ea5e9] font-bold hover:underline">インソールのサイズ調整方法</Link>を参考にしてください。なお、へたったインソールを使い続けると衝撃吸収やサポートの機能が落ちるため、サイズが変わらなくても消耗したら交換が目安です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">保護者の方が自分用のインソール選びも検討している場合は、<Link href="/diagnosis/" className="text-[#0ea5e9] font-bold hover:underline">6つの質問でわかるタイプ診断</Link>もご利用ください。</p>
        </section>

        <section id="faq" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">子供にインソールを使わせるのは何歳からが良いですか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">一般的に6歳頃から足のアーチが形成され始めるため、6〜7歳以降でのインソール使用が適切です。ただし、足の発達には個人差があるため、お子さんが足の痛みを訴えたり、歩き方に気になる点があれば、年齢に関わらず小児整形外科に相談の上、インソールの導入を検討してください。</div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">子供の偏平足はインソールで治りますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">子供の偏平足の多くは成長とともに自然に改善します（生理的扁平足）。インソールはアーチの形成をサポートし、正しい足の発達を促す役割を果たします。ただし、インソールだけで「治す」というよりは、正しい発達をサポートするツールとして位置づけてください。</div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">成長が早い子供のインソールはどのくらいで買い替えますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">子供の足は半年で0.5〜1cm程度成長するため、3〜6ヶ月ごとにサイズの見直しが必要です。カットタイプのインソールであれば多少の成長には対応できますが、靴自体を買い替えるタイミングでインソールも新調するのが目安です。</div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">運動靴にインソールを入れても子供のパフォーマンスに影響はありませんか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">適切なインソールは子供のパフォーマンスを向上させる可能性があります。足裏の安定性が高まることで、走る・跳ぶ・方向転換などの動作が安定し、怪我のリスクも軽減されます。ただし、厚すぎるインソールは靴内が窮屈になるため、薄型〜中厚のものを選んでください。</div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">大人用のインソールを子供にカットして使っても大丈夫ですか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">XSサイズ（21cm〜）に対応している大人用インソールであれば、カットして子供に使用可能です。ただし、子供の足は大人と骨格が異なるため、アーチの位置が合わない場合があります。可能であれば子供用に設計されたインソールか、子供サイズに対応した製品を選ぶことをおすすめします。</div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">スポーツをしている子供のかかとや膝の痛みにインソールは効果がありますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">衝撃吸収性のあるインソールは、運動時の足への負担をやわらげる補助にはなり得ます。ただし、成長期のかかとや膝の痛みには骨の成長部分への負担が関係する場合があるとされており、インソールは治療ではありません。強い痛み・続く痛み・腫れがある場合は、練習を無理に続けさせず小児整形外科を受診してください。</div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">子供のインソールのサイズ確認はいつ行えば良いですか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">学期の変わり目や靴を買い替えるタイミングなど、3ヶ月に1回程度を目安に習慣化するのがおすすめです。つま先の余裕・かかとの位置・インソール表面のへたりやすり減り・左右差をチェックし、合わなくなっていたらカット調整や買い替えを行いましょう。</div>
            </details>
          </div>
        </section>

        <section id="summary" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">まとめ</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">子供用インソールは、成長期の足のアーチ形成サポート・衝撃吸収・正しい歩き方の基礎づくりに有効なツールです。6歳以降を目安に、お子さんの足の状態に合わせて導入を検討しましょう。選ぶ際は適度なアーチサポート・衝撃吸収・通気性・サイズ調整のしやすさをチェックしてください。</p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 mb-6">
            <p className="text-sm font-bold text-gray-900 mb-3">今回紹介した主要3商品</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><Link href="/pitsole/" className="text-[#0ea5e9] font-bold hover:underline">ピットソール</Link>：XSサイズ（21cm〜）対応。世界特許3点サポートで成長期の足を的確にサポート。</li>
              <li><Link href="/slim-up-insole/" className="text-[#0ea5e9] font-bold hover:underline">スリムアップインソール</Link>：正しい重心移動を促し、子供の歩き方改善に効果的。</li>
              <li><Link href="/runway-cure-sole/" className="text-[#0ea5e9] font-bold hover:underline">ランウェイキュアソール</Link>：美姿勢サポートで成長期の姿勢改善。薄型で上履きにも対応。</li>
            </ul>
          </div>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">子供の足は一生ものです。成長期に正しいサポートを行うことで、大人になってからの足のトラブルを予防できます。インソールはそのための手軽で効果的な投資です。お子さんの足の状態が気になる保護者の方は、ぜひ導入を検討してみてください。</p>

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
            <Link href="/articles/sneaker-insole/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"><p className="text-sm font-semibold text-gray-900">スニーカー用インソールおすすめ5選</p></Link>
            <Link href="/articles/size-adjustment/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"><p className="text-sm font-semibold text-gray-900">インソールのサイズ調整方法</p></Link>
            <Link href="/articles/heel-pain-insole/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"><p className="text-sm font-semibold text-gray-900">かかとが痛い時のインソール</p></Link>
            <Link href="/ranking/" className="block p-4 border border-[#e8627c] rounded-xl hover:bg-[#fdf2f4] transition-colors bg-[#fdf2f4]/50"><p className="text-sm font-semibold text-[#e8627c]">おすすめダイエットインソール3選を見る</p></Link>
          </div>
        </div>
      </section>
    </>
  );
}
