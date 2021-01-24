import React from "react";
import * as S from "./styled";

const JobItem = ({ job, details = false }) => {
  return (
    <S.Container>
      <S.Header>
        <div>
          <strong>{job.type}</strong>
          <a href={job.company_url}>
            <img src={job.company_logo} alt={job.company} height="25px" />{" "}
          </a>
        </div>
        <S.Title details={details}>{job.title}</S.Title>
      </S.Header>
      <S.Description
        dangerouslySetInnerHTML={{ __html: job.description }}
        details={details}
      />
      <S.Footer>
        <span>{job.company}</span>
        <a href={job.company_url}>{job.company_url}</a>
      </S.Footer>
    </S.Container>
  );
};

export default JobItem;
