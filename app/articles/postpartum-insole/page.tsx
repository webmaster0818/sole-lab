import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "産後ダイエットにインソールは効果ある？骨盤ケア×歩行で痩せる方法",
  description:
    "産後の体型変化の原因を解説し、インソールが産後ダイエットに効く理由（骨盤サポート＋正しい歩行＋筋肉活性化）を紹介。産後いつから使えるか、おすすめ3商品の適性、産後ウォーキングとの併用法もまとめました。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/postpartum-insole/",
  },
  openGraph: {
    title:
      "産後ダイエットにインソールは効果ある？骨盤ケア×歩行で痩せる方法｜ソールラボ",
    description:
      "産後の体型変化とインソールが効く理由を解説。おすすめ3商品の産後への適性と産後ウォーキングの方法も紹介。",
    url: "https://sole-laboratory.com/articles/postpartum-insole/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "産後ダイエットにインソールは効果ある？骨盤ケア×歩行で痩せる方法",
  description:
    "産後の体型変化を解説し、インソールが産後ダイエットに効く理由とおすすめ商品・ウォーキング法をまとめたガイド。",
  author: {
    "@type": "Organization",
    name: "ソールラボ",
    url: "https://sole-laboratory.com",
  },
  publisher: {
    "@type": "Organization",
    name: "ソールラボ",
    url: "https://sole-laboratory.com",
  },
  datePublished: "2026-04-16",
  dateModified: "2026-04-16",
};

const faqs = [
  {
    question: "産後いつからインソールを使い始められますか？",
    answer:
      "一般的には産後1〜2ヶ月頃から使用を開始できます。ただし、産褥期（産後6〜8週間）は身体の回復を最優先にし、無理な外出や長時間の歩行は避けてください。1ヶ月健診で医師に「通常の活動を再開してよい」と言われてから、短時間の使用を始めるのがおすすめです。帝王切開の場合はさらに回復に時間がかかるため、主治医に確認しましょう。",
  },
  {
    question: "産後ダイエットにインソールは本当に効果がありますか？",
    answer:
      "インソールだけで劇的に痩せることはありませんが、産後の骨盤サポート・正しい歩行パターンの回復・筋肉活性化という3つの面で産後ダイエットを効果的にサポートします。特に産後は骨盤の開きや歩行バランスの崩れが起きやすいため、インソールの恩恵を受けやすい時期とも言えます。ウォーキングとの併用が前提です。",
  },
  {
    question: "授乳中でもインソールは使えますか？",
    answer:
      "はい、インソールは靴に入れるアイテムなので、授乳中でも問題なく使えます。サプリメントや医薬品と違い、体内に摂取するものではないため、授乳への影響はありません。むしろ正しい姿勢でウォーキングすることは、産後の体力回復やメンタルヘルスにもプラスに働きます。",
  },
  {
    question: "骨盤ベルトとインソールは併用できますか？",
    answer:
      "はい、骨盤ベルトとインソールの併用は相乗効果が期待できます。骨盤ベルトが上半身から骨盤を安定させ、インソールが足元から骨盤のアライメントをサポートするため、上下からのダブルアプローチでより効果的な骨盤ケアが可能です。産後2〜6ヶ月は特に併用をおすすめします。",
  },
  {
    question: "産後の体重は自然に戻りますか？インソールを使わなくても大丈夫ですか？",
    answer:
      "産後6ヶ月〜1年で妊娠前の体重に戻る方もいますが、約50%の方は産後1年経っても5kg以上体重が残ると言われています。授乳で消費カロリーは増えますが、それだけでは不十分な場合が多いです。インソールは必須ではありませんが、産後の骨盤が不安定な時期に正しい歩行パターンを身につけ、効率的にダイエットするためのサポートツールとして活用する価値があります。",
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://sole-laboratory.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "知識・コラム一覧",
      item: "https://sole-laboratory.com/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "産後ダイエット",
      item: "https://sole-laboratory.com/articles/postpartum-insole/",
    },
  ],
};

export default function PostpartumInsolePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <Breadcrumb
        items={[
          { label: "知識・コラム", href: "/articles/" },
          { label: "産後ダイエット" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#fdf2f4] to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-[#e8627c] font-medium mb-2">
            産後ケア×ダイエット
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            産後ダイエットにインソールは効果ある？
            <br />
            <span className="text-[#e8627c]">骨盤ケア×歩行</span>
            で痩せる方法
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            「出産後、体重が戻らない」「下半身が太ったまま」「骨盤の開きが気になる」。産後の体型の悩みを抱えるママは非常に多いです。しかし、赤ちゃんの世話でジムに通う時間はなく、激しい運動もできない。そんな産後ママにこそ、インソール×ウォーキングという選択肢があります。競合サイトにはインソール×産後の記事がほぼなく、このテーマはブルーオーシャンです。産後特有の体の変化に着目した独自のアプローチを解説します。
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-[#fdf2f4] text-[#e8627c] px-3 py-1 rounded-full font-medium border border-[#f3e0e4]">
              産後 ダイエット インソール
            </span>
            <span className="bg-[#fdf2f4] text-[#e8627c] px-3 py-1 rounded-full font-medium border border-[#f3e0e4]">
              骨盤 歩く
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              2026年4月更新
            </span>
          </div>
        </div>
      </section>

      {/* 産後の体型変化 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            産後の体型変化はなぜ起こる？
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              産後に体型が変わる原因は「体重の増加」だけではありません。妊娠・出産に伴う骨盤の変化と筋力の低下が、体型変化の根本的な原因です。この仕組みを理解することが、効果的な産後ダイエットの第一歩になります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "骨盤の開き",
                desc: "妊娠中はリラキシンというホルモンの影響で骨盤周辺の靱帯が緩み、出産時に骨盤が大きく開きます。産後は徐々に戻りますが、完全に元の位置に戻るには産後6ヶ月〜1年かかると言われています。骨盤が開いたままだと、お尻が大きくなる・O脚になる・下腹がぽっこり出るといった体型変化が起こります。",
              },
              {
                title: "骨盤底筋の弱化",
                desc: "妊娠中の赤ちゃんの重さと出産時の負荷により、骨盤底筋群が伸び切って弱くなります。骨盤底筋は骨盤を内側から支える筋肉で、ここが弱ると内臓が下がり、下腹部が出やすくなります。尿漏れの原因にもなるため、産後の骨盤底筋トレーニングは非常に重要です。",
              },
              {
                title: "歩行パターンの変化",
                desc: "妊娠中はお腹が大きくなることで重心が前に移動し、骨盤を後傾させてバランスを取る歩き方になります。この歩行パターンが産後もクセとして残り、いわゆる「ガニ股歩き」や「ペンギン歩き」になりがちです。不自然な歩行パターンは下半身太りの原因にもなります。",
              },
              {
                title: "筋力の全体的な低下",
                desc: "妊娠後期は運動量が大幅に減り、産後も赤ちゃんの世話で自分の運動時間が取れないため、全身の筋力が低下します。筋肉量が減ると基礎代謝が下がり、「食べる量は変わっていないのに太る」という状態になります。特に下半身の筋力低下が顕著です。",
              },
              {
                title: "ホルモンバランスの変化",
                desc: "産後はエストロゲンやプロゲステロンが急激に減少し、代わりにプロラクチン（授乳ホルモン）が増加します。このホルモンバランスの変化は、水分を溜め込みやすくなる（むくみ）、脂肪が付きやすくなるなどの影響をもたらします。",
              },
              {
                title: "足裏アーチの崩れ",
                desc: "妊娠中の体重増加とリラキシンの影響で、足裏のアーチが崩れやすくなります。妊娠中に靴のサイズが0.5〜1サイズ上がる方は多いですが、これは足裏アーチの崩壊による足の横幅の広がりが原因です。アーチの崩れは産後も続き、歩行効率の低下につながります。",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* インソールが産後ダイエットに効く理由 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            インソールが産後ダイエットに効く3つの理由
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              産後の体型変化の原因を踏まえると、インソールが産後ダイエットに効く理由が見えてきます。インソールは「骨盤サポート」「正しい歩行パターンの回復」「筋肉活性化」の3つの面から産後の体型戻しをサポートします。
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                num: "01",
                title: "足元からの骨盤サポート",
                desc: "産後の骨盤は開いた状態から徐々に戻る過程にあります。この時期にインソールのアーチサポートで足裏のアライメントを整えると、足首→膝→骨盤への運動連鎖が正しく働き、骨盤が正しい位置に戻るのをサポートします。骨盤ベルトが上から支えるのに対し、インソールは下から支えるアプローチです。両方を併用することで、上下からの骨盤ケアが実現します。",
                detail:
                  "特に、産後は足裏アーチ自体も崩れていることが多いため、インソールによるアーチサポートは「足の健康の回復」と「骨盤のサポート」の一石二鳥の効果があります。",
              },
              {
                num: "02",
                title: "正しい歩行パターンの回復",
                desc: "妊娠中に身についた不自然な歩行パターン（ガニ股・すり足・骨盤後傾歩行）は、産後も無意識に続きがちです。インソールのアーチサポートとヒールカップが、かかと着地→足裏全体で荷重→つま先蹴り出しという正しいローリング歩行に自然と導きます。正しい歩行パターンが戻ることで、歩行効率が向上し、同じ歩数でもより多くのカロリーを消費できるようになります。",
                detail:
                  "また、正しい歩行は見た目の印象も大きく変えます。ガニ股歩きから美しい歩行に変わることで、姿勢の改善とともに「痩せた？」と言われることも少なくありません。",
              },
              {
                num: "03",
                title: "筋肉活性化で基礎代謝を回復",
                desc: "産後に低下した下半身の筋力を、日常の歩行で少しずつ回復させるのがインソールの3つ目の効果です。アーチサポートにより歩行時に動員される筋肉の範囲と活動量が増えるため、通常の歩行がそのまま「ながら筋トレ」になります。赤ちゃんとの散歩やお買い物など、日常の歩行がダイエットの時間に変わるのは、忙しい産後ママにとって大きなメリットです。",
                detail:
                  "特にふくらはぎ・太もも内側・お尻の筋肉が活性化されやすく、産後に気になりやすい「下半身太り」にダイレクトにアプローチできます。",
              },
            ].map((item) => (
              <div key={item.num} className="card">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl font-bold text-[#e8627c] shrink-0">
                    {item.num}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {item.desc}
                </p>
                <div className="bg-[#fdf2f4] rounded-lg p-3">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 産後いつからインソールを使える？ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            産後いつからインソールを使える？時期別ガイド
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              産後の身体はデリケートなため、インソールの使用開始時期と段階的なステップアップが重要です。以下のタイムラインを参考にしてください。
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                period: "産後0〜1ヶ月（産褥期前半）",
                color: "bg-gray-100",
                textColor: "text-gray-500",
                status: "インソール使用：まだ早い",
                desc: "身体の回復を最優先にする時期です。子宮の収縮、会陰の回復、体力の回復を待ちましょう。外出は必要最低限にとどめ、無理な歩行は避けてください。骨盤ベルトの使用は産院の指導に従いましょう。",
              },
              {
                period: "産後1〜2ヶ月（産褥期後半）",
                color: "bg-amber-50",
                textColor: "text-amber-700",
                status: "インソール使用：開始可能（短時間から）",
                desc: "1ヶ月健診で問題がなければ、少しずつ外出を増やせる時期です。インソールを入れた靴で、まずは1日15〜20分の近所の散歩から始めましょう。足裏に違和感がある場合は無理をせず、2〜3時間の使用からスタートします。",
              },
              {
                period: "産後2〜4ヶ月",
                color: "bg-[#fdf2f4]",
                textColor: "text-[#e8627c]",
                status: "インソール使用：本格スタート",
                desc: "身体の回復が進み、活動量を増やせる時期です。インソールの使用を終日に広げ、赤ちゃんとの散歩（ベビーカーウォーキング）を1日30分〜1時間に延ばしましょう。骨盤がまだ戻りきっていないこの時期にインソール＋骨盤ベルトで集中ケアすると効果的です。",
              },
              {
                period: "産後4〜6ヶ月",
                color: "bg-[#fdf2f4]",
                textColor: "text-[#e8627c]",
                status: "インソール使用：最大効果の時期",
                desc: "骨盤が安定してきて、本格的なウォーキングダイエットが可能な時期です。1日1時間のウォーキングを週5日以上目指しましょう。インソールの効果（姿勢改善・筋活性化）が最も発揮される時期です。離乳食が始まれば授乳量も減るため、食事管理も並行しやすくなります。",
              },
              {
                period: "産後6ヶ月〜1年",
                color: "bg-emerald-50",
                textColor: "text-emerald-700",
                status: "インソール使用：定着期",
                desc: "骨盤はほぼ元の状態に近づき、体重管理のフェーズに入ります。インソール＋ウォーキングの習慣が定着していれば、この時期に妊娠前の体重に近づく方が多いです。引き続きインソールを使い続けることで、足裏の健康維持と姿勢の定着を図りましょう。",
              },
            ].map((item) => (
              <div key={item.period} className={`card ${item.color}`}>
                <div className="flex items-start gap-3">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">
                      {item.period}
                    </h3>
                    <p className={`text-sm font-medium ${item.textColor} mb-2`}>
                      {item.status}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-amber-50 rounded-xl p-4">
            <p className="text-sm text-amber-800 leading-relaxed">
              <span className="font-bold">帝王切開の場合：</span>
              帝王切開の回復には経膣分娩より時間がかかります。術後の傷の回復具合に応じて、上記のスケジュールを1〜2ヶ月後ろ倒しにしてください。必ず主治医の許可を得てから活動量を増やしましょう。
            </p>
          </div>
        </div>
      </section>

      {/* おすすめ3商品の産後への適性 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            おすすめ3商品の産後ダイエットへの適性
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              産後ダイエットの観点から、ダイエットインソール3商品の適性を比較しました。産後特有のニーズ（骨盤サポート・歩行パターンの矯正・育児中の使いやすさ）を中心に評価しています。
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                rank: "1",
                name: "ピットソール（Pitsole）",
                postpartumScore: "産後ダイエット適性：非常に高い",
                reason:
                  "世界特許のキュボイドサポート技術が、産後に崩れた足裏アーチを強力にサポートします。3点アーチサポートにより、妊娠中に開いた骨盤を足元から支え、正しい歩行パターンへの回復を促進。産後ウォーキングとの相性が最も良い製品です。スニーカーとの相性が抜群で、ベビーカーウォーキングに最適。",
                points: [
                  "3点アーチサポートで崩れた足裏アーチを強力に回復",
                  "骨盤のアライメント補整で産後の骨盤ケアをサポート",
                  "スニーカーとの相性が良く、ベビーカーウォーキングに最適",
                  "高い耐久性で長期使用に耐える",
                ],
                price: "6,578円（税込）〜",
              },
              {
                rank: "2",
                name: "ランウェイキュアソール",
                postpartumScore: "産後ダイエット適性：高い",
                reason:
                  "整体師監修の骨盤補整設計が、産後の骨盤ケアにダイレクトに効果を発揮します。薄型設計のため、スニーカーだけでなくパンプスにも対応。産後に職場復帰した方が通勤靴に入れて使えるのが大きな利点です。骨盤の位置を整えることで、産後特有の下腹ぽっこりの改善も期待できます。",
                points: [
                  "骨盤補整設計で産後の骨盤ケアに直接アプローチ",
                  "薄型でパンプスにも対応、職場復帰後も使いやすい",
                  "美姿勢サポートで産後の猫背・反り腰を改善",
                  "整体師監修の信頼性",
                ],
                price: "4,378円（税込）〜",
              },
              {
                rank: "3",
                name: "スリムアップインソール",
                postpartumScore: "産後ダイエット適性：中程度",
                reason:
                  "手頃な価格で産後ダイエットを始めやすいのが最大の利点です。傾斜設計で歩行時の筋肉を刺激するアプローチは産後の筋力回復にも寄与します。ただし、骨盤サポートの観点ではピットソールやランウェイキュアソールほどの機能はありません。「まずは気軽に試してみたい」という方の入門編として最適。",
                points: [
                  "手頃な価格で産後の出費が多い時期にも始めやすい",
                  "傾斜設計で産後の筋力回復を自然にサポート",
                  "男女兼用なので夫婦で使い回しも可能",
                  "基本的なアーチサポート機能は搭載",
                ],
                price: "2,178円（税込）〜",
              },
            ].map((item) => (
              <div key={item.rank} className="card">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl font-bold text-[#e8627c] shrink-0">
                    {item.rank}位
                  </span>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900">
                      {item.name}
                    </h3>
                    <span className="text-sm font-medium text-[#e8627c]">
                      {item.postpartumScore}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {item.reason}
                </p>
                <ul className="space-y-1 mb-3">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-gray-600 flex items-start gap-2"
                    >
                      <span className="text-[#e8627c] shrink-0 mt-0.5">
                        &#10003;
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500">
                  価格：
                  <span className="text-gray-900 font-medium">
                    {item.price}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/ranking/"
              className="inline-block bg-[#e8627c] hover:bg-[#d14d68] text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              ダイエットインソールランキングをもっと見る
            </Link>
          </div>
        </div>
      </section>

      {/* 産後ウォーキングとの併用法 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            産後ウォーキングとインソールの併用法
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              インソールの効果を最大化するには、産後ウォーキングとの併用がおすすめです。赤ちゃんとの散歩をダイエットタイムに変えるためのポイントを紹介します。
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "ベビーカーウォーキングの正しいフォーム",
                desc: "ベビーカーを押すときは、ハンドルの位置が低すぎると猫背になります。肘が軽く曲がる高さにハンドルを調整し、背筋を伸ばして歩きましょう。インソールが骨盤と姿勢をサポートしてくれるので、意識しなくても正しいフォームに近づきます。歩幅はやや大きめを意識し、かかとから着地するのがポイントです。",
              },
              {
                title: "赤ちゃんの月齢に合わせた歩行時間",
                desc: "生後1〜2ヶ月の赤ちゃんとの外出は15〜20分が目安です。3ヶ月以降は30分〜1時間に延ばせます。赤ちゃんの体調や天候に合わせて柔軟に調整しましょう。紫外線が強い10〜14時は避け、朝や夕方の涼しい時間帯がおすすめです。",
              },
              {
                title: "ウォーキングコースの選び方",
                desc: "産後ウォーキングには、平坦で段差の少ない道を選びましょう。公園の遊歩道やショッピングモールの周回路が最適です。坂道は骨盤への負荷が大きいため、産後4ヶ月以降から少しずつ取り入れましょう。近くにベンチやトイレがあるコースだと安心です。",
              },
              {
                title: "抱っこ紐ウォーキングの注意点",
                desc: "抱っこ紐を使う場合は、赤ちゃんの重さで前傾姿勢になりやすいです。インソールの姿勢サポートが特に重要になります。赤ちゃんの体重が増えてくると腰への負担も大きくなるため、長時間のウォーキングにはベビーカーの方が適しています。抱っこ紐の場合は30分以内を目安にしましょう。",
              },
              {
                title: "雨の日・外出困難な日の代替案",
                desc: "室内でできるむくみ対策・ストレッチ・足踏み運動も効果的です。ショッピングモール内のウォーキングも天候に左右されません。また、室内履き用のスリッパにインソールを入れれば、家の中での歩行でも効果が得られます。赤ちゃんを抱っこしての軽いスクワットも産後の筋力回復に効果的です。",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 産後ダイエットの心構え */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            産後ダイエットで大切な心構え
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "自分のペースで焦らないこと",
                desc: "SNSで「産後3ヶ月で体重が戻った」という投稿を見て焦る方がいますが、回復の速度は個人差が非常に大きいです。半年〜1年かけてゆっくり戻すくらいの心構えが、結果的に成功率が高いです。",
              },
              {
                title: "赤ちゃんの世話と自分の健康を両立する",
                desc: "ダイエットに集中しすぎて、睡眠不足や栄養不足になるのは本末転倒です。特に授乳中は十分なカロリーと栄養が必要です。極端な食事制限は避け、ウォーキングとインソールによる「ゆるやかなダイエット」を心がけましょう。",
              },
              {
                title: "体重以外の変化にも目を向ける",
                desc: "体重が減らなくても、姿勢が良くなった・歩き方がきれいになった・むくみが減った・体力が戻ってきたなど、多くの変化が起きている可能性があります。体重は遅れて変化することが多いので、それ以外の指標も大切にしましょう。",
              },
              {
                title: "周りのサポートを受ける",
                desc: "ウォーキングの時間を確保するには、パートナーや家族のサポートが必要です。30分の散歩の間だけ赤ちゃんを見てもらうなど、協力を仰ぎましょう。ママ友とのウォーキングも、モチベーション維持に効果的です。",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 産後インソールと他のダイエット法の比較 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            産後ダイエット法の比較：インソールの位置づけ
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              産後ダイエットにはさまざまな方法がありますが、育児中のママにとっては「時間がない」「激しい運動ができない」という制約があります。主な方法を比較してみましょう。
            </p>
          </div>

          <div className="card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[#f3e0e4]">
                  <th className="py-2 text-left text-gray-500 font-medium">方法</th>
                  <th className="py-2 text-left text-gray-500 font-medium">手軽さ</th>
                  <th className="py-2 text-left text-gray-500 font-medium">育児との両立</th>
                  <th className="py-2 text-left text-gray-500 font-medium">骨盤ケア効果</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { method: "インソール＋ウォーキング", easy: "非常に手軽", balance: "赤ちゃんと一緒にできる", pelvis: "足元から骨盤をサポート" },
                  { method: "骨盤ベルト", easy: "手軽", balance: "装着のみ", pelvis: "骨盤を直接サポート" },
                  { method: "産後ヨガ", easy: "やや手間", balance: "赤ちゃんと参加可能な教室も", pelvis: "骨盤底筋を強化" },
                  { method: "ジム通い", easy: "時間が必要", balance: "託児が必要", pelvis: "限定的" },
                  { method: "食事制限", easy: "手軽だが我慢が必要", balance: "授乳中は制限あり", pelvis: "なし" },
                ].map((row) => (
                  <tr key={row.method} className="border-b border-gray-100">
                    <td className="py-2 text-gray-900 font-medium">{row.method}</td>
                    <td className="py-2 text-gray-600">{row.easy}</td>
                    <td className="py-2 text-gray-600">{row.balance}</td>
                    <td className="py-2 text-gray-600">{row.pelvis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mt-8">
            <p>
              インソール×ウォーキングの最大の強みは「赤ちゃんとの散歩がそのままダイエットになる」という点です。ジムに通う時間を確保する必要もなく、激しい運動もいりません。骨盤ベルトとの併用で骨盤ケア効果を高めることもできます。
            </p>
            <p>
              もちろん、産後ヨガやピラティスなど他の方法と組み合わせれば、さらに効果的です。大切なのは、無理なく続けられる方法を選ぶこと。インソールは「日常生活に溶け込むダイエット」として、他のどの方法とも併用しやすいのが特徴です。
            </p>
          </div>
        </div>
      </section>

      {/* 産後の靴選びとインソール */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            産後の靴選びとインソールの相性
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              産後は足のサイズが変わっていることが多いため、靴選びも見直す必要があります。インソールの効果を最大限に発揮するための靴選びのポイントをまとめました。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "足のサイズを再計測する",
                desc: "妊娠中の体重増加とリラキシンの影響で、足のサイズが0.5〜1cm大きくなっている方は少なくありません。産後も足のサイズが戻らないケースがあるため、靴屋で足のサイズを再計測してもらいましょう。特に足幅（ワイズ）が広がっていることが多いです。",
              },
              {
                title: "インソールの厚みを考慮した靴選び",
                desc: "ダイエットインソールはある程度の厚みがあるため、靴の中敷きを外してからインソールを入れるのが基本です。それでも窮屈に感じる場合は、0.5cm大きいサイズか、甲の高さに余裕のある靴を選びましょう。紐靴なら締め具合で調整できます。",
              },
              {
                title: "スニーカーがベストパートナー",
                desc: "産後のウォーキングには、クッション性と安定性に優れたスニーカーが最適です。インソールとの相性も抜群で、ベビーカーウォーキングにも適しています。産後はおしゃれよりも機能性を優先し、足に優しい靴を選びましょう。",
              },
              {
                title: "ヒール靴は産後6ヶ月以降から",
                desc: "骨盤が安定していない産後初期にヒール靴を履くと、骨盤への負担が大きくなります。ヒール靴の使用は産後6ヶ月以降、骨盤が安定してからが安全です。復帰直後のオフィスではフラットパンプスにランウェイキュアソールを入れる方法もおすすめです。",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="card group">
                <summary className="cursor-pointer text-base font-bold text-gray-900 list-none flex items-center justify-between gap-2">
                  <span className="flex items-start gap-2">
                    <span className="text-[#e8627c] shrink-0">Q.</span>
                    {faq.question}
                  </span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">
                    &#9662;
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed pl-6">
                  <span className="text-[#e8627c] font-bold">A.</span>{" "}
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            まとめ
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              産後ダイエットにインソールは効果的なサポートツールです。産後特有の「骨盤の開き」「歩行パターンの崩れ」「筋力低下」「足裏アーチの崩壊」という4つの課題に対し、インソールのアーチサポートが足元からのアプローチで応えます。
            </p>
            <p>
              使用開始は産後1〜2ヶ月頃から（1ヶ月健診で問題なければ）。最初は短時間の散歩から始め、徐々にウォーキング時間を延ばしていきましょう。産後2〜6ヶ月が骨盤ケアとダイエットの最も効果的な時期です。
            </p>
            <p>
              おすすめ3商品の中では、産後の崩れた足裏アーチを強力に回復させるピットソールが最も適しています。職場復帰後のパンプスにはランウェイキュアソール、まず気軽に試したい方にはスリムアップインソールがおすすめです。
            </p>
            <p>
              赤ちゃんとの散歩の時間をダイエットタイムに変えて、無理なく・楽しく産後の体型戻しを実現しましょう。
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/ranking/"
              className="inline-block bg-[#e8627c] hover:bg-[#d14d68] text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              ダイエットインソールランキングを見る
            </Link>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/articles/pelvis-correction/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                インソールで骨盤矯正はできる？正しい知識と選び方
              </p>
            </Link>
            <Link
              href="/articles/walking-diet/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                歩くだけダイエットは本当に効果ある？インソールで効率UP
              </p>
            </Link>
            <Link
              href="/ranking/"
              className="block p-4 border border-[#e8627c] rounded-xl hover:bg-[#fdf2f4] transition-colors bg-[#fdf2f4]/50"
            >
              <p className="text-sm font-semibold text-[#e8627c]">
                おすすめダイエットインソール3選を見る →
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
