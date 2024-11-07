import { stringify } from "postcss";
import { SetWishList,getWishList } from "./WishListHundle";
import { toast } from "react-toastify";
export const getLsProduct = () => {
    const productsList = JSON.parse(localStorage.getItem('product')) || [];
    return productsList;
}

export const setLocalProduct = (Products) => {
    const setProduct = localStorage.setItem('product', JSON.stringify(Products))
    return setProduct;
}

export const addToLs = (prodID) =>{
    const LsProduct = getLsProduct();
    if(LsProduct.includes(prodID)){
        toast.error('Produtct Already Exist')
        return;
    }
    const newLsProducts = [...LsProduct, prodID]
    setLocalProduct(newLsProducts)

    // now we can add product from wishlist

    const wishList = getWishList();
    if(wishList.includes(prodID)){
        const newWishList = wishList.filter(id => id != prodID )
        SetWishList(newWishList)
    }
    toast.success('Successfully Added!')
    return newLsProducts;
} 

export const removeFromLS = (prodID) => {
    const LsProducts = getLsProduct();
    const newLsProducts = LsProducts.filter( id => id != prodID);
    toast.success("Successfully Removed! Reaload Now")
    return setLocalProduct([...newLsProducts])
}