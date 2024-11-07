import { toast } from "react-toastify";
import { getLsProduct } from "./ProductHundleFormLS";
export const getWishList = () => {
    const Products = JSON.parse(localStorage.getItem('wishList')) || []; 
    return Products;
}

export const SetWishList = (Products) => {
    const wishList = localStorage.setItem('wishList', JSON.stringify(Products));
    return wishList;
}

export const addToWishList = (prodID) => {
    const wishList = getWishList();
    const LsProduct = getLsProduct()
    if(wishList.includes(prodID)){
        toast.error('Already wishList! Reload now');
        return;
    }
    
   else{
    toast.success("Successfully Added! Reaload Now")
    return SetWishList([...wishList, prodID]);
   }
}

export const removefromWishList = (prodId) => {
        const wishList = getWishList();
        const newWishList = wishList.filter(id => id != prodId)
        toast.success("Successfully Removed! Reaload Now")
        return SetWishList(...[newWishList])
}