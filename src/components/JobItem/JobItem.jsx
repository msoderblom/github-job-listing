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
      <S.Header>
        <strong>{job.type}</strong>
        <a href={job.company_url}>
          <S.CompanyInfo>
            <img src={job.company_logo} alt={job.company} height="25px" />{" "}
          </S.CompanyInfo>
        </a>
      </S.Header>
      <h2 style={{ margin: 0 }}>{job.title}</h2>
      <S.Description dangerouslySetInnerHTML={{ __html: job.description }} />
      <S.Footer>
        <p>{job.company}</p>
        <a href={job.company_url}>{job.company_url}</a>
      </S.Footer>
    </S.Container>
  );
};

export default JobItem;
