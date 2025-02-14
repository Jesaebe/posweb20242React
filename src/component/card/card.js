import styled from "styled-components";
import { Subtitle } from "../styledComponents/style";

const Container = styled.div`
  padding: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 10px #ddd;
	margin: 10px 0;
`
const Row = styled.div`
  display: flex;
`
const Column = styled.div`
	width: 50%;
	
`

function Card() {
  return (
    <Container>
      <Row>
        <Column>
          <Subtitle>P52</Subtitle>
        </Column>
        <Column>
          <Subtitle>20min</Subtitle>
        </Column>
      </Row>
      <Row>
        <Column>
          <Subtitle>João Carlos</Subtitle>
        </Column>
        <Column>
          <Subtitle>00001</Subtitle>
        </Column>
      </Row>
    </Container>
  );
}

export default Card;
