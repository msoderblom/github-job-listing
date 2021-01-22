import styled from "styled-components";

export const Container = styled.li`
  padding: 20px;
  cursor: pointer;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 10px;
`;
export const Header = styled.div`
  display: flex;
  /* flex-direction: column; */

  justify-content: space-between;
`;
export const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`;
export const Description = styled.div`
  max-height: 200px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    /* display: block; */
    width: 5px;
    height: 5px;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 5px;

    background: gray;
    &:hover {
      background: #565656;
    }
  }
  &::-webkit-scrollbar-track {
    /* background-color: rgba(255, 255, 255, 0.7); */
    border-radius: 10%;
    background-color: lightgray;
  }
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-right: 5px;
    font-weight: bold;
  }
`;
