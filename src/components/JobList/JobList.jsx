import React from "react";
import JobItem from "../JobItem";
import * as S from "./styled";

const JobList = ({ searchResults }) => {
  return (
    <S.Container>
      {searchResults.length !== 0 ? (
        <>
          <h2>Search results</h2>
          <S.List>
            {searchResults.map((job) => (
              <JobItem key={job.id} job={job} />
            ))}
          </S.List>
        </>
      ) : (
        <p>No jobs found</p>
      )}
    </S.Container>
  );
};

export default JobList;
