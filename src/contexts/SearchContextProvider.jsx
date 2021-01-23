import React, { createContext, useState } from "react";

export const SearchContext = createContext({});

const SearchContextProvider = ({ children }) => {
  const [prevSearches, setPrevSearches] = useState([]);
  const [searchData, setSearchData] = useState(null);
  return (
    <SearchContext.Provider
      value={{ prevSearches, setPrevSearches, searchData, setSearchData }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
