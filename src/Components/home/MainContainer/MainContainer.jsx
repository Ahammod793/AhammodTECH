import React, { useState, useEffect } from "react";
import Categories from "../MainContainer/Category-conatainer/Categories";
import Cards from "../MainContainer/Procudt-container/Products";

export default function MainContainer() {
  const [allProducts, setAllProducts] = useState([]); 
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    fetch(`/allProduct.json`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data); 
        setProducts(data); 
      });
  }, []);

  const sortBYCategory = (category) => {
    if (category === "All") {
      setProducts(allProducts); 
    } 
    else if (category === "Laptops") {
      setProducts(allProducts.filter((product) => product.category == "Laptop"));
    } 
    else if (category === "Phones") {
      setProducts(allProducts.filter((product) => product.category.toLowerCase().includes("phone")));
    }
     else if (category === "Accessories") {
      setProducts(
        allProducts.filter((product) => product.category == "Accessories"));
    } 
    else if (category === "Smart Watches") {
      setProducts(allProducts.filter((product) => product.category == "Watch"));
    } 
    else if (category === "Mac Book") {
      setProducts(allProducts.filter((product) => product.category == "Mac"));
    } else if (category == "Iphone") {
      setProducts(allProducts.filter((product) => product.category == "iPhone"));
    }
  };

  return (
    <div className="flex flex-row mx-[7%] gap-4">
      <Categories sortBYCategory={sortBYCategory} />
      <Cards products={products}/>
    </div>
  );
}
