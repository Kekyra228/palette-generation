import styled from "styled-components";
import banner from "../../assets/banner.png";

export const MainBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 80px;
  box-sizing: border-box;
  /* background-image: url(${banner});
  background-repeat: no-repeat; */
`;

export const MainCont = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
