import React, { useState, useEffect } from 'react';
import FilterSection from "./FilterSection";
import { resortData } from "../resortData";

const ResortFinder = ({setResortData}) => {
  const [selectedFilters, setSelectedFilters] = useState({
    guestProfile: [],
    beachType: [],
    resortMood: [],
    watersports: [],
    activities: [],
    food: []
  });
  
  const [selectedResorts, setSelectedResorts] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false);
  const [filterCount, setFilterCount] = useState(0);

  console.log("selectedFilters", selectedFilters);
  console.log("selectedResorts", selectedResorts);
  console.log("showNoResults", showNoResults);
  console.log("filterCount", filterCount);
    

  const handleFilterSelect = (filter, category) => {
    if (filterCount > 4 && !selectedFilters[category].includes(filter)) {
      return; // Prevent selecting more than 4 filters
    }

    setSelectedFilters(prev => {
      const currentFilters = prev[category] || [];
      const isSelected = currentFilters.includes(filter);
      
      // Update filter count
      setFilterCount(count => isSelected ? count - 1 : count + 1);
      
      // Remove filter if already selected
      if (isSelected) {
        return {
          ...prev,
          [category]: currentFilters.filter(f => f !== filter)
        };
      }
      
      // Add filter if not selected
      return {
        ...prev,
        [category]: [...currentFilters, filter]
      };
    });
  };

  const handleUpdateResults = () => {
  // Get all selected resorts that match the filters
  const matchingResorts = resortData.filter(resort => {
    // Must match guest profile if selected
    if (selectedFilters.guestProfile.length > 0 && 
        !selectedFilters.guestProfile.some(profile => 
          resort.Tags.toLowerCase().includes(profile.toLowerCase().replace(/\s+/g, '-'))
        )) {
      return false;
    }

    // Check other filters
    const allSelectedFilters = Object.entries(selectedFilters)
      .filter(([category]) => category !== 'guestProfile') // Exclude guestProfile as it's already checked
      .flatMap(([_, filters]) => filters);

    // Count how many selected filters match the resort's tags
    const matchCount = allSelectedFilters.filter(filter => 
      resort.Tags.toLowerCase().includes(filter.toLowerCase().replace(/\s+/g, '-'))
    ).length;

    // Resort must match all selected filters
    return matchCount === allSelectedFilters.length;
  });

  setSelectedResorts(matchingResorts);
  setResortData(matchingResorts);
  setShowNoResults(matchingResorts.length === 0);

  // Scroll to results if there are matches
  if (matchingResorts.length > 0) {
    const galleryElement = document.querySelector('.gallery');
    if (galleryElement) {
      // Add a small delay to ensure state updates have completed
      setTimeout(() => {
        galleryElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }
};

  const handleReset = () => {
    setSelectedFilters({
      guestProfile: [],
      beachType: [],
      resortMood: [],
      watersports: [],
      activities: [],
      food: []
    });
    setFilterCount(0);
    setSelectedResorts([]);
    setShowNoResults(false);
  };

  return (
    <>
      <FilterSection
        selectedFilters={selectedFilters}
        onFilterSelect={handleFilterSelect}
        onUpdateResults={handleUpdateResults}
        onReset={handleReset}
        filterCount={filterCount}
      />
      {showNoResults && (
        <div className="no-results">
          <h2>
            Oops, we couldn't find a resort like this,{" "}
            <span className="refine" onClick={handleReset}>
              refine your search
            </span>{" "}
            and try again
          </h2>
        </div>
      )}
    </>
  );
};

export default ResortFinder;