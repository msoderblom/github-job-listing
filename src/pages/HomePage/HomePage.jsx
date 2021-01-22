import React, { useContext, useState } from "react";
import * as S from "./styled";
import JobList from "../../components/JobList";
import { PrevSearchesContext } from "../../contexts/PrevSearchesContextProvider";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const { prevSearches, setPrevSearches } = useContext(PrevSearchesContext);

  const fetchJobs = (search) => {
    const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${search}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSearchResults(data);
        setPrevSearches((prev) => [
          ...prev,
          { searchTerm: search, results: data },
        ]);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);

    const search = searchTerm.replaceAll(" ", "+");
    console.log(search);
    const prevSearchResults = prevSearches.find(
      (searchObj) => searchObj.searchTerm === search
    );

    if (prevSearchResults) {
      console.log("prev search found");

      console.log(prevSearchResults);
      setSearchResults(prevSearchResults.results);
    } else {
      console.log("no prev search");
      fetchJobs(search);
    }
  };

  return (
    <S.Container>
      <p>HomePage</p>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {searchResults && <JobList searchResults={searchResults} />}
      {searchResults && searchResults.length === 0 && <p>No jobs found</p>}
    </S.Container>
  );
};

export default HomePage;
