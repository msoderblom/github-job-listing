import styled from "styled-components";

export const Container = styled.li`
  border: black solid 1px;
  padding: 5px;
  cursor: pointer;
`;
export const Description = styled.div`
  max-height: 200px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    /* display: block; */
    width: 5px;
    /* height: 5px; */
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 5px;

    &:hover {
      background: gray;
    }
  }
  &::-webkit-scrollbar-track {
    /* background-color: rgba(255, 255, 255, 0.7); */
    border-radius: 10%;
    background-color: lightgray;
  }
`;
