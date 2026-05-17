import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "インソールの洗い方・お手入れ完全ガイド｜寿命を延ばす方法",
  description:
    "インソールの正しい洗い方・お手入れ方法を徹底解説。素材別の洗浄方法・乾かし方・日常のケアまで。ピットソール・ランウェイキュアソール・スリムアップインソールのメンテナンス方法も紹介。",
  alternates: { canonical: "https://sole-laboratory.com/articles/washing-guide/" },
  openGraph: {
    title: "インソールの洗い方・お手入れ完全ガイド｜寿命を延ばす方法",
    description: "インソールの正しい洗い方・お手入れ方法を徹底解説。寿命を延ばす方法を紹介。",
    url: "https://sole-laboratory.com/articles/washing-guide/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "インソールの洗い方・お手入れ完全ガイド｜寿命を延ばす方法",
  description: "インソールの正しい洗い方・お手入れ方法を徹底解説。寿命を延ばす方法を紹介。",
  author: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "インソールは洗濯機で洗えますか？", acceptedAnswer: { "@type": "Answer", text: "洗濯機でのインソール洗浄は基本的におすすめしません。洗濯機の回転や摩擦でインソールが変形したり、アーチサポートの形状が崩れたりする恐れがあります。手洗いで優しく洗浄するのが正しい方法です。" } },
    { "@type": "Question", name: "インソールはどのくらいの頻度で洗えば良いですか？", acceptedAnswer: { "@type": "Answer", text: "通常の使用であれば週1回の洗浄が理想的です。毎日使用している場合や、汗をかきやすい夏場は週2回程度洗うと衛生的です。使用後に毎回靴から取り出して乾かすだけでも、ニオイの発生を大幅に抑えられます。" } },
    { "@type": "Question", name: "インソールを乾かすのにドライヤーを使っても大丈夫ですか？", acceptedAnswer: { "@type": "Answer", text: "ドライヤーの熱風はインソールの素材を傷める原因になるため、使用しないでください。特にEVA素材やジェル素材は熱に弱く、変形する恐れがあります。風通しの良い日陰で自然乾燥させるのが最も安全な方法です。扇風機の風を当てると乾燥時間を短縮できます。" } },
    { "@type": "Question", name: "インソールのニオイが取れない場合はどうすればいいですか？", acceptedAnswer: { "@type": "Answer", text: "通常の洗浄でニオイが取れない場合は、重曹水（水500mlに重曹大さじ1）に30分程度つけ置きしてから洗い流すと効果的です。それでも取れない場合は、インソールの寿命と考えて新しいものに交換することをおすすめします。" } },
    { "@type": "Question", name: "革製のインソールも水洗いして大丈夫ですか？", acceptedAnswer: { "@type": "Answer", text: "革製のインソールは水洗いを避けてください。水に浸すと革が硬くなったり、ひび割れの原因になります。革製インソールのお手入れは、固く絞った布で表面を拭き、専用のレザークリーナーを使うのが正しい方法です。乾燥後にレザーコンディショナーを塗ると、しなやかさが保たれます。" } },
  ],
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://sole-laboratory.com" },
    { "@type": "ListItem", position: 2, name: "知識・コラム", item: "https://sole-laboratory.com/articles/" },
    { "@type": "ListItem", position: 3, name: "インソールの洗い方ガイド", item: "https://sole-laboratory.com/articles/washing-guide/" },
  ],
};

export default function WashingGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "知識・コラム", href: "/articles/" }, { label: "インソールの洗い方ガイド" }]} />

      <section className="bg-gradient-to-b from-sky-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-[#0ea5e9] font-semibold mb-3">お手入れガイド</p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            インソールの洗い方・
            <br className="md:hidden" />
            <span className="text-[#0ea5e9]">お手入れ完全ガイド</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            正しい洗い方と日々のケアでインソールの寿命を延ばし、清潔に長く使い続ける方法を
            <br className="hidden md:block" />
            素材別に徹底解説します。
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
          <p className="text-sm font-bold text-gray-900 mb-3">この記事の内容</p>
          <ol className="space-y-1.5 text-sm text-gray-600">
            <li><a href="#why" className="hover:text-[#0ea5e9] transition-colors">1. インソールを洗う必要がある理由</a></li>
            <li><a href="#method" className="hover:text-[#0ea5e9] transition-colors">2. 基本の洗い方（手洗い手順）</a></li>
            <li><a href="#material" className="hover:text-[#0ea5e9] transition-colors">3. 素材別のお手入れ方法</a></li>
            <li><a href="#daily" className="hover:text-[#0ea5e9] transition-colors">4. 日常のケアで寿命を延ばす方法</a></li>
            <li><a href="#ng" className="hover:text-[#0ea5e9] transition-colors">5. やってはいけないNG行為</a></li>
            <li><a href="#faq" className="hover:text-[#0ea5e9] transition-colors">6. よくある質問（FAQ）</a></li>
            <li><a href="#summary" className="hover:text-[#0ea5e9] transition-colors">7. まとめ</a></li>
          </ol>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <section id="why" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">インソールを洗う必要がある理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足は1日にコップ1杯分（約200ml）の汗をかくと言われています。この汗をインソールが吸収し続けると、雑菌が繁殖してニオイの原因になるだけでなく、素材の劣化も早めます。定期的な洗浄は衛生面だけでなく、インソールの寿命を延ばすためにも重要です。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">雑菌の繁殖とニオイの防止</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">靴の中は温度30度以上・湿度90%以上になることもあり、雑菌にとって最適な繁殖環境です。汗と皮脂を栄養源に雑菌が繁殖すると、不快なニオイが発生します。週に1回の洗浄で雑菌の繁殖を抑え、清潔な状態を維持できます。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">素材の劣化を防ぐ</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">汗に含まれる塩分や皮脂がインソールの素材に蓄積すると、クッション性やアーチサポートの機能が低下します。特にEVA素材は汗の成分により硬化しやすく、洗浄せずに使い続けると本来の衝撃吸収性能が早期に失われます。定期的な洗浄で素材のコンディションを保ちましょう。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">肌トラブルの予防</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">不衛生なインソールは水虫やかぶれなどの肌トラブルの原因になることがあります。特に夏場や運動後は足が蒸れやすく、雑菌が増えやすい状態です。清潔なインソールを使うことで、足の肌トラブルを予防できます。</p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-amber-700">ポイント：</span>
              インソールの洗浄は「衛生面」「素材の寿命」「肌トラブル予防」の3つの観点から必要です。週1回の洗浄習慣をつけましょう。
            </p>
          </div>
        </section>

        <section id="method" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">基本の洗い方（手洗い手順）</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">ほとんどのインソールに適用できる基本の手洗い手順を紹介します。</p>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">ぬるま湯を準備する</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">洗面器やバケツに30〜35度のぬるま湯を張ります。熱すぎるお湯はインソールの素材を傷めるため、必ずぬるま湯を使いましょう。中性洗剤（食器用洗剤）を数滴垂らし、軽く泡立てます。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">インソールを浸して洗う</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">インソールをぬるま湯に浸し、やわらかい歯ブラシや布で表面を優しくこすります。力を入れすぎると表面素材が傷むため、軽い力で汚れを落としましょう。特にかかとやつま先部分は汚れが溜まりやすいので、念入りに洗います。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">しっかりすすぐ</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">流水でインソールをしっかりすすぎ、洗剤を完全に洗い流します。洗剤が残ると肌荒れの原因になったり、素材の劣化を早めたりするため、泡が出なくなるまで丁寧にすすぎましょう。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">水分を取り除く</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">タオルでインソールを挟み、軽く押して水分を吸い取ります。絞ったり、叩いたりすると形状が変わる恐れがあるため、あくまで「挟んで押す」程度にとどめましょう。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">完全に乾燥させる</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">風通しの良い日陰で完全に乾燥させます。直射日光は素材を劣化させるため避けてください。乾燥時間は通常12〜24時間程度です。扇風機の風を当てると乾燥時間を短縮できます。完全に乾いてから靴に戻しましょう。</p>
            </div>
          </div>
        </section>

        <section id="material" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">素材別のお手入れ方法</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">インソールの素材によってお手入れ方法が異なります。自分のインソールの素材を確認して、適切な方法でケアしましょう。</p>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">EVA（エチレン酢酸ビニル）素材</h3>
              <p className="text-sm text-gray-700 leading-relaxed">ピットソールやスリムアップインソールに使われることが多いEVA素材は、水洗いが可能です。ぬるま湯と中性洗剤で優しく手洗いし、自然乾燥させてください。ただし長時間水に浸けすぎると膨張する恐れがあるため、浸け置きは10分以内に留めましょう。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">ポリウレタン素材</h3>
              <p className="text-sm text-gray-700 leading-relaxed">クッション性の高いポリウレタン素材も水洗い可能ですが、EVAより乾燥に時間がかかります。洗浄後は形状を整えてから乾かし、完全に乾くまで24時間以上見ておきましょう。湿ったまま使用すると、カビの原因になります。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">ジェル素材</h3>
              <p className="text-sm text-gray-700 leading-relaxed">ジェル素材のインソールは水洗いOKです。ただし、歯ブラシなどでこすると表面に傷がつく場合があるため、やわらかい布で優しく拭き洗いするのがベストです。乾燥も早いため、洗浄後30分〜1時間程度で使用可能になることが多いです。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">革（レザー）素材</h3>
              <p className="text-sm text-gray-700 leading-relaxed">革製のインソールは水洗いNGです。固く絞った布で表面を拭き取り、レザークリーナーで汚れを落とします。乾燥後にレザーコンディショナーを薄く塗ると、しなやかさが保たれます。革は湿気に弱いため、使用後は必ず靴から取り出して乾かしましょう。</p>
            </div>
          </div>
        </section>

        <section id="daily" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">日常のケアで寿命を延ばす方法</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">毎日の簡単なケアを習慣にするだけで、インソールの寿命を大幅に延ばせます。</p>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">毎日：靴から取り出して乾かす</h3>
              <p className="text-sm text-gray-700 leading-relaxed">帰宅したらインソールを靴から取り出し、風通しの良い場所で乾かしましょう。たったこれだけの習慣で、雑菌の繁殖を大幅に抑え、ニオイの発生を防げます。靴の中も同時に乾燥させることで、靴自体の寿命も延ばせます。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">週1回：軽い洗浄</h3>
              <p className="text-sm text-gray-700 leading-relaxed">週に1回は基本の手洗い手順でインソールを洗浄しましょう。こまめに洗うことで汚れが蓄積せず、軽い洗浄だけで清潔な状態を維持できます。汚れが溜まってからのゴシゴシ洗いは素材を傷めるため、こまめなケアが大切です。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">ローテーションで使用する</h3>
              <p className="text-sm text-gray-700 leading-relaxed">可能であれば、インソールを2セット用意してローテーションで使うことをおすすめします。1日使ったインソールを翌日乾かし、もう1セットを使用することで、常に乾いた状態のインソールを使えます。インソールの寿命も約2倍に延びます。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">消臭スプレーの活用</h3>
              <p className="text-sm text-gray-700 leading-relaxed">使用後にインソール用の消臭スプレーを軽く吹きかけると、ニオイの発生を抑えられます。ただし、スプレーは洗浄の代わりにはなりません。あくまで補助的なケアとして活用し、定期的な洗浄は必ず行いましょう。アルコール系のスプレーは素材を傷める場合があるため、インソール対応のものを選んでください。</p>
            </div>
          </div>
        </section>

        <section id="ng" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">やってはいけないNG行為</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">インソールの寿命を縮めてしまうNG行為をまとめました。以下は必ず避けてください。</p>

          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-red-700 mb-2">NG：洗濯機で洗う</h3>
              <p className="text-sm text-gray-700 leading-relaxed">洗濯機の回転や他の衣類との摩擦で、インソールが変形したりアーチサポートの形状が崩れたりします。必ず手洗いで丁寧に洗浄してください。</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-red-700 mb-2">NG：ドライヤーや直射日光で乾かす</h3>
              <p className="text-sm text-gray-700 leading-relaxed">高温はインソールの素材を変質させます。ドライヤーの熱風、直射日光、ヒーターの前での乾燥はNGです。必ず風通しの良い日陰で自然乾燥させましょう。</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-red-700 mb-2">NG：漂白剤を使う</h3>
              <p className="text-sm text-gray-700 leading-relaxed">塩素系・酸素系を問わず、漂白剤はインソールの素材を劣化させます。変色や素材の脆化の原因になるため、洗浄には中性洗剤のみを使用してください。</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-red-700 mb-2">NG：濡れたまま靴に戻す</h3>
              <p className="text-sm text-gray-700 leading-relaxed">洗浄後に完全に乾かさずに靴に戻すと、靴の中がカビの温床になります。必ず完全に乾いてから靴に戻しましょう。急いでいる場合は、予備のインソールを使うことで対応できます。</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-red-700 mb-2">NG：硬いブラシでゴシゴシこする</h3>
              <p className="text-sm text-gray-700 leading-relaxed">たわしや硬いブラシでこすると、インソールの表面素材が傷つき、機能が低下します。やわらかい歯ブラシや布で、優しく汚れを落としてください。</p>
            </div>
          </div>
        </section>

        <section id="faq" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">インソールは洗濯機で洗えますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">洗濯機でのインソール洗浄は基本的におすすめしません。洗濯機の回転や摩擦でインソールが変形したり、アーチサポートの形状が崩れたりする恐れがあります。手洗いで優しく洗浄するのが正しい方法です。</div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">インソールはどのくらいの頻度で洗えば良いですか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">通常の使用であれば週1回の洗浄が理想的です。毎日使用している場合や、汗をかきやすい夏場は週2回程度洗うと衛生的です。使用後に毎回靴から取り出して乾かすだけでも、ニオイの発生を大幅に抑えられます。</div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">インソールを乾かすのにドライヤーを使っても大丈夫ですか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">ドライヤーの熱風はインソールの素材を傷める原因になるため、使用しないでください。特にEVA素材やジェル素材は熱に弱く、変形する恐れがあります。風通しの良い日陰で自然乾燥させるのが最も安全な方法です。扇風機の風を当てると乾燥時間を短縮できます。</div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">インソールのニオイが取れない場合はどうすればいいですか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">通常の洗浄でニオイが取れない場合は、重曹水（水500mlに重曹大さじ1）に30分程度つけ置きしてから洗い流すと効果的です。それでも取れない場合は、インソールの寿命と考えて新しいものに交換することをおすすめします。</div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">革製のインソールも水洗いして大丈夫ですか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">革製のインソールは水洗いを避けてください。水に浸すと革が硬くなったり、ひび割れの原因になります。革製インソールのお手入れは、固く絞った布で表面を拭き、専用のレザークリーナーを使うのが正しい方法です。乾燥後にレザーコンディショナーを塗ると、しなやかさが保たれます。</div>
            </details>
          </div>
        </section>

        <section id="summary" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">まとめ</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールの正しいお手入れは、「毎日靴から取り出して乾かす」「週1回ぬるま湯で手洗い」「完全に乾かしてから靴に戻す」の3つが基本です。洗濯機・ドライヤー・漂白剤の使用は避け、優しく丁寧に扱うことで寿命を大幅に延ばせます。</p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 mb-6">
            <p className="text-sm font-bold text-gray-900 mb-3">主要3商品のお手入れポイント</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><Link href="/pitsole/" className="text-[#0ea5e9] font-bold hover:underline">ピットソール</Link>：EVA素材で水洗いOK。ぬるま湯と中性洗剤で手洗い。浸け置きは10分以内。</li>
              <li><Link href="/runway-cure-sole/" className="text-[#0ea5e9] font-bold hover:underline">ランウェイキュアソール</Link>：薄型設計で乾きが早い。週1回のケアで清潔を維持。</li>
              <li><Link href="/slim-up-insole/" className="text-[#0ea5e9] font-bold hover:underline">スリムアップインソール</Link>：水洗い可能。しっかり乾かしてから使用を再開。</li>
            </ul>
          </div>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">正しいケアを続ければ、インソールの効果を長期間維持でき、交換頻度を減らすことで結果的にコスト削減にもつながります。毎日のちょっとした習慣で、清潔で快適なインソールライフを送りましょう。</p>

          <div className="text-center">
            <Link href="/ranking/" className="inline-block bg-[#0ea5e9] text-white font-bold text-sm md:text-base px-8 py-3 rounded-full hover:bg-sky-600 transition-colors shadow-md">3商品の詳細比較ランキングを見る</Link>
          </div>
        </section>
      </article>

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/articles/size-adjustment/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"><p className="text-sm font-semibold text-gray-900">インソールのサイズ調整方法</p></Link>
            <Link href="/articles/insole-care/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"><p className="text-sm font-semibold text-gray-900">インソールの寿命と交換タイミング</p></Link>
            <Link href="/articles/how-to-choose/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"><p className="text-sm font-semibold text-gray-900">ダイエットインソールの選び方5つのポイント</p></Link>
            <Link href="/ranking/" className="block p-4 border border-[#e8627c] rounded-xl hover:bg-[#fdf2f4] transition-colors bg-[#fdf2f4]/50"><p className="text-sm font-semibold text-[#e8627c]">おすすめダイエットインソール3選を見る</p></Link>
          </div>
        </div>
      </section>
    </>
  );
}
