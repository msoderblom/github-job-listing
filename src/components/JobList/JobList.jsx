import React from "react";
import { useHistory } from "react-router-dom";
import JobItem from "../JobItem";
import * as S from "./styled";

const JobList = ({ searchResults }) => {
  const history = useHistory();

  // const handleOnClick = () => {
  //   history.push(`/jobs/${job.id}`);
  // };
  return (
    <S.Container>
      {searchResults.length !== 0 ? (
        <>
          <h2>Search results</h2>
          <S.List>
            {searchResults.map((job) => (
              <li key={job.id} onClick={() => history.push(`/jobs/${job.id}`)}>
                <JobItem job={job} />
              </li>
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
