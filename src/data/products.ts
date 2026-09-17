import { assetPath } from '../lib/asset-path'

/**
 * 商品データ。後続作業で CMS のデータ取得に置き換えることを想定し、
 * コンポーネント側はこの Product 型のみに依存させる。
 */
export interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
  detailUrl: string
  baseUrl: string
}

export const products: Product[] = [
  {
    id: 'pouch-s',
    name: 'Pouch S',
    price: 3520,
    image: assetPath('products/pouch-s.svg'),
    description: 'やわらかな肌触りのリネン混ポーチ。普段使いにちょうどよいサイズ感です。',
    detailUrl: '/products/pouch-s',
    baseUrl: 'https://base.example.com/items/pouch-s',
  },
  {
    id: 'aroma-candle',
    name: 'Aroma Candle',
    price: 4180,
    image: assetPath('products/aroma-candle.svg'),
    description: '植物由来のワックスを使用した、やさしい香りのアロマキャンドル。',
    detailUrl: '/products/aroma-candle',
    baseUrl: 'https://base.example.com/items/aroma-candle',
  },
  {
    id: 'linen-kitchen-cloth',
    name: 'Linen Kitchen Cloth',
    price: 1650,
    image: assetPath('products/linen-kitchen-cloth.svg'),
    description: '吸水性に優れたリネン素材のキッチンクロス。使うほどに風合いが増します。',
    detailUrl: '/products/linen-kitchen-cloth',
    baseUrl: 'https://base.example.com/items/linen-kitchen-cloth',
  },
  {
    id: 'room-mist',
    name: 'Room Mist',
    price: 2640,
    image: assetPath('products/room-mist.svg'),
    description: '空間をやさしく彩るルームミスト。玄関やベッドサイドに。',
    detailUrl: '/products/room-mist',
    baseUrl: 'https://base.example.com/items/room-mist',
  },
  {
    id: 'flower-vase',
    name: 'フラワーベース',
    price: 2860,
    image: assetPath('products/flower-vase.svg'),
    description: '吹きガラスのやわらかなフォルムが特徴の一輪挿し。',
    detailUrl: '/products/flower-vase',
    baseUrl: 'https://base.example.com/items/flower-vase',
  },
  {
    id: 'wood-tray',
    name: 'ウッドトレイ',
    price: 2750,
    image: assetPath('products/wood-tray.svg'),
    description: '天然木を使用した、食卓を優しく彩るトレイ。',
    detailUrl: '/products/wood-tray',
    baseUrl: 'https://base.example.com/items/wood-tray',
  },
  {
    id: 'aroma-oil',
    name: 'アロマオイル',
    price: 2970,
    image: assetPath('products/aroma-oil.svg'),
    description: '天然精油を使用した、深呼吸したくなる香りのアロマオイル。',
    detailUrl: '/products/aroma-oil',
    baseUrl: 'https://base.example.com/items/aroma-oil',
  },
  {
    id: 'round-basket',
    name: 'ラウンドバスケット',
    price: 4950,
    image: assetPath('products/round-basket.svg'),
    description: '手編みのラウンドバスケット。収納にも見せる収納にも。',
    detailUrl: '/products/round-basket',
    baseUrl: 'https://base.example.com/items/round-basket',
  },
]

/** TOP ページのピックアップ商品（先頭4件） */
export const pickupProducts = products.slice(0, 4)
