"use client";
import React from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

import Nftcard from "./Nftcard";

import carousels from "../../public/Items.json";

const Nftslideshow = () => {
  const { items } = carousels;
  const { nfts } = items;

  const flickityOptions = {
    initialIndex: 0,
    loop: true,
    infinite: true,
    draggable: false,
    prevNextButtons: false,
    pauseAutoPlayOnHover: false,
    autoPlay: 1500,
    pageDots: false,
    wrapAround: true,
    freeScroll: true,
    contain: true,
    cellAlign: "left",
    selectedAttraction: 0.01,
    friction: 1.2,
    groupCells: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="py-24 pointer-events-none">
      <Flickity className="carousel" options={{ ...flickityOptions }}>
        {nfts.map((item) => (
          <div className="carousel-cell px-8" key={item.id}>
            <Nftcard
              nftimage={item.imageUrl}
              nfttitle={item.title}
              nfcolor={item.bgcolor}
            />
          </div>
        ))}
      </Flickity>
    </div>
  );
};

export default Nftslideshow;
