import React from "react";
import JobItem from "../JobItem";
import * as S from "./styled";

const JobList = ({ searchResults }) => {
  return (
    <S.Container>
      <p>JobList</p>
      <ul style={{ listStyle: "none" }}>
        {searchResults.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </ul>
    </S.Container>
  );
};

export default JobList;
