import React, { useState, useEffect } from "react";
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState("");


  //useEffect의 params 의미
  // []: Run at initial render (eg: [])
  // ..nothing: Run after every re-render (eg:  )
  // [data]: Run after every re-render if data has changed since last re-render && if two params: || 로 둘중 하나(eg: [term])
  useEffect(() => {
    console.log("useEffect occurred");
    //1. ways to use async (1/3): recommended
    // const search = async () => {
    //   await axios.get('asdasd')
    // }

    //2. ways to use async (2/3): define function & invoke it
    // (async () => {
    //   await axios.get('asdasd')
    // })();

    //3. ways to use async (3/3): promises
    // axios.get('asdasd').then((response)=>{
    //   console.log(response.data);
    // })

    axios.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        list: 'search',
        origin: '*',
        format: 'json',
        srsearch: term
      }
    })
      .then((response) => {
        console.log(response.data);
      })

  }, []);

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
