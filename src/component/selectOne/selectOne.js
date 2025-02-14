import styled from "styled-components";

const SelectInput = styled.select`
	width: calc(100% - 10px);
	background: transparent;	
	padding: 5px 0 5px 10px;
	border-radius: 10px;
	border: none;	
	font-size: 1em;
	margin-bottom: 10px;
	box-shadow: 0px 0px 10px #ddd;
	margin: 0;
	&::placeholder {
		font-size: 1em;
	}
`


function SelectOne() {
	return (
		<SelectInput>
			<option value="">Selecione uma opção</option>
			<option value="1">Valor 1</option>
			<option value="2">Valor 2</option>
			<option value="3">Valor 3</option>
		</SelectInput>
	)
}

export default SelectOne;