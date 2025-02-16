import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #ff6200;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 70px;
    margin-right: 30px;
  }

  @media (max-width: 768px) {
    min-height: 50vh;
    padding: 0px;

    height: 100px;

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
  gap: 50px;

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
  margin-right: 32px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  padding: 10px;

  height: 100%;
  width: 323px;

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
  min-width: 50px;

  &:first-child {
    margin-right: 10px;
  }
`;

export const Divider = styled.div`
  height: 100%;
  width: 1px;
  background: gray;
  margin: 0 10px;
  align-self: stretch;
`;
