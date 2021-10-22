import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  console.log('I run with Every Render');

  useEffect(() => {
    console.log("I run every render");
  },[]); //all of the second variable
  
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
