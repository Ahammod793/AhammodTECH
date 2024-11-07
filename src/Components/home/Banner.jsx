import React from "react";
import { useLocation } from "react-router-dom";
export default function Banner({button1, button2 ,title, subtitle}) {
    const locHome = useLocation();
    
    // if(locHome.pathname.includes('product_details/P'))
    //   {console.log(locHome.pathname)
    //   }
  return (
    <div className={`hero bg-[#9538E2] pt-12 pb-[260px] ${locHome.pathname === '/' ? 
      "rounded-b-[32px] pb-[260px]" : locHome.pathname.includes('product_details/') ? 'pb-56' : 'pb-4' } 'mx-[7%]'`}>

      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-[56px] text-white font-bold mx-auto">
          {title}</h1>
          <p className="py-6 mx-auto w-[800px] font-normal text-[16px] text-white">{subtitle}</p>
          <div className="flex flex-row gap-4 justify-center items-center">{button1} {button2}</div>
        </div>
      </div>
    </div>
  );

}