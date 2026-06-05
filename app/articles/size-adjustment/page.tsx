import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "インソールのサイズ調整方法｜自分でカットするコツと失敗しない手順",
  description:
    "インソールのサイズ調整方法を解説。自分でカットするコツ・失敗しない手順・カットラインの見方まで。ピットソール・ランウェイキュアソール・スリムアップインソールのカット方法も紹介。",
  alternates: { canonical: "https://sole-laboratory.com/articles/size-adjustment/" },
  openGraph: {
    title: "インソールのサイズ調整方法｜自分でカットするコツと失敗しない手順",
    description: "インソールのサイズ調整方法を解説。自分でカットするコツ・失敗しない手順を紹介。",
    url: "https://sole-laboratory.com/articles/size-adjustment/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "インソールのサイズ調整方法｜自分でカットするコツと失敗しない手順",
  description: "インソールのサイズ調整方法を解説。自分でカットするコツ・失敗しない手順を紹介。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "インソールをカットしすぎた場合はどうすればいいですか？", acceptedAnswer: { "@type": "Answer", text: "残念ながら、カットしすぎたインソールは元に戻せません。そのため、最初は大きめにカットし、少しずつ切り詰めていくことが重要です。万が一カットしすぎた場合は、やや大きめの別の靴で使用するか、新しいインソールで再度サイズ調整を行ってください。" } },
    { "@type": "Question", name: "カットに必要な道具は何ですか？", acceptedAnswer: { "@type": "Answer", text: "よく切れるハサミ（裁ちばさみが理想的）、油性ペン、靴の純正中敷き（ガイドとして使用）があれば十分です。カッターナイフは曲線のカットが難しいため、ハサミをおすすめします。定規は直線部分の確認に使えますが必須ではありません。" } },
    { "@type": "Question", name: "カットラインの印刷がないインソールはどうやってカットしますか？", acceptedAnswer: { "@type": "Answer", text: "靴に最初から入っている純正中敷きをガイドとして使います。純正中敷きをインソールの上に重ね、輪郭を油性ペンでなぞってカットラインを作ります。純正中敷きとインソールのかかと部分を合わせて重ねるのがポイントです。" } },
    { "@type": "Question", name: "インソールは左右でカットサイズを変えた方が良いですか？", acceptedAnswer: { "@type": "Answer", text: "はい、左右の足のサイズが異なる方は多いため、必ず左右それぞれの靴に合わせてカットしましょう。左右のインソールを間違えないよう、裏面に「左」「右」と印をつけておくと便利です。片方ずつ靴に入れてフィッティングを確認しながらカットしてください。" } },
    { "@type": "Question", name: "カットした断面がボロボロになるのを防ぐ方法はありますか？", acceptedAnswer: { "@type": "Answer", text: "よく切れる新しいハサミを使うことが最も重要です。切れ味の悪いハサミでは断面が毛羽立ちやすくなります。カット後に断面が気になる場合は、目の細かいヤスリやサンドペーパーで軽く整えると、きれいな仕上がりになります。" } },
  ],
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://sole-laboratory.com" },
    { "@type": "ListItem", position: 2, name: "知識・コラム", item: "https://sole-laboratory.com/articles/" },
    { "@type": "ListItem", position: 3, name: "インソールのサイズ調整方法", item: "https://sole-laboratory.com/articles/size-adjustment/" },
  ],
};

export default function SizeAdjustmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "知識・コラム", href: "/articles/" }, { label: "インソールのサイズ調整方法" }]} />

      <section className="bg-gradient-to-b from-sky-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-[#0ea5e9] font-semibold mb-3">実践ガイド</p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            インソールのサイズ調整方法
            <br className="md:hidden" />
            <span className="text-[#0ea5e9]">カットのコツ</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            買ったインソールが靴に合わない？自分でカットしてぴったりサイズにする方法と
            <br className="hidden md:block" />
            失敗しないための手順を写真付きで解説します。
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
          <p className="text-sm font-bold text-gray-900 mb-3">この記事の内容</p>
          <ol className="space-y-1.5 text-sm text-gray-600">
            <li><a href="#why" className="hover:text-[#0ea5e9] transition-colors">1. サイズ調整が必要な理由</a></li>
            <li><a href="#tools" className="hover:text-[#0ea5e9] transition-colors">2. 必要な道具と準備</a></li>
            <li><a href="#steps" className="hover:text-[#0ea5e9] transition-colors">3. カットの手順（5ステップ）</a></li>
            <li><a href="#tips" className="hover:text-[#0ea5e9] transition-colors">4. 失敗しないためのコツ</a></li>
            <li><a href="#products" className="hover:text-[#0ea5e9] transition-colors">5. 各製品のカット方法</a></li>
            <li><a href="#faq" className="hover:text-[#0ea5e9] transition-colors">6. よくある質問（FAQ）</a></li>
            <li><a href="#summary" className="hover:text-[#0ea5e9] transition-colors">7. まとめ</a></li>
          </ol>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <section id="why" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">サイズ調整が必要な理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールは靴のように0.5cm刻みの細かいサイズ展開ではなく、S・M・Lなどの幅広いサイズレンジで販売されていることがほとんどです。そのため、購入したインソールがそのまま靴にぴったりフィットするケースはまれで、多くの場合カットによるサイズ調整が必要になります。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">サイズが合わないインソールのリスク</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">大きすぎるインソールを無理に靴に入れると、端が折れ曲がったり波打ったりして、歩行時に違和感が生じます。逆に小さすぎると、つま先部分にインソールのない空白ができ、本来の機能が発揮されません。正しいサイズ調整を行うことで、インソールの効果を最大限に引き出すことができます。</p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">靴ごとに内部形状が異なる</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">同じ足のサイズでも、靴のブランドやモデルによって内部の形状（幅・深さ・つま先の形）は大きく異なります。スニーカーとパンプス、ランニングシューズと登山靴では、同じサイズ表記でもインソールに求められる寸法が違います。複数の靴で使いたい場合は、靴ごとにインソールを用意するのがベストです。</p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-amber-700">ポイント：</span>
              インソールのサイズ調整は「面倒な作業」ではなく、「効果を最大化するための必須ステップ」です。正しい手順でカットすれば、誰でも失敗なくぴったりサイズに調整できます。
            </p>
          </div>
        </section>

        <section id="tools" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">必要な道具と準備</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">サイズ調整に必要な道具を準備しましょう。特別なものは不要で、家庭にあるもので十分対応できます。</p>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">必須：よく切れるハサミ</h3>
              <p className="text-sm text-gray-700 leading-relaxed">裁ちばさみや工作用の大きめハサミが理想的です。切れ味の良いハサミを使うことで、断面がきれいに仕上がり、素材の毛羽立ちを防げます。小さな文具用ハサミでは力が入りにくく、ガタガタした仕上がりになりやすいため避けましょう。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">必須：油性ペン（細書き）</h3>
              <p className="text-sm text-gray-700 leading-relaxed">カットラインを描くための油性ペンです。細書きタイプを使うと正確なラインが描けます。水性ペンは素材によっては弾いてしまうため、油性を選びましょう。インソールの裏面（靴底側）に描くと、表面に跡が残りません。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">必須：靴の純正中敷き</h3>
              <p className="text-sm text-gray-700 leading-relaxed">最も正確なガイドになるのが、靴から取り出した純正の中敷きです。これをインソールの上に重ねてカットラインの目印にします。純正中敷きが接着されて外せない場合は、靴の中にインソールを入れて直接サイズを確認する方法で代用します。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">あると便利：テープ・クリップ</h3>
              <p className="text-sm text-gray-700 leading-relaxed">純正中敷きとインソールを重ねて固定する際に、マスキングテープや洗濯バサミがあると便利です。重ねた状態がずれないように固定してからカットラインを描くと、正確な作業ができます。</p>
            </div>
          </div>
        </section>

        <section id="steps" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">カットの手順（5ステップ）</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">以下の5ステップで、失敗なくインソールをカットできます。焦らず丁寧に進めましょう。</p>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">純正中敷きを取り出す</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">靴から純正の中敷きを丁寧に取り出します。つま先側から少しずつ剥がすと、接着されている場合でも比較的きれいに外せます。取り出した中敷きは捨てずに保管してください。カットのガイドとして使うだけでなく、インソールを別の靴に移す際に元に戻すこともできます。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">かかとを合わせて重ねる</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">純正中敷きの裏面とインソールの裏面を上にして重ねます。このとき重要なのは、かかと部分をぴったり合わせることです。かかとの位置がずれると、アーチサポートの位置もずれてしまい、インソールの効果が半減します。テープで仮止めすると作業しやすくなります。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">カットラインを描く</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">純正中敷きの輪郭に沿って、インソールの裏面に油性ペンでカットラインを描きます。つま先部分は純正中敷きの形状に沿って描き、サイド部分はインソールの方が細い場合はそのままでOKです。最初は純正中敷きより2〜3mm大きめに描いておくと安心です。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">ラインに沿ってカット</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">描いたカットラインに沿って、ハサミで丁寧にカットします。一度に大きくカットせず、少しずつ切り進めましょう。曲線部分はハサミの先端を使い、小刻みに方向を変えながらカットするときれいに仕上がります。直線部分は大きな刃で一気にカットしてOKです。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">靴に入れてフィッティング確認</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">カットしたインソールを靴に入れ、実際に履いてフィッティングを確認します。端が折れ曲がっていないか、つま先に余裕があるか、かかとがずれないかをチェック。まだ大きい部分があれば、追加でカットして微調整します。一度に多くカットしすぎないよう、2〜3mm単位で調整するのがコツです。</p>
            </div>
          </div>
        </section>

        <section id="tips" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">失敗しないためのコツ</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">カット時によくある失敗を防ぐためのコツをまとめました。</p>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">大きめにカットしてから微調整する</h3>
              <p className="text-sm text-gray-700 leading-relaxed">カットしすぎは取り返しがつきませんが、大きい分には追加で切れます。最初は2〜3mm大きめにカットし、靴に入れて確認してから微調整するのが失敗しないコツです。「足りないよりは余る方がマシ」と覚えておきましょう。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">つま先側だけカットする</h3>
              <p className="text-sm text-gray-700 leading-relaxed">サイズ調整は基本的につま先部分のカットで行います。かかと側やサイドをカットすると、アーチサポートの位置がずれてしまい、インソールの効果が失われます。特にかかと部分は絶対にカットしないでください。サイドが余る場合のみ、少量のカットを行います。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">左右別々にカットする</h3>
              <p className="text-sm text-gray-700 leading-relaxed">左右の足のサイズは多くの人で異なります。また、靴も左右で微妙にサイズが違うことがあります。必ず左右のインソールをそれぞれの靴に合わせてカットしましょう。左右を間違えないよう、裏面に「L」「R」と書いておくと便利です。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">カットライン印刷があれば活用する</h3>
              <p className="text-sm text-gray-700 leading-relaxed">ピットソールなど多くのインソールには、裏面にサイズ別のカットラインが印刷されています。このラインを活用すれば、純正中敷きを使わなくても正確なカットが可能です。自分のサイズに対応するラインを確認し、そのラインに沿ってカットしましょう。</p>
            </div>
          </div>
        </section>

        <section id="products" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">各製品のカット方法</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">主要なダイエットインソール3商品のカット方法を解説します。</p>

          <div className="bg-white border-2 border-[#0ea5e9] rounded-xl p-5 md:p-6 mb-6 shadow-sm">
            <h3 className="text-base md:text-xl font-bold text-gray-900 mb-3">ピットソール（Pitsole）のカット方法</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">ピットソールの裏面にはサイズ別のカットラインが印刷されています。XS（21〜22.5cm）、S（22.5〜24.5cm）、M（24.5〜26cm）、L（26〜27.5cm）の4サイズ展開で、それぞれの中でさらに0.5cm刻みのカットラインがあります。自分の足のサイズに合ったラインに沿ってカットするだけなので、初心者でも簡単にサイズ調整ができます。</p>
            <Link href="/pitsole/" className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline">ピットソールの詳細を見る &rarr;</Link>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm">
            <h3 className="text-base md:text-xl font-bold text-gray-900 mb-3">ランウェイキュアソール（RUNWAY CURE SOLE）のカット方法</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">ランウェイキュアソールはM（22.5〜23.5cm）・L（24〜25cm）の2サイズ展開です。サイズレンジが狭いため、大幅なカットが不要なケースが多いですが、靴の形状に合わせた微調整は必要です。薄型設計のため、ハサミで簡単にカットでき、断面もきれいに仕上がります。</p>
            <Link href="/runway-cure-sole/" className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline">ランウェイキュアソールの詳細を見る &rarr;</Link>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm">
            <h3 className="text-base md:text-xl font-bold text-gray-900 mb-3">スリムアップインソール（Slim Up Insole）のカット方法</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">スリムアップインソールは男女兼用で幅広いサイズに対応しています。裏面のカットラインに沿ってサイズ調整が可能です。男性用・女性用でカットラインが分かれている場合があるので、自分の性別に合ったラインを確認してからカットしましょう。</p>
            <Link href="/slim-up-insole/" className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline">スリムアップインソールの詳細を見る &rarr;</Link>
          </div>
        </section>

        <section id="faq" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">インソールをカットしすぎた場合はどうすればいいですか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">残念ながら、カットしすぎたインソールは元に戻せません。そのため、最初は大きめにカットし、少しずつ切り詰めていくことが重要です。万が一カットしすぎた場合は、やや大きめの別の靴で使用するか、新しいインソールで再度サイズ調整を行ってください。</div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">カットに必要な道具は何ですか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">よく切れるハサミ（裁ちばさみが理想的）、油性ペン、靴の純正中敷き（ガイドとして使用）があれば十分です。カッターナイフは曲線のカットが難しいため、ハサミをおすすめします。定規は直線部分の確認に使えますが必須ではありません。</div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">カットラインの印刷がないインソールはどうやってカットしますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">靴に最初から入っている純正中敷きをガイドとして使います。純正中敷きをインソールの上に重ね、輪郭を油性ペンでなぞってカットラインを作ります。純正中敷きとインソールのかかと部分を合わせて重ねるのがポイントです。</div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">インソールは左右でカットサイズを変えた方が良いですか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">はい、左右の足のサイズが異なる方は多いため、必ず左右それぞれの靴に合わせてカットしましょう。左右のインソールを間違えないよう、裏面に「左」「右」と印をつけておくと便利です。片方ずつ靴に入れてフィッティングを確認しながらカットしてください。</div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">カットした断面がボロボロになるのを防ぐ方法はありますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">よく切れる新しいハサミを使うことが最も重要です。切れ味の悪いハサミでは断面が毛羽立ちやすくなります。カット後に断面が気になる場合は、目の細かいヤスリやサンドペーパーで軽く整えると、きれいな仕上がりになります。</div>
            </details>
          </div>
        </section>

        <section id="summary" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">まとめ</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールのサイズ調整は「純正中敷きをガイドにする」「大きめにカットして微調整する」「つま先側だけカットする」の3つを守れば、誰でも失敗なく行えます。正しいサイズにカットしたインソールは、靴の中でズレにくく、効果を最大限に発揮してくれます。</p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 mb-6">
            <p className="text-sm font-bold text-gray-900 mb-3">カット対応の主要3商品</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><Link href="/pitsole/" className="text-[#0ea5e9] font-bold hover:underline">ピットソール</Link>：裏面に詳細なカットライン印刷あり。初心者でも簡単にサイズ調整可能。</li>
              <li><Link href="/runway-cure-sole/" className="text-[#0ea5e9] font-bold hover:underline">ランウェイキュアソール</Link>：薄型設計でカットしやすい。サイズレンジが狭く大幅カット不要。</li>
              <li><Link href="/slim-up-insole/" className="text-[#0ea5e9] font-bold hover:underline">スリムアップインソール</Link>：男女兼用の幅広いサイズ対応。カットラインで簡単調整。</li>
            </ul>
          </div>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">インソールの効果はフィット感で大きく変わります。面倒に感じるかもしれませんが、5分程度の作業で靴に完璧にフィットするインソールが手に入ります。ぜひこの記事の手順を参考に、ぴったりサイズのインソールで快適な歩行を楽しんでください。</p>

          <div className="text-center">
            <Link href="/ranking/" className="inline-block bg-[#0ea5e9] text-white font-bold text-sm md:text-base px-8 py-3 rounded-full hover:bg-sky-600 transition-colors shadow-md">3商品の詳細比較ランキングを見る</Link>
          </div>
        </section>
      </article>

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/articles/washing-guide/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"><p className="text-sm font-semibold text-gray-900">インソールの洗い方・お手入れガイド</p></Link>
            <Link href="/articles/how-to-choose/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"><p className="text-sm font-semibold text-gray-900">ダイエットインソールの選び方5つのポイント</p></Link>
            <Link href="/articles/insole-care/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"><p className="text-sm font-semibold text-gray-900">インソールの寿命と交換タイミング</p></Link>
            <Link href="/ranking/" className="block p-4 border border-[#e8627c] rounded-xl hover:bg-[#fdf2f4] transition-colors bg-[#fdf2f4]/50"><p className="text-sm font-semibold text-[#e8627c]">おすすめダイエットインソール3選を見る</p></Link>
          </div>
        </div>
      </section>
    </>
  );
}
