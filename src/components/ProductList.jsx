"use client";

import React from "react";
import ProductCard from "./ProductCard";
import useProductStore from "@/store/useProductStore";

const ProductList = () => {
  const { products } = useProductStore();

  return (
    <div className="grid grid-cols-3  gap-y-8 gap-x-6 ">
      {products.map((product , index) => (
          <ProductCard key={index} product={product}/>
      ))}
    </div>
  );
};

export default ProductList;
