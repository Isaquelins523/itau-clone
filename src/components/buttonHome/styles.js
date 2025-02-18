import styled from "styled-components";

export const Button = styled.button`
  height: 51px;
  width: 185px;
  border-radius: 10px;
  margin: 30px;
  background-color: transparent;
  border: 2px solid #fff;
  cursor: pointer;

  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;

  &:hover {
    background: #fff;
    color: #ff6200;
  }

  @media (max-width: 768px) {
    margin-left: 5px;
  }
`;
