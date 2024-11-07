import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import Banner from "../../Banner";
import { addToLs } from "../../../localStorageHundle/ProductHundleFormLS";
import { addToWishList } from "../../../localStorageHundle/WishListHundle";
import { toast } from "react-toastify";
export default function Product_details() {
  const { product_id } = useParams();
  const data = useLoaderData();
  const product = data.find((product) => product.product_id == product_id);
  const {
    product_title,
    price,
    description,
    Specification,
    product_image,
    rating,
  } = product;

  let RatingArray = [];
  for (let i = 1; i <= 5; i++) {
    RatingArray.push(i);
  }
  const AddToCart=productId=>{
    addToLs(productId)
    return;
  }
  const AddToWishList=(productid)=>{
    addToWishList(productid)
  }
  return (
    <div>
      <Banner
        title={"Product Details"}
        subtitle={`Explore the latest gadgets that will take your experience
         to the next level. From smart devices to the coolest accessories, we have it all!`}
      ></Banner>
      <div className="relative -top-[220px] bg-white border-2 rounded-xl mx-auto w-[80%]">
        <div className="hero-content flex p-6 gap-8 flex-col md:flex-row">
          <img
            src={product_image}
            className="rounded-2xl w-[35%] h-[570px]"
          />
          <div className="w-[65%]">
            <h1 className="text-5xl font-bold">{product_title}</h1>
            <h3 className="font-semibold my-4 text-xl text-stone-950">
              Price: {price}
            </h3>
            <button className="border-2 border-green-600 p-2 rounded-3xl font-medium text-[14px] text-[#309C08]">
              In Stock
            </button>
            <p className="py-6 font-normal my-4 text-[18px] text-[#09080F99]/60">
              {description}
            </p>
            <div>
              <h2 className="font-bold mb-3 text-[18px] text-[#09080F]">
                Specification:
              </h2>
              <ol type="1">
                {Specification.map((sp, index) => (
                  <li
                    key={sp}
                    className="font-normal text-[18px] text-[#09080F99]/60"
                  >
                    {index + 1}. {sp}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h1 className="font-bold text-[18px] my-4 text-[#09080F]">
                Rating <span className="w-4 h-4 bg-black">'''''</span>
              </h1>
              <div className="rating flex gap-5 items-center">
                <div className="inline-flex gap-2">
                  {RatingArray.map((rating) => {
                    return (
                      <span
                        key={rating}
                        className={`mask mask-star-2 p-2 ${
                          rating <= 4
                            ? "text-[#F9C004] bg-[#F9C004]"
                            : " text-slate-400 bg-slate-400"
                        }`}
                      >
                        {rating}
                      </span>
                    );
                  })}
                </div>
                <h3 className="py-2 px-4 bg-[#09080F0D]/10 rounded-3xl">
                  {rating}
                </h3>
              </div>
            </div>
            <div className="flex flex-row mt-5 items-center gap-4">
              <button className="btn btn-primary rounded-3xl bg-[#9538E2] text-white" onClick={()=>AddToCart(product_id)}>
                Add To Cart
              </button><br />
              <button className="btn border-1 border-slate-400 rounded-full " onClick={()=>{AddToWishList(product_id)}}>
                <IoIosHeartEmpty className="h-8 w-8"></IoIosHeartEmpty>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
