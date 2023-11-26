import React from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

import Nftcard from "./Nftcard";

import carousels from "../../public/Items.json";

const Nftslideshow = () => {
  const { items } = carousels;
  const { nfts } = items;

  return (
    <div className="py-24 pointer-events-none">
      <Flickity
        className="carousel"
        options={{
          loop: true,
          infinite: true,
          draggable: false,
          prevNextButtons: false,
          pauseAutoPlayOnHover: false,
          autoPlay: 2000,
          pageDots: false,
          wrapAround: true,
          freeScroll: true,
          contain: true,
          cellAlign: "left",
          groupCells: 1,
          adaptiveHeight: true,
        }}>
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
