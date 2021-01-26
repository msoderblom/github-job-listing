import React, { useContext } from "react";
import * as S from "./styled";
import JobList from "../../components/JobList";
import { SearchContext } from "../../contexts/SearchContextProvider";
import SearchForm from "../../components/SearchForm";

const HomePage = () => {
  const { searchData } = useContext(SearchContext);

  return (
    <S.Container>
      <SearchForm />
      {searchData && <JobList searchResults={searchData.results} />}
    </S.Container>
  );
};

export default HomePage;
