import styled from "styled-components";
import FooterImage from "../../Images/bg.jpg";

export const TextFooter = styled.p`
  padding-top: 16px;
  font-size: 16px;
  color: white;
`;

export const StyledFooter = styled.footer`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  margin-top: auto;
  background: url(${FooterImage});
`;
