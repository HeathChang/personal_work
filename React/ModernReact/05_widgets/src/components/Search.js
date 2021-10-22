import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  useEffect(() => {console.log("ansdasd");}); //end useEffect
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
