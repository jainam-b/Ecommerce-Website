import React from "react";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* IMAGE START */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src="product-1.webp" alt="" />
      </div>
      {/* IMAGE END */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* PRODUCT TITLE */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            Jordan Retro 1 High OG
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            Mens Shoes
          </div>

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP : $19850
          </div>
        </div>
        {/* PRODUCT SUBTITLE */}
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          Mens Shoes
        </div>{" "}
        {/* PRODUCT SUBTITLE */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select className="hover:text-black" name="" id="">
                <option value="1">UK 6</option>
                <option value="2">UK 7</option>
                <option value="3">UK 8</option>
                <option value="4">UK 9</option>
                <option value="5">UK 10</option>
              </select>
            </div>
            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select className="hover:text-black" name="" id="">
                <option value="1"> 6</option>
                <option value="2"> 7</option>
                <option value="3"> 8</option>
                <option value="4"> 9</option>
                <option value="5"> 10</option>
              </select>
            </div>
          </div>
          <RiDeleteBin6Line
            // onClick={() => dispatch(removeFromCart({ id: data.id }))}
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
          />
        </div>
      </div>
    </div> //last div
  );
};

export default CartItem;
