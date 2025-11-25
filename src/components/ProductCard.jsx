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
        {/* Mobile Image */}
        <Image
          src={image.mobile}
          alt={name}
          width={250}
          height={230}
          className="w-full h-auto object-cover rounded-lg md:hidden"
        />

        {/* Tablet Image */}
        <Image
          src={image.tablet}
          alt={name}
          width={400}
          height={350}
          className="w-full h-auto object-cover rounded-lg hidden md:block lg:hidden"
        />

        {/* Desktop Image  */}
        <Image
          src={image.desktop}
          alt={name}
          width={500}
          height={400}
          className="w-full h-auto object-cover rounded-lg hidden lg:block"
        />

        {isExistedItem ? (
          <button className="relative rounded-3xl border-2 border-rose-400 px-10 py-3 md:px-7 md:py-2 lg:px-6 lg:py-1.5 xl:px-7 xl:py-2   bg-red flex justify-between items-center gap-8 md:gap-8 lg:gap-6 xl:gap-7 cursor-pointer left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all hover:border-red hover:text-red duration-200 animate-scale-in">
            <div
              onClick={handleDecreaseQuantity}
              className="font-bold rounded-full border-white border-2 p-1.5 md:px-1 md:py-1 transition-transform"
            >
              <Image
                src="/assets/images/icon-decrement-quantity.svg"
                alt="add button Icon"
                width={14}
                height={14}
                className="w-2 h-2 md:w-2.5 md:h-2.5 items-center"
              />
            </div>
            <span className="font-semibold text-white text-sm md:text-base">
              {quantity}
            </span>
            <div
              onClick={handleIncreaseQuantity}
              className="font-bold rounded-full border-white border-2 p-1.5 md:px-1 md:py-1 transition-transform"
            >
              <Image
                src="/assets/images/icon-increment-quantity.svg"
                alt="add button Icon"
                width={14}
                height={14}
                className="w-2 h-2 md:w-2.5 md:h-2.5 items-center"
              />
            </div>
          </button>
        ) : (
          <button
            onClick={handleAddItem}
            className="relative rounded-3xl border-2 border-rose-400 px-12 py-3 md:px-6 md:py-2 lg:px-4 lg:py-2 xl:px-6 bg-white flex justify-between items-center gap-4 md:gap-4 lg:gap-3 xl:gap-4 cursor-pointer left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all hover:border-red hover:text-red duration-200 hover:scale-105 animate-scale-in"
          >
            <Image
              src="/assets/images/icon-add-to-cart.svg"
              alt="image cart icon"
              width={16}
              height={16}
              className="w-6 h-6 md:w-5 md:h-auto lg:w-4 lg:h-auto"
            />
            <span className="font-semibold w-auto h-auto text-rose-900 text-base lg:text-sm xl:text-base">
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
