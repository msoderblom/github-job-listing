import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-inline: 5px;
`;

export const Form = styled.form`
  max-width: 700px;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 5px;

  label {
    color: #fcfbfc;
  }
`;

export const SearchInput = styled.input`
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 6px;
  border: none;
  text-align: center;

  &:focus {
    outline: none;
  }
`;

export const SubmitBtn = styled.button`
  padding: 5px;
  background-color: rgb(145 184 170);
  border: none;
  color: #fcfbfc;
  text-transform: uppercase;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #9eb8aa;
  }
`;
