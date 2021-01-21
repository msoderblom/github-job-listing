import React, { useEffect, useState } from "react";
import * as S from "./styled";

const JobDetailPage = (props) => {
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetchJob();
    // eslint-disable-next-line
  }, []);

  const fetchJob = () => {
    const id = props.match.params.id;
    console.log(id);
    const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setJob(data));
  };

  return (
    <S.Container>
      <p>JobDetailPage</p>
      {job && (
        <div>
          <strong>{job.type}</strong>
          <h2>{job.title}</h2>
          <img src={job.company_logo} alt={job.company} height="50px" />
          <a href={job.company_url}>{job.company}</a>
          <div dangerouslySetInnerHTML={{ __html: job.description }} />
        </div>
      )}
    </S.Container>
  );
};

export default JobDetailPage;
