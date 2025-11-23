"use client";
import useCartStore from "@/store/useCartStore";
import Image from "next/image";
import React from "react";

const OrderConfirmModal = ({ setIsModalOpen }) => {
  const { items, clearCart } = useCartStore();

  const handleCloseModal = () => {
    setIsModalOpen(false);
    clearCart();
  };

  const total = items.reduce((pv, cv) => pv + cv.price * cv.quantity, 0);

  return (
    <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="flex flex-col w-[520px] h-auto justify-between items-center mt-auto bg-white rounded-t-2xl p-6 md:mt-15 md:rounded-xl">
        <div className="flex flex-col w-full justify-center items-start gap-4 p-4">
          <Image
            alt="checkmark"
            loading="lazy"
            width={48}
            height={48}
            decoding="async"
            data-nimg={1}
            src="/assets/images/icon-order-confirmed.svg"
            style={{ color: "transparent" }}
          />
          <h2 className="text-rose-900 text-4xl font-bold">Order Confirmed</h2>
          <p className="text-base text-rose-500 font-normal">
            we hope you enjoy your food.
          </p>
        </div>
        <div className=" bg-rose-50 px-4 py-2 mb-6 rounded-lg w-full">
          <div className="max-h-64 overflow-y-auto scrollbar-custom">
            <ul className="list-none">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col justify-between items-center"
                >
                  <div className="flex justify-between w-full py-5 text-sm">
                    <div className="flex justify-between items-center gap-4">
                      <Image
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-lg"
                        src={item.image.thumbnail || "/placeholder.svg"}
                        style={{ color: "transparent" }}
                      />
                      <div className="text-sm flex flex-col gap-1">
                        <p className="text-rose-900 font-semibold">
                          {item.name}
                        </p>
                        <p className="text-rose-400 font-semibold">
                          <span className="item-quantity text-red font-semibold pr-4">
                            {item.quantity}x
                          </span>
                          @ ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <span className=" pr-2 flex items-center text-base text-rose-900 font-semibold">
                      ${(item.quantity * item.price).toFixed(2)}
                    </span>
                  </div>
                  <hr className="text-rose-100 w-full" />
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between w-full py-4 text-sm leading-[18.52px]">
            <div className="flex justify-between items-center gap-4 w-full">
              <p className="font-semibold text-rose-500 leading-4">
                Order Total
              </p>
              <p className="text-3xl text-rose-900 font-black">
                ${total.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={handleCloseModal}
          className="button  cursor-pointer mt-auto w-full flex justify-center items-center px-2 py-4 text-base font-semibold text-white bg-red duration-200 hover:bg-rose-800  rounded-full mb-2"
        >
          <span>Start New Order</span>
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmModal;
