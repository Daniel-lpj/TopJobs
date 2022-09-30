import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderImage from "../../Images/banner.jpg";

export const StyledHeader = styled.div`
  width: 100%;
  height: 40rem;
  background: url(${HeaderImage});
`;

export const Text = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0.5em 0 0 0.5em;
  font-size: 20px;
  color: white;
`;

export const Menu = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledLink = styled(Link)`
  padding-right: 1.5em;
  font-size: 24px;
  font-weight: 600;
  color: white;

  @media (max-width: 500px) {
    padding: 0.2em;
  }

  :hover {
    text-decoration: none;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 4.5em;
  font-weight: 600;
  color: white;
  padding-top: 2em;
`;
