import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  width: 230px;
  height: 30vh;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border: 1px solid #6668;
  position: relative;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;

  margin: 15px;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 65%;
  }
`;

export const CardImage = styled.img`
  width: 40px;
  margin-left: 25px;
  margin-top: 10px;
`;

export const CardTitle = styled.h2`
  font-size: 1.2rem;
  max-width: 200px;
  margin-top: 15px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;

  margin: 15px 30px;
  gap: 11px;
`;

export const CardDescription = styled.p`
  color: #666;

  font-size: 1.2rem;
  max-width: 150px;
`;

export const Title = styled.h1`
  margin: 20px;

  @media (max-width: 768px) {
    margin-top: 70px;
    margin-left: 30px;
  }
`;
