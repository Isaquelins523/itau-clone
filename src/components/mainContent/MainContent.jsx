import { Banner, Description, MainContainer, Title } from "./styles";
import { Button } from "../buttonHome/styles.js";

const MainContent = () => (
  <MainContainer>
    <Banner>
      <Title>10% de cashback no Seguro Viagem </Title>
      <Description>
        Pontos para usar no Itaú Shop ou na fatura do cartão.
      </Description>
      <Button>Saiba mais</Button>
    </Banner>
    {/* Aqui você pode adicionar outros elementos como cards ou chamadas à ação */}
  </MainContainer>
);

export default MainContent;
