import CartSection from "@/components/CartSection";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen font-redhat bg-rose-50 py-8 md:py-10 lg:py-20 px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-6">
          <section className="lg:col-span-2">
            <ProductSection />
          </section>
          <aside className="lg:col-span-1">
            <CartSection />
          </aside>
        </div>
      </div>
    </main>
  );
}
