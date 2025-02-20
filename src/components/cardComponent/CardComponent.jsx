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
import CartãoIcon from "../../assets/cartão-icon.png";
import IconCelular from "../../assets/iconCelular.png";

const CardComponent = () => {
  return (
    <>
      <Title>Resolva as questões do dia a dia </Title>
      <CardContainer>
        <Card>
          <CardImage src={CodigoBarras} alt="Imagem do Card" />
          <CardContent>
            <CardTitle>Boleto</CardTitle>
            <CardDescription>Emita a 2º via de boletos Itaú</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardImage src={CartãoIcon} alt="Imagem do Card" />
          <CardContent>
            <CardTitle>Desbloqueio de cartão</CardTitle>
            <CardDescription>Saiba como fazer</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardImage src={IconCelular} alt="Imagem do Card" />
          <CardContent>
            <CardTitle>Aplicativos</CardTitle>
            <CardDescription>Baixe os apps do banco Itaú</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardImage src={CodigoBarras} alt="Imagem do Card" />
          <CardContent>
            <CardTitle>Fatura digital</CardTitle>
            <CardDescription>Receba a fatura do seu cartão</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardImage src={CodigoBarras} alt="Imagem do Card" />
          <CardContent>
            <CardTitle>Comprovantes</CardTitle>
            <CardDescription>Gere uma 2º via do comprovante</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardImage src={CodigoBarras} alt="Imagem do Card" />
          <CardContent>
            <CardTitle>Atendimento</CardTitle>
            <CardDescription>Conheça nossos canais de ajuda</CardDescription>
          </CardContent>
        </Card>
      </CardContainer>
    </>
  );
};

export default CardComponent;
