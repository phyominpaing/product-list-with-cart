"use client";
import React from "react";
import CartItemList from "./CartItemList";
import useCartStore from "@/store/useCartStore";
import CartItemSummary from "./CartItemSummary";

const CartSection = () => {
  const { items } = useCartStore();

  const totalQuantity = items.reduce((pv, cv) => pv + cv.quantity, 0);

  return (
    <section className="bg-white rounded-lg w-full py-4 px-4 sm:px-6 lg:py-8 flex flex-col gap-4 md:mt-8 lg:mt-0">
      <h2 className="text-2xl font-bold text-red">
        Your Cart ({totalQuantity})
      </h2>
      <div className="flex flex-col items-center justify-between gap-4 mt-6">
        <CartItemList />
      </div>
    </section>
  );
};

export default CartSection;
