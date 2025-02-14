import styled from "styled-components";

export const Container = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const ContainerForm = styled.div`
	width: 70%;
	padding: 25px;
`
export const Title = styled.h1 `
	color: #723EBE;
	font-size: 2em;
	margin: 0%;
	text-align: ${props => props.align || 'left'};
`
export const Subtitle = styled.h4 `
	font-size: 1.2em;
	margin: 0%;
	text-align: ${props => props.align || 'left'};
`