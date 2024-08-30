import styled from "styled-components";
import banner from "../../assets/banner.png";

export const MainBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 50px;
  box-sizing: border-box;
  /* background-image: url(${banner});
  background-repeat: no-repeat; */
`;

export const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  text-decoration: underline;
  text-underline-offset: 7px;
  text-decoration-thickness: 2px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
