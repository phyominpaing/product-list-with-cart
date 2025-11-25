"use client";
import useCartStore from "@/store/useCartStore";
import React from "react";
import CartItem from "./CartItem";
import CartItemSummary from "./CartItemSummary";

const CartItemList = () => {
  const { items } = useCartStore();

  return (
    <div className="bg-white rounded-lg w-full lg:py-0">
      {items.length === 0 && (
        <div className="flex flex-col gap-2 items-center justify-center">
          <img
            alt="image icon of cake"
            width={128}
            height={128}
            decoding="async"
            style={{ color: "transparent" }}
            src="/assets/images/illustration-empty-cart.svg"
          />
          <p className="text-md leading-4 text-rose-500 font-semibold">
            Your added items will appear here
          </p>
        </div>
      )}
      {items.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}

      <CartItemSummary />
    </div>
  );
};

export default CartItemList;
