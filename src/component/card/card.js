import styled from "styled-components";
import { Label, Subtitle } from "../styledComponents/style";

const Container = styled.div`
  padding: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 10px #ddd;
  margin: 10px 0;
`;
const Row = styled.div`
  display: flex;
`;
const Column = styled.div`
  width: 50%;
`;

function Card({line, prevision, driver, busNumber}) {
  return (
    <Container>
      <Row>
        <Column>
          <Label>Linha</Label>
          <Subtitle>{line}</Subtitle>
        </Column>
        <Column>
          <Label>Previsão</Label>
          <Subtitle>{prevision}</Subtitle>
        </Column>
      </Row>
      <Row>
        <Column>
          <Label>Motorista</Label>
          <Subtitle>{driver}</Subtitle>
        </Column>
        <Column>
          <Label>Ônibus</Label>
          <Subtitle>{busNumber}</Subtitle>
        </Column>
      </Row>
    </Container>
  );
}

export default Card;
