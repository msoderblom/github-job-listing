import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../contexts/SearchContextProvider";
import * as S from "./styled";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    prevSearches,
    setPrevSearches,
    setSearchData,
    searchData,
  } = useContext(SearchContext);

  useEffect(() => {
    if (searchData) {
      const term = searchData.searchTerm.replaceAll("+", " ");

      setSearchTerm(term);
    }
    // eslint-disable-next-line
  }, []);

  const fetchJobs = (search) => {
    const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${search}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSearchData({ searchTerm: search, results: data });
        setPrevSearches((prev) => [
          ...prev,
          { searchTerm: search, results: data },
        ]);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.length === 0) {
      setSearchData(null);
      return;
    }

    console.log(searchTerm);

    const search = searchTerm.replaceAll(" ", "+");
    console.log(search);
    const prevSearchResults = prevSearches.find(
      (searchObj) => searchObj.searchTerm === search
    );

    if (prevSearchResults) {
      console.log("prev search found");

      console.log(prevSearchResults);
      setSearchData(prevSearchResults);
    } else {
      console.log("no prev search");
      fetchJobs(search);
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <label htmlFor="search">Search for a Job</label>
        <S.SearchInput
          type="search"
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <S.SubmitBtn type="submit">Search</S.SubmitBtn>
      </S.Form>
    </S.Container>
  );
};

export default SearchForm;
