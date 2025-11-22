import React from "react";
import CartItemList from "./CartItemList";

const CartSection = () => {
  return (
    <section className="bg-white rounded-lg py-4 px-6 w-full lg:py-8 flex flex-col gap-2">
      <h2 className="text-2xl font-bold text-red">
        Your Cart ({/* */}0{/* */})
      </h2>
      <div className="flex flex-col items-center justify-between gap-4 mt-6">
        <div className="flex flex-col items-center justify-center">
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

        <CartItemList />
      </div>
    </section>
  );
};

export default CartSection;
