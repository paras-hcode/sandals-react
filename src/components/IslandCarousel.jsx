

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const IslandCarousel = ({ onIslandSelect }) => {
  const islands = [
    { name: "Antigua", image: "assets/images/splash/antigua.webp" },
    { name: "Barbados", image: "assets/images/splash/barbados.jpg" },
    { name: "Bahamas", image: "assets/images/splash/bahamas.webp" },
    { name: "Curaçao", image: "assets/images/splash/curacao.webp" },
    { name: "Grenada", image: "assets/images/splash/grenada.jpeg" },
    { name: "Jamaica", image: "assets/images/splash/jamaica.webp" },
    { name: "Saint Lucia", image: "assets/images/splash/saintlucia.webp" },
    { name: "Saint Vincent", image: "assets/images/splash/Vincent.jpg" },
    { name: "Turks and Caicos", image: "assets/images/splash/Turks.webp" },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 overflow-hidden">
      <h2 className="text-[#0066FF] text-3xl font-normal mb-6">
        Choose Your Island
      </h2>
  
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={16}
        slidesPerView={3.5}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 2.2,
            spaceBetween: 16
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 16
          }
        }}
        className="pb-10"
      >
        {islands.map((island) => (
          <SwiperSlide key={island.name}>
            <div
              className="w-full h-[220px] relative rounded-lg overflow-hidden cursor-pointer group"
              data-island={island.name.toLowerCase().replace(/\s+/g, "-")}
              onClick={() => onIslandSelect(island.name)}
            >
              <img 
                src={island.image} 
                alt={island.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              {/* Island name */}
              <div className="absolute bottom-4 left-4 text-white text-2xl font-bold">
                {island.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IslandCarousel;