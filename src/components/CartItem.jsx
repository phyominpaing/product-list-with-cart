import React from "react";
import Image from "next/image";
import CartItemSummary from "./CartItemSummary";
import useCartStore from "@/store/useCartStore";

const CartItem = ({ item: { name, price, quantity } }) => {
  const { removeFromCart } = useCartStore();

  const handleRemoveItem = () => {
    removeFromCart(name);
  };

  return (
    <div>
      <ul>
        <li className="flex flex-col justify-between items-center gap-2 py-2">
          <div className="flex justify-between w-full py-2 text-sm leading-5">
            <div className="space-y-2">
              <p className="text-rose-900 font-semibold">{name}</p>
              <p className="text-rose-400 font-semibold">
                <span className=" text-red font-semibold pr-4">
                  {quantity}x
                </span>
                <span className="">@ ${price.toFixed(2)}</span>
                <span className=" pl-2 font-bold">
                  ${(quantity * price).toFixed(2)}
                </span>
              </p>
            </div>
            <button>
              <Image
                src="/assets/images/icon-remove-item.svg"
                alt="remove button Icon"
                width={22}
                height={22}
                onClick={handleRemoveItem}
                className="rounded-full  cursor-pointer border-2 w-auto h-auto border-rose-400 px-1 py-1 hover:border-rose-900 hover:text-rose-900"
              />
            </button>
          </div>
          <hr className="text-rose-100 w-full" />
        </li>
      </ul>
    </div>
  );
};

export default CartItem;
