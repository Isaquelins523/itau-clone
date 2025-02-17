import {
  Divider,
  HeaderContainer,
  IconImage,
  Input,
  InputContainer,
  Nav,
  ItauImage,
} from "./styles";
import ItauLogo from "../../assets/ITAU_LOGO_HEX_48X48.webp";
import Icon from "../../assets/iconCadeado.png";

import { Button } from "../buttonHome/styles.js";

const Header = () => (
  <HeaderContainer>
    <ItauImage src={ItauLogo}></ItauImage>

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
    <IconImage src={Icon} />

    <Button>Abra sua Conta </Button>
  </HeaderContainer>
);

export default Header;
