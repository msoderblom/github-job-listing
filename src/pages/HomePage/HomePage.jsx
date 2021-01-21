import React, { useState } from "react";
import * as S from "./styled";
import JobList from "../../components/JobList";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const fetchJobs = (search) => {
    const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${search}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSearchResults(data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);

    const search = searchTerm.replaceAll(" ", "+");
    console.log(search);
    fetchJobs(search);
    setSearchTerm("");
    const searchTerm = search.replaceAll(" ", "+");
    console.log(searchTerm);
    fetchJobs(searchTerm);
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
