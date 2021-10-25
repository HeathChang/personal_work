import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  console.log('I run with Every Render');

  //useEffect의 params 의미
  // []: Run at initial render
  // ..nothing: Run after every re-render (+a)
  // [data]: Run after every re-render if data has changed since last re-render
  
  useEffect(() => {
    console.log("useEffect");
  },[]); 
  
  return (
    <div>
      <div>
        <div>
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
