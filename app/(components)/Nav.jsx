"use client";
import React from "react";
import Image from "next/image";

import Productsbar from "./Productsbar";
import Socialbar from "./Socialbar";

const Nav = () => {
  return (
    <nav className="flex justify-center items-center bg-nav px-4 py-1 z-50 sticky top-0 left-0">
      <div className="flex justify-between items-center w-full p-2">
        <div className="float-left">
          <Productsbar />
        </div>
        <div className="flex items-center justify-center relative md:left-[4%] lg:left-[2%]">
          <Image
            src="/assets/brand_name.png"
            alt="Bravaland"
            width={125}
            height={125}
          />
        </div>
        <Socialbar />
      </div>
    </nav>
  );
};

export default Nav;
