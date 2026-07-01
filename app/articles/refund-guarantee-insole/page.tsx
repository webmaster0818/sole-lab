import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ダイエットインソールの返金保証・解約の注意点【2026年】定期購入のコツ",
  description:
    "ダイエットインソールの返金保証や定期購入の解約で損しないために。保証の条件・解約のタイミング・注意点をわかりやすく解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/refund-guarantee-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ダイエットインソールの返金保証・解約の注意点｜定期購入で損しないコツ",
  description:
    "ダイエットインソールの返金保証や定期購入の解約で損しないために。保証の条件・解約のタイミング・注意点をわかりやすく解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-07-02",
};

const faqs = [{"q": "返金保証は必ず使えますか？", "a": "保証期間・対象・申請方法などの条件を満たす必要があります。購入前に条件を確認し、満たせない場合は返金されない点に注意しましょう。"}, {"q": "定期購入の解約はいつまでにすれば良い？", "a": "多くは『次回発送の◯日前まで』に解約連絡が必要です。発送日から逆算して早めに連絡するのが安全です。"}, {"q": "単品購入と定期購入どちらが良い？", "a": "まず試したいなら単品、継続前提で割安に使いたいなら定期が向きます。定期は最低回数と解約条件を必ず確認しましょう。"}, {"q": "開封後でも返金してもらえますか？", "a": "返金保証が「開封・使用後でも対象」か「未開封のみ対象」かは、販売店ごとに条件が異なります。一般に、返送が必要だったり、商品やパッケージの状態が条件になる場合があります。具体的な可否は購入前に各公式サイトの保証規約で必ず確認しましょう。"}, {"q": "定期コースの解約方法はどうすれば良い？", "a": "解約方法は電話のみ・マイページ・問い合わせフォームなど販売店によって異なります。受付時間や次回発送の何日前までかといった期限も様々です。注文前に解約方法と連絡先を確認しておくと安心です。詳しい条件は各公式サイトでご確認ください。"}];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://sole-laboratory.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://sole-laboratory.com/articles/" },
    { "@type": "ListItem", position: 3, name: "返金保証・解約", item: "https://sole-laboratory.com/articles/refund-guarantee-insole/" },
  ],
};

const points = [{"t": "返金保証の条件を確認", "b": "保証期間・対象・申請方法・返送の要否を購入前にチェック。条件を満たさないと返金されません。"}, {"t": "定期の最低回数・解約期限", "b": "『最低継続回数』『解約は次回発送の何日前まで』を必ず確認。スケジュールを把握しておきましょう。"}, {"t": "解約方法を事前に把握", "b": "電話のみ・マイページからなど解約方法は様々。受付時間や手順を事前に確認しておくとスムーズです。"}];
const related = [{"href": "/articles/ec-buy-insole/", "label": "Amazon・楽天での購入"}, {"href": "/articles/fake-genuine-insole/", "label": "偽物・正規品の見分け方"}, {"href": "/articles/pitsole-coupon/", "label": "ピットソールのクーポン"}, {"href": "/articles/where-to-buy-insole/", "label": "市販はどこで売ってる"}];

export default function RefundGuaranteePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "返金保証・解約" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">使い方・選び方</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ダイエットインソールの返金保証・解約の注意点｜定期購入で損しないコツ</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">ダイエットインソールには返金保証や定期購入(定期コース)がついていることがあります。お得な反面、条件や解約のルールを知らないと損をすることも。後悔しないための注意点を整理します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">返金保証は『条件（期間・対象・申請方法）』を、定期購入は『最低継続回数・解約期限・解約方法』を、購入前に必ず確認しましょう。条件を把握しておけば、保証を活かしつつ無駄な出費を防げます。</p>
        </div>

        <section id="compare" className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">3製品の返金保証・返品・購入形態（定期の有無）比較</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">当サイトで扱う3製品（ピットソール／ランウェイキュアソール／スリムアップインソール）について、各製品の公式ページで確認できた「返金保証・返品・購入形態（単品・セット・定期の有無）」を横断でまとめました。下表は各製品ページの公式確認済みの記述に基づく整理です。条件は変更される場合があるため、購入前に必ず各公式サイトで最新の内容をご確認ください。</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-xl">
              <thead>
                <tr className="bg-[#f0f9ff] text-gray-900">
                  <th className="p-3 text-left border-b border-gray-200 whitespace-nowrap">製品</th>
                  <th className="p-3 text-left border-b border-gray-200">返金保証</th>
                  <th className="p-3 text-left border-b border-gray-200">返品・交換</th>
                  <th className="p-3 text-left border-b border-gray-200">購入形態</th>
                  <th className="p-3 text-left border-b border-gray-200">定期縛り</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 align-top">
                <tr>
                  <td className="p-3 border-b border-gray-200 font-medium whitespace-nowrap"><Link href="/pitsole/" className="text-[#e8627c] underline">ピットソール</Link></td>
                  <td className="p-3 border-b border-gray-200">公式ページに全額返金保証の記載なし（公式サイトで要確認）</td>
                  <td className="p-3 border-b border-gray-200">公式サイト購入は未使用・未開封品に限りサイズ交換可（到着後7日以内に連絡）</td>
                  <td className="p-3 border-b border-gray-200">単品／3足セット／6足セット（まとめ買い）</td>
                  <td className="p-3 border-b border-gray-200">定期縛りなし（都度購入）</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-200 font-medium whitespace-nowrap"><Link href="/runway-cure-sole/" className="text-[#e8627c] underline">ランウェイキュアソール</Link></td>
                  <td className="p-3 border-b border-gray-200">公式サイトに「90日間使用して実感がない場合の全額返金保証」の記載あり（条件は公式で要確認）</td>
                  <td className="p-3 border-b border-gray-200">公式ページに返品条件の明記なし（全額返金保証の申請条件は公式サイトで要確認）</td>
                  <td className="p-3 border-b border-gray-200">1足（単品）／2足セット／3足セット</td>
                  <td className="p-3 border-b border-gray-200">定期縛りなし（都度購入）</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium whitespace-nowrap"><Link href="/slim-up-insole/" className="text-[#e8627c] underline">スリムアップインソール</Link></td>
                  <td className="p-3">公式ページに全額返金保証の記載なし（公式サイトで要確認）</td>
                  <td className="p-3">公式サイト購入は未開封品に限り返品可（詳細条件は公式の返品ポリシーで要確認）</td>
                  <td className="p-3">単品／2足セット／3足セット（+1足プレゼント）</td>
                  <td className="p-3">定期縛りなし（都度購入）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-[#f0f9ff] border border-[#e0f2fe] rounded-xl p-5 text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            <p className="font-bold text-gray-900 mb-2">この表からわかること</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-bold text-gray-900">3製品はいずれも「単品・セット販売（都度購入）」で、定期購入（サブスク）ではありません。</span>そのため「最低○回の継続」「解約連絡が必要」といった定期縛りは、各製品ページの記載を確認した範囲ではありません。定期コースの解約に悩む心配は基本的に不要です。</li>
              <li><span className="font-bold text-gray-900">全額返金保証が明記されているのはランウェイキュアソール（90日間使用して実感がない場合）</span>のみです。ピットソール・スリムアップインソールの公式ページには全額返金保証の記載を確認できませんでした。</li>
              <li><span className="font-bold text-gray-900">返品・交換</span>は、ピットソール・スリムアップインソールとも「公式サイト購入・未開封（ピットソールは未使用も）」が条件です。ピットソールは到着後7日以内の連絡が必要です。</li>
            </ul>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed mb-2">※上記は各製品ページ（<Link href="/pitsole/" className="text-[#e8627c] underline">ピットソール</Link>／<Link href="/runway-cure-sole/" className="text-[#e8627c] underline">ランウェイキュアソール</Link>／<Link href="/slim-up-insole/" className="text-[#e8627c] underline">スリムアップインソール</Link>）で公式確認済みとして掲載している記述にもとづく整理です。返金保証の適用条件・返品送料・申請方法などの詳細や、記載のない項目（「公式サイトで要確認」）は、必ず各公式サイトの最新の利用規約・返品特約でご確認ください。条件・価格・保証内容は変更される場合があります。</p>
          <p className="text-xs text-gray-500 leading-relaxed">※本記事は各製品の公式サイトを紹介するPR（アフィリエイト広告）を含みます。詳しい条件は各製品ページおよび公式サイトをご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">返金保証・定期購入の仕組みと落とし穴</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">返金保証は『一定期間内に効果に満足できなければ返金』といった制度ですが、保証期間・対象商品・申請手続き・返送の要否など条件が細かく決まっていることが多いです。条件を満たさないと返金されません。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">定期購入(定期コース)は単品より割安な反面、『最低◯回の継続が条件』『次回発送の◯日前までに解約連絡』などのルールがあります。これを知らずに解約しようとすると、想定外の回数分を購入することになる場合があります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">購入前に確認したい一般的なチェック項目</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">返金保証や解約の条件は販売店ごとに異なり、同じ商品でも購入する店舗（公式サイト・モール・実店舗など）によって扱いが変わることがあります。下記は一般的に確認しておきたい観点です。具体的な保証額や条件は、必ず購入先の公式サイトや利用規約で最新の内容を確認してください。</p>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            <li><span className="font-bold text-gray-900">保証の条件・期間：</span>何日以内に申請が必要か、対象商品・対象セットはどれか、申請に必要な書類（注文番号・明細など）や返送の要否を確認します。</li>
            <li><span className="font-bold text-gray-900">開封後の可否：</span>「未開封のみ」か「使用後でも対象」かは販売店により異なります。返金保証と未開封の返品制度は別物なので、それぞれの扱いを確認しましょう。</li>
            <li><span className="font-bold text-gray-900">定期縛りの有無：</span>「最低◯回の継続が条件」といった回数縛りがあるか、初回特価の場合の総額はいくらになるかを把握しておきます。なお、当サイトで扱う3製品はいずれも単品・セット販売（都度購入）で定期購入ではありません（<a href="#compare" className="text-[#0ea5e9] underline">3製品の比較はこちら</a>）。定期購入の商品を検討する際の一般的なチェック項目としてご活用ください。</li>
            <li><span className="font-bold text-gray-900">解約方法・連絡先：</span>電話・マイページ・フォームのどれで受け付けるか、受付時間、次回発送の何日前までに連絡が必要かを事前に控えておきます。</li>
          </ul>
          <div className="bg-[#f0f9ff] border border-[#e0f2fe] rounded-xl p-5 text-sm md:text-base text-gray-700 leading-relaxed">
            <p className="font-bold text-gray-900 mb-2">クーリングオフの一般知識</p>
            <p>クーリングオフは、訪問販売や電話勧誘販売など特定の取引で一定期間内に契約を解除できる制度です。一般に、消費者が自分で申し込む通信販売（ネット通販）はクーリングオフ制度の対象外とされており、返品・返金の可否は各販売店が定める「返品特約」によります。そのため通販で購入する場合は、販売店ごとの返品・返金ルールを必ず確認してください。判断に迷う場合は、消費者ホットライン「188（いやや）」などの公的窓口に相談する方法もあります。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">返金保証・解約の選び方3つのポイント</h2>
          {points.map((p, i) => (
            <div key={p.t} className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 mb-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">{p.t}</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">{p.b}</p>
            </div>
          ))}
        </section>

        <section id="recommend" className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">返金保証・解約におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">保証や解約条件が明確な、正規販売店での購入が安心です。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-xl">
              <thead>
                <tr className="bg-[#f0f9ff] text-gray-900">
                  <th className="p-3 text-left border-b border-gray-200">商品</th>
                  <th className="p-3 text-left border-b border-gray-200">評価</th>
                  <th className="p-3 text-left border-b border-gray-200">特徴</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr><td className="p-3 border-b border-gray-200 font-medium"><Link href="/pitsole/" className="text-[#e8627c] underline">ピットソール</Link></td><td className="p-3 border-b border-gray-200">★3.8</td><td className="p-3 border-b border-gray-200">特許取得のアーチサポート。累計200万足の実績で安定感。</td></tr>
                <tr><td className="p-3 border-b border-gray-200 font-medium"><Link href="/runway-cure-sole/" className="text-[#e8627c] underline">ランウェイキュアソール</Link></td><td className="p-3 border-b border-gray-200">★3.6</td><td className="p-3 border-b border-gray-200">3点アーチ設計で姿勢サポート。薄型で靴を選びにくい。</td></tr>
                <tr><td className="p-3 font-medium"><Link href="/slim-up-insole/" className="text-[#e8627c] underline">スリムアップインソール</Link></td><td className="p-3">★3.5</td><td className="p-3">クッション性重視。コスパよく初めての方に。</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">※評価はユーザーの口コミ傾向をもとにした編集部独自の目安です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">損しないためのチェックリスト</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">購入前に、①返金保証の有無と条件、②定期購入か単品か、③定期なら最低回数と解約期限・方法、④販売元と問い合わせ先、を確認しましょう。これらが明確な販売店を選ぶのが安全です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">解約したい場合は、次回発送日から逆算して早めに連絡するのが鉄則です。期限ぎりぎりや過ぎた連絡は、次回分が発送されてしまうことがあります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="border border-gray-200 rounded-xl p-4 group">
                <summary className="font-bold text-gray-900 text-sm cursor-pointer list-none flex justify-between items-center">{f.q}<span className="text-[#0ea5e9] group-open:rotate-45 transition-transform">＋</span></summary>
                <p className="text-sm text-gray-700 leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="bg-[#e8627c] rounded-xl p-6 md:p-8 text-center mb-12">
          <p className="text-white font-bold text-lg mb-2">自分に合うインソールを見つけよう</p>
          <p className="text-white/90 text-sm mb-5">保証・解約条件が明確なインソールを、安心して選びましょう。</p>
          <Link href="/ranking/" className="inline-block bg-white text-[#e8627c] font-bold px-6 py-3 rounded-lg hover:bg-[#fdf2f4] transition-colors">おすすめインソールランキングを見る</Link>
        </div>

        <section className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">関連記事</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {related.map((r) => (
              <Link key={r.href} href={r.href} className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
                <p className="text-sm font-bold text-gray-900">{r.label}</p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
