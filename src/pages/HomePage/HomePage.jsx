import React, { useState } from "react";
import * as S from "./styled";

const HomePage = () => {
  const [search, setSearch] = useState("");

  const fetchJobs = (searchTerm) => {
    const url = `/positions.json?description=${searchTerm}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    setSearch("");

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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </S.Container>
  );
};

export default HomePage;
