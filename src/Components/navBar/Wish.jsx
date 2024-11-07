import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { addToLs } from "../localStorageHundle/ProductHundleFormLS";
import { removefromWishList } from "../localStorageHundle/WishListHundle";

export default function Wish({ product }) {
  const { product_image, product_title, description, price, product_id } = product;

//   const [wishList,setWishList] = useState([])
//   useEffect(()=>{

//   },[])

    const AddToCart = (product_id) =>{
        const AddToLs = addToLs(product_id)
    }
    const remove = (product_id) => {
        removefromWishList(product_id)
    }

  return (
    <div className="p-1 flex flex-col">
      <div className="flex flex-row bg-white p-8 justify-between rounded-3xl border border-gray-200">
        <div className="flex flex-row justify-around gap-6">
          <img
            src={product_image}
            alt="Image"
            className="w-48 h-32 rounded-2xl"
          />
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-[24px] font-semibold text-[#09080F]">
              {product_title}
            </h1>
            <p className="text-[18px] font-normal text-[#09080F99]">
              {description}
            </p>
            <h4 className="text-xl font-semibold text-[#09080FCC]">
              Price $: {price}
            </h4>
            <button
              className="py-4 px-6 rounded-[32px] text-center action text-white bg-[#9538E2] font-medium text-[18px]"
              onClick={() => AddToCart(product_id)}
            >
              Add to Card
            </button>
          </div>
        </div>
        <div>
          <RxCross1 onClick={() => remove(product_id)}></RxCross1>
        </div>
      </div>
    </div>
  );
}
