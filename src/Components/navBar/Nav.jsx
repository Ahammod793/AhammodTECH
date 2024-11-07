import React, { useEffect, useState } from "react";
import { createBrowserRouter, Link, useLocation } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { getWishList } from "../localStorageHundle/WishListHundle.js";
import { NavLink } from "react-router-dom";
import Product_details from "../home/MainContainer/Procudt-container/Product_details.jsx";
import { getLsProduct } from "../localStorageHundle/ProductHundleFormLS.js";
import Root from "../Root.jsx";
import CartsContainer from "./CartsContainer.jsx";

export default function Nav() {
  const location = useLocation();
  const [wishedListItems, setWishedListItems] = useState();
  const [CartsProcudts, setCartsProducts] = useState();

  useEffect(() => {
    const WishListItems = getWishList().length;
    setWishedListItems(WishListItems);
    const CartsProcudts = getLsProduct().length;
    setCartsProducts(CartsProcudts);
  }, []);

  return (
    <div
      className={`${
        location.pathname === "/"
          ? "bg-[#9538E2] text-white rounded-t-[32px]"
          : ""
      } navbar justify-between pt-6 px-[7%]`}
    >
      <div className="navbar-start">
        <Link to="/" className="font-bold text-xl">
          Ahammod TECH
        </Link>
      </div>
      <div className="navbar-center flex items-center gap-10">
        <NavLink to="/">Home</NavLink>
        <NavLink
          to={"/statistics"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "Pactive" : ""
          }
        >
          Statistics
        </NavLink>
        <NavLink
          to={"dashboard"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "Pactive" : ""
          }
        >
          DashBord
        </NavLink>
      </div>
      <div className="navbar-end gap-6">
        <Link to={"dashboard"}>
          <div className="indicator">
            <AiOutlineShoppingCart></AiOutlineShoppingCart>
            <span className="badge badge-xs indicator-item">
              {CartsProcudts}
            </span>
          </div>
        </Link>
        <Link to={"dashboard/wishedlist"}>
          <div className="indicator">
            <IoIosHeartEmpty></IoIosHeartEmpty>
            <span className="badge badge-xs  indicator-item">
              {wishedListItems}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
