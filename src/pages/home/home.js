import styled from "styled-components";
import { Subtitle, Title } from "../../component/styledComponents/style";
import Input from "../../component/input/input";
import SelectOne from "../../component/selectOne/selectOne";
import Card from "../../component/card/card";

const ContainerHome = styled.div`
	padding: 16px;
`
function HomePage() {
	const bus = [
		{line: 'P52', prevision: '20min', driver: 'João Carlos', busNumber: '000001'},
		{line: 'R09', prevision: '35min', driver: 'Cláudia Maria', busNumber: '000010'},
		{line: 'D30', prevision: '50min', driver: 'José Santos', busNumber: '000011'},
	]
	return (
		<ContainerHome>
			<Title>MyBus</Title>
			<Subtitle>Para onde ir?</Subtitle>
			<SelectOne options={bus} onChange={event => {
				console.log(event.target.value);
				
			}}  />

			<Title>Ônibus Disponíveis</Title>
			{bus.map((item) => (
				<Card line={item.line} prevision={item.prevision} driver={item.driver} busNumber={item.busNumber} />
			))}
			
		</ContainerHome>
	)
}

export default HomePage;