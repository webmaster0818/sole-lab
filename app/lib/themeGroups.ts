// 同テーマ記事のグループ（ThemeArticles で使用）。タイトルは各記事のh1と同一
export type ThemeItem = { href: string; title: string };
export const themeGroups: { name: string; items: ThemeItem[] }[] = [
  {
    "name": "スポーツ別のインソール",
    "items": [
      {
        "href": "/articles/baseball-insole/",
        "title": "野球のインソールの選び方｜スパイク対応で走塁・守備・打撃の安定に"
      },
      {
        "href": "/articles/cycling-insole/",
        "title": "ロードバイク・自転車のインソールの選び方｜ペダリング効率と足裏のしびれ対策"
      },
      {
        "href": "/articles/golf-insole/",
        "title": "ゴルフ用インソールおすすめ5選"
      },
      {
        "href": "/articles/table-tennis-insole/",
        "title": "卓球に向くインソールの選び方｜低い姿勢と前足部の負担をやわらげる"
      },
      {
        "href": "/articles/badminton-insole/",
        "title": "バドミントンのインソールの選び方｜反復ジャンプとフットワークを支える"
      },
      {
        "href": "/articles/basketball-insole/",
        "title": "バスケのインソールの選び方｜ジャンプの着地衝撃と足首保護"
      },
      {
        "href": "/articles/futsal-insole/",
        "title": "フットサルに向くインソールの選び方｜細かい切り返しと足裏の負担対策"
      }
    ]
  },
  {
    "name": "仕事・立ち仕事別のインソール",
    "items": [
      {
        "href": "/articles/chef-kitchen-insole/",
        "title": "調理師・厨房スタッフにおすすめのインソール｜コックシューズの疲れ対策"
      },
      {
        "href": "/articles/delivery-driver-insole/",
        "title": "配達員・ドライバーにおすすめのインソール｜乗り降りと階段の負担対策"
      },
      {
        "href": "/articles/pharmacist-insole/",
        "title": "薬剤師におすすめのインソール｜調剤室の立ちっぱなし・むくみ対策"
      },
      {
        "href": "/articles/part-time-standing-insole/",
        "title": "立ち仕事のバイト・パートにおすすめのインソール｜長時間シフトの疲れ対策"
      },
      {
        "href": "/articles/housewife-daily-insole/",
        "title": "家事・買い物の足の疲れにおすすめのインソール｜毎日使いの選び方"
      },
      {
        "href": "/articles/care-worker-insole/",
        "title": "介護士の足腰の負担におすすめのインソール｜中腰・移乗の負担対策"
      },
      {
        "href": "/articles/factory-work-insole/",
        "title": "工場の立ち仕事の足の疲れにおすすめのインソール｜安全靴対応の選び方"
      },
      {
        "href": "/articles/hairdresser-insole/",
        "title": "美容師の足の疲れにおすすめのインソール｜立ちっぱなしの負担対策"
      }
    ]
  },
  {
    "name": "お店で買えるインソール",
    "items": [
      {
        "href": "/articles/home-center-insole/",
        "title": "ホームセンターのインソールはダイエットに使える？作業用との目的の違い"
      },
      {
        "href": "/articles/loft-hands-insole/",
        "title": "ロフト・ハンズ等バラエティショップのインソールはダイエットに使える？雑貨系との違い"
      },
      {
        "href": "/articles/shimamura-insole/",
        "title": "しまむら等衣料チェーンのインソールはダイエットに使える？低価格品との違い"
      },
      {
        "href": "/articles/mercari-used-insole/",
        "title": "フリマ・中古のインソールは大丈夫？衛生面・保証・偽造品リスクの注意点"
      },
      {
        "href": "/articles/donki-insole/",
        "title": "ドンキのインソールはダイエットに使える？取り扱いと専用品の違い"
      },
      {
        "href": "/articles/drugstore-insole/",
        "title": "ドラッグストア・薬局のインソールはダイエットに使える？市販品の限界"
      },
      {
        "href": "/articles/abc-mart-insole/",
        "title": "靴量販店（ABCマート等）のインソールはダイエットに使える？専用品との違い"
      }
    ]
  },
  {
    "name": "インソールのブランド比較",
    "items": [
      {
        "href": "/articles/bmz-comparison/",
        "title": "BMZのインソールはどんな人向け？ピットソールとの関係と使い分けガイド"
      },
      {
        "href": "/articles/scholl-comparison/",
        "title": "ドクターショールのインソールはどんな人向け？ダイエット目的との使い分けガイド"
      },
      {
        "href": "/articles/sidas-comparison/",
        "title": "シダスのインソールはどんな人向け？ダイエット目的との使い分けガイド"
      },
      {
        "href": "/articles/sorbo-comparison/",
        "title": "ソルボのインソールはどんな人向け？ダイエット目的との使い分けガイド"
      },
      {
        "href": "/articles/superfeet-comparison/",
        "title": "スーパーフィートのインソールはどんな人向け？ダイエット目的との使い分けガイド"
      },
      {
        "href": "/articles/zamst-comparison/",
        "title": "ザムストのインソールはどんな人向け？ダイエット目的との使い分けガイド"
      },
      {
        "href": "/articles/100kin-vs-pro/",
        "title": "100均インソール vs 高機能インソール徹底比較テスト"
      }
    ]
  },
  {
    "name": "ダイエット・引き締めとインソール",
    "items": [
      {
        "href": "/articles/with-cardio-insole/",
        "title": "有酸素運動とインソールの併用｜歩行・ジョグの負担を軽くして続けやすく"
      },
      {
        "href": "/articles/with-diet-control-insole/",
        "title": "食事管理とインソールの併用｜痩せる主役は食事、足元は活動を支える脇役"
      },
      {
        "href": "/articles/with-training-insole/",
        "title": "筋トレとインソールの併用｜姿勢を整えて運動の質を高める考え方"
      },
      {
        "href": "/articles/mens-diet-insole/",
        "title": "ダイエットインソール男性向けおすすめ3選｜メンズの選び方ガイド"
      },
      {
        "href": "/articles/hip-up-insole/",
        "title": "インソールでヒップアップは可能？姿勢・歩き方から見た見た目の変化"
      },
      {
        "href": "/articles/ankle-slim-insole/",
        "title": "インソールで足首すっきり？むくみケアと歩き方からのサポート"
      },
      {
        "href": "/articles/diet-mechanism/",
        "title": "インソールで痩せるのは本当？効果と仕組みを客観的に検証"
      }
    ]
  },
  {
    "name": "足の悩み・使い方とインソール",
    "items": [
      {
        "href": "/articles/heel-skin-care-insole/",
        "title": "かかとの角質・ガサガサにインソールは関係ある？摩擦と荷重から考える対策"
      },
      {
        "href": "/articles/layering-insole/",
        "title": "インソールの重ね使いはアリ？2枚重ねのリスクと正しい代替案"
      },
      {
        "href": "/articles/pregnancy-insole/",
        "title": "妊娠中にインソールは使える？使用前に知っておきたい注意点"
      },
      {
        "href": "/articles/senior-60s-insole/",
        "title": "60代からのインソールの選び方｜歩行の安定と毎日の外出をサポート"
      },
      {
        "href": "/articles/slip-on-insole/",
        "title": "スリッポンに合うインソールの選び方｜かかと脱げと前滑りを抑える"
      },
      {
        "href": "/articles/socks-compatibility-insole/",
        "title": "インソールと靴下の相性ガイド｜5本指ソックス・厚手・ストッキング別の注意点"
      },
      {
        "href": "/articles/stop-using-insole/",
        "title": "インソールをやめたらどうなる？依存の不安と正しいやめ方"
      },
      {
        "href": "/articles/varus-little-toe-insole/",
        "title": "内反小趾に向くインソールの選び方｜小指の付け根の痛みと変形対策"
      },
      {
        "href": "/articles/wide-shoes-insole/",
        "title": "幅広・3Eの靴のインソールの選び方｜開張足・甲高幅広の足に"
      }
    ]
  }
];
