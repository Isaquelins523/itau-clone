import { Divider, HeaderContainer, Input, InputContainer, Nav } from "./styles";
import ItauLogo from "../../assets/ITAU_LOGO_HEX_48X48.webp";

import { Button } from "../buttonHome/styles.js";

const Header = () => (
  <HeaderContainer>
    <img src={ItauLogo}></img>

    <Nav>
      <a href="/">Para você</a>
      <a href="#">Para empresas</a>
      <a href="#">Ajuda</a>
      <a href="#">Busca</a>
    </Nav>

    <InputContainer>
      <Input type="number" placeholder="Agência" />
      <Divider />
      <Input type="number" placeholder="Conta" />
    </InputContainer>

    <Button>Abra sua Conta </Button>
  </HeaderContainer>
);

export default Header;
