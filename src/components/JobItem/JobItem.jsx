import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./styled";

const JobItem = ({ job }) => {
  const history = useHistory();

  const handleOnClick = () => {
    history.push(`/jobs/${job.id}`);
  };

  return (
    <S.Container onClick={handleOnClick}>
      <strong>{job.type}</strong>
      <h2>{job.title}</h2>
      <img src={job.company_logo} alt={job.company} height="50px" />
      <a href={job.company_url}>{job.company}</a>
      <S.Description dangerouslySetInnerHTML={{ __html: job.description }} />
    </S.Container>
  );
};

export default JobItem;
