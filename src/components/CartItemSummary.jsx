import useCartStore from "@/store/useCartStore";
import Image from "next/image";
import React from "react";

const CartItemSummary = () => {
  const { items } = useCartStore();

  const total = items.reduce((pv, cv) => pv + cv.price * cv.quantity, 0);

  return (
    <>
      {items.length > 0 && (
        <div>
          <div className="flex justify-between w-full py-4 text-sm leading-[18.52px]">
            <div className="flex justify-between items-center gap-4 w-full">
              <p className=" font-semibold text-rose-500 leading-4">
                Order Total
              </p>
              <p className="text-2xl text-rose-900 font-black">
                ${total.toFixed(2)}
              </p>
            </div>
          </div>
          <div className=" flex justify-between items-center bg-rose-50 rounded-lg px-4 py-4 mb-4 md:justify-center md:gap-2 ">
            <Image
              alt="image cart icon"
              loading="lazy"
              width={20}
              height={20}
              className="w-auto h-auto"
              src="/assets/images/icon-carbon-neutral.svg"
              style={{ color: "transparent" }}
            />
            <p className="text-sm text-rose-900 font-normal">
              This is a <span className="font-semibold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>
          <button className="button w-full py-4 text-base font-semibold text-white bg-red rounded-full duration-200 hover:bg-rose-800 ">
            Confirm Order
          </button>
        </div>
      )}
    </>
  );
};

export default CartItemSummary;
