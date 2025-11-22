import React from "react";
import ProductList from "./ProductList";

const ProductSection = () => {
  return (
    <section>
      <div className="mb-9">
        <h1 className=" font-redhat font-bold text-4xl text-rose-900">
          Desserts
        </h1>
      </div>
      <ProductList />
    </section>
  );
};

export default ProductSection;
