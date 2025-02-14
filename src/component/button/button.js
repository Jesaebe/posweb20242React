import styled from "styled-components";

const ButtonStyleFill = styled.button`
	width: 100%;
	background-color: #723EBE;
	color: #FFF;
	padding: 10px 50px;
	border: none;
	border-radius: 10px;
	font-size: 1em;
	margin: 5px 0;
	cursor: pointer;
`
const ButtonStyleOutline = styled.button`
	width: 100%;
	background-color: #FFF;
	color: #723EBE;
	padding: 10px 50px;
	border: 1px solid #723EBE;
	border-radius: 10px;
	font-size: 1em;
	margin: 5px 0;
	cursor: pointer;
`

function Button({name, type, onClick}) {
	if (type == 'outline') {
		return (
			<div>
				<ButtonStyleOutline onClick={onClick}>{name}</ButtonStyleOutline>
			</div>
			)
	} 
	return (
		<div>
			<ButtonStyleFill onClick={onClick}>{name}</ButtonStyleFill>
		</div>
	)
}

export default Button;