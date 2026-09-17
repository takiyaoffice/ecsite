import { Link } from 'react-router-dom'
import { BagIcon, InstagramIcon } from './icons'

const BRAND_NAME = 'ブランド名'
const INSTAGRAM_URL = 'https://www.instagram.com/'

export function Footer({ showCart = false }: { showCart?: boolean }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1440px] px-6 pt-10 pb-8 sm:px-10 lg:px-[76px]">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <Link
            to="/"
            className="text-base tracking-[0.15em] text-ink md:text-lg"
          >
            {BRAND_NAME}
          </Link>
          <div className="flex items-center gap-8">
            <Link
              to="/products"
              className="text-xs tracking-[0.15em] text-ink"
            >
              PRODUCTS
            </Link>
            <div className="flex items-center gap-5">
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
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-sub">
          © {BRAND_NAME} All rights reserved.
        </p>
      </div>
    </footer>
  )
}
