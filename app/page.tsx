"use client";
import React from "react";
import Image from "next/image";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import item from "../public/Items.json";

import Nftslideshow from "../app/(components)/Nftslideshow";

const Dashboard = () => {
  const { items } = item;
  const { carousels } = items;

  return (
    <div className="flex flex-col overflow-auto">
      <Flickity
        className="carousel"
        options={{
          cellAlign: "left",
          contain: true,
          wrapAround: true,
          autoPlay: 3000,
          pauseAutoPlayOnHover: false,
          prevNextButtons: true,
          pageDots: false,
          draggable: false,
        }}>
        {carousels.map((carousel) => (
          <div key={carousel.id} className="carousel-cell">
            <Image
              src={carousel.imageUrl}
              alt={carousel.alt}
              width={2000}
              height={200}
            />
          </div>
        ))}
      </Flickity>
      <Nftslideshow />
    </div>
  );
};

export default Dashboard;
