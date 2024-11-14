

// components/NoResults.jsx
import React from "react";

const NoResults = ({ onRefine }) => {
  return (
    <div className="no-results">
      <div className="no-results-message">
        <h2>
          Oops, we couldn't find a resort like this,{" "}
          <span className="refine" onClick={onRefine}>
            refine your search
          </span>{" "}
          and try again
        </h2>
      </div>
    </div>
  );
};

export default NoResults;
