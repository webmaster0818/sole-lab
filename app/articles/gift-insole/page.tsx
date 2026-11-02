import type { Metadata } from "next";
import VerificationNote from "../../components/VerificationNote";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "インソールのプレゼントおすすめ｜クリスマス・誕生日に贈る前のサイズ・返品・ラッピング確認",
  description:
    "インソールをクリスマス・誕生日・父の日に贈るときの選び方。ピットソール・ランウェイキュアソール・スリムアップインソールの公式ショップの返品・交換条件とラッピング対応を2026年11月2日に確認して一覧にしました。",
  alternates: { canonical: "https://sole-laboratory.com/articles/gift-insole/" },
  openGraph: { images: ["/og-default.png"],
    title: "インソールのプレゼントおすすめ｜クリスマス・誕生日に贈る前のサイズ・返品・ラッピング確認",
    description: "インソールをクリスマス・誕生日・父の日に贈るときの選び方と、公式ショップの返品・交換条件・ラッピング対応（2026年11月2日確認）。",
    url: "https://sole-laboratory.com/articles/gift-insole/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "インソールのプレゼントおすすめ｜クリスマス・誕生日に贈る前のサイズ・返品・ラッピング確認",
  description: "インソールをクリスマス・誕生日・父の日に贈るときの選び方と、公式ショップの返品・交換条件・ラッピング対応（2026年11月2日確認）。",
  author: { "@type": "Organization", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-05-17",
  dateModified: "2026-11-02",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "インソールをプレゼントする場合、サイズはどう選べば良いですか？", acceptedAnswer: { "@type": "Answer", text: "カットしてサイズ調整できるインソールを選ぶのがベストです。相手の靴のサイズがわかれば該当するサイズを、わからない場合は大きめのサイズを選んでおけば、相手自身でカット調整できます。ピットソールはXS〜XLの5サイズ展開（21〜29cm・XLはブラック/ピンク限定）で、カットラインも印刷されているためプレゼントに最適です。" } },
    { "@type": "Question", name: "インソールのプレゼントは失礼にあたりませんか？", acceptedAnswer: { "@type": "Answer", text: "健康や快適さへの気遣いとして贈れば、失礼にはあたりません。「足の疲れが気になると言っていたので」「健康のためにぜひ使ってみて」など、相手を思いやるメッセージを添えると好印象です。ただし、体型に関する指摘と受け取られないよう、ダイエット効果を前面に出すのは避けてください。" } },
    { "@type": "Question", name: "予算はどのくらいが適切ですか？", acceptedAnswer: { "@type": "Answer", text: "この記事で紹介している3商品は、公式価格で1足6,578〜6,980円（税込）です（ピットソール6,578円・ランウェイキュアソール6,980円・スリムアップインソール6,980円。各商品ページに記載の確認日時点）。ピットソールにはまとめ買いセットがあり、スリムアップインソールの公式通販にはセット販売の記載がありません。価格は変わることがあるため、購入前に公式ショップでご確認ください。" } },
    { "@type": "Question", name: "どんな方にインソールのプレゼントが喜ばれますか？", acceptedAnswer: { "@type": "Answer", text: "立ち仕事をしている方、よく歩く方、足腰の疲れを訴えている方、健康意識の高い方に特に喜ばれます。また、ゴルフや登山などのスポーツを趣味にしている方への贈り物としても最適です。40代以上の方は足のトラブルが増える年代のため、予防的なプレゼントとして好評です。" } },
    { "@type": "Question", name: "サイズが合わなかった場合、交換できますか？", acceptedAnswer: { "@type": "Answer", text: "公式ショップの条件は商品で異なります（2026年11月2日確認）。ピットソール（BACCHUS ONLINE SHOP）は、注文を間違えた・気に入らないなどお客様都合のキャンセル・返品・交換を受け付けていません。ランウェイキュアソール（FLOReSHOP）も、お客様都合の返品・返金・キャンセルは「いかなる場合も」受け付けないと特定商取引法に基づく表記に記載しています。スリムアップインソール（一番星）は、未使用・未開封に限り商品到着後8日以内であれば返品・交換を受け付けています。どの商品も、贈る前に相手の靴のサイズを確認してから選ぶのが確実です。" } },
    { "@type": "Question", name: "ラッピングや熨斗は対応していますか？", acceptedAnswer: { "@type": "Answer", text: "スリムアップインソールの公式ショップ（一番星）は、よくある質問で「現在、ラッピングサービスは承っておりません」と案内しています。ピットソール（BACCHUS ONLINE SHOP）とランウェイキュアソール（FLOReSHOP）は、よくある質問・特定商取引法に基づく表記にラッピングの記載を確認できませんでした（2026年11月2日確認）。ラッピングが必要な場合は、ギフトバッグを別に用意し、メッセージカードを添えて渡す方法があります。" } },
  ],
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://sole-laboratory.com" },
    { "@type": "ListItem", position: 2, name: "知識・コラム", item: "https://sole-laboratory.com/articles/" },
    { "@type": "ListItem", position: 3, name: "インソールのプレゼントおすすめ", item: "https://sole-laboratory.com/articles/gift-insole/" },
  ],
};

export default function GiftInsolePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "知識・コラム", href: "/articles/" }, { label: "インソールのプレゼントおすすめ" }]} />

      <section className="bg-gradient-to-b from-[#faf7f3] to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-[#8a6a4f] font-semibold mb-3">ギフトガイド</p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            インソールのプレゼント
            <br className="md:hidden" />
            <span className="text-[#8a6a4f]">おすすめ</span>ガイド
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            クリスマス・誕生日・父の日・母の日・敬老の日に贈る健康ギフトとして注目のインソール。
            <br className="hidden md:block" />
            相手に喜ばれるインソールの選び方と贈り方のコツを解説します。
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4">
        <VerificationNote />
      </div>

      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
          <p className="text-sm font-bold text-gray-900 mb-3">この記事の内容</p>
          <ol className="space-y-1.5 text-sm text-gray-600">
            <li><a href="#why" className="hover:text-[#8a6a4f] transition-colors">1. インソールが健康ギフトに最適な理由</a></li>
            <li><a href="#scene" className="hover:text-[#8a6a4f] transition-colors">2. シーン別おすすめプレゼント</a></li>
            <li><a href="#recommend" className="hover:text-[#8a6a4f] transition-colors">3. プレゼントにおすすめのインソール3選</a></li>
            <li><a href="#before-gift" className="hover:text-[#8a6a4f] transition-colors">4. 贈る前に確認したい公式ショップの返品・交換とラッピング</a></li>
            <li><a href="#choose" className="hover:text-[#8a6a4f] transition-colors">5. プレゼント用インソールの選び方</a></li>
            <li><a href="#wrap" className="hover:text-[#8a6a4f] transition-colors">6. 贈り方のコツとメッセージ例</a></li>
            <li><a href="#faq" className="hover:text-[#8a6a4f] transition-colors">7. よくある質問（FAQ）</a></li>
            <li><a href="#summary" className="hover:text-[#8a6a4f] transition-colors">8. まとめ</a></li>
          </ol>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <section id="why" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#8a6a4f] pl-3 mb-6">インソールが健康ギフトに最適な理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールは「もらって嬉しい健康グッズ」として、近年プレゼントとして選ばれる機会が増えています。その理由を解説します。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">毎日使える実用的なギフト</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールは靴に入れるだけで毎日使える実用的なアイテムです。使い方が簡単で、年齢や性別を問わず誰でもすぐに使い始められます。飾るだけの贈り物とは違い、日々の生活で確実に役立つため、もらった人の満足度が高いギフトです。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">健康への気遣いが伝わる</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">「足の疲れを軽くしてほしい」「いつまでも元気に歩いてほしい」という気持ちが伝わるプレゼントです。特に年配のご両親や祖父母への贈り物として、健康を願う気持ちを形にできます。直接「健康に気をつけて」と言いにくい場合でも、インソールを贈ることでその思いを伝えられます。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">自分では買わないけれど嬉しいもの</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">高機能インソールは「興味はあるけれど自分で買うほどではない」と感じている方が多いアイテムです。だからこそ、プレゼントでもらうと嬉しいのです。使ってみて効果を実感すれば、自分でリピート購入するきっかけにもなります。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">手頃な価格帯でコスパが良い</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">この記事で紹介する3商品は1足6,578〜6,980円（税込）で、毎日使えば1日あたりのコストは数十円です。もらった方にとっても「もったいなくて使えない」ということがなく、気軽に日常使いしてもらえます。</p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-amber-700">ポイント：</span>
              インソールは「毎日使える」「健康への気遣いが伝わる」「自分では買わない」という点で、プレゼントに向いています。
            </p>
          </div>
        </section>

        <section id="scene" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#8a6a4f] pl-3 mb-6">シーン別おすすめプレゼント</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">贈るシーンに合わせたインソールの選び方を紹介します。</p>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">父の日（6月第3日曜日）</h3>
              <p className="text-sm text-gray-700 leading-relaxed">お父さんが立ち仕事であればアーチサポートの強いインソール、ゴルフが趣味であれば安定性の高いインソール、通勤で歩くことが多ければ衝撃吸収型を選ぶことをおすすめします。男性向けのサイズ展開があるピットソールやスリムアップインソールが特に人気です。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">母の日（5月第2日曜日）</h3>
              <p className="text-sm text-gray-700 leading-relaxed">お母さんへのプレゼントには、姿勢改善や美脚効果が期待できるインソールが喜ばれます。パンプスでの使用を想定するなら薄型のランウェイキュアソール、スニーカーでの日常使いならピットソールがおすすめです。「いつまでもきれいに歩いてほしい」という思いが伝わるギフトです。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">敬老の日（9月第3月曜日）</h3>
              <p className="text-sm text-gray-700 leading-relaxed">ご高齢の方には、転倒予防と足腰の負担軽減を重視したインソールを選ぶことをおすすめします。足裏のアーチサポートでバランスを安定させ、クッション性で歩行時の衝撃を吸収するタイプが最適です。「いつまでも元気に歩いてほしい」という思いを込めて贈ってください。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">誕生日・クリスマス</h3>
              <p className="text-sm text-gray-700 leading-relaxed">相手の趣味や生活スタイルに合わせて選ぶことをおすすめします。ランニングが趣味なら衝撃吸収型、ゴルフ好きなら安定性重視型、ダイエットに関心があるなら姿勢改善型を。複数足セットで贈ると、複数の靴で使い分けられるため、さらに喜ばれます。</p>
            </div>
          </div>
        </section>

        <section id="recommend" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#8a6a4f] pl-3 mb-6">プレゼントにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">ギフトとして贈りやすく、もらった方にも喜ばれるインソールを3つ厳選しました。</p>

          <div className="bg-white border-2 border-[#8a6a4f] rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-[#8a6a4f] text-white text-xs font-bold px-3 py-1 rounded-full">おすすめ 1</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">ピットソール（Pitsole）</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">プレゼントに最も適しているのがピットソールです。XS〜XLの5サイズ展開（21〜29cm、公式サイトにて2026年7月確認）のため、相手の性別を問わず贈れます。カットラインが印刷されており、もらった方が自分でサイズ調整できるのもギフトとして安心なポイント。まとめ買い割引を活用すれば、2足セットでお得に贈れます。</p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#8a6a4f] font-bold mt-0.5">+</span><span>男女兼用で誰にでも贈りやすい</span></li>
              <li className="flex items-start gap-2"><span className="text-[#8a6a4f] font-bold mt-0.5">+</span><span>カットライン付きでサイズ調整が簡単</span></li>
              <li className="flex items-start gap-2"><span className="text-[#8a6a4f] font-bold mt-0.5">+</span><span>まとめ買い割引で2足セットがお得</span></li>
            </ul>
            <Link href="/pitsole/" className="inline-block text-sm font-bold text-[#8a6a4f] hover:underline">ピットソールの詳細レビューを見る &rarr;</Link>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">おすすめ 2</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">ランウェイキュアソール（RUNWAY CURE SOLE）</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">女性への贈り物に最適なのがランウェイキュアソールです。美姿勢サポートに特化した設計で、「きれいに歩きたい」という女性の願いに応えます。薄型設計でパンプスにも使えるため、オフィスワークのお母さんや奥様へのプレゼントとして人気です。</p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#8a6a4f] font-bold mt-0.5">+</span><span>女性向けの美姿勢サポート設計</span></li>
              <li className="flex items-start gap-2"><span className="text-[#8a6a4f] font-bold mt-0.5">+</span><span>パンプス対応の薄型設計</span></li>
              <li className="flex items-start gap-2"><span className="text-[#8a6a4f] font-bold mt-0.5">+</span><span>「きれいに歩く」というポジティブなメッセージ性</span></li>
            </ul>
            <Link href="/runway-cure-sole/" className="inline-block text-sm font-bold text-[#8a6a4f] hover:underline">ランウェイキュアソールの詳細レビューを見る &rarr;</Link>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">おすすめ 3</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">スリムアップインソール（Slim Up Insole）</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">美容整体師監修という専門家のお墨付きが、プレゼントとしての説得力を高めます。正しい重心移動を促す設計で、「健康的に歩く」ことをサポート。サイズはS（23.0〜24.5cm）・M（25.0〜26.5cm）の2サイズのため、贈る相手の足の実寸に合うかを確認して選ぶことをおすすめします。</p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#8a6a4f] font-bold mt-0.5">+</span><span>美容整体師監修の信頼感がギフトに最適</span></li>
              <li className="flex items-start gap-2"><span className="text-[#8a6a4f] font-bold mt-0.5">+</span><span>S/Mの2サイズ・抗菌防臭仕様</span></li>
              <li className="flex items-start gap-2"><span className="text-[#8a6a4f] font-bold mt-0.5">+</span><span>健康的な歩行をサポートする設計</span></li>
            </ul>
            <Link href="/slim-up-insole/" className="inline-block text-sm font-bold text-[#8a6a4f] hover:underline">スリムアップインソールの詳細レビューを見る &rarr;</Link>
          </div>
        </section>

        <section id="before-gift" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#8a6a4f] pl-3 mb-6">贈る前に確認したい公式ショップの返品・交換とラッピング</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールは靴のサイズに合わせて選ぶものなので、プレゼントでは「サイズが合わなかったときに交換できるか」が大切です。3商品の公式ショップの案内を2026年11月2日に確認しました。</p>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-[640px] w-full text-sm border border-gray-200">
              <thead className="bg-[#faf7f3]">
                <tr>
                  <th className="p-3 text-left border-b border-gray-200">商品（公式ショップ）</th>
                  <th className="p-3 text-left border-b border-gray-200">お客様都合の返品・交換</th>
                  <th className="p-3 text-left border-b border-gray-200">不良品の連絡期限</th>
                  <th className="p-3 text-left border-b border-gray-200">ラッピング</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-gray-200 font-bold">ピットソール<br /><span className="font-normal text-xs text-gray-500">BACCHUS ONLINE SHOP</span></td>
                  <td className="p-3 border-b border-gray-200">受け付けていない（注文を間違えた・気に入らない等）</td>
                  <td className="p-3 border-b border-gray-200">商品受け取り後7日以内</td>
                  <td className="p-3 border-b border-gray-200">記載を確認できず</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-200 font-bold">ランウェイキュアソール<br /><span className="font-normal text-xs text-gray-500">FLOReSHOP</span></td>
                  <td className="p-3 border-b border-gray-200">受け付けていない（「いかなる場合も」と記載）</td>
                  <td className="p-3 border-b border-gray-200">商品到着後3日以内</td>
                  <td className="p-3 border-b border-gray-200">記載を確認できず</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">スリムアップインソール<br /><span className="font-normal text-xs text-gray-500">一番星（ロッピング公式ショップ）</span></td>
                  <td className="p-3">未使用・未開封に限り、商品到着後8日以内なら可</td>
                  <td className="p-3">商品到着後2日以内（初期不良）</td>
                  <td className="p-3">対応していない（「現在、ラッピングサービスは承っておりません」）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed mb-4">出典：<a href="https://bacchus-inc.jp/shop/faq" className="underline" target="_blank" rel="noopener noreferrer">BACCHUS ONLINE SHOP よくある質問</a>／<a href="https://fshop.jp/shop/law_info" className="underline" target="_blank" rel="noopener noreferrer">FLOReSHOP 特定商取引法に基づく表記</a>／<a href="https://ichiban-boshi.com/shop/faq" className="underline" target="_blank" rel="noopener noreferrer">一番星 よくある質問</a>（いずれも2026年11月2日確認）。楽天市場など公式ショップ以外で買う場合は、その店舗の条件が適用されます。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-amber-700">ポイント：</span>
              ピットソールとランウェイキュアソールは、サイズ違いでも交換できません。クリスマスなどで相手に内緒で贈る場合は、普段履いている靴のサイズをさりげなく確認してから選んでください。
            </p>
          </div>
        </section>

        <section id="choose" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#8a6a4f] pl-3 mb-6">プレゼント用インソールの選び方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">プレゼントとしてインソールを選ぶ際のチェックポイントを紹介します。</p>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">サイズ調整が可能な製品を選ぶ</h3>
              <p className="text-sm text-gray-700 leading-relaxed">プレゼントで最も気をつけたいのがサイズ問題です。カットしてサイズ調整できるインソールであれば、多少のサイズの違いに対応できるため安心です。相手の靴のサイズを事前にリサーチし、該当するサイズレンジの製品を選ぶことをおすすめします。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">使い方がわかりやすい製品を選ぶ</h3>
              <p className="text-sm text-gray-700 leading-relaxed">インソールに馴染みのない方でもすぐに使い始められるよう、使い方の説明が丁寧な製品を選ぶことをおすすめします。カットラインの印刷がある、使い方ガイドが同梱されている、などの製品が安心です。必要に応じて<Link href="/articles/size-adjustment/" className="text-[#8a6a4f] hover:underline">サイズ調整方法の記事</Link>のURLを添えるのもおすすめです。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">相手のライフスタイルに合わせる</h3>
              <p className="text-sm text-gray-700 leading-relaxed">立ち仕事の方には疲労軽減型、スポーツが趣味の方には安定性重視型、美容に関心のある方には姿勢改善型を選ぶことをおすすめします。相手の日常をイメージして選ぶことで、「自分のことをわかってくれている」と感じてもらえるプレゼントになります。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">まとめ買い割引を活用する</h3>
              <p className="text-sm text-gray-700 leading-relaxed">インソールは複数足あると便利（靴ごとに入れ替え）なため、2足セットで贈ると実用性が増します。ピットソールなどはまとめ買い割引があり、2足目以降がお得になります。「仕事用と普段用の2足」という形で贈ると、使い勝手の良さを伝えられます。</p>
            </div>
          </div>
        </section>

        <section id="wrap" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#8a6a4f] pl-3 mb-6">贈り方のコツとメッセージ例</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">インソールをプレゼントする際の贈り方のコツと、添えるメッセージの例を紹介します。</p>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">メッセージカードを添える</h3>
              <p className="text-sm text-gray-700 leading-relaxed">インソールだけを渡すと「何これ？」となりかねません。必ずメッセージカードを添え、贈る理由と使い方を簡単に伝えてください。例えば「いつも歩き回って頑張っているお父さんへ。靴に入れるだけで足の疲れが楽になるインソールです。ぜひ試してみてね」のように書くと、贈り物の意図が伝わります。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">「ダイエット」ではなく「健康」を強調する</h3>
              <p className="text-sm text-gray-700 leading-relaxed">インソールのダイエット効果を強調すると、「太っていると思っているのか」と受け取られる可能性があります。プレゼントの際は「足の疲れ軽減」「健康的に歩く」「姿勢改善」といったポジティブな切り口で伝えてください。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">一緒に使うことを提案する</h3>
              <p className="text-sm text-gray-700 leading-relaxed">「自分も使っていて良かったから」「一緒にウォーキングしよう」など、相手と一緒に使うことを提案すると、プレゼントの受け取りハードルが下がります。自分用にも購入し、一緒に散歩やウォーキングを楽しむきっかけにするのも素敵です。</p>
            </div>
          </div>
        </section>

        <section id="faq" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#8a6a4f] pl-3 mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">インソールをプレゼントする場合、サイズはどう選べば良いですか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">カットしてサイズ調整できるインソールを選ぶのがベストです。相手の靴のサイズがわかれば該当するサイズを、わからない場合は大きめのサイズを選んでおけば、相手自身でカット調整できます。ピットソールはXS〜XLの5サイズ展開（21〜29cm・XLはブラック/ピンク限定）で、カットラインも印刷されているためプレゼントに最適です。</div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">インソールのプレゼントは失礼にあたりませんか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">健康や快適さへの気遣いとして贈れば、失礼にはあたりません。「足の疲れが気になると言っていたので」「健康のためにぜひ使ってみて」など、相手を思いやるメッセージを添えると好印象です。ただし、体型に関する指摘と受け取られないよう、ダイエット効果を前面に出すのは避けてください。</div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">予算はどのくらいが適切ですか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">この記事で紹介している3商品は、公式価格で1足6,578〜6,980円（税込）です（ピットソール6,578円・ランウェイキュアソール6,980円・スリムアップインソール6,980円。各商品ページに記載の確認日時点）。ピットソールにはまとめ買いセットがあり、スリムアップインソールの公式通販にはセット販売の記載がありません。価格は変わることがあるため、購入前に公式ショップでご確認ください。</div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">どんな方にインソールのプレゼントが喜ばれますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">立ち仕事をしている方、よく歩く方、足腰の疲れを訴えている方、健康意識の高い方に特に喜ばれます。また、ゴルフや登山などのスポーツを趣味にしている方への贈り物としても最適です。40代以上の方は足のトラブルが増える年代のため、予防的なプレゼントとして好評です。</div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">サイズが合わなかった場合、交換できますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">公式ショップの条件は商品で異なります（2026年11月2日確認）。ピットソール（BACCHUS ONLINE SHOP）は、注文を間違えた・気に入らないなどお客様都合のキャンセル・返品・交換を受け付けていません。ランウェイキュアソール（FLOReSHOP）も、お客様都合の返品・返金・キャンセルは「いかなる場合も」受け付けないと特定商取引法に基づく表記に記載しています。スリムアップインソール（一番星）は、未使用・未開封に限り商品到着後8日以内であれば返品・交換を受け付けています。どの商品も、贈る前に相手の靴のサイズを確認してから選ぶのが確実です。</div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">ラッピングや熨斗は対応していますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">スリムアップインソールの公式ショップ（一番星）は、よくある質問で「現在、ラッピングサービスは承っておりません」と案内しています。ピットソール（BACCHUS ONLINE SHOP）とランウェイキュアソール（FLOReSHOP）は、よくある質問・特定商取引法に基づく表記にラッピングの記載を確認できませんでした（2026年11月2日確認）。ラッピングが必要な場合は、ギフトバッグを別に用意し、メッセージカードを添えて渡す方法があります。</div>
            </details>
          </div>
        </section>

        <section id="summary" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#8a6a4f] pl-3 mb-6">まとめ</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールは毎日使えて、健康への気遣いが伝わる贈り物です。相手のライフスタイルに合わせて選び、ポジティブなメッセージを添えて贈ってください。</p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 mb-6">
            <p className="text-sm font-bold text-gray-900 mb-3">プレゼントにおすすめ3商品</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><Link href="/pitsole/" className="text-[#8a6a4f] font-bold hover:underline">ピットソール</Link>：男女兼用・カット調整可能で誰にでも贈りやすい。まとめ買い割引でお得。</li>
              <li><Link href="/runway-cure-sole/" className="text-[#8a6a4f] font-bold hover:underline">ランウェイキュアソール</Link>：女性向け美姿勢サポート。お母さんや奥様へのギフトに最適。</li>
              <li><Link href="/slim-up-insole/" className="text-[#8a6a4f] font-bold hover:underline">スリムアップインソール</Link>：美容整体師監修の信頼感。ペア使いにもおすすめ。</li>
            </ul>
          </div>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">大切な人の健康を願う気持ちを形にできるインソールのプレゼント。クリスマスや誕生日、父の日・母の日・敬老の日の贈り物として検討してみてください。ピットソールとランウェイキュアソールは公式ショップでお客様都合の返品・交換ができないため、贈る前に相手の靴のサイズを確認してください。</p>

          <div className="text-center">
            <Link href="/ranking/" className="inline-block bg-[#8a6a4f] text-white font-bold text-sm md:text-base px-8 py-3 rounded-full hover:bg-[#8a6a4f] transition-colors shadow-md">3商品の詳細比較ランキングを見る</Link>
          </div>
        </section>
      </article>

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/articles/how-to-choose/" className="block p-4 border border-[#e8ded6] rounded-xl hover:bg-[#faf7f3] transition-colors"><p className="text-sm font-semibold text-gray-900">ダイエットインソールの選び方5つのポイント</p></Link>
            <Link href="/articles/standing-work/" className="block p-4 border border-[#e8ded6] rounded-xl hover:bg-[#faf7f3] transition-colors"><p className="text-sm font-semibold text-gray-900">立ち仕事で足が疲れないインソール3選</p></Link>
            <Link href="/articles/size-adjustment/" className="block p-4 border border-[#e8ded6] rounded-xl hover:bg-[#faf7f3] transition-colors"><p className="text-sm font-semibold text-gray-900">インソールのサイズ調整方法</p></Link>
            <Link href="/ranking/" className="block p-4 border border-[#8a6a4f] rounded-xl hover:bg-[#faf7f3] transition-colors bg-[#faf7f3]/50"><p className="text-sm font-semibold text-[#8a6a4f]">おすすめダイエットインソール3選を見る</p></Link>
          </div>
        </div>
      </section>
    </>
  );
}
