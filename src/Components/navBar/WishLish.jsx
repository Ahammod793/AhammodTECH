import React from 'react'
import { useLoaderData, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getWishList } from '../localStorageHundle/WishListHundle.js'
import Wish from './Wish.jsx'


export default function WishLish() {
  const AllProducts = useLoaderData()
  console.log(AllProducts.length)
  const [WishList,setWishList] = useState([]);
    useEffect(() => {
      const WishLishProducts = getWishList();
      const WishListProdInLS = AllProducts.filter(Product => WishLishProducts.includes(Product.product_id));
      setWishList(WishListProdInLS);
  }, [AllProducts]);
  return (
    <div className='mx-[7%] pt-8'>
        <h1 className='font-bold text-[24px] text-start text-[#0B0B0B]'>WishList</h1>
        <div>
        <div className='flex flex-col p-8'>{
          WishList.map((product,index) => <Wish key={index} product={product}></Wish>)
        }</div>
        </div>
    </div>
  )
}
