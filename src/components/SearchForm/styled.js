import styled from "styled-components";

export const Container = styled.div``;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5px;

  label {
    color: #fcfbfc;
  }
`;
export const SearchInput = styled.input`
  padding: 5px;
  margin-bottom: 5px;
`;
export const SubmitBtn = styled.button`
  padding: 5px;
  background-color: rgb(145 184 170);
  border: none;
  color: #fcfbfc;
  text-transform: uppercase;
  border-radius: 5px;
`;
