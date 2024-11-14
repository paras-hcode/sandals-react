
import React from "react";

const FilterSection = ({
  selectedFilters,
  onFilterSelect,
  onUpdateResults,
  onReset,
}) => {
  const filterCategories = {
    guestProfile: ["Adults Only", "Families with Kids"],
    beachType: ["Cove Beach", "Long Stretch", "Offshore Island"],
    resortMood: [
      "More Tranquil",
      "More Intimate",
      "More Social",
      "More Expansive",
    ],
    watersports: [
      "Scuba on property",
      "Motorized Watersports", 
      "Glass Bottom Boat"
    ],
    activities: ["Golf", "Tennis", "Pickle Ball", "Bowling"],
    food: [
      "Jerk Shack",
      "British Pub",
      "Steakhouse", 
      "Sushi",
      "Teppanyaki",
      "French",
      "Italian",
      "Caribbean",
      "Indian"
    ]
  };

  return (
    
    // <div className="max-w-7xl mx-auto px-5">
    //   <div className="sticky top-0 z-10 py-4">
    //     <div className="flex justify-between items-start">
    //       <div>
    //         <h2 className="text-3xl font-sandals-slab text-sandals-blue mb-2">
    //           Build Your Dream Vacation
    //         </h2>
    //         <h3 className="text-lg font-sandals-sans text-sandals-text">
    //           Select your guest profile and up to three additional preferences,
    //           then press the submit preferences button to explore your recommended
    //           resort options.
    //         </h3>
    //         <div className="tag-breadcrumb"></div>
    //       </div>

    //       <div className="flex gap-3 mt-6">
    //         <button 
    //           className="px-4 py-2 bg-sandals-blue text-white rounded-xl font-sandals-sans text-lg hover:bg-white hover:text-sandals-text hover:border-sandals-text border-2 border-transparent transition-colors duration-200"
    //           onClick={onUpdateResults}
    //         >
    //           Submit Preferences
    //         </button>
    //         <button 
    //           className="px-4 py-2 bg-gray-600 text-white rounded-xl font-sandals-sans text-lg hover:bg-white hover:text-sandals-text hover:border-sandals-text border-2 border-transparent transition-colors duration-200"
    //           onClick={onReset}
    //         >
    //           Reset Filters
    //         </button>
    //       </div>
    //     </div>
    //   </div>
 <div className="max-w-7xl mx-auto px-5">
      <div className="sticky top-0 z-10 py-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-[#0055A5] text-4xl font-sandals-slab mb-2">
              Build Your Dream Vacation
            </h2>
            <h3 className="text-[#0055A5] text-base font-sandals-sans">
              Select your guest profile and up to three additional preferences, then press
              the submit preferences button to explore your recommended resort options.
            </h3>
            <div className="tag-breadcrumb"></div>
          </div>

          <div className="flex gap-3">
            <button 
              className="px-6 py-2 bg-white text-[#0055A5] rounded-full font-sandals-sans text-sm border border-[#0055A5] hover:bg-[#0055A5] hover:text-white transition-colors duration-200"
              onClick={onUpdateResults}
            >
              Submit Preferences
            </button>
            <button 
              className="px-6 py-2 bg-white text-[#0055A5] rounded-full font-sandals-sans text-sm border border-[#0055A5] hover:bg-[#0055A5] hover:text-white transition-colors duration-200"
              onClick={onReset}
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>
      {Object.entries(filterCategories).map(([category, filters]) => (
        <div
          key={category}
          className={`flex items-center border-b border-sandals-blue py-4 ${
            category === "guestProfile" ? "pb-2" : ""
          }`}
        >
          <h3 className="w-48 mr-5 text-sandals-blue font-sandals-sans text-base">
            {category.replace(/([A-Z])/g, " $1").trim()}
            {category === "guestProfile" && (
              <span className="text-red-500"> * Required</span>
            )}
          </h3>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
             <div
  key={filter}
  className={`px-4 py-2 rounded-full cursor-pointer border-2 transition-colors duration-200 text-sm font-sandals-sans
    ${selectedFilters[category]?.includes(filter)
      ? "bg-blue-500 text-white border-blue-500"
      : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
    }`}
  onClick={() => onFilterSelect(filter, category)}
>
  <h3 className="text-sm font-sandals-sans">{filter}</h3>
</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterSection;