import { Box } from "@mui/material";
import React, {useRef } from "react";


const Search = ({ term, searchKeyword }) => {
  // handle searchBar
  const inputEl = useRef("");
  const getSearchTern = () => {
    searchKeyword(inputEl.current.value);
  };
  return (
    <div>
      <Box
        component="div"
        sx={{ display: "flex", justifyContent: "center", my: 12 }}
      >
        <input
          ref={inputEl}
          type="text"
          placeholder="Search..."
          value={term}
          onChange={getSearchTern}
          style={{padding:12 , border: "1px solid blue"}}
        />
      </Box>
    </div>
  );
};

export default Search;
