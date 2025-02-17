import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #f7f7f7;

  @media (max-width: 768px) {
    height: 350px;
  }
`;

export const Banner = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url("https://www.itau.com.br/media/dam/m/2063adab94b88789/original/Seguro_VIagem_1280x540_IA.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  min-height: 100vh;
  color: white;
  padding: 5vw;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 50vh;
    padding: 20px;
    margin: 0;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  max-width: 40%;
  margin-left: 30px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-left: 10px;
  }
`;

export const Description = styled.p`
  font-size: 1.7rem;
  margin-top: 13px;
  margin-left: 30px;
  max-width: 45%;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-left: 10px;
  }
`;

export const CardSession = styled.div``;
