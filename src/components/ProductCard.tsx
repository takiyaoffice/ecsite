import { Link } from 'react-router-dom'
import type { Product } from '../data/products'

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link to={product.detailUrl} className="group block">
      <div className="aspect-[4/3] w-full overflow-hidden bg-sand">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <p className="mt-4 text-[15px] text-ink">{product.name}</p>
      <p className="mt-1 text-[15px] text-sub">
        ¥{product.price.toLocaleString('ja-JP')}
      </p>
    </Link>
  )
}
