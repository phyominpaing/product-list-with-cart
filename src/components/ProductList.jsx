"use client";

import useProduct from "@/store/useProduct";
import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products } = useProduct();

  return (
    <div className="grid grid-cols-3  gap-y-8 gap-x-6 ">
      {products.map((product , index) => (
          <ProductCard key={index} product={product}/>
      ))}
    </div>
  );
};

export default ProductList;
