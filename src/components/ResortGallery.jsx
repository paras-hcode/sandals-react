
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ResortGallery = ({ resorts }) => {
  const [activeTab, setActiveTab] = useState('Overview');
  const formatDashes = (text) => {
    return text.replace(/\s+/g, '-');
  };

  return (
     <div className="mx-auto bg-[#FBF8F4] relative overflow-hidden gallery">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="mySwiper"
        slidesPerView={1.1}
        centeredSlides={true}
        spaceBetween={30}
        style={{
          padding: '0 100px'
        }}

      >
        {resorts.map((resort, index) => (
          <SwiperSlide key={index} className="w-full transition-opacity duration-300 swiper-slide-active:opacity-100">
            <div className="flex gap-8 p-8">
              {/* Left Section */}
              <div className="w-[400px] bg-[#1D2B7B] text-white rounded-3xl p-6 overflow-hidden">
                {/* Resort Image */}
                <div className="rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={`assets/images/Sandals_Images/${formatDashes(resort.ResortTitle)}/Carousel_ResortHero_Slider/${formatDashes(resort.ResortTitle)}_Carousel_ResortHero_Slider_1.jpg`}
                    alt={resort.ResortTitle}
                    className="w-full h-[200px] object-cover"
                  />
                </div>

                {/* Resort Info */}
                <div className="mb-8">
                  <h2 className="text-2xl font-serif mb-1">{resort.ResortTitle}</h2>
                  <h4 className="text-lg opacity-80 mb-6">{resort.City}, {resort.Island}</h4>
                  <ul className="space-y-3 text-sm opacity-90">
                    {resort.ResortDescription.split('\n').map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For Section */}
                <div className="mb-8">
                  <h2 className="text-xl font-serif mb-4">Ideal For</h2>
                  <div className="flex gap-3">
                    {[
                      { label: 'Beach lovers', icon: '🏖️' },
                      { label: 'Food lovers', icon: '👑' },
                      { label: 'Nearby airport', icon: '✈️' }
                    ].map(item => (
                      <div key={item.label} className="bg-white/10 rounded-2xl p-4 flex-1 flex flex-col items-center">
                        <span className="text-2xl mb-2">{item.icon}</span>
                        <span className="text-xs text-center">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book Now Button */}
                <button className="w-full bg-[#0066FF] text-white py-4 rounded-full hover:bg-blue-600 transition-colors">
                  Book Now
                </button>
              </div>

              {/* Right Section */}
              <div className="flex-1">
                {/* Tabs */}
                <div className="flex justify-between items-center mb-8">
                  <div className="flex gap-8">
                    {['Overview', 'Beaches', 'Pools', 'Dining-Bars', 'Map'].map(tab => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`relative pb-2 ${
                          activeTab === tab 
                            ? 'text-black font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black' 
                            : 'text-gray-500'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {/* clicking on back to map will scroll to the map section */}
                   <button 
  onClick={() => {
    const mapElement = document.querySelector('.map');
    if (mapElement) {
      mapElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }}
  className="px-5 py-2 rounded-full border border-gray-300 text-gray-700 text-sm"
>
                      Back To Map
                    </button>
                    <button className="px-5 py-2 rounded-full bg-[#0066FF] text-white text-sm">
                      Book Now
                    </button>
                  </div>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {activeTab === 'Map' ? (
                    <div className="col-span-2">
                      <img
                        src={`assets/images/Sandals_Images/Resort-Maps/${formatDashes(resort.ResortTitle).replace(/-/g, '_')}_Resort-Map.jpg`}
                        alt={`${resort.ResortTitle} Map`}
                        className="w-full h-[600px] object-contain rounded-3xl"
                      />
                    </div>
                  ) : (
                    Array.from({ length: 4 }).map((_, index) => (
                      <div key={index} className="rounded-3xl overflow-hidden">
                        <img
                          src={`assets/images/Sandals_Images/${formatDashes(resort.ResortTitle)}/${activeTab}/${formatDashes(resort.ResortTitle)}_${activeTab}_${index + 1}.jpg`}
                          alt={`${resort.ResortTitle} ${activeTab}`}
                          className="w-full h-[300px] object-cover"
                          onError={(e) => e.currentTarget.parentElement.style.display = 'none'}
                        />
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ResortGallery;