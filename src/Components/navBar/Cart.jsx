import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { removeFromLS } from '../localStorageHundle/ProductHundleFormLS';

export default function Cart({product}) {
    const {product_image, product_title,description,price, product_id } = product;

    const remove = (product_id) => {
        removeFromLS(product_id)
    }
  return (
    <div className='p-1 flex flex-col'>
        <div className='flex flex-row bg-white p-8 justify-between rounded-3xl border border-gray-200'>
            <div className='flex flex-row justify-around gap-6'>
                <img src={product_image} alt="Image" className='w-48 h-32 rounded-2xl'/>
                <div className='flex flex-col items-start gap-2'>
                    <h1 className='text-[24px] font-semibold text-[#09080F]'>{product_title}</h1>
                    <p className='text-[18px] font-normal text-[#09080F99]'>{description}</p>
                    <h4 className='text-xl font-semibold text-[#09080FCC]'>Price $: {price}</h4>
                </div>
            </div>
            <div>
                <RxCross1 onClick={() => remove(product_id)}></RxCross1></div>
        </div>
    </div>
  )
}
