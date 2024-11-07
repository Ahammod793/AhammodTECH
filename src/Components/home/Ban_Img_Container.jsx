import React from "react";

export default function Ban_utility_Container({ HeroIMG }) {
  return (
    <div className="relative -top-[220px]  border-2 rounded-xl mx-auto w-[1060px] h-[560px] p-6">
      <img
        src={HeroIMG}
        alt=""
        className="h-full w-full object-cover rounded-xl"
      />
    </div>
  );
}
