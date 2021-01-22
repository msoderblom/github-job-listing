import React from "react";
import JobItem from "../JobItem";
import * as S from "./styled";

const JobList = ({ searchResults }) => {
  return (
    <S.Container>
      <p>JobList</p>
      <S.List>
        {searchResults.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </S.List>
    </S.Container>
  );
};

export default JobList;
