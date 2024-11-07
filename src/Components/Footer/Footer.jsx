import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-around text-base-content p-10 gap-7 px-[7%]">
      <div className="flex flex-col text-center items-center justify-center gap-3">
        <h1 className="font-bold text-3xl text-[#09080F]">Gadget Heaven</h1>
        <p className="font-medium text-[16px] text-[#09080F99]">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="flex flex-row items-center justify-between">
        <nav className="flex flex-col items-center gap-3">
          <h6 className="footer-title text-[#09080F] pb-1">Services</h6>
          <a className="link link-hover text-[#09080F99]">Product Support</a>
          <a className="link link-hover text-[#09080F99]">Order Tracking</a>
          <a className="link link-hover text-[#09080F99]">Shipping & Delivery</a>
          <a className="link link-hover text-[#09080F99]">Returns</a>
        </nav>
        <nav className="flex flex-col items-center gap-3">
          <h6 className="footer-title text-[#09080F] pb-1">Company</h6>
          <a className="link link-hover text-[#09080F99]">About us</a>
          <a className="link link-hover text-[#09080F99]">Careers</a>
          <a className="link link-hover text-[#09080F99]">Contact</a>
        </nav>
        <nav className="flex flex-col items-center gap-3">
          <h6 className="footer-title text-[#09080F] pb-1">Legal</h6>
          <a className="link link-hover text-[#09080F99]">Terms of use</a>
          <a className="link link-hover text-[#09080F99]">Privacy policy</a>
          <a className="link link-hover text-[#09080F99]">Cookie policy</a>
        </nav>
      </div>
    </footer>
  
  );
}
