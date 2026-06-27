import { KEIHYO_NOTE_TEXT } from "../lib/keihyo";

// CV箇所（ランキング・製品ページ・ダイエット記事）に統一配置する
// 景表法・薬機法配慮の効果表記ノート。文言は lib/keihyo.ts に一元化。
export default function KeihyoNote() {
  return (
    <div className="my-8 rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs leading-relaxed text-gray-600">
      <p className="mb-1 font-bold text-gray-700">効果・表現に関する注記</p>
      <p>{KEIHYO_NOTE_TEXT}</p>
    </div>
  );
}
