import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="grid grid-cols-3  gap-y-8 gap-x-6 ">
      <div>
        <div>
          <Image
            src={"/assets/images/image-waffle-desktop.jpg"}
            alt="Waffle with Berries"
            width={250}
            height={230}
            className=" h-auto w-full object-cover rounded-lg overflow-hidden border-none"
          />

          <button className="relative button rounded-3xl border-2 border-rose-400  px-6 py-2  bg-white flex justify-between items-center gap-4 cursor-pointer left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all hover:border-red hover:text-red duration-200 hover:scale-105 animate-scale-in">
            <Image
              src="/assets/images/icon-add-to-cart.svg"
              alt="image cart icon"
              width={20}
              height={20}
              className="w-5 h-auto"
            />
            <span className="font-semibold text-rose-900"> Add to Cart</span>
          </button>
        </div>

        <div className=" flex flex-col gap-2.5 ">
          <p className="text-rose-500 font-normal leading-4">Waffle</p>
          <p className="font-semibold text-rose-900 leading-5 text-lg">
            Waffle with Berries
          </p>
          <p className="font-semibold text-red leading-5 text-lg">$6.50</p>
        </div>
      </div>

      <div>
        <div>
          <Image
            src={"/assets/images/image-waffle-desktop.jpg"}
            alt="Waffle with Berries"
            width={250}
            height={230}
            className=" h-auto w-full object-cover rounded-lg overflow-hidden border-none"
          />

          <button className="relative button rounded-3xl border-2 border-rose-400  px-6 py-2  bg-white flex justify-between items-center gap-4 cursor-pointer left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all hover:border-red hover:text-red hover:scale-105 animate-scale-in">
            <Image
              src="/assets/images/icon-add-to-cart.svg"
              alt="image cart icon"
              width={20}
              height={20}
              className="w-5 h-auto"
            />
            <span className="font-semibold text-rose-900"> Add to Cart</span>
          </button>
        </div>

        <div className=" flex flex-col gap-2.5 ">
          <p className="text-rose-500 font-normal leading-4">Waffle</p>
          <p className="font-semibold text-rose-900 leading-5 text-lg">
            Waffle with Berries
          </p>
          <p className="font-semibold text-red leading-5 text-lg">$6.50</p>
        </div>
      </div>

      <div>
        <div>
          <Image
            src={"/assets/images/image-waffle-desktop.jpg"}
            alt="Waffle with Berries"
            width={250}
            height={230}
            className=" h-auto w-full object-cover rounded-lg overflow-hidden border-none"
          />

          <button className="relative button rounded-3xl border-2 border-rose-400  px-6 py-2  bg-white flex justify-between items-center gap-4 cursor-pointer left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all hover:border-red hover:text-red hover:scale-105 animate-scale-in">
            <Image
              src="/assets/images/icon-add-to-cart.svg"
              alt="image cart icon"
              width={20}
              height={20}
              className="w-5 h-auto"
            />
            <span className="font-semibold text-rose-900"> Add to Cart</span>
          </button>
        </div>

        <div className=" flex flex-col gap-2.5 ">
          <p className="text-rose-500 font-normal leading-4">Waffle</p>
          <p className="font-semibold text-rose-900 leading-5 text-lg">
            Waffle with Berries
          </p>
          <p className="font-semibold text-red leading-5 text-lg">$6.50</p>
        </div>
      </div>

      <div>
        <div>
          <Image
            src={"/assets/images/image-waffle-desktop.jpg"}
            alt="Waffle with Berries"
            width={250}
            height={230}
            className=" h-auto w-full object-cover rounded-lg overflow-hidden border-none"
          />

          <button className="relative button rounded-3xl border-2 border-rose-400  px-6 py-2  bg-white flex justify-between items-center gap-4 cursor-pointer left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all hover:border-red hover:text-red hover:scale-105 animate-scale-in">
            <Image
              src="/assets/images/icon-add-to-cart.svg"
              alt="image cart icon"
              width={20}
              height={20}
              className="w-5 h-auto"
            />
            <span className="font-semibold text-rose-900"> Add to Cart</span>
          </button>
        </div>

        <div className=" flex flex-col gap-2.5 ">
          <p className="text-rose-500 font-normal leading-4">Waffle</p>
          <p className="font-semibold text-rose-900 leading-5 text-lg">
            Waffle with Berries
          </p>
          <p className="font-semibold text-red leading-5 text-lg">$6.50</p>
        </div>
      </div>

      <div>
        <div>
          <Image
            src={"/assets/images/image-waffle-desktop.jpg"}
            alt="Waffle with Berries"
            width={250}
            height={230}
            className=" h-auto w-full object-cover rounded-lg overflow-hidden border-none"
          />

          <button className="relative button rounded-3xl border-2 border-rose-400  px-6 py-2  bg-white flex justify-between items-center gap-4 cursor-pointer left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all hover:border-red hover:text-red hover:scale-105 animate-scale-in">
            <Image
              src="/assets/images/icon-add-to-cart.svg"
              alt="image cart icon"
              width={20}
              height={20}
              className="w-5 h-auto"
            />
            <span className="font-semibold text-rose-900"> Add to Cart</span>
          </button>
        </div>

        <div className=" flex flex-col gap-2.5 ">
          <p className="text-rose-500 font-normal leading-4">Waffle</p>
          <p className="font-semibold text-rose-900 leading-5 text-lg">
            Waffle with Berries
          </p>
          <p className="font-semibold text-red leading-5 text-lg">$6.50</p>
        </div>
      </div>

      <div>
        <div>
          <Image
            src={"/assets/images/image-waffle-desktop.jpg"}
            alt="Waffle with Berries"
            width={250}
            height={230}
            className=" h-auto w-full object-cover rounded-lg overflow-hidden border-none"
          />

          <button className="relative button rounded-3xl border-2 border-rose-400  px-6 py-2  bg-white flex justify-between items-center gap-4 cursor-pointer left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all hover:border-red hover:text-red hover:scale-105 animate-scale-in">
            <Image
              src="/assets/images/icon-add-to-cart.svg"
              alt="image cart icon"
              width={20}
              height={20}
              className="w-5 h-auto"
            />
            <span className="font-semibold text-rose-900"> Add to Cart</span>
          </button>
        </div>

        <div className=" flex flex-col gap-2.5 ">
          <p className="text-rose-500 font-normal leading-4">Waffle</p>
          <p className="font-semibold text-rose-900 leading-5 text-lg">
            Waffle with Berries
          </p>
          <p className="font-semibold text-red leading-5 text-lg">$6.50</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
