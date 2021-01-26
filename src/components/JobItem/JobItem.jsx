import React from "react";
import * as S from "./styled";
import { MdLocationOn } from "react-icons/md";

const JobItem = ({ job, details = false }) => {
  return (
    <S.Container details={details}>
      <S.Header>
        <div>
          <strong>{job.type}</strong>
          <a href={job.company_url}>
            <img src={job.company_logo} alt={job.company} height="25px" />{" "}
          </a>
        </div>
        <S.Title details={details}>{job.title}</S.Title>
        {details && (
          <S.Location>
            <MdLocationOn /> {job.location}
          </S.Location>
        )}
      </S.Header>
      <S.Description
        dangerouslySetInnerHTML={{ __html: job.description }}
        details={details}
      />
      {details && (
        <S.HowToApply
          dangerouslySetInnerHTML={{
            __html: `<h3>How To Apply</h3>${job.how_to_apply}`,
          }}
        />
      )}
      <S.Footer>
        <span>{job.company}</span>
        <a href={job.company_url}>{job.company_url}</a>
      </S.Footer>
    </S.Container>
  );
};

export default JobItem;
