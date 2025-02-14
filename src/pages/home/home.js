import styled from "styled-components";
import { Subtitle, Title } from "../../component/styledComponents/style";
import Input from "../../component/input/input";
import SelectOne from "../../component/selectOne/selectOne";
import Card from "../../component/card/card";

const ContainerHome = styled.div`
	padding: 16px;
`
function HomePage() {
	return (
		<ContainerHome>
			<Title>MyBus</Title>
			<Subtitle>Para onde ir?</Subtitle>
			<SelectOne/>

			<Title>Ônibus Disponíveis</Title>
			<Card/>
			<Card/>
			<Card/>
		</ContainerHome>
	)
}

export default HomePage;