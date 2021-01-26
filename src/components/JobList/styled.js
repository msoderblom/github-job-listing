import styled from "styled-components";

export const Container = styled.div`
  padding-inline: 10px;
  min-width: 0;

  & > h2 {
    color: #fcfbfc;
    text-align: center;
  }
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 20px;

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  // Extra large devices (large desktops, 1200px and up)
  /*  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  } */
  li {
    display: flex;
    align-items: stretch;
    cursor: pointer;
  }
`;
