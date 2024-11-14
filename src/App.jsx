// App.jsx
import { useState, useEffect } from "react";
import IslandCarousel from "./components/IslandCarousel";
import Hero from "./components/Hero";
import ResortFinder from "./components/ResortFinder";
import ResortGallery from "./components/ResortGallery";

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImages = [
    "assets/Carousel/Home-page-carousel_1.jpg",
    "assets/Carousel/Home-page-carousel_2.jpg",
    "assets/Carousel/Home-page-carousel_3.jpg",
    "assets/Carousel/Home-page-carousel_4.jpg",
    "assets/Carousel/Home-page-carousel_5.jpg",
    "assets/Carousel/Home-page-carousel_6.jpg",
    "assets/Carousel/Home-page-carousel_1.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [resortData, setResortData] = useState([]);

  return (
    <div className="bg-[#f8f0db]">
      <Hero />
      <section className="w-full h-screen relative">
        <div className="relative w-full h-full">
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`
                  absolute top-0 left-0 w-full h-full object-cover
                  transition-opacity duration-500 ease-in-out
                  ${currentSlide === index ? "opacity-100" : "opacity-0"}
                  ${index === 0 ? "relative" : "absolute"}
                `}
            />
          ))}
        </div>
      </section>
      <ResortGallery resorts={resortData} />
      <iframe
        className="map"
        src="https://my.atlist.com/map/75cf0a96-2b41-48d5-91cf-e3127778fbe8?share=true"
        allow="geolocation 'self' https://my.atlist.com"
        margin-bottom="-5px"
        width="100%"
        height="750px"
        loading="lazy"
        scrolling="no"
        id="atlist-embed"
      ></iframe>

      <IslandCarousel />
      <ResortFinder setResortData={setResortData} />
    </div>
  );
};

export default App;
