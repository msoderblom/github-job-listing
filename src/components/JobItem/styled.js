import styled, { css } from "styled-components";

const overlay = css`
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      to top,
      rgb(252, 251, 252) 5%,
      rgba(252, 251, 252, 0) 100%
    );
  }
`;

const titleDots = css`
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Container = styled.div`
  padding: 20px;
  background-color: #fcfbfc;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 0;
`;

export const Header = styled.div`
  border-bottom: 1px solid black;
  div {
    display: flex;
    justify-content: space-between;
  }
  strong {
    color: #9fb8aa;
  }
`;

export const Location = styled.span`
  display: flex;
  align-items: center;
`;
export const Title = styled.h2`
  margin: 0;
  color: #18553c;

  ${({ details }) => !details && titleDots}
`;

export const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Description = styled.div`
  ${({ details }) => !details && "max-height: 200px;"}
  color: black;
  overflow-y: hidden;
  position: relative;
  ${({ details }) => !details && overlay}

  p, li {
    color: rgb(14 44 31);
    font-weight: 300;
  }
`;
export const HowToApply = styled.div`
  background-color: #18553c;
  padding: 5px 10px;
  color: #fcfbfc;
  border-radius: 6px;
  a {
    color: #fcfbfc;
  }
`;

export const Footer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 10px;

  span {
    margin-right: 5px;
    font-weight: 500;
    color: rgb(24 85 59);
  }

  a {
    color: black;
    font-weight: 300;
  }
`;
