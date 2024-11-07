// src/Components/CartContainer.jsx
import '../../../src/App.css';
import Cart from './Cart.jsx';
import Purches from '../DashBoard/Purches.jsx';
import React, { useEffect, useState } from 'react';
import { getLsProduct } from '../localStorageHundle/ProductHundleFormLS.js';
import { useLoaderData } from 'react-router-dom';

export default function CartContainer() {
  const AllProducts = useLoaderData();
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  

  useEffect(() => {
    const CartsProducts = getLsProduct();
    const ProductListInLocalStore = AllProducts.filter(Product =>
      CartsProducts.includes(Product.product_id)
    );
    setProducts(ProductListInLocalStore);
  }, []);

  const prices = products.map(product => product.price)
  const totalPrice = Math.floor(prices.reduce((a, b) => a + b, 0));

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const sortHundler = () => {
    const sortedProducts= [...products].sort((a,b) =>(b.price - a.price))
    setProducts(sortedProducts);
  }

  return (
    <div className="mx-[7%] mt-8">
      <Purches isModalOpen={isOpen} closeModal={close} totalPrice={totalPrice}/>
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-bold text-[24px] text-[#0B0B0B]">Cart</h1>
        <div className="flex flex-row gap-4 items-center justify-between ">
          <h1 className="font-bold text-[24px] text-[#0B0B0B]">
            Total Cost : <span className="total">{totalPrice}</span>
          </h1>
          <button className="btn text-[#9538E2] font-semibold action text-[18px] p-4 border border-[#9538E2] rounded-full" onClick={()=>sortHundler()}>
            Sort by Price
          </button>
          <button
            className="btn text-[18px] font-medium text-white action bg-[#9538E2] p-4 rounded-full$" disabled={totalPrice<1}
            onClick={open}
          >
            Purchase
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-col p-8">
          {products.map((product, index) => (
            <Cart key={index} product={product}/>
          ))}
        </div>
      </div>
    </div>
  );
}
