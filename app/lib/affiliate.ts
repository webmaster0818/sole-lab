// アフィリエイトリンク（felmat）。MediaXAI提供・2026年6月設置。
export type ProductKey = "pitsole" | "runway" | "slimup";

export const AFFILIATE: Record<ProductKey, { name: string; url: string }> = {
  pitsole: {
    name: "Pitsole（ピットソール）",
    url: "https://t.felmat.net/fmcl?ak=C10353W.1.U147003U.A1357469",
  },
  runway: {
    name: "ランウェイキュアソール",
    url: "https://t.felmat.net/fmcl?ak=U115500.1.F159254L.A1357469",
  },
  slimup: {
    name: "スリムアップインソール",
    url: "https://t.felmat.net/fmcl?ak=B98155.1.5141621J.A1357469",
  },
};
