import {
  Banner,
  CardSession,
  Description,
  MainContainer,
  Title,
} from "./styles";
import { Button } from "../buttonHome/styles.js";
import CardComponent from "../cardComponent/CardComponent.jsx";

const MainContent = () => (
  <>
    <MainContainer>
      <Banner>
        <Title>10% de cashback no Seguro Viagem </Title>
        <Description>
          Pontos para usar no Itaú Shop ou na fatura do cartão.
        </Description>
        <Button>Saiba mais</Button>
      </Banner>
    </MainContainer>
    <CardSession>
      <CardComponent />
    </CardSession>
  </>
);

export default MainContent;
