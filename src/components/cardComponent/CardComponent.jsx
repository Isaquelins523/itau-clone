import {
  Card,
  CardContainer,
  CardContent,
  CardDescription,
  CardImage,
  CardTitle,
  Title,
} from "./styled";
import CodigoBarras from "../../assets/codigo-de-barras.png";

const CardComponent = () => {
  return (
    <CardContainer>
      <Title>Resolva as questões do dia a dia </Title>
      <Card>
        <CardImage src={CodigoBarras} alt="Imagem do Card" />
        <CardContent>
          <CardTitle>Boleto</CardTitle>
          <CardDescription>Emita a 2º via de boletos Itaú</CardDescription>
        </CardContent>
      </Card>
    </CardContainer>
  );
};

export default CardComponent;
