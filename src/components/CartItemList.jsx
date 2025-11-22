import React from "react";

const CartItemList = () => {
  return (
    <div className="bg-white rounded-lg w-full lg:py-0">
      <div>
        <ul>
          <li className="flex flex-col justify-between items-center gap-4 py-2">
            <div className="flex justify-between w-full py-4 text-sm leading-[18.52px]">
              <div className="space-y-2">
                <p className="text-rose-900 font-semibold">
                  Vanilla Bean Crème Brûlée
                </p>
                <p className="text-rose-400 font-semibold">
                  <span className=" text-red font-semibold pr-4">1x</span>
                  <span className="">@ $7.00</span>
                  <span className=" pl-2 font-extrabold">$7.00</span>
                </p>
              </div>
              <button>
                <img
                  alt="remove button Icon"
                  loading="lazy"
                  width="17.5"
                  height="17.5"
                  decoding="async"
                  data-nimg={1}
                  className="rounded-full border-2 border-rose-400 px-1 py-1 hover:border-rose-900 hover:text-rose-900"
                  src="/assets/images/icon-remove-item.svg"
                  style={{
                    color: "transparent",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </button>
            </div>
            <hr className="text-rose-100 w-full " />
          </li>
        </ul>
        <div className="flex justify-between w-full py-4 text-sm leading-[18.52px]">
          <div className="flex justify-between items-center gap-4 w-full">
            <p className=" font-semibold text-rose-500 leading-4">Order Total</p>
            <p className="text-2xl text-rose-900 font-black">$7.00</p>
          </div>
        </div>
        <div className=" flex justify-between items-center bg-rose-50 rounded-lg px-4 py-4 mb-4 md:justify-center md:gap-2 ">
          <img
            alt="image cart icon"
            loading="lazy"
            width={20}
            height={20}
            decoding="async"
            data-nimg={1}
            className="w-5 h-auto"
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
    </div>
  );
};

export default CartItemList;
