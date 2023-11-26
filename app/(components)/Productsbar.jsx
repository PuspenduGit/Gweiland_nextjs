"use client";
import React from "react";

import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import MenuIcon from "@mui/icons-material/Menu";

import "./Menubar.css";

const Productsbar = () => {
  return (
    <div className="float-left px-2">
      <ul className="inline-flex">
        <li>
          <MenuIcon />
        </li>
        <li>
          <a href="#">
            brand
            <KeyboardArrowDownSharpIcon size="small" />
          </a>
        </li>
        <li>
          <a href="#0">
            shop
            <KeyboardArrowDownSharpIcon size="small" />
          </a>
        </li>
        <li>
          <a href="#0">premium</a>
        </li>
        <li>
          <a href="#0">gift cards</a>
        </li>
      </ul>
    </div>
  );
};

export default Productsbar;
