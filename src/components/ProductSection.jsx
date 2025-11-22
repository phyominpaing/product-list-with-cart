import React from "react";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  return (
    <section>
      <div className="mb-9">
        <h1 className=" font-redhat font-bold text-4xl text-rose-900">Desserts</h1>
      </div>
      <div className="">
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductSection;
