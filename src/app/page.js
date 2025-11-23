import CartSection from "@/components/CartSection";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  return (
    <main className="grid grid-cols-3 gap-6 min-h-screen w-full px-28 py-16  bg-rose-50">
      <div className="col-span-2">
        <ProductSection />
      </div>

      <div className="col-span-1">
        <CartSection />
      </div>
    </main>

    //  <main className="min-h-screen w-full bg-rose-100 py-8 px-4 sm:px-6 md:px-12 lg:px-28">
    //   <div className="max-w-7xl mx-auto">
    //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    //       <div className="lg:col-span-2">
    //         <ProductSection />
    //       </div>

    //       <aside className="lg:col-span-1">
    //         <CartSection />
    //       </aside>
    //     </div>
    //   </div>
    // </main>
  );
}
