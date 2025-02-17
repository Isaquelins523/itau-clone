import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #ff6200;
  padding-left: 15px;
  padding-right: 0;
  display: flex;

  align-items: center;

  img {
    width: 50px;
    margin-right: 30px;
    margin-left: 90px;
  }

  @media (max-width: 768px) {
    min-height: 20vh;
    padding: 0px;

    justify-content: center;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 170px;
  a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    font-size: 1.5rem;

    &:hover {
      margin-bottom: 10px;
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 10px;
  border: none;
  margin-right: 22px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  padding: 10px;

  height: 100%;
  width: 15%;

  @media (max-width: 768px) {
    margin-left: 30px;
    display: none;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  background: transparent;
  padding: 5px;
  -moz-appearance: textfield;
  flex: 1;
  min-width: 30px;

  &:first-child {
    margin-right: 10px;
  }
`;

export const Divider = styled.div`
  height: 30px;
  width: 1px;
  background: gray;
  margin: 0 10px;
  align-self: stretch;
`;
