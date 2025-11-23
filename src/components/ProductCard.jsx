"use client";

import React from "react";
import Image from "next/image";
import useCartStore from "@/store/useCartStore";

const ProductCard = ({ product: { image, category, name, price } }) => {
  const { items, addToCart, updateQuantity, removeFromCart } = useCartStore();

  const isExistedItem = items.find((item) => item.name === name);

  const quantity = isExistedItem ? isExistedItem.quantity : 0;

  const handleAddItem = () => {
    if (isExistedItem) {
      updateQuantity(isExistedItem.name, 1);
    } else {
      const newItem = {
        image,
        category,
        name,
        price,
        quantity: 1,
      };

      addToCart(newItem);
    }
  };

  const handleIncreaseQuantity = () => {
    updateQuantity(name, 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(name, -1);
    } else {
      removeFromCart(name);
    }
  };

  return (
    <div>
      <div>
        <Image
          src={image.desktop}
          alt="Waffle with Berries"
          width={250}
          height={230}
          className=" h-auto w-full object-cover rounded-lg overflow-hidden border-none"
        />

        {isExistedItem ? (
          <button className="relative  rounded-3xl border-2 border-rose-400  px-7 py-2  bg-red flex justify-between items-center gap-8 cursor-pointer left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all hover:border-red hover:text-red duration-200  animate-scale-in">
            <div
              onClick={handleDecreaseQuantity}
              className="font-bold rounded-full border-white border-2 px-1 py-2 transition-transform "
            >
              <Image
                src="/assets/images/icon-decrement-quantity.svg"
                alt="remove button Icon"
                width={10}
                height={10}
              />
            </div>
            <span className="font-semibold text-white">{quantity}</span>
            <div
              onClick={handleIncreaseQuantity}
              className="font-bold rounded-full border-white border-2 px-1 py-1 transition-transform"
            >
              <Image
                src="/assets/images/icon-increment-quantity.svg"
                alt="add button Icon"
                width={10}
                height={10}
              />
            </div>
          </button>
        ) : (
          <button
            onClick={handleAddItem}
            className="relative  rounded-3xl border-2 border-rose-400  px-6 py-2  bg-white flex justify-between items-center gap-4 cursor-pointer left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all hover:border-red hover:text-red duration-200 hover:scale-105 animate-scale-in"
          >
            <Image
              src="/assets/images/icon-add-to-cart.svg"
              alt="image cart icon"
              width={20}
              height={20}
              className="w-5 h-auto"
            />
            <span className="font-semibold w-auto h-auto text-rose-900">
              {" "}
              Add to Cart
            </span>
          </button>
        )}
      </div>

      <div className=" flex flex-col gap-2.5 ">
        <p className="text-rose-500 font-normal leading-4">{category}</p>
        <p className="font-semibold text-rose-900 leading-5 text-lg">{name}</p>
        <p className="font-semibold text-red leading-5 text-lg">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
