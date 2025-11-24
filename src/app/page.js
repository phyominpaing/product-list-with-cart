import CartSection from "@/components/CartSection";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-rose-50 py-6 md:py-10 lg:py-16 px-8  md:px-10 lg:px-16 xl:px-20 2xl:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-6">
          <div className="lg:col-span-2">
            <ProductSection />
          </div>
          <aside className="lg:col-span-1">
            <CartSection />
          </aside>
        </div>
      </div>
    </main>
  );
}
