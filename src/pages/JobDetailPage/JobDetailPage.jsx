import React, { useEffect, useState } from "react";
import * as S from "./styled";
import JobItem from "../../components/JobItem";

const JobDetailPage = (props) => {
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetchJob();
    // eslint-disable-next-line
  }, []);

  const fetchJob = () => {
    const id = props.match.params.id;

    const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?id=${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setJob(data));
  };

  return <S.Container>{job && <JobItem job={job} details />}</S.Container>;
};

export default JobDetailPage;
