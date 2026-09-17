import { Link } from 'react-router-dom'
import { BagIcon, InstagramIcon } from './icons'

const BRAND_NAME = 'ブランド名'
const INSTAGRAM_URL = 'https://www.instagram.com/'

export function Header({ showCart = false }: { showCart?: boolean }) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 sm:px-10 md:h-[76px] lg:px-[76px]">
        <Link
          to="/"
          className="text-[15px] tracking-[0.15em] text-ink md:text-base"
        >
          {BRAND_NAME}
        </Link>
        <nav className="flex items-center gap-6 md:gap-8">
          <Link
            to="/products"
            className="text-xs tracking-[0.15em] text-ink"
          >
            PRODUCTS
          </Link>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-ink"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          {showCart && (
            <Link to="/cart" aria-label="カート" className="text-ink">
              <BagIcon className="h-5 w-5" />
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
