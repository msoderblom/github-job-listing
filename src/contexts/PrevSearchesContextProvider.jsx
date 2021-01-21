import React, { createContext, useState } from "react";

export const PrevSearchesContext = createContext({});

const PrevSearchesContextProvider = ({ children }) => {
  const [prevSearches, setPrevSearches] = useState([]);
  return (
    <PrevSearchesContext.Provider value={{ prevSearches, setPrevSearches }}>
      {children}
    </PrevSearchesContext.Provider>
  );
};

export default PrevSearchesContextProvider;
