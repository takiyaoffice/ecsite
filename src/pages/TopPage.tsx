import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ProductGrid } from '../components/ProductGrid'
import { SectionHeading } from '../components/SectionHeading'
import { pickupProducts } from '../data/products'
import { assetPath } from '../lib/asset-path'

export function TopPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header showCart />
      <main className="flex-1">
        <div className="h-[380px] w-full sm:h-[460px] md:h-[560px] lg:h-[620px]">
          <img
            src={assetPath('hero.svg')}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 md:py-28 lg:px-[76px]">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-xs tracking-[0.25em] text-sub">CONCEPT</p>
              <h2 className="mt-6 text-2xl leading-relaxed text-ink md:text-[28px]">
                普段の生活に、
                <br />
                ちょっとゆとりを。
              </h2>
              <p className="mt-6 max-w-md text-sm leading-[1.9] text-sub">
                忙しい毎日の中で、ふと深呼吸できるような、自分らしく、心地よく過ごすためのアイテムをお届けします。
              </p>
            </div>
            <div className="aspect-[6/5] w-full overflow-hidden bg-blush">
              <img
                src={assetPath('concept.svg')}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 pb-20 sm:px-10 lg:px-[76px]">
          <SectionHeading>PRODUCTS</SectionHeading>
          <ProductGrid products={pickupProducts} />
        </section>
      </main>
      <Footer showCart />
    </div>
  )
}
