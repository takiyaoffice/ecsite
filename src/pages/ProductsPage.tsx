import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ProductGrid } from '../components/ProductGrid'
import { SectionHeading } from '../components/SectionHeading'
import { products } from '../data/products'

export function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-[1440px] px-6 pt-14 pb-20 sm:px-10 md:pt-16 lg:px-[76px]">
          <SectionHeading>PRODUCTS</SectionHeading>
          <ProductGrid products={products} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
